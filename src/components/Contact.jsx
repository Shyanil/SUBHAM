"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Target 
} from "lucide-react";

export default function Contact() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  
  // NEW PALETTE: Orange and Blackish Combo
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
    timeline: "Immediate",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    referring_url: ""
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setFormData(prev => ({
      ...prev,
      utm_source: urlParams.get('utm_source') || 'Direct',
      utm_medium: urlParams.get('utm_medium') || 'Web',
      utm_campaign: urlParams.get('utm_campaign') || 'Organic',
      utm_term: urlParams.get('utm_term') || 'N/A',
      utm_content: urlParams.get('utm_content') || 'N/A',
      referring_url: document.referrer || 'None'
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full bg-[#fafaf8] py-24 lg:py-40 overflow-hidden font-sans text-[#041a14]">
      
      {/* BRAND DECOR: profile_2.png */}
      <div className="absolute right-0 top-0 w-[400px] opacity-10 pointer-events-none select-none z-0">
        <img src="/profile_2.png" alt="Branding" className="w-full h-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-[#041a14]/5 min-h-[650px]">
          
          {/* LEFT PANEL: BLACKISH THEME */}
          <div className="lg:w-2/5 p-12 lg:p-20 text-white flex flex-col justify-between" style={{ backgroundColor: colors.blackish }}>
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 block" style={{ color: colors.brightOrange }}>
                Exclusive Inquiry
              </span>
              <h2 className="font-serif text-5xl md:text-6xl leading-[0.95] mb-8">
                Request a <br />
                <span className="italic font-light" style={{ color: colors.brightOrange }}>Consultation.</span>
              </h2>
              <p className="text-white/70 text-lg font-medium leading-relaxed max-w-xs">
                Subham Kishori Heights is a lifestyle-focused residential project designed for Dibrugarh.
              </p>
            </div>

            <div className="space-y-4 pt-10">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                <MapPin className="w-4 h-4" style={{ color: colors.brightOrange }} /> Near Brahmaputra, Dibrugarh
              </div>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                <Phone className="w-4 h-4" style={{ color: colors.brightOrange }} /> +91 6292 294 902
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: SMART FORM */}
          <div className="lg:w-3/5 p-12 lg:p-20 flex flex-col justify-center">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-12">
                
                {step === 1 && (
                  <div className="space-y-8">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#041a14]/40">01. Identity</h4>
                    <div className="space-y-6">
                      <input 
                        type="text" required placeholder="Full Name"
                        className="w-full bg-transparent border-b-2 py-4 outline-none transition-all font-medium text-lg"
                        style={{ borderBottomColor: `${colors.blackish}15` }}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input 
                          type="email" required placeholder="Email Address"
                          className="w-full bg-transparent border-b-2 py-4 outline-none transition-all font-medium"
                          style={{ borderBottomColor: `${colors.blackish}15` }}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        <input 
                          type="tel" required placeholder="Phone Number"
                          className="w-full bg-transparent border-b-2 py-4 outline-none transition-all font-medium"
                          style={{ borderBottomColor: `${colors.blackish}15` }}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    <button 
                      type="button" onClick={() => setStep(2)} 
                      className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-lg"
                      style={{ backgroundColor: colors.blackish, color: colors.brightOrange }}
                    >
                      Select Interest <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#041a14]/40">02. Project Interest</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Configuration</label>
                        <div className="flex flex-wrap gap-2">
                          {['3 BHK', '4 BHK', 'Duplex'].map(type => (
                            <button 
                              key={type} type="button"
                              onClick={() => setFormData({...formData, interest: type})}
                              className={`px-6 py-3 rounded-xl text-xs font-bold transition-all ${formData.interest === type ? 'text-white' : 'bg-gray-100'}`}
                              style={{ 
                                backgroundColor: formData.interest === type ? colors.darkOrange : "",
                                color: formData.interest === type ? "white" : ""
                              }}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Timeline</label>
                        <select 
                          className="w-full bg-transparent border-b-2 py-4 outline-none transition-all font-medium"
                          style={{ borderBottomColor: `${colors.blackish}15` }}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                        >
                          <option>Immediate</option>
                          <option>3-6 Months</option>
                          <option>Just Exploring</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center gap-8 pt-8">
                      <button type="button" onClick={() => setStep(1)} className="text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity underline underline-offset-4">Back</button>
                      <button 
                        type="submit" 
                        className="flex-1 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-[1.02] transition-all shadow-xl"
                        style={{ backgroundColor: colors.mediumOrange, color: "white" }}
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              <div className="text-center">
                <CheckCircle2 className="w-20 h-20 mx-auto mb-6" style={{ color: colors.darkOrange }} />
                <h3 className="font-serif text-4xl mb-4">Request Received.</h3>
                <p className="text-[#041a14]/60 font-medium leading-relaxed">An advisor from Subham Kishori Heights will contact you shortly.</p>
              </div>
            )}
          </div>
        </div>
        
        {/* TRUST INDICATORS */}
        <div className="mt-12 flex justify-center items-center gap-12 opacity-30 grayscale">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" /> RERA Registered
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
            <Target className="w-4 h-4" /> 78% Open Space Living
          </div>
        </div>
      </div>

      <style>{`
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </section>
  );
}