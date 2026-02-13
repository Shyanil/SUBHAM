"use client";

import React, { useState, useEffect } from "react";
import { 
  Send, X, Phone, User, Mail, Clock,
  Sparkles, Lock, CheckCircle2, MapPin, ChevronDown 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../lib/firebase";

const StickyContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const colors = {
    blackish: "#041a14",
    vibrantOrange: "#F36F21",
    deepOrange: "#D84315",
    warmCream: "#FFF4E6",
    white: "#ffffff"
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "3 BHK",
    callTime: "Morning (9 AM - 12 PM)",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: ""
  });

  // --- CAPTURE UTM & AUTO-OPEN LOGIC ---
  useEffect(() => {
    // 1. Capture UTMs
    const params = new URLSearchParams(window.location.search);
    setFormData(prev => ({
      ...prev,
      utm_source: params.get("utm_source") || "direct",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || ""
    }));

    // 2. Visibility Timer
    const timer = setTimeout(() => {
      setIsVisible(true); 
      if (window.innerWidth < 1024 && !submitted) {
        setIsOpen(true);
      }
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [submitted]);

  // --- WEBHOOK LOGIC ---
  const sendToWebhook = async (data) => {
    const webhookURL = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZjMDYzMTA0MzA1MjZkNTUzMjUxMzMi_pc";
    try {
      await fetch(webhookURL, {
        method: "POST",
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error("Webhook Error:", err);
    }
  };

  // --- FIREBASE LOGIC ---
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-sticky-container', {
        'size': 'invisible'
      });
    }
  };

  const handleSendOtp = async () => {
    if (formData.phone.length < 10) return alert("Enter valid phone");
    setLoading(true);
    try {
      setupRecaptcha();
      let cleanPhone = formData.phone.replace(/\D/g, "");
      if(cleanPhone.startsWith("0")) cleanPhone = cleanPhone.substring(1);
      const phoneNumber = `+91${cleanPhone}`;

      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(result);
      setIsOtpSent(true);
      alert(`OTP Sent to ${phoneNumber}`);
    } catch (error) {
      console.error(error);
      alert("Verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!isOtpSent) return alert("Please verify phone first");
    
    setLoading(true);
    try {
      await confirmationResult.confirm(otp);
      
      // Send data to webhook
      await sendToWebhook(formData);
      
      setSubmitted(true);
      navigate("/Info/Thankyou"); 
      
    } catch (error) {
      console.error(error);
      alert("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = "w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-[#F36F21] focus:ring-4 focus:ring-[#F36F21]/10 transition-all duration-300 placeholder:text-gray-400 text-[#041a14] font-medium text-sm";

  return (
    <>
      <div id="recaptcha-sticky-container"></div>

      {/* =======================================================
          DESKTOP STICKY BAR (Horizontal)
          ======================================================= */}
      <AnimatePresence>
        {isVisible && !submitted && !isOpen && (
          <motion.div 
            initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full z-[90] hidden lg:flex items-center justify-center border-t border-[#F36F21]/20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] backdrop-blur-xl bg-white/95"
          >
            <div className="w-full max-w-7xl px-8 py-3 flex items-center justify-between gap-4">
              
              <div className="flex items-center gap-3 shrink-0">
                <div className="bg-[#FFF4E6] p-1.5 rounded-lg">
                    <img src="/Logo.png" alt="Subham" className="h-6 w-auto object-contain" />
                </div>
                <div>
                    <p className="text-[9px] font-black uppercase tracking-wider text-[#D84315]">Fast Inquiry</p>
                    <p className="font-serif italic text-sm text-[#041a14]">Quick Callback</p>
                </div>
              </div>

              <form onSubmit={handleVerify} className="flex-1 flex items-center gap-2 justify-end">
                {/* Desktop Name */}
                <input 
                  type="text" required placeholder="Name" disabled={isOtpSent}
                  className="w-32 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-xs outline-none"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />

                {/* Desktop Phone */}
                <div className="relative w-48">
                  <input 
                    type="tel" required placeholder="Phone" disabled={isOtpSent}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-3 pr-16 py-2.5 text-xs outline-none"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  {!isOtpSent && formData.phone.length >= 10 && (
                    <button type="button" onClick={handleSendOtp} disabled={loading}
                      className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#041a14] text-white text-[9px] font-bold px-2 py-1.5 rounded hover:bg-[#F36F21]"
                    >
                      OTP
                    </button>
                  )}
                </div>

                {/* Desktop Interest */}
                <select 
                  className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-2.5 text-xs outline-none"
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                >
                  <option>3 BHK</option>
                  <option>4 BHK</option>
                  <option>Duplex</option>
                </select>

                {/* Desktop OTP */}
                <AnimatePresence>
                  {isOtpSent && (
                    <motion.div initial={{ width: 0, opacity: 0 }} animate={{ width: "80px", opacity: 1 }}>
                      <input 
                        type="text" placeholder="OTP" required
                        className="w-full bg-white border-2 border-[#F36F21] rounded-lg px-2 py-2 text-xs text-center font-bold"
                        onChange={(e) => setOtp(e.target.value)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  type="submit" disabled={!isOtpSent || loading}
                  className="bg-[#F36F21] hover:bg-[#D84315] text-white px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wide disabled:opacity-50 shrink-0"
                >
                  {loading ? "..." : "Submit"}
                </button>
                
                <button type="button" onClick={() => setIsVisible(false)} className="ml-2 text-gray-400 hover:text-gray-600">
                  <X className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* =======================================================
          MOBILE FAB & MODAL (Full Fields)
          ======================================================= */}
      <div className="lg:hidden">
        <AnimatePresence>
          {isVisible && !isOpen && !submitted && (
            <motion.button
              initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
              onClick={() => setIsOpen(true)}
              className="fixed bottom-6 right-6 w-14 h-14 rounded-full z-[90] shadow-lg flex items-center justify-center text-white"
              style={{ backgroundColor: colors.vibrantOrange }}
            >
              <Phone className="w-6 h-6 fill-white" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-[#041a14]/60 backdrop-blur-sm flex items-end justify-center"
            >
              <motion.div 
                initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
                className="w-full bg-white rounded-t-[2rem] overflow-hidden relative"
              >
                <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 p-2 bg-gray-100 rounded-full z-10">
                  <X className="w-5 h-5 text-gray-500" />
                </button>

                <div className="bg-[#FFF4E6] p-6 text-center">
                   <h3 className="font-serif text-2xl text-[#041a14]">Request Callback</h3>
                   <p className="text-xs text-[#D84315] font-bold uppercase mt-1">Priority Site Visit</p>
                </div>

                <div className="p-6 max-h-[70vh] overflow-y-auto">
                  {!submitted ? (
                    <form onSubmit={handleVerify} className="space-y-4">
                      {/* Name */}
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="text" required placeholder="Full Name" className={`${inputStyle} pl-11`}
                          onChange={(e) => setFormData({...formData, name: e.target.value})} />
                      </div>

                      {/* Phone */}
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="tel" required placeholder="Phone Number" disabled={isOtpSent} className={`${inputStyle} pl-11 pr-24`}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                        {!isOtpSent && formData.phone.length >= 10 && (
                          <button type="button" onClick={handleSendOtp} className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#041a14] text-white text-[10px] px-3 py-2 rounded-lg">
                            {loading ? "..." : "OTP"}
                          </button>
                        )}
                      </div>

                      {/* OTP Field */}
                      <AnimatePresence>
                        {isOtpSent && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} className="overflow-hidden">
                            <input type="text" required placeholder="Enter OTP" className={`${inputStyle} text-center tracking-widest font-bold`}
                              onChange={(e) => setOtp(e.target.value)} />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Interest & Call Time Row */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                          <select className={`${inputStyle} appearance-none px-4`}
                            value={formData.interest}
                            onChange={(e) => setFormData({...formData, interest: e.target.value})}>
                            <option>3 BHK</option>
                            <option>4 BHK</option>
                            <option>Duplex</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                        <div className="relative">
                          <select className={`${inputStyle} appearance-none px-4`}
                            value={formData.callTime}
                            onChange={(e) => setFormData({...formData, callTime: e.target.value})}>
                            <option>Morning</option>
                            <option>Afternoon</option>
                            <option>Evening</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="email" required placeholder="Email Address" className={`${inputStyle} pl-11`}
                          onChange={(e) => setFormData({...formData, email: e.target.value})} />
                      </div>

                      <button type="submit" disabled={!isOtpSent || loading}
                        className="w-full py-4 rounded-xl font-bold uppercase bg-[#F36F21] text-white shadow-lg disabled:opacity-50"
                      >
                        {loading ? "Verifying..." : "Confirm Inquiry"}
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                       <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-2" />
                       <h4 className="text-lg font-bold">Redirecting...</h4>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default StickyContact;