import React, { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    if (!trimmedData.name || !trimmedData.email || !trimmedData.message) {
      setStatus("❌ Please fill all fields.");
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const body = new FormData();
      body.append("name", trimmedData.name);
      body.append("email", trimmedData.email);
      body.append("message", trimmedData.message);

      await fetch(
        "https://script.google.com/macros/s/AKfycbxDLic-xvTKcPX-G_SnxFROsynkDbs__4fa6H7bBsBEi4aIKCwMWHtDFLkh7yRRywYH/exec",
        {
          method: "POST",
          mode: "no-cors", // ✅ needed for GitHub Pages
          body,
        }
      );

      // ✅ Assume success (Apps Script doesn’t return JSON in no-cors)
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("❌ Network error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full bg-gradient-to-tr from-[#2E026D] via-[#0E4D92] to-[#007FFF] rounded-3xl p-10 shadow-xl">
        <h1 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
          Get in Touch
        </h1>
        <p className="mb-10 text-cyan-300 max-w-xl">
          Have a project in mind or just want to say hi? Fill out the form below
          or email me directly at{" "}
          <a
            href="mailto:uzairrehman143@gmail.com"
            className="underline text-cyan-400 hover:text-cyan-200"
          >
            uzairrehman143@gmail.com
          </a>
          .
        </p>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition resize-none"
              required
              disabled={isSubmitting}
            ></textarea>
          </div>

          {status && (
            <p
              aria-live="polite"
              className={`text-center font-semibold ${
                status.includes("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-lg bg-gradient-to-r from-[#0E4D92] to-[#00CED1] font-bold text-white transition-transform transform shadow-lg ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:from-[#007FFF] hover:to-[#00BFFF] hover:scale-105"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
