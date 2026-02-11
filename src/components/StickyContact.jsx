"use client";

import React, { useState, useEffect } from "react";
import { 
  Send, X, Phone, User, 
  Sparkles, Lock, CheckCircle2 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../lib/firebase";

const StickyContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const colors = {
    blackish: "#041a14",
    vibrantOrange: "#F36F21",
    deepOrange: "#D84315",
    warmCream: "#FFF4E6",
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "3 BHK"
  });

  // --- FIXED MOBILE TRIGGER LOGIC ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Mount the component
      
      // Force open mobile modal if not already submitted
      if (window.innerWidth < 1024 && !submitted) {
        setIsOpen(true);
      }
    }, 5000); // 5 Second Delay
    
    return () => clearTimeout(timer);
  }, [submitted]);

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
      const phoneNumber = formData.phone.startsWith("+") ? formData.phone : "+91" + formData.phone;
      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(result);
      setIsOtpSent(true);
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
      // Auto-close modal after success message
      setTimeout(() => setIsOpen(false), 3000);
    } catch (error) {
      alert("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div id="recaptcha-sticky-container"></div>

      {/* --- DESKTOP STICKY FOOTER --- */}
      <AnimatePresence>
        {isVisible && !submitted && (
          <motion.div 
            initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full z-[100] hidden lg:block border-t border-[#F36F21]/10 shadow-[0_-20px_50px_rgba(216,67,21,0.08)] px-10 py-5 backdrop-blur-xl"
            style={{ backgroundColor: `${colors.warmCream}f2` }}
          >
            <form onSubmit={handleVerify} className="max-w-7xl mx-auto flex items-center justify-between gap-8">
              <div className="flex items-center gap-6 min-w-fit group">
                <div className="bg-white p-2 rounded-2xl shadow-sm transition-transform group-hover:scale-105">
                    <img src="/Logo.png" alt="Subham" className="h-10 md:h-12 w-auto object-contain" />
                </div>
                <div className="leading-tight">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: colors.deepOrange }}>Request Visit</p>
                    <p className="font-serif italic text-sm opacity-60">Exclusive Consultation</p>
                </div>
              </div>

              <div className="flex flex-1 items-center gap-4">
                <input 
                  type="text" required placeholder="Full Name" disabled={isOtpSent}
                  className="flex-1 bg-white/50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 ring-[#F36F21] shadow-inner transition-all"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <div className="relative flex-1">
                  <input 
                    type="tel" required placeholder="Phone Number" disabled={isOtpSent}
                    className="w-full bg-white/50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 ring-[#F36F21] shadow-inner"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  {formData.phone.length >= 10 && !isOtpSent && (
                    <button type="button" onClick={handleSendOtp} 
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-black uppercase tracking-widest text-white px-3 py-2 rounded-xl transition-all"
                      style={{ backgroundColor: colors.blackish }}
                    >
                      {loading ? "..." : "Get OTP"}
                    </button>
                  )}
                </div>
                {isOtpSent && (
                  <motion.input 
                    initial={{ width: 0, opacity: 0 }} animate={{ width: "130px", opacity: 1 }}
                    type="text" placeholder="OTP" required
                    className="bg-white border-2 rounded-2xl px-4 py-4 text-sm text-center font-bold tracking-[0.5em]"
                    style={{ borderColor: colors.vibrantOrange }}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                )}
              </div>

              <button 
                type="submit" disabled={!isOtpSent || loading}
                className="px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:scale-105 transition-all shadow-xl disabled:opacity-50"
                style={{ backgroundColor: colors.blackish, color: colors.warmCream }}
              >
                {loading ? "Verifying" : "Confirm Appointment"} <Send className="w-4 h-4" style={{ color: colors.vibrantOrange }} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MOBILE STICKY BUTTON & MODAL --- */}
      <div className="lg:hidden">
        {/* Floating Action Button - Only visible after 5s */}
        <AnimatePresence>
          {isVisible && (
            <motion.button
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              onClick={() => setIsOpen(true)}
              className="fixed bottom-6 right-6 w-16 h-16 rounded-full z-[100] shadow-2xl flex items-center justify-center text-white"
              style={{ backgroundColor: colors.blackish }}
              whileTap={{ scale: 0.9 }}
            >
              <Phone className="w-7 h-7" style={{ color: colors.vibrantOrange }} />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] bg-black/70 backdrop-blur-md p-6 flex items-center justify-center"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                className="w-full max-w-sm rounded-[3.5rem] overflow-hidden relative shadow-2xl"
                style={{ backgroundColor: colors.warmCream }}
              >
                <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-3 bg-white/50 rounded-full shadow-sm z-10">
                  <X className="w-5 h-5" style={{ color: colors.blackish }} />
                </button>

                <div className="p-10 pt-16 text-center">
                  <div className="bg-white p-4 rounded-[2rem] shadow-sm inline-block mb-8">
                     <img src="/Logo.png" alt="Subham" className="h-14 w-auto object-contain" />
                  </div>
                  
                  <h3 className="font-serif text-3xl mb-10 leading-tight">Request Site <br/><span className="italic font-light" style={{ color: colors.deepOrange }}>Experience</span></h3>

                  {!submitted ? (
                    <form onSubmit={isOtpSent ? handleVerify : handleSendOtp} className="space-y-6">
                      <div className="space-y-4">
                        <input 
                          type="text" required placeholder="Full Name" disabled={isOtpSent}
                          className="w-full bg-white/40 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 ring-[#F36F21] shadow-inner disabled:opacity-50"
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                        <div className="relative">
                            <input 
                            type="tel" required placeholder="Phone Number" disabled={isOtpSent}
                            className="w-full bg-white/40 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 ring-[#F36F21] shadow-inner disabled:opacity-50"
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            />
                            {formData.phone.length >= 10 && !isOtpSent && (
                                <button type="button" onClick={handleSendOtp} 
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[8px] font-black uppercase tracking-widest text-white px-3 py-2 rounded-xl"
                                    style={{ backgroundColor: colors.blackish }}
                                >
                                    Get OTP
                                </button>
                            )}
                        </div>
                        {isOtpSent && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} className="pt-2">
                             <input 
                              type="text" required placeholder="Verification OTP"
                              className="w-full bg-white border-2 rounded-2xl py-4 text-xl font-bold tracking-[0.5em] text-center"
                              style={{ borderColor: colors.vibrantOrange }}
                              onChange={(e) => setOtp(e.target.value)}
                            />
                          </motion.div>
                        )}
                      </div>

                      <button 
                        type="submit" 
                        className="w-full py-5 rounded-2xl text-white font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 shadow-lg"
                        style={{ backgroundColor: colors.blackish }}
                      >
                        {isOtpSent ? "Verify & Register" : "Proceed with SMS"} <Send className="w-4 h-4" style={{ color: colors.vibrantOrange }} />
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-10">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <p className="font-serif italic text-2xl">Verified <br/> Successfully!</p>
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