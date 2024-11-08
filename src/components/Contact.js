import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or email service)
    
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
        <p>If you'd like to get in touch, connect with me through the links below</p>
      {/* <p>If you'd like to get in touch, please fill out the form below or connect with me through the links below</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form> */}
      
      <div className="social-links">
        <a href="https://www.linkedin.com/in/austin-barnes-iv" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Auzfest" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:barnesfamilyaustin@gmail.com">Email</a>
      </div>
    </section>
  );
};

export default Contact;
