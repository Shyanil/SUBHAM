"use client";

import React, { useState } from "react";
import { 
  Send, MapPin, Phone, ShieldCheck, 
  Target, CheckCircle2, Sparkles, Lock 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// Import Firebase logic
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../lib/firebase";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);

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
    timeline: "Immediate"
  });

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible'
      });
    }
  };

  const handleSendOtp = async () => {
    if (formData.phone.length < 10) return alert("Enter a valid phone number");
    setLoading(true);
    try {
      setupRecaptcha();
      const phoneNumber = formData.phone.startsWith("+") ? formData.phone : "+91" + formData.phone;
      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(result);
      setIsOtpSent(true);
      alert("OTP sent to " + phoneNumber);
    } catch (error) {
      console.error(error);
      alert("Error sending OTP. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    if (!isOtpSent) return alert("Please verify your phone number first.");
    setLoading(true);
    try {
      await confirmationResult.confirm(otp);
      setSubmitted(true);
    } catch (error) {
      alert("Invalid OTP. Please check and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#fafaf8] py-24 lg:py-40 overflow-hidden font-sans text-[#041a14]">
      <div id="recaptcha-container"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-[#041a14]/5">
          
          <div className="lg:w-2/5 p-12 lg:p-20 text-white flex flex-col justify-between" style={{ backgroundColor: colors.blackish }}>
            <div>
              <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block" style={{ color: colors.brightOrange }}>
                <Sparkles className="w-3 h-3" /> Exclusive Inquiry
              </span>
              <h2 className="font-serif text-5xl md:text-6xl leading-[0.95] mb-8">
                Request a <br />
                <span className="italic font-light" style={{ color: colors.brightOrange }}>Consultation.</span>
              </h2>
              <p className="text-white/70 text-lg font-medium leading-relaxed max-w-xs">
                Subham Kishori Heights is a lifestyle-focused residential project designed for Dibrugarh.
              </p>
            </div>
            <div className="space-y-6 pt-10">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                <MapPin className="w-4 h-4" style={{ color: colors.brightOrange }} /> Near Brahmaputra, Dibrugarh
              </div>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                <Phone className="w-4 h-4" style={{ color: colors.brightOrange }} /> +91 6292 294 902
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-12 lg:p-20 flex flex-col justify-center bg-white">
            {!submitted ? (
              <form onSubmit={handleFinalSubmit} className="space-y-8">
                <div className="space-y-6">
                  <h4 className="text-[10px] font-black uppercase tracking-widest opacity-40">01. Personal Information</h4>
                  <input 
                    type="text" required placeholder="Full Name"
                    className="w-full bg-transparent border-b-2 py-4 outline-none transition-all font-medium text-lg"
                    style={{ borderBottomColor: `${colors.blackish}15` }}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  
                  <div className="relative group">
                    <input 
                      type="tel" required placeholder="Phone Number"
                      disabled={isOtpSent}
                      className="w-full bg-transparent border-b-2 py-4 outline-none transition-all font-medium disabled:opacity-50"
                      style={{ borderBottomColor: isOtpSent ? colors.mediumOrange : `${colors.blackish}15` }}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    {formData.phone.length >= 10 && !isOtpSent && (
                      <button 
                        type="button"
                        onClick={handleSendOtp}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#041a14] text-[#F2A71D] text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg hover:scale-105 transition-all"
                      >
                        {loading ? "Sending..." : "Get OTP"}
                      </button>
                    )}
                  </div>

                  <AnimatePresence>
                    {isOtpSent && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="space-y-4">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest" style={{ color: colors.mediumOrange }}>
                          <Lock className="w-3 h-3" /> Security Verification
                        </div>
                        <input 
                          type="text" required placeholder="Enter 6-Digit OTP"
                          className="w-full bg-transparent border-b-2 py-4 outline-none transition-all font-bold text-2xl tracking-[0.5em]"
                          style={{ borderBottomColor: colors.mediumOrange }}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <input 
                    type="email" required placeholder="Email Address"
                    className="w-full bg-transparent border-b-2 py-4 outline-none transition-all font-medium"
                    style={{ borderBottomColor: `${colors.blackish}15` }}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-6">
                  <h4 className="text-[10px] font-black uppercase tracking-widest opacity-40">02. Requirements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Interest</label>
                      <div className="flex gap-2">
                        {['3 BHK', '4 BHK', 'Duplex'].map(type => (
                          <button 
                            key={type} type="button"
                            onClick={() => setFormData({...formData, interest: type})}
                            className="px-4 py-2 rounded-lg text-[10px] font-bold uppercase transition-all border"
                            style={{ 
                              backgroundColor: formData.interest === type ? colors.blackish : "white",
                              color: formData.interest === type ? colors.brightOrange : colors.blackish,
                              borderColor: formData.interest === type ? colors.blackish : "#eee"
                            }}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={!isOtpSent || loading}
                  className="w-full py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] flex items-center justify-center gap-4 hover:scale-[1.01] transition-all shadow-2xl disabled:grayscale disabled:opacity-50"
                  style={{ backgroundColor: colors.mediumOrange, color: "white" }}
                >
                  {loading ? "Processing..." : "Confirm Registration"} <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="text-center py-20">
                <CheckCircle2 className="w-24 h-24 mx-auto mb-8" style={{ color: colors.brightOrange }} />
                <h3 className="font-serif text-5xl mb-6">Verification Success.</h3>
                <p className="text-[#041a14]/60 font-medium leading-relaxed max-w-sm mx-auto">
                  Thank you, {formData.name}. Your identity has been verified. Our advisor will reach out to you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}