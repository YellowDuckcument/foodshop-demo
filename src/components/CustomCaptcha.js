import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const CustomCaptcha = ({ siteKey, onCaptchaChange }) => {
  const [captchaValue, setCaptchaValue] = useState('');
  const [captchaCompleted, setCaptchaCompleted] = useState(false);

  const handleCaptchaChange = (response) => {
    setCaptchaValue(response);
    setCaptchaCompleted(true);
    onCaptchaChange(response);
  };

  const handleInputChange = (event) => {
    setCaptchaValue(event.target.value);
    if (captchaCompleted) {
      setCaptchaCompleted(false);
      onCaptchaChange('');
    }
  };

  return (
    <div>
      <ReCAPTCHA sitekey={siteKey} onChange={handleCaptchaChange} />
      <input type="text" placeholder="Enter captcha value" value={captchaValue} onChange={handleInputChange} />
    </div>
  );
};

export default CustomCaptcha;
