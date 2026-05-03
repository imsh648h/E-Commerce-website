import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {

  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim() === "") {
      alert("Please enter your email!");
    } else {
      alert("Subscribed Successfully!");
      setEmail("");
    }
  };

  return (
    <div className="newsletter">
      <h2>Get Exclusive Offers On Your Email</h2>
      <p>Subscribe to our newsletter and stay updated</p>

      <div className="newsletter-input">
        <input 
          type="email" 
          placeholder="Your Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleSubscribe}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
