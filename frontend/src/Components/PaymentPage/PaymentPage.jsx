import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';
import visa from '../Assets/visaB.png';
import mastercard from '../Assets/Mastercard.png';
import cash from '../Assets/cash-on-delivery.png';

const Checkout = () => {
  const [selectedDelivery, setSelectedDelivery] = useState('address');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const navigate = useNavigate();

  const handlePayClick = () => {
    if (selectedPayment === 'cash') {
      alert('Your Package is on the way');
    } else if (selectedPayment === 'visa' || selectedPayment === 'mastercard') {
      navigate('/paytype');
    }
  };

  const handlePaymentSelect = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  return (
    <div className="checkout-container">
      <div className="checkout">
        <h2>Checkout</h2>
        <hr />
        <div className="section">
          <h3>Delivery</h3>
          <div className="input-box">
            <input 
              type="radio" 
              id="address" 
              name="delivery" 
              value="address" 
              checked={selectedDelivery === 'address'} 
              onChange={() => setSelectedDelivery('address')} 
            />
            <label htmlFor="address">Delivery Address</label>
            {selectedDelivery === 'address' && (
              <input 
                type="text" 
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                placeholder="Enter your delivery address"
                className="delivery-input"
              />
            )}
          </div>
          <div className="input-box">
            <input 
              type="radio" 
              id="current-location" 
              name="delivery" 
              value="current-location" 
              checked={selectedDelivery === 'current-location'} 
              onChange={() => setSelectedDelivery('current-location')} 
            />
            <label htmlFor="current-location">Deliver to your current location</label>
          </div>
        </div>

        <div className="section">
          <h3>Payment Methods</h3>
          <div 
            className={`payment-method bordered ${selectedPayment === 'visa' ? 'selected' : ''}`} 
            onClick={() => handlePaymentSelect('visa')}
          >
            <img src={visa} alt="Visa" />
            <span className="gray-text">Visa</span>
          </div>
          <div 
            className={`payment-method bordered ${selectedPayment === 'mastercard' ? 'selected' : ''}`} 
            onClick={() => handlePaymentSelect('mastercard')}
          >
            <img src={mastercard} alt="Mastercard" />
            <span className="gray-text">Mastercard</span>
          </div>
        </div>

        <div className="section">
          <h3>Other</h3>
          <div 
            className={`payment-method bordered ${selectedPayment === 'cash' ? 'selected' : ''}`} 
            onClick={() => handlePaymentSelect('cash')}
          >
            <img src={cash} alt="Cash on Delivery" />
            <span className="gray-text">Cash on Delivery</span>
          </div>
        </div>

        <button className="pay-button" onClick={handlePayClick}>Proceed To Payment</button>
      </div>
    </div>
  );
}

export default Checkout;
