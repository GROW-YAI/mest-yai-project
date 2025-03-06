import React from "react";
import './Contact.css'

const Contact = () =>{
    return(
        <section id="contact" className="p-10">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p>Email: info@info.com</p>
            <p>Phone: +233123456789</p>
            <form className="mt-4">
                <input type="text" placeholder="Your Name" className="border p-2 m-2" />
                <input type="email" placeholder="Your Email" className="border p-2 m-2" />
                <textarea placeholder="Your Message" className="border p-2 m-2"></textarea>
                <button className="bg-blue-500 text-white px-4 py-2">Send</button>
            </form>
        </section>
    )
}

export default Contact;