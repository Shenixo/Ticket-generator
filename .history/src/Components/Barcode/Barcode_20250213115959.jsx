import { useRef, useEffect } from 'react';
import { useTicketContext } from '../../Context/TicketContext';
import JsBarcode from 'jsbarcode';
import './Barcode.css';

const BarcodeGenerator = () => {
  const { formData } = useTicketContext();
  const barcodeRef = useRef();

  useEffect(() => {
    if (formData.number_of_tickets) {
      JsBarcode(barcodeRef.current, formData.number_of_tickets, {
        format: 'CODE128',
        lineColor: '#000000',
        width: 2,
        height: 40,
        displayValue: true,
        margin: 0,
        background: 'transparent',
      });
      
      const svg = barcodeRef.current;
      const parentWidth = svg.parentElement.clientWidth;
      svg.setAttribute('width', parentWidth); 
    }
  }, [formData.number_of_tickets]);

  return <svg className="barcode" ref={barcodeRef}></svg>;
};

export default BarcodeGenerator;
