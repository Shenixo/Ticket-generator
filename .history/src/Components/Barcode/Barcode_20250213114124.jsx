import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import JsBarcode from 'jsbarcode';

const BarcodeGenerator = ({ value }) => {
  const barcodeRef = useRef();

  useEffect(() => {
    JsBarcode(barcodeRef.current, value, {
      format: 'CODE128', // You can change the barcode format here, e.g., CODE128, EAN, UPC
      lineColor: '#0aa', // Barcode line color
      width: 2, // Width of the barcode lines
      height: 40, // Height of the barcode
      displayValue: true, // Show the text below the barcode
    });
  }, [value]);

  return <svg ref={barcodeRef}></svg>;
};
BarcodeGenerator.propTypes = {
  value: PropTypes.string.isRequired,
};

export default BarcodeGenerator;
export default BarcodeGenerator;
