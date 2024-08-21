import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent',
          text: 'Your message has been sent successfully!',
        });
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to send your message. Please try again later or contact us via email.',
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#ccd0cf] mt-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        <span className="text-blue-600">■</span> Let's talk
      </h2>
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <label className="block mb-1 font-medium">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-400 outline-none focus:border-black"
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block mb-1 font-medium">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-400 outline-none focus:border-black"
                required
              />
            </div>
          </div>
          <div className="mb-4 relative">
            <label className="block mb-1 font-medium">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-400 outline-none focus:border-black pr-10"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-400 outline-none focus:border-black"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-400 outline-none focus:border-black"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded focus:outline-none hover:bg-blue-700"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
