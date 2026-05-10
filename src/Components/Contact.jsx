import React, { useState } from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // API / Email Logic Here

    alert("Message Sent Successfully!");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-50 rounded-full blur-3xl opacity-70"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-50 rounded-full blur-3xl opacity-70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-24">

          <p className="uppercase tracking-[0.35em] text-green-700 text-sm font-bold mb-5">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-7">
            Let’s Plan Your Next Adventure
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Have questions about safaris, tours, or travel experiences?
            Reach out to our team and start your unforgettable journey today.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5">

            <div className="sticky top-10">

              <h3 className="text-3xl font-black text-gray-900 mb-8">
                Get In Touch
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Our team is ready to help you discover the beauty of Rwanda
                with luxury safaris, eco-tourism adventures, and personalized
                travel experiences.
              </p>

              {/* CONTACT INFO */}
              <div className="space-y-8">

                {/* LOCATION */}
                <div className="flex items-start gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-700 flex items-center justify-center text-xl shrink-0">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="text-xl font-bold text-gray-900 mb-2">
                      Location
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                      Kigali, Rwanda <br />
                      Gasabo District
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-700 flex items-center justify-center text-xl shrink-0">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <p className="text-xl font-bold text-gray-900 mb-2">
                      Phone
                    </p>

                    <p className="text-gray-600">
                      +250 792 669 133
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-700 flex items-center justify-center text-xl shrink-0">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-xl font-bold text-gray-900 mb-2">
                      Email
                    </p>

                    <p className="text-gray-600 break-all">
                      worldvisiterssafari@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* SOCIALS */}
              <div className="mt-14">

                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  Follow Us
                </h4>

                <div className="flex items-center gap-5">

                  <a
                    href="#"
                    className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all duration-300"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="#"
                    className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all duration-300"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="#"
                    className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all duration-300"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7">

            <div className="relative bg-white border border-gray-100 rounded-[40px] p-8 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.05)] overflow-hidden">

              {/* SMALL GLOW */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-50 rounded-full blur-3xl opacity-60"></div>

              <div className="relative z-10">

                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  Send A Message
                </h3>

                <p className="text-gray-600 leading-relaxed mb-12">
                  Fill out the form below and our travel team will
                  contact you shortly.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >

                  {/* NAME + EMAIL */}
                  <div className="grid md:grid-cols-2 gap-6">

                    <div>
                      <label className="block text-gray-900 font-semibold mb-3">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full h-16 px-6 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-600 outline-none transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-3">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full h-16 px-6 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-600 outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* SUBJECT */}
                  <div>
                    <label className="block text-gray-900 font-semibold mb-3">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      placeholder="Enter subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full h-16 px-6 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-600 outline-none transition-all duration-300"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-gray-900 font-semibold mb-3">
                      Message
                    </label>

                    <textarea
                      name="message"
                      rows="7"
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-5 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-600 outline-none resize-none transition-all duration-300"
                    ></textarea>
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="group bg-green-700 hover:bg-green-800 text-white px-10 py-5 rounded-full font-bold flex items-center gap-4 transition-all duration-300 hover:scale-105 shadow-xl"
                  >
                    Send Message

                    <FaPaperPlane className="group-hover:translate-x-1 transition duration-300" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;