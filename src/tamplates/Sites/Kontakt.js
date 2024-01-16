import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const Kontakt = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace these values with your Email.js service details
        const serviceId = 'service_yw4ly1n';
        const templateId = 'template_pk34kpr';
        const userId = 'rQTfeZWa1cns_ohhA';

        emailjs.send(serviceId, templateId, formData, userId)
            .then((response) => {
                console.log('Email sent successfully:', formData, response);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });

        // Clear the form after submission
        setFormData({ user_name: '', user_email: '', user_message: '' });
    };

    return (
        <div className="MainContainer" >
            <div className="contentBlock">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="user_message"
                        value={formData.user_message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button className='btn' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Kontakt;