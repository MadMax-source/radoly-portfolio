import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_f2yi4lo",
        "template_s1q41iv",
        formState,
        "SVTF4YXV77rSUyoTS"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Your message has been sent successfully!");
          setFormState({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message, please try again later.");
        }
      );
  };

  return (
    <div className="container py-16 px-8 bg-n-8 rounded-3xl overflow-hidden lg:min-h-[46rem]">
      <div className="py-12 px-4 xl:px-8 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="h2 text-n-1 mb-4">HAVE QUESTIONS? GET IN TOUCH!</h2>
          <div className="mb-4 text-n-3">
            <p className="body-1">
              <strong>Jimoh Ridwanullahi</strong>
            </p>
            <p className="body-1">
              <strong>
                <a
                  href="https://www.linkedin.com/in/jimoh-ridwanullahi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-color-1 hover:underline"
                >
                  LinkedIn
                </a>
              </strong>
            </p>
            <p className="body-1">
              <strong>
                {/* <a
                  href="mailto:jimoh.ridwanullahi@gmail.com"
                  className="text-color-1 hover:underline"
                >
                  jimoh.ridwanullahi@gmail.com
                </a> */}
              </strong>
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 caption text-n-3">
                <i className="icon-user mr-2"></i> Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="p-3 rounded-lg bg-n-6 border-n-5 text-n-1 focus:border-color-1 focus:ring-color-1"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 caption text-n-3">
                <i className="icon-envelope mr-2"></i> Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="p-3 rounded-lg bg-n-6 border-n-5 text-n-1 focus:border-color-1 focus:ring-color-1"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-2 caption text-n-3">
                <i className="icon-phone mr-2"></i> Whatsapp Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="p-3 rounded-lg bg-n-6 border-n-5 text-n-1 focus:border-color-1 focus:ring-color-1"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject" className="mb-2 caption text-n-3">
                <i className="icon-info mr-2"></i> Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                className="p-3 rounded-lg bg-n-6 border-n-5 text-n-1 focus:border-color-1 focus:ring-color-1"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 caption text-n-3">
                <i className="icon-pencil mr-2"></i> How can we help you? Feel
                free to get in touch!
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formState.message}
                onChange={handleChange}
                className="p-3 rounded-lg bg-n-6 border-n-5 text-n-1 focus:border-color-1 focus:ring-color-1"
                required
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="agree"
                className="mr-2 focus:ring-color-1"
                required
              />
              <label htmlFor="agree" className="caption text-n-3">
                I agree that my submitted data is collected and stored.
              </label>
            </div>

            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-color-1 text-n-1 rounded-lg button hover:bg-opacity-80 transition-all duration-300"
            >
              GET IN TOUCH
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
