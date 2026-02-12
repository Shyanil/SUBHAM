"use client";
import { useEffect } from "react";
import React, { useState } from "react";
import { 
  Send, MapPin, Phone, ShieldCheck, 
  Target, CheckCircle2, Sparkles, Lock 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

  // ✅ FIXED recaptcha setup (Firebase v9 correct order)
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

  // ✅ FIXED phone number format for Firebase
  const handleSendOtp = async () => {
    if (!formData.phone) return alert("Enter phone number");

    setLoading(true);

    try {
      setupRecaptcha();

      // remove all non-numbers
      let cleaned = formData.phone.replace(/\D/g, "");

      // remove leading zero
      if (cleaned.startsWith("0")) {
        cleaned = cleaned.substring(1);
      }

      // must be 10 digits
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
      await confirmationResult.confirm(otp);
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Invalid OTP. Try again.");
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

                <input 
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b-2 py-4 outline-none font-medium"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />

                <div className="relative">
                  <input 
                    type="tel"
                    required
                    placeholder="Phone Number"
                    disabled={isOtpSent}
                    className="w-full bg-transparent border-b-2 py-4 outline-none"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />

                  {formData.phone.length >= 10 && !isOtpSent && (
                    <button 
                      type="button"
                      onClick={handleSendOtp}
                      className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#041a14] text-[#F2A71D] px-4 py-2 rounded-lg"
                    >
                      {loading ? "Sending..." : "Get OTP"}
                    </button>
                  )}
                </div>

                <AnimatePresence>
                  {isOtpSent && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }}>
                      <input 
                        type="text"
                        required
                        placeholder="Enter OTP"
                        className="w-full border-b-2 py-4"
                        onChange={(e) => setOtp(e.target.value)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <input 
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full border-b-2 py-4"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />

                <button 
                  type="submit"
                  disabled={!isOtpSent || loading}
                  className="w-full py-6 bg-[#E97323] text-white rounded-xl"
                >
                  {loading ? "Processing..." : "Confirm Registration"}
                </button>

              </form>
            ) : (
              <div className="text-center">
                <CheckCircle2 className="w-24 h-24 mx-auto" />
                <h3>Verification Success</h3>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
