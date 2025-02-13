import { createContext, useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const TicketContextCreated = createContext();
const requiredFields = {
  number_of_tickets: 0,
  name: "",
  email: "",
  profile_upload: "",
};
export const allFieldIsFilled = (formData) => {
 return Object.keys(requiredFields).every(
    (field) => formData[field]?.trim() !== ""
  );
};
const TicketContextProvider = ({ children }) => {
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation()
  const savedUserData = localStorage.getItem("userDetails");
  const savedActiveTab = localStorage.getItem("activeTab");
  const savedToProceed = localStorage.getItem("toProceed") === "true";
  const [formData, setFormData] = useState(() => {
    try {
      return savedUserData
        ? JSON.parse(savedUserData)
        : {
            number_of_tickets: 0,
            name: "",
            email: "",
            profile_upload: "",
            special_request: "",
          };
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return {
        number_of_tickets: 0,
        name: "",
        email: "",
        profile_upload: "",
        special_request: "",
      };
    }
  });

  const [activeTab, setActiveTab] = useState(savedActiveTab || null);
  const [toProceed, setToProceed] = useState(savedToProceed);
  const [isClicked, setIsClicked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState({
    number_of_tickets: "",
    activeTab: "",
    name: "",
    email: "",
    profile_upload: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setError((prev) => ({ ...prev, profile_upload: "" }));

      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

      if (!cloudName || !uploadPreset) {
        console.error("Cloudinary environment variables are missing.");
        setError((prev) => ({
          ...prev,
          profile_upload: "Image upload failed: missing configuration",
        }));
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);
      formData.append("folder", "profile_pictures");

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.data.secure_url) {
          setFormData((prev) => ({
            ...prev,
            profile_upload: response.data.secure_url,
          }));
        } else {
          setError((prev) => ({
            ...prev,
            profile_upload: "Failed to upload image",
          }));
        }
      } catch (error) {
        console.error("Upload Error:", error);
        setError((prev) => ({
          ...prev,
          profile_upload: "Image upload failed",
        }));
      }
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form has been submitted");
    if (toProceed ) 
    navigate("/my_tickets");
  };

  const handleVerifyForm = (event) => {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let newErrors = {
      number_of_tickets: "",
      activeTab: "",
      name: "",
      email: "",
      special_request: "",
      profile_upload: "",
    };

    if (!toProceed) {
      if (!formData.number_of_tickets) {
        newErrors.number_of_tickets = "Select number of tickets";
      }
      if (!activeTab) {
        newErrors.activeTab = "Select a ticket type";
      }
    } else {
      if (!formData.name.trim()) {
        newErrors.name = "Enter your name";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Enter your email";
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email =
          "Enter a valid email address (e.g., johndoe@gmail.com)";
      }
      if (!formData.profile_upload) {
        newErrors.profile_upload = "Upload Profile Picture";
      }
    }

    setError(newErrors);

    if (Object.values(newErrors).some((err) => err !== "")) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(
        () =>
          setError({
            number_of_tickets: "",
            activeTab: "",
            name: "",
            email: "",
            special_request: "",
            profile_upload: "",
          }),
        3000
      );
      return;
    }

    setToProceed(true);
    const canSubmit = allFieldIsFilled(formData);
    if (canSubmit) handleSubmit(event);
  };

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem("toProceed", toProceed);
  }, [toProceed]);

  const handleCancelForm = () => {
    localStorage.removeItem("userDetails");
    localStorage.removeItem("activeTab");
    localStorage.removeItem("toProceed");
    setFormData({
      number_of_tickets: 0,
      name: "",
      email: "",
      profile_upload: "",
      special_request: "",
    });

    setActiveTab(null);
    setToProceed(false);
  };

  const contextValue = {
    activeTab,
    setActiveTab,
    setFormData,
    formData,
    handleFormData,
    handleImageUpload,
    setError,
    error,
    toProceed,
    handleVerifyForm,
    setToProceed,
    handleCancelForm,
    setIsClicked,
    isClicked,
    allFieldIsFilled,
    openModal
  };

  return (
    <TicketContextCreated.Provider value={contextValue}>
      {children}
    </TicketContextCreated.Provider>
  );
};

export const useTicketContext = () => {
  const context = useContext(TicketContextCreated);
  if (!context) {
    throw new Error(
      "useTicketContext must be used within a TicketContextProvider"
    );
  }
  return context;
};

TicketContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TicketContextProvider;
