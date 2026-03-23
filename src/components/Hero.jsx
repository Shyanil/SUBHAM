"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Star, X, Sparkles, User, Mail, Phone as PhoneIcon, Lock, CheckCircle2, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../lib/firebase";

// --- INTERNAL CONTACT MODAL COMPONENT ---
function ContactModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const colors = {
    blackish: "#0b1c14",
    brightOrange: "#F2A71D",
  };

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", interest: "3 BHK", callTime: "Morning", utm_source: "direct",
  });

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", { size: "invisible" });
    }
  };

  const handleSendOtp = async () => {
    if (!formData.phone || formData.phone.length < 10) return alert("Enter valid 10-digit phone number");
    setLoading(true);
    try {
      setupRecaptcha();
      const phoneNumber = `+91${formData.phone.replace(/\D/g, "")}`;
      const result = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
      setConfirmationResult(result);
      setIsOtpSent(true);
    } catch (error) {
      alert("Error sending OTP.");
      if (window.recaptchaVerifier) window.recaptchaVerifier.clear();
    } finally { setLoading(false); }
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    if (!isOtpSent) return handleSendOtp();
    setLoading(true);
    try {
      await confirmationResult.confirm(otp);
      const payload = new URLSearchParams(formData);
      await fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZjMDYzMTA0MzA1MjZkNTUzMjUxMzMi_pc", {
        method: "POST", mode: "no-cors", body: payload.toString(),
      });
      setSubmitted(true);
      setTimeout(() => navigate("/Info/Thankyou"), 1500);
    } catch (error) { alert("Invalid OTP."); } finally { setLoading(false); }
  };

  const inputStyle = "w-full bg-white border border-gray-100 rounded-2xl px-10 md:px-12 py-3.5 md:py-4 outline-none focus:ring-2 focus:ring-[#F2A71D]/20 transition-all placeholder:text-gray-400 text-gray-700 shadow-sm text-sm md:text-base";
  const iconStyle = "absolute left-3.5 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-300";

  return (
    <div className="relative w-full max-w-[92vw] md:max-w-xl bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden font-sans border border-gray-100 mx-auto">
      <div id="recaptcha-container"></div>
      
      {/* HEADER: Background color container */}
      <div className="p-6 md:p-8 pt-8 md:pt-10 pb-12 md:pb-14 relative" style={{ backgroundColor: colors.blackish }}>
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: colors.brightOrange }}>
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" /> Quick Connect
          </div>
          <button onClick={onClose} className="p-1.5 md:p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </button>
        </div>
        <h2 className="text-white font-serif text-3xl md:text-4xl mb-1 leading-tight">Experience</h2>
        <h3 className="italic font-light text-2xl md:text-3xl" style={{ color: colors.brightOrange }}>Subham Kishori Heights.</h3>
      </div>

      {/* FORM: Integrated into the single card container */}
      <div className="px-5 md:px-10 pb-8 md:pb-10 -mt-6 md:-mt-8 relative z-10">
        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-0 md:pt-4">
          {!submitted ? (
            <form onSubmit={handleFinalSubmit} className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div className="relative">
                  <User className={iconStyle} />
                  <input type="text" placeholder="Name" required className={inputStyle} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="relative">
                  <Mail className={iconStyle} />
                  <input type="email" placeholder="Email" required className={inputStyle} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>
              <div className="relative">
                <PhoneIcon className={iconStyle} />
                <input type="tel" placeholder="10-digit Phone" required className={inputStyle} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                {formData.phone.length >= 10 && !isOtpSent && (
                  <button type="button" onClick={handleSendOtp} className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 text-[8px] md:text-[10px] font-bold uppercase tracking-tighter text-[#F2A71D] bg-[#0b1c14] px-2 md:px-3 py-1.5 md:py-2 rounded-xl">Verify</button>
                )}
              </div>
              <AnimatePresence>
                {isOtpSent && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="relative"><Lock className={iconStyle} /><input type="text" placeholder="Enter 6-digit OTP" className={inputStyle} onChange={(e) => setOtp(e.target.value)} /></motion.div>
                )}
              </AnimatePresence>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div className="relative"><select className={`${inputStyle} appearance-none`} onChange={(e) => setFormData({...formData, interest: e.target.value})}><option>3 BHK</option><option>4 BHK</option><option>Duplex</option></select><ChevronDown className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 text-gray-400" /></div>
                <div className="relative"><select className={`${inputStyle} appearance-none`} onChange={(e) => setFormData({...formData, callTime: e.target.value})}><option>Morning</option><option>Afternoon</option><option>Evening</option></select><ChevronDown className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 text-gray-400" /></div>
              </div>
              <button type="submit" disabled={loading} className="w-full py-3.5 md:py-4.5 rounded-2xl font-bold text-base md:text-lg shadow-inner flex items-center justify-center gap-2 md:gap-3 transition-all" style={{ backgroundColor: isOtpSent ? colors.blackish : '#e5e7eb', color: isOtpSent ? 'white' : '#9ca3af' }}>
                {loading ? "..." : isOtpSent ? "Confirm Inquiry" : "Send Verification"} <Send className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <div className="flex items-center justify-center gap-1.5 md:gap-2 text-[8px] md:text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-4 md:mt-6"><CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-green-500" /> Secure Rera Verified</div>
            </form>
          ) : ( <div className="py-12 md:py-16 text-center"><CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-green-500 mx-auto mb-4" /><h3 className="text-xl md:text-2xl font-serif">Thank You!</h3></div> )}
        </div>
      </div>
    </div>
  );
}

// --- MAIN HERO SECTION ---
export default function HeroSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsPopupOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const colors = {
    blackish: "#041a14",      
    vibrantOrange: "#F36F21", 
    goldenYellow: "#F4B400",  
    deepOrange: "#D84315",    
    warmCream: "#FFF4E6",     
  };

  return (
    <>
      <section id="hero" className="w-full min-h-screen bg-white px-4 py-6 md:px-8 lg:px-12 flex flex-col font-sans">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* --- LEFT CARD --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[3rem] p-12 md:p-16 lg:p-20 flex flex-col justify-center items-center text-center relative overflow-hidden"
            style={{ backgroundColor: colors.blackish }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F36F21]/10 rounded-full -mr-20 -mt-20 blur-3xl" />
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tighter relative z-10 text-white">
              Elevate Your <br /> Everyday <span className="italic font-light" style={{ color: colors.vibrantOrange }}>Living.</span>
            </h1>
            <p className="mt-8 text-white/60 text-lg max-w-md font-medium leading-relaxed relative z-10">
              Discover Subham Kishori Heights—Dibrugarh’s first "Active Lifestyle" landmark designed for 65 exclusive families.
            </p>
            <div className="mt-12 flex flex-col items-center gap-6 relative z-10">
              <button 
                onClick={scrollToAbout}
                className="flex items-center gap-2 px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-2xl text-white group"
                style={{ backgroundColor: colors.deepOrange }}
              >
                Discover the Ascent 
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </button>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="cursor-pointer" onClick={scrollToAbout} style={{ color: colors.vibrantOrange }}>
                <ChevronDown className="w-6 h-6 opacity-50" />
              </motion.div>
            </div>
          </motion.div>

          {/* --- RIGHT CARD --- */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full h-full min-h-[300px] sm:min-h-[350px] rounded-[3rem] overflow-hidden group shadow-sm"
          >
            <img src="/night.jpeg" alt="Subham Kishori Heights" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute top-10 right-10 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest shadow-sm flex items-center gap-2" style={{ color: colors.deepOrange }}>
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: colors.vibrantOrange }} />
              Dibrugarh, Assam
            </div>
            <div 
              className="absolute bottom-4 right-4 md:right-10 bg-white px-3 py-3 md:px-6 md:py-6 font-black shadow-lg flex items-center justify-center text-center -rotate-12 transition-transform duration-300 hover:scale-105" 
              style={{ color: colors.deepOrange, clipPath: "polygon(100% 50%, 95% 61%, 98% 74%, 87% 78%, 85% 91%, 73% 89%, 66% 99%, 54% 92%, 46% 99%, 34% 92%, 27% 99%, 15% 91%, 13% 78%, 2% 74%, 5% 61%, 0% 50%, 5% 39%, 2% 26%, 13% 22%, 15% 9%, 27% 11%, 34% 1%, 46% 8%, 54% 1%, 66% 8%, 73% 1%, 85% 9%, 87% 22%, 98% 26%, 95% 39%)" }}
            >
              <div className="flex flex-col items-center leading-none tracking-tight">
                <Star className="w-3 h-3 md:w-4 md:h-4 mb-0.5 md:mb-1" style={{ color: colors.vibrantOrange, fill: colors.vibrantOrange }} />
                <span className="block text-[8px] md:text-[14px] lg:text-[16px] uppercase opacity-90">Starting at</span>
                <span className="block text-[11px] md:text-[22px] lg:text-[26px]">90 Lac</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- POPUP MODAL --- */}
      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsPopupOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full flex justify-center items-center max-h-[95vh] overflow-y-auto no-scrollbar">
              <ContactModal onClose={() => setIsPopupOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}