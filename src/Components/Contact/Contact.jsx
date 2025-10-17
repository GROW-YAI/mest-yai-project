import React from "react";
import './Contact.css'
import msg_icon from '../../Assets/msg-icon.png'
import white_arrow from '../../Assets/white-arrow.png'
import {  FaPhone, FaMapMarkerAlt} from "react-icons/fa";

const Contact = () =>{

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a78a2f6d-3ca5-49de-a71f-105d569c414f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


    return(
       <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact
                infomration below. Your feedback, questions, and suggestions are
                important to us as we strive to provide exceptional service to our 
                customers.
            </p>
            <ul>
                {/* <li><FaEnvelope /> Contact@MMB's</li> */}
                <li><FaPhone/>+233537740063</li>
                <li><FaMapMarkerAlt />Cape Coast, Central Region</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}action="">
                <label>Your name</label>
                <input type="text" name="name" placeholder="Enter your name" required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder="Enter your mobile number" required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
                <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
       </div>
    )

}

export default Contact;