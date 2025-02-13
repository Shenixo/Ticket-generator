import { useRef, useEffect } from 'react';
import { useTicketContext } from '../../Context/TicketContext';
import JsBarcode from 'jsbarcode';

const BarcodeGenerator = () => {
  const { formData } = useTicketContext(); // Get formData from context
  const barcodeRef = useRef();

  useEffect(() => {
    if (formData.number_of_tickets) { // Make sure the number of tickets exists
      JsBarcode(barcodeRef.current, formData.number_of_tickets, {
        format: 'CODE128', // You can change the barcode format here
        lineColor: '#0aa',
        width: 2,
        height: 40,
        displayValue: true,
      });
    }
  }, [formData.number_of_tickets]); 

  return <svg ref={barcodeRef}></svg>;
};

export default BarcodeGenerator;
