
import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_onhwptf", "template_o4tw01n", form.current, {
        publicKey: "llP2Stkk20DbqXpzf",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="form-card1">
      <div className="form-card2">
        <form ref={form} onSubmit={sendEmail} className="form">
          <p className="form-heading">Me contacter.</p>

          <div className="form-field">
            <input
              required
              placeholder="Nom complet"
              className="input-field"
              type="text"
              name="user_name"
            />
          </div>

          <div className="form-field">
            <input
              required
              placeholder="Email"
              className="input-field"
              type="email"
              name="user_email"
            />
          </div>

          <div className="form-field">
            <textarea
              required
              placeholder="Message"
              cols="30"
              rows="6"
              className="input-field"
              name="message"
            ></textarea>
          </div>

          <button type="submit" value="Send" className="sendMessage-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
