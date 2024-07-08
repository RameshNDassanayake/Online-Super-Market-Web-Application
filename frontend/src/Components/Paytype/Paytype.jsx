import React, { useState } from 'react';
import './Paytype.css';
import visa from '../Assets/visaB.png';
import mastercard from '../Assets/Mastercard.png';
import cvv from '../Assets/cvv.jpg'

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const handlePayClick = () => {
    alert('Your Payment is Successful and package is on the way');
  };

  return (
    <div className="payment-form-container">
      <form className="payment-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Card number <span className="required">*</span></label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
          <div className="card-icons">
            <img src={mastercard} alt="Mastercard" />
            <img src={visa} alt="Visa" />
          </div>
        </div>

        <div className="form-group expiry-labels">
          <label>Expiry month <span className="required">*</span></label>
          <label>Expiry year <span className="required">*</span></label>
        </div>
        <div className="form-group">
          <div className="expiry-date">
            <select value={expiryMonth} onChange={(e) => setExpiryMonth(e.target.value)} required>
              <option value="" disabled>MM</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i + 1}>{String(i + 1).padStart(2, '0')}</option>
              ))}
            </select>
            <select value={expiryYear} onChange={(e) => setExpiryYear(e.target.value)} required>
              <option value="" disabled>YY</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={i + new Date().getFullYear()}>{i + new Date().getFullYear()}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="cardholderName">Cardholder name <span className="required">*</span></label>
          <input
            type="text"
            id="cardholderName"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="securityCode">Security code <span className="required">*</span></label>
          <input
            type="text"
            id="securityCode"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
            required
          />
          <div className="security-code-info">
            <img src={cvv} alt="Security Code" />
            <span><span className="highlight">3 digits</span> on back of your card</span>
          </div>
        </div>

        <button type="button" className="pay-button" onClick={handlePayClick}>Pay</button>
      </form>
    </div>
  );
}

export default PaymentForm;
