import  { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import JsBarcode from 'jsbarcode';
import { useTicketContext } from '../../Context/TicketContext';
const BarcodeGenerator = ({ value }) => {
    const {formData} = useTicketContext();
  const barcodeRef = useRef();

  useEffect(() => {
    JsBarcode(barcodeRef.current, value, {
      format: 'CODE128', // You can change the barcode format here, e.g., CODE128, EAN, UPC
      lineColor: '#0aa', 
      width: 2, 
      height: 40, 
      displayValue: true,
    });
  }, [formData.ti]);

  return <svg ref={barcodeRef}></svg>;
};
BarcodeGenerator.propTypes = {
  value: PropTypes.string.isRequired,
};

export default BarcodeGenerator;
