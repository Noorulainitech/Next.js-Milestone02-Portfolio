import React from "react";

import style from "../style/contact.module.css";
export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mt-[200px] mb-[200px] w-full bg-gray-800 rounded-lg p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-gray-400 mb-8 text-center">
          Have questions or need help? Feel free to drop us a message!
        </p>

        <form className="space-y-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className={`${style.input} p-3 rounded-lg`}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className={`${style.input} p-3 rounded-lg`}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-2">Message</label>
            <textarea
              placeholder="Write your message here..."
              rows={6}
              className={`${style.input} p-3 rounded-lg`}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg w-full transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
