"use client";

import React, { useState, useEffect } from "react";
import { 
  Send, X, Phone, User, 
  Sparkles, Lock, CheckCircle2, MapPin 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Added for redirection
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../lib/firebase";

const StickyContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Hook for redirection
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
    interest: "3 BHK"
  });

  // --- MOBILE TRIGGER LOGIC ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); 
      
      // Auto-open on mobile if not submitted yet
      if (window.innerWidth < 1024 && !submitted) {
        setIsOpen(true);
      }
    }, 5000); // 5 Second Delay
    
    return () => clearTimeout(timer);
  }, [submitted]);

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
      // Ensure +91 prefix
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
    setLoading(true);
    try {
      await confirmationResult.confirm(otp);
      setSubmitted(true);
      
      // ✅ Redirect to Thank You page on success
      navigate("/Info/Thankyou"); 
      
    } catch (error) {
      console.error(error);
      alert("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // Styles for inputs
  const inputStyle = "w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-[#F36F21] focus:ring-4 focus:ring-[#F36F21]/10 transition-all duration-300 placeholder:text-gray-400 text-[#041a14] font-medium text-sm";

  return (
    <>
      <div id="recaptcha-sticky-container"></div>

      {/* =======================================================
          DESKTOP STICKY BAR (Bottom of Screen)
         ======================================================= */}
      <AnimatePresence>
        {isVisible && !submitted && !isOpen && (
          <motion.div 
            initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full z-[90] hidden lg:flex items-center justify-center border-t border-[#F36F21]/20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] backdrop-blur-xl bg-white/95"
          >
            <div className="w-full max-w-7xl px-8 py-4 flex items-center justify-between gap-6">
              
              {/* Brand / Title */}
              <div className="flex items-center gap-4">
                <div className="bg-[#FFF4E6] p-2 rounded-xl">
                    <img src="/Logo.png" alt="Subham" className="h-8 w-auto object-contain" />
                </div>
                <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D84315]">Fast Inquiry</p>
                    <p className="font-serif italic text-lg text-[#041a14]">Request a Call Back</p>
                </div>
              </div>

              {/* Horizontal Form */}
              <form onSubmit={handleVerify} className="flex-1 flex items-center gap-3 justify-end">
                
                {/* Name Input */}
                <div className="relative w-48">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="text" required placeholder="Name" disabled={isOtpSent}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-3 py-3 text-sm focus:border-[#F36F21] outline-none transition-all"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                {/* Phone Input */}
                <div className="relative w-64">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="tel" required placeholder="Phone Number" disabled={isOtpSent}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-24 py-3 text-sm focus:border-[#F36F21] outline-none transition-all"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  {!isOtpSent && formData.phone.length >= 10 && (
                    <button 
                      type="button" 
                      onClick={handleSendOtp}
                      disabled={loading}
                      className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#041a14] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-2 rounded-md hover:bg-[#F36F21] transition-colors"
                    >
                      {loading ? "..." : "Get OTP"}
                    </button>
                  )}
                </div>

                {/* OTP Input (Appears after sending) */}
                <AnimatePresence>
                  {isOtpSent && (
                    <motion.div initial={{ width: 0, opacity: 0 }} animate={{ width: "100px", opacity: 1 }} className="overflow-hidden">
                      <input 
                        type="text" placeholder="OTP" required
                        className="w-full bg-white border-2 border-[#F36F21] rounded-lg px-2 py-3 text-sm text-center font-bold tracking-widest outline-none"
                        onChange={(e) => setOtp(e.target.value)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button 
                  type="submit" disabled={!isOtpSent || loading}
                  className="bg-[#F36F21] hover:bg-[#D84315] text-white px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-all shadow-lg hover:shadow-orange-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Submit <Send className="w-3 h-3" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* =======================================================
          MOBILE FAB & MODAL 
         ======================================================= */}
      <div className="lg:hidden">
        
        {/* Floating Action Button (FAB) */}
        <AnimatePresence>
          {isVisible && !isOpen && !submitted && (
            <motion.button
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
              onClick={() => setIsOpen(true)}
              className="fixed bottom-6 right-6 w-14 h-14 rounded-full z-[90] shadow-[0_10px_30px_rgba(243,111,33,0.4)] flex items-center justify-center text-white border-2 border-white/20"
              style={{ backgroundColor: colors.vibrantOrange }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div animate={{ rotate: [0, -10, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }}>
                <Phone className="w-6 h-6 fill-white" />
              </motion.div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Mobile Modal Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-[#041a14]/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4"
            >
              {/* Modal Content */}
              <motion.div 
                initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full sm:max-w-md bg-white rounded-t-[2.5rem] sm:rounded-[2.5rem] overflow-hidden relative shadow-2xl"
              >
                
                {/* Close Button */}
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="absolute top-5 right-5 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>

                {/* Modal Header */}
                <div className="bg-[#FFF4E6] p-8 pb-10 text-center relative overflow-hidden">
                   {/* Decorative circle */}
                   <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-[#F36F21] opacity-5 rounded-full blur-3xl"></div>
                   
                   <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-white/40 text-[10px] font-bold uppercase tracking-widest text-[#D84315] mb-4">
                      <Sparkles className="w-3 h-3" /> Priority Access
                   </span>
                   <h3 className="font-serif text-3xl text-[#041a14] leading-tight">
                     Schedule a <br/>
                     <span className="italic text-[#F36F21]">Site Visit</span>
                   </h3>
                </div>

                {/* Modal Body / Form */}
                <div className="p-8 -mt-6 bg-white rounded-t-[2.5rem] relative z-10">
                   {!submitted ? (
                    <form onSubmit={handleVerify} className="space-y-5">
                      
                      {/* Name */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1 block mb-2">Full Name</label>
                        <input 
                          type="text" required placeholder="John Doe" disabled={isOtpSent}
                          className={inputStyle}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>

                      {/* Phone & OTP Button */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1 block mb-2">Phone Number</label>
                        <div className="relative">
                           <input 
                            type="tel" required placeholder="98765 43210" disabled={isOtpSent}
                            className={`${inputStyle} pr-24`}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                           />
                           {!isOtpSent && formData.phone.length >= 10 && (
                             <button type="button" onClick={handleSendOtp} 
                               className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#041a14] text-[#F2A71D] text-[10px] font-bold uppercase tracking-wider px-3 py-2 rounded-lg"
                             >
                               {loading ? "..." : "Get OTP"}
                             </button>
                           )}
                           
                           {isOtpSent && (
                             <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600">
                                <CheckCircle2 className="w-5 h-5" />
                             </div>
                           )}
                        </div>
                      </div>

                      {/* OTP Input (Animated) */}
                      <AnimatePresence>
                        {isOtpSent && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="overflow-hidden">
                             <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1 block mb-2">One-Time Password</label>
                             <div className="relative">
                               <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                               <input 
                                type="text" required placeholder="Enter 6-digit OTP"
                                className={`${inputStyle} pl-11 text-center tracking-[0.2em] font-bold text-lg`}
                                onChange={(e) => setOtp(e.target.value)}
                              />
                             </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Submit Button */}
                      <button 
                        type="submit" 
                        disabled={!isOtpSent || loading}
                        className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-lg ${
                          !isOtpSent || loading 
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                          : "bg-[#F36F21] text-white hover:bg-[#D84315] hover:scale-[1.02]"
                        }`}
                      >
                        {loading ? "Verifying..." : "Confirm Booking"} <Send className="w-3 h-3" />
                      </button>

                    </form>
                   ) : (
                     /* Success State (Briefly shown before redirect) */
                     <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-serif font-bold text-[#041a14]">Redirecting...</h4>
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