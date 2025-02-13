import { createContext, useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export const TicketContextCreated = createContext();

const TicketContextProvider = ({ children }) => {
  const timeoutRef = useRef(null);

  // Retrieve saved formData & activeTab from local storage
  const savedUserData = localStorage.getItem("userDetails");
  const savedActiveTab = localStorage.getItem("activeTab");

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
  const [toProceed, setToProceed] = useState(false);
  const [error, setError] = useState({
    number_of_tickets: "",
    activeTab: "",
    name: "",
    email: "",
    profile_upload: "",
  });

  const requiredFields = {
    number_of_tickets: 0,
    name: "",
    email: "",
    profile_upload: "",
  };

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        profile_upload: imageUrl,
      }));
      setError((prev) => ({
        ...prev,
        profile_upload: "",
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form has been submitted");
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
    const canSubmit = Object.keys(requiredFields).every(
      (field) => formData[field]?.trim() !== ""
    );
    if (canSubmit) handleSubmit(event);
  };

  // Store form data & activeTab in local storage
  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

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
