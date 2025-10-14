import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_c6xhsuc", "template_xpxfrjm", form.current, {
        publicKey: "tXr84Qrr1jV7nmodr",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully ✅");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Message failed to send ❌");
        }
      );
  };

  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 rounded-3xl">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col md:flex-row w-full sm:w-[90%] md:w-[80%] lg:w-[100%] 
        overflow-hidden"
        // bg-gradient-to-tr from-teal-500 via-purple-500 to-yellow-500 p-[2px] rounded-2xl shadow-2xl 
      >
        {/* ---------- Left Section (Image + Info) ---------- */}
        <div className="hidden md:flex flex-col gap-8 md:w-2/5 items-center justify-center bg-gray-900 p-6 lg:p-8 text-center">
          <img
            src="dev.png"
            alt="Developer"
            className="w-[80%] h-auto object-contain rounded-xl drop-shadow-lg"
          />

          <div className="text-white text-start text-sm sm:text-base md:text-lg font-light flex flex-col gap-2">
            <div>
              <span className="font-semibold text-purple-400">Email:</span>{" "}
              bonnny2001@gmail.com
            </div>
            <div>
              <span className="font-semibold text-purple-400">Contact:</span>{" "}
              6294797636
            </div>
            <div>
              <span className="font-semibold text-purple-400">Address:</span>{" "}
              Basirhat, North 24 Parganas, West Bengal
            </div>
          </div>
        </div>

        {/* ---------- Right Section (Form) ---------- */}
        <div className="bg-gray-900 p-6 sm:p-8 md:p-10 w-full md:w-3/5">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            Contact <span className="text-purple-400">Me</span>
          </h2>

          {/* Name Field */}
          <div className="flex flex-col mb-6">
            <label className="text-gray-300 mb-2 text-sm sm:text-base font-medium">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Enter your name"
              className="p-3 sm:p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none transition-all duration-300 placeholder-gray-400"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col mb-6">
            <label className="text-gray-300 mb-2 text-sm sm:text-base font-medium">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter your email"
              className="p-3 sm:p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none transition-all duration-300 placeholder-gray-400"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col mb-8">
            <label className="text-gray-300 mb-2 text-sm sm:text-base font-medium">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Write your message..."
              className="p-3 sm:p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none transition-all duration-300 resize-none placeholder-gray-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 text-white font-semibold py-3 sm:py-4 rounded-lg cursor-pointer hover:opacity-90 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
