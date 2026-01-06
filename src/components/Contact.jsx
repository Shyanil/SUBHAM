// src/components/ContactEnrollmentForm.jsx
import React, { useState } from "react";
import { 
  User, 
  Mail, 
  Phone, 
  BookOpen, 
  Calendar, 
  Send,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";
import { supabase } from "../lib/supabaseClient"; 

export default function ContactEnrollmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    batch: ""
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg("");
    setSuccessMsg("");
  };

  const validate = () => {
    if (!formData.name.trim()) return "Please enter your name.";
    const emailRe = /\S+@\S+\.\S+/;
    if (!emailRe.test(formData.email)) return "Please enter a valid email.";
    if (!formData.phone.trim()) return "Please enter your phone number.";
    if (!formData.course) return "Please select a course.";
    if (!formData.batch) return "Please select a batch.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    const v = validate();
    if (v) {
      setErrorMsg(v);
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("enrollments")
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            course: formData.course,
            batch: formData.batch
          }
        ]);

      if (error) throw error;

      setSuccessMsg("Thanks! Your booking request has been received. We'll call you shortly.");
      setFormData({ name: "", email: "", phone: "", course: "", batch: "" });
    } catch (err) {
      console.error("Insert error:", err);
      setErrorMsg("Something went wrong — please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // FIXED: Adjusted padding for mobile (py-12) vs desktop (lg:py-28)
    <section id="contact" className="relative w-full py-12 lg:py-28 bg-[#FDFCFE] overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ 
             backgroundImage: 'linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-purple-50 to-transparent opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left Side Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-[#3F348F] text-xs font-bold uppercase tracking-wider shadow-sm mx-auto lg:mx-0">
               <ShieldCheck className="w-4 h-4 fill-current" />
               Expert Guidance
            </div>

            {/* FIXED: Smaller text on mobile (text-3xl) to prevent overflow/wrapping issues */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#1a1a2e] leading-tight lg:leading-[1.15] tracking-tight font-sans">
               <span className="font-light text-slate-600">Not sure which</span> <br/>
               <span className="font-bold text-[#3F348F]">Path to take?</span>
            </h2>

            <p className="text-base md:text-lg text-slate-500 mt-4 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
              Don't guess your future. Book a free 1-on-1 counseling session with our senior mentors. We will analyze your skills and suggest the perfect roadmap.
            </p>

            <div className="flex flex-col gap-4 pt-4 max-w-md mx-auto lg:mx-0">
               {[
                 "In-depth Profile Analysis",
                 "Customized Career Roadmap",
                 "Scholarship Eligibility Check"
               ].map((item, index) => (
                 <div key={index} className="flex items-center gap-4 bg-white p-3 md:p-4 rounded-xl border border-slate-100 shadow-sm hover:border-purple-100 hover:shadow-md transition-all">
                    <div className="bg-green-50 p-2 rounded-full text-green-600 shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-sm md:text-base text-slate-700 font-semibold text-left">{item}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Right Side Form */}
          <div className="relative w-full">
            <div className="bg-white/90 backdrop-blur-xl border border-white rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(63,52,143,0.15)] relative z-10">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 mt-2">

                {errorMsg && <div className="text-red-600 bg-red-50 p-3 rounded-md text-sm">{errorMsg}</div>}
                {successMsg && <div className="text-green-700 bg-green-50 p-3 rounded-md text-sm">{successMsg}</div>}

                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    placeholder="Your Full Name" 
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#3F348F] focus:ring-4 focus:ring-purple-50 transition-all outline-none text-slate-700 font-medium text-sm md:text-base"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    placeholder="Email Address" 
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#3F348F] focus:ring-4 focus:ring-purple-50 transition-all outline-none text-slate-700 font-medium text-sm md:text-base"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    placeholder="Phone Number" 
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#3F348F] focus:ring-4 focus:ring-purple-50 transition-all outline-none text-slate-700 font-medium text-sm md:text-base"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-5">
                  <div className="relative group flex-1">
                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select 
                      name="course"
                      value={formData.course}
                      className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#3F348F] focus:ring-4 focus:ring-purple-50 transition-all outline-none text-slate-700 font-medium appearance-none cursor-pointer text-sm md:text-base"
                      required
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select Course</option>
                      <option value="performance-marketing">Performance Marketing</option>
                      <option value="google-ads">Google Ads Specialist</option>
                      <option value="meta-ads">Meta Ads Mastery</option>
                      {/* FIXED: Removed DTC Brand Strategy */}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>

                  <div className="relative group flex-1">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select 
                      name="batch"
                      value={formData.batch}
                      className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#3F348F] focus:ring-4 focus:ring-purple-50 transition-all outline-none text-slate-700 font-medium appearance-none cursor-pointer text-sm md:text-base"
                      required
                      onChange={handleChange}
                    >
                      <option value="" disabled>Preferred Batch</option>
                      {/* FIXED: Only Saturday/Sunday options available */}
                      <option value="weekend-sat-sun">Weekend (Sat & Sun)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 md:py-4 bg-[#3F348F] text-white rounded-xl font-bold text-base md:text-lg hover:bg-[#322a72] transition-all shadow-lg shadow-purple-200 flex items-center justify-center gap-2 group mt-6 md:mt-8"
                  disabled={loading}
                >
                  <Send className="w-5 h-5" />
                  {loading ? "Sending..." : "Book a Free Counselling Call"}
                </button>

                <p className="text-center text-slate-400 text-xs mt-4">
                  By booking, you agree to our Terms & Privacy Policy.
                </p>

              </form>
            </div>

            <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-[#FF0065] rounded-3xl z-0 opacity-20 hidden lg:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
}