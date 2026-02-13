"use client";
import { useEffect } from "react";
import React, { useState } from "react";

// ✅ FIXED: Use 'react-router-dom' for Vite, not 'next/navigation'
import { useNavigate } from "react-router-dom"; 

import { 
  Send, MapPin, Phone, ShieldCheck, 
  Target, CheckCircle2, Sparkles, Lock,
  Home, Clock, ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../lib/firebase";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ FIXED: Initialize navigate hook
  const navigate = useNavigate();

  const colors = {
    blackish: "#041a14",
    brightOrange: "#F2A71D",
    mediumOrange: "#E97323",
    darkOrange: "#D64B27",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "3 BHK", 
    callTime: "Morning (9 AM - 12 PM)",
    // UTM parameters added to state
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: ""
  });

  // Capture UTM parameters from URL on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData(prev => ({
      ...prev,
      utm_source: params.get("utm_source") || "direct",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || ""
    }));
  }, []);

  // ==========================================
  // FIREBASE LOGIC
  // ==========================================
  
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {
            console.log("reCAPTCHA verified");
          }
        }
      );
    }
  };

  const handleSendOtp = async () => {
    if (!formData.phone) return alert("Enter phone number");

    setLoading(true);

    try {
      setupRecaptcha();

      let cleaned = formData.phone.replace(/\D/g, "");

      if (cleaned.startsWith("0")) {
        cleaned = cleaned.substring(1);
      }

      if (cleaned.length !== 10) {
        alert("Enter valid 10 digit phone number");
        setLoading(false);
        return;
      }

      const phoneNumber = `+91${cleaned}`;
      const appVerifier = window.recaptchaVerifier;

      const result = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );

      setConfirmationResult(result);
      setIsOtpSent(true);

      alert("OTP sent to " + phoneNumber);

    } catch (error) {
      console.error(error);
      alert(error.message || "Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();

    if (!isOtpSent) return alert("Please verify phone first");
    if (!confirmationResult) return alert("OTP expired. Try again.");

    setLoading(true);

    try {
      // 1. Verify OTP
      await confirmationResult.confirm(otp);
      
      // 2. Send all data to Webhook
      await fetch("https://connect.pabbly.com/webhook-listener/webhook/IjU3NjYwNTZlMDYzNzA0Mzc1MjY0Ig_3D_3D_pc/IjU3NjcwNTZjMDYzMTA0Mzc1MjY1NTUzNDUxMzAi_pc", {
        method: "POST",
        // Using 'no-cors' if your environment has CORS restrictions, 
        // otherwise regular POST works for Pabbly.
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
      console.log("Form Data Submitted to Webhook:", formData); 

      // 3. Redirect to Thank You Page
      navigate("/Info/Thankyou"); 

    } catch (error) {
      console.error(error);
      alert("Invalid OTP or submission error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // UI COMPONENTS & STYLES
  // ==========================================

  const inputStyle = "w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-[#E97323] focus:ring-4 focus:ring-[#E97323]/10 transition-all duration-300 placeholder:text-gray-400 text-[#041a14] font-medium";

  return (
    <section id="contact" className="relative w-full bg-[#fafaf8] py-24 lg:py-40 overflow-hidden font-sans text-[#041a14]">
      {/* Hidden Recaptcha Container */}
      <div id="recaptcha-container"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-[#041a14]/5">
          
          {/* LEFT SIDE (Visuals) */}
          <div className="lg:w-2/5 p-12 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden" style={{ backgroundColor: colors.blackish }}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E97323] opacity-10 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] mb-6" style={{ color: colors.brightOrange }}>
                <Sparkles className="w-3 h-3" /> Exclusive Inquiry
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
                Let's Discuss <br />
                <span className="italic font-light" style={{ color: colors.brightOrange }}>Your Future.</span>
              </h2>
              <p className="text-white/70 text-base lg:text-lg font-medium leading-relaxed max-w-xs">
                Subham Kishori Heights offers a lifestyle-focused residential experience in the heart of Dibrugarh.
              </p>
            </div>

            <div className="space-y-6 pt-10 relative z-10">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                <MapPin className="w-4 h-4" style={{ color: colors.brightOrange }} /> Near Brahmaputra, Dibrugarh
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (Form) */}
          <div className="lg:w-3/5 p-8 lg:p-16 flex flex-col justify-center bg-white relative">
            {!submitted ? (
              <form onSubmit={handleFinalSubmit} className="space-y-6">

                {/* 1. Full Name */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block ml-1">Full Name</label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className={inputStyle}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                {/* 2. Phone Number & OTP Button */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block ml-1">Phone Number</label>
                  <div className="relative">
                    <input 
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      disabled={isOtpSent}
                      className={`${inputStyle} pr-28`} 
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />

                    {formData.phone.length >= 10 && !isOtpSent && (
                      <button 
                        type="button"
                        onClick={handleSendOtp}
                        disabled={loading}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#041a14] hover:bg-[#0a2e24] text-[#F2A71D] px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-colors"
                      >
                        {loading ? "Sending..." : "Get OTP"}
                      </button>
                    )}
                    
                    {isOtpSent && (
                       <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600">
                          <CheckCircle2 className="w-5 h-5" />
                       </div>
                    )}
                  </div>
                </div>

                {/* 3. OTP Input (Animated) */}
                <AnimatePresence>
                  {isOtpSent && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block ml-1">Verification Code</label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input 
                          type="text"
                          required
                          placeholder="Enter 6-digit OTP"
                          className={`${inputStyle} pl-11`}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 4. Home Type Selection */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block ml-1">Interested In</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["3 BHK", "4 BHK", "Duplex"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({...formData, interest: type})}
                        className={`py-3 px-2 rounded-xl text-sm font-bold border transition-all duration-200 ${
                          formData.interest === type 
                          ? "bg-[#041a14] text-[#F2A71D] border-[#041a14] shadow-md transform scale-[1.02]" 
                          : "bg-white text-gray-600 border-gray-200 hover:border-[#E97323] hover:text-[#E97323]"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {/* 5. Email */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block ml-1">Email Address</label>
                    <input 
                      type="email"
                      required
                      placeholder="john@example.com"
                      className={inputStyle}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  {/* 6. Best Time to Call */}
                  <div className="relative">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block ml-1">Best Time to Call</label>
                    <div className="relative">
                      <select 
                        className={`${inputStyle} appearance-none cursor-pointer`}
                        value={formData.callTime}
                        onChange={(e) => setFormData({...formData, callTime: e.target.value})}
                      >
                        <option>Morning (9 AM - 12 PM)</option>
                        <option>Afternoon (12 PM - 4 PM)</option>
                        <option>Evening (4 PM - 8 PM)</option>
                        <option>Anytime</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 mt-1 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={!isOtpSent || loading}
                  className={`w-full py-5 rounded-xl text-white font-bold text-lg tracking-wide shadow-lg transition-all duration-300 mt-4 flex items-center justify-center gap-2 ${
                    !isOtpSent || loading
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#E97323] hover:bg-[#d64b27] hover:shadow-xl hover:-translate-y-1"
                  }`}
                >
                  {loading ? "Processing..." : (
                    <>
                      Confirm Inquiry <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center h-full flex flex-col items-center justify-center p-8"
              >
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-serif font-medium mb-3">Redirecting...</h3>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}