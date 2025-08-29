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

      // 🔹 Updated Google Apps Script Web App URL
      await fetch(
        "https://script.google.com/macros/s/AKfycbwvuseMnYs9qK2n4vVFgaWvtjbcPOGLa9NDwKmQ3tA92jNxRJ4I-CGznOutI1ja1fs_/exec",
        {
          method: "POST",
          mode: "no-cors",
          body,
        }
      );

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
    <section className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#1e1e2f_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>

      <div className="max-w-2xl w-full relative">
        <div className="bg-gradient-to-br from-gray-900/70 via-[#13131f]/80 to-gray-900/90 backdrop-blur-md rounded-2xl border border-gray-800/50 shadow-2xl p-8 md:p-10">
          <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-2xl"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-purple-500/50 rounded-br-2xl"></div>

          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-gray-400 max-w-md mx-auto">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
          </div>

          <div className="mb-8 text-center">
            <a
              href="mailto:uzairrehman143@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-cyan-400 hover:bg-gray-800/70 transition-colors"
            >
              Email Me
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="relative">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-400">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800/40 border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder-gray-500"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="relative">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-gray-800/40 border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder-gray-500"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="relative">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-lg bg-gray-800/40 border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all placeholder-gray-500 resize-none"
                required
                disabled={isSubmitting}
              />
            </div>

            {status && (
              <div className={`rounded-lg p-3 text-center ${status.includes("✅") ? "bg-green-900/30 text-green-400" : "bg-red-900/30 text-red-400"}`}>
                {status}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg font-bold text-white transition-all ${
                isSubmitting ? "bg-gray-700 cursor-not-allowed" : "bg-gradient-to-r from-purple-700 to-cyan-600 hover:from-purple-600 hover:to-cyan-500"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
