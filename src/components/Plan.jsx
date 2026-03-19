import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const colors = {
  blackish: "#041a14",
  vibrantOrange: "#F36F21",
  goldenYellow: "#F4B400",
  darkOrange: "#D64B27",
  deepOrange: "#D84315",
  warmCream: "#FFF4E6",
};

const MASTER_PLAN = {
  id: 0,
  name: "MASTER PLAN",
  tag: "", // Removed tag content
  src: "/Master Plan.jpg",
};

const PLANS = [
  { id: 1, name: "BLOCK-A", tag: "UNIT-A", src: "/BLOCK-A.jpg" },
  { id: 2, name: "BLOCK A", tag: "UNIT-B | TYPE 1", src: "/BLOCK A UNIT B TYPE 1.jpg" },
  { id: 3, name: "BLOCK A ", tag: "UNIT-B | TYPE 2", src: "/BLOCK A UNIT 1 TYPE 2.jpg" },
  { id: 4, name: "BLOCK A", tag: "UNIT-B | TYPE 3", src: "/BLOCK A TYPE 3.jpg" },
  { id: 5, name: "BLOCK A", tag: "UNIT-B (DUPLEX) | LOWER FLOOR", src: "/BLOCK A 13TH FLOOR.jpg" },
  { id: 6, name: "BLOCK A", tag: "UNIT-B (DUPLEX) | UPPER FLOOR", src: "/BLOCK A 14TH FLOOR.jpg" },
  { id: 7, name: "BLOCK B ", tag: "UNIT-C", src: "/BLOCK B UNIT C.jpg" },
  { id: 8, name: "BLOCK B ", tag: "UNIT-D | TYPE 1", src: "/BLOCK B UNIT D.jpg" },
  { id: 9, name: "BLOCK B ", tag: "UNIT-D | TYPE 2", src: "/BLOCK B UNIT 2 TYPE 2.jpg" },
  { id: 10, name: "BLOCK B", tag: "UNIT-E", src: "/BLOCK B UNIT E.jpg" },
  { id: 11, name: "BLOCK B ", tag: "UNIT-F (DUPLEX) | LOWER FLOOR", src: "/BLOCK B UNIT F.jpg" },
  { id: 12, name: "BLOCK B ", tag: "UNIT-F (DUPLEX) | UPPER FLOOR", src: "/BLOCK B UNIT F UPPER FLOOR.jpg" },
  { id: 13, name: "BLOCK B ", tag: "UNIT-G (DUPLEX) | LOWER FLOOR", src: "/BLOCK B UNIT G.jpg" },
  { id: 14, name: "BLOCK B ", tag: "UNIT-G (DUPLEX) | UPPER FLOOR", src: "/BLOCK B UNIT G UPPER FLOOR.jpg" },
  { id: 15, name: "BLOCK B", tag: "UNIT-H (DUPLEX) | LOWER FLOOR", src: "/BLOCK B UNIT H LOWER FLOOR.jpg" },
  { id: 16, name: "BLOCK B", tag: "UNIT-H (DUPLEX) | UPPER FLOOR", src: "/BLOCK H UPPER FLOOR.jpg" },
];

// ── Modal Component ──
function Modal({ plan, onClose, onPrev, onNext }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
        style={{ background: "rgba(4,26,20,0.88)", backdropFilter: "blur(6px)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          className="flex flex-col rounded-2xl overflow-hidden w-full max-w-3xl"
          style={{ background: "#fff", maxHeight: "90vh" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
        >
          <div className="flex items-center justify-between px-5 py-3 border-b gap-4" style={{ background: colors.warmCream }}>
            <div className="flex items-center min-w-0 flex-1 gap-2">
              <span className="text-sm font-bold text-[#041a14] whitespace-nowrap flex-shrink-0">{plan.name}</span>
              {plan.tag && <span className="text-sm font-normal opacity-50 whitespace-nowrap overflow-hidden text-ellipsis">| {plan.tag}</span>}
            </div>
            <button onClick={onClose} className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-black/5 text-xl hover:bg-black/10 transition-colors">✕</button>
          </div>
          <div className="flex-1 overflow-auto flex items-center justify-center p-4 bg-[#f5ece0]">
            <img src={plan.src} alt={plan.name} className="max-w-full max-h-[60vh] object-contain" />
          </div>
          <div className="flex items-center justify-center gap-4 py-4 border-t" style={{ background: colors.warmCream }}>
            <button onClick={onPrev} className="px-6 py-2 border rounded-full text-xs font-bold hover:bg-white transition-all">← Prev</button>
            <button onClick={onNext} className="px-6 py-2 border rounded-full text-xs font-bold hover:bg-white transition-all">Next →</button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Plan Card Component ──
function PlanCard({ plan, index, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden border border-black/5 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 w-full"
    >
      <div className="bg-[#f8f0e6] p-4 aspect-[4/3] flex items-center justify-center group">
        <img src={plan.src} alt={plan.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
      </div>
      
      <div className="p-4 flex items-center justify-between gap-1 overflow-hidden">
        <h4 className="text-sm font-bold text-[#041a14] whitespace-nowrap flex-shrink-0">
          {plan.name.trim()}
        </h4>
        {/* Removed bg-orange-100 and rounded-full. Added conditional rendering to hide box if tag is empty */}
        {plan.tag && (
          <span className="text-[11px] md:text-[9px] leading-tight font-bold px-2 py-1 text-orange-700 whitespace-nowrap overflow-hidden text-ellipsis min-w-0 flex-1 text-right">
            {plan.tag}
          </span>
        )}
      </div>
    </motion.div>
  );
}

// ── Main Section ──
export default function PlanningSection() {
  const [activeTab, setActiveTab] = useState("Master Plan");
  const [activeSubTab, setActiveSubTab] = useState("All");
  const [activeId, setActiveId] = useState(null);

  const filteredPlans = useMemo(() => {
    if (activeTab === "Master Plan") return [MASTER_PLAN];
    const blockKeyword = activeTab.toUpperCase(); 
    let list = PLANS.filter(p => 
      p.name.toUpperCase().replace(/-/g, " ").includes(blockKeyword)
    );
   if (activeSubTab !== "All") {
  list = list.filter(p => {
    const tag = p.tag.toUpperCase();
    const subTab = activeSubTab.toUpperCase();
    const isDuplex = tag.includes("DUPLEX");

    // ✅ UNIT-B → only non-duplex
    if (subTab === "UNIT-B") {
      return tag.startsWith("UNIT-B") && !isDuplex;
    }

    // ✅ DUPLEX tabs (UNIT-F/G/H)
    if (subTab.includes("DUPLEX")) {
      const unit = subTab.split(" ")[0]; // UNIT-F, UNIT-G, UNIT-H
      return tag.startsWith(unit) && isDuplex;
    }

    // ✅ Normal tabs (UNIT-C, D, E etc.)
    return tag.startsWith(subTab);
  });
}
    return list;
  }, [activeTab, activeSubTab]);

  const subTabs = useMemo(() => {
    if (activeTab === "Master Plan") return [];
    const blockKeyword = activeTab.toUpperCase();
    const currentBlockPlans = PLANS.filter(p => p.name.toUpperCase().includes(blockKeyword));
    
    const types = new Set(["All"]);
    currentBlockPlans.forEach(p => {
      if (p.tag.includes("|")) types.add(p.tag.split("|")[0].trim());
      else if (p.tag.includes("DUPLEX")) types.add("Duplex");
      else types.add(p.tag.split(" ")[0]);
    });
    return Array.from(types);
  }, [activeTab]);

  const activePlan = activeId === 0 ? MASTER_PLAN : PLANS.find(p => p.id === activeId);

  return (
    <section id="plan" style={{ background: colors.warmCream, padding: "80px 16px" }}>
      <div className="text-center mb-12">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 mb-4" style={{ color: colors.darkOrange }}>Layouts & Architecture</p>
        <h2 className="font-serif text-5xl md:text-7xl text-[#041a14] mb-12">Explore Our <br /><span className="italic font-light" style={{ color: colors.darkOrange }}>Planning Designs</span></h2>

        <div className="grid grid-cols-3 gap-2 mb-8 md:flex md:justify-center md:gap-3">
          {["Master Plan", "Block A", "Block B"].map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setActiveSubTab("All"); }}
              className={`text-center px-2 py-2.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-all border-2 md:px-8 ${
  activeTab === tab
    ? "bg-[#041a14] text-white border-[#041a14]"
    : "bg-transparent text-[#041a14]/50 border-[#041a14]/10 hover:border-[#041a14]/30"
}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {subTabs.length > 1 && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 px-4">
              {subTabs.map(sub => (
                <button 
                  key={sub} 
                  onClick={() => setActiveSubTab(sub)} 
                  className={`text-xs uppercase tracking-[0.2em] font-bold pb-1 border-b-2 transition-all ${activeSubTab === sub ? "border-orange-500 text-orange-600" : "border-transparent text-black/30 hover:text-black/60"}`}
                >
                  {sub}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className={`max-w-[1200px] mx-auto ${filteredPlans.length === 1 ? 'flex justify-center' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'}`}>
        {filteredPlans.map((plan, i) => (
          <div key={plan.id} className={filteredPlans.length === 1 ? 'max-w-md w-full' : ''}>
            <PlanCard plan={plan} index={i} onClick={() => setActiveId(plan.id)} />
          </div>
        ))}
      </div>

      {activeId !== null && activePlan && (
        <Modal
          plan={activePlan}
          onClose={() => setActiveId(null)}
          onPrev={() => {
            const idx = filteredPlans.findIndex(p => p.id === activeId);
            setActiveId(filteredPlans[idx === 0 ? filteredPlans.length - 1 : idx - 1].id);
          }}
          onNext={() => {
            const idx = filteredPlans.findIndex(p => p.id === activeId);
            setActiveId(filteredPlans[(idx + 1) % filteredPlans.length].id);
          }}
        />
      )}

      <style>{`
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </section>
  );
}