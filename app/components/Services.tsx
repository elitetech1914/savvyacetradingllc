import React from "react";
import { FileText, Image, BookOpen, Megaphone, Cpu, Bot, Smartphone, Gamepad } from "lucide-react";

const SERVICES = [
  { id: "writing-editing", title: "Writing & Editing", desc: "Ghostwriting, editorial support, and polished copy for authors.", items: ["Ghostwriting", "Writing Assistance", "Proofreading", "Editing", "Formatting", "Copywriting", "Article Writing", "Blog Writing"], icon: FileText },
  { id: "design-creative", title: "Design & Creative", desc: "Covers book covers, illustrations and merch for author platforms.", items: ["Book Cover Design", "Illustrations", "Merchandise Design (author websites)"], icon: Image },
  { id: "publishing-distribution", title: "Publishing & Distribution", desc: "Support for putting books into the world — printing, rights, and commerce.", items: ["Copyright Registration", "Printing Press Services", "Amazon Seller Account Setup", "Author Central Account Creation", "E-commerce Integration for Author Websites"], icon: BookOpen },
  { id: "marketing-promotion", title: "Marketing & Promotion", desc: "Marketing strategies tailored for books and authors.", items: ["Book Marketing Strategy", "SEO (Search Engine Optimization)", "Digital Marketing Campaigns", "Amazon PPC (Pay-Per-Click)", "Billboard Marketing", "Reviews Management (all platforms)"], icon: Megaphone },
  { id: "vr-simulation", title: "VR Simulation Services", desc: "Custom immersive simulations, training and interactive walkthroughs.", items: ["Custom VR Training Simulations", "VR Game Development", "3D Environment Design", "Architectural & Industrial Walkthroughs", "Interactive VR Experiences"], icon: Cpu },
  { id: "ai-agent-services", title: "AI Agent Services", desc: "Intelligent agents for support, outreach, research and automation.", items: ["Customer Support AI", "Lead generation, follow-ups & email outreach", "Research Agents", "Coding Assistants", "Data Agents", "Voice Agents"], icon: Bot },
  { id: "app-development", title: "App Development Services", desc: "From concept to launch — cross-platform apps and backend integrations.", items: ["UI/UX Design", "Cross-platform App Development", "Backend & API Integration", "App Maintenance & Updates", "Custom Business App Solutions", "App Prototyping & Wireframing"], icon: Smartphone },
  { id: "game-development", title: "Game Development", desc: "2D & 3D games, engines, and player-first experiences.", items: ["2D & 3D Game Development", "Unity & Unreal Engine Projects", "Mobile Game Development", "Multiplayer Game Integration", "Game UI/UX Design"], icon: Gamepad },
  { id: "ui-ux-design", title: "UI/UX Design", desc: "Creating intuitive and engaging user experiences.", items: ["User Research", "Wireframing", "Prototyping", "User Testing", "Visual Design"], icon: Gamepad }
];

export default function ServicesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-10 md:py-18 lg:py-26">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#483953] mb-6 tracking-tight max-w-3xl">Services — What we build</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">We match experienced teams and builders to your product needs. Choose a service below to learn more.</p>

        {/* Use CSS grid with explicit breakpoints so 3 columns appear at md and up. justify-items-center keeps cards centered in their grid cells and last row centered. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center w-full">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <article key={s.id} className="group shadow-inner relative rounded-2xl bg-white/95 p-6 transition-shadow duration-300 hover:shadow-lg hover:scale-[1.01] transform will-change-transform w-full max-w-[22.5rem]" aria-label={s.title}>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 text-indigo-600 shadow-sm">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>

                  <div className="w-full">
                    <h3 className="text-lg font-semibold text-[#483953] text-center">{s.title}</h3>
                    <p className="mt-1 text-sm text-[#6b5b6f] text-center">{s.desc}</p>

                    {s.items && (
                      <ul className="mt-3 flex flex-wrap gap-2 justify-center">
                        {s.items.map((it) => (
                          <li key={it} className="text-xs bg-[#f7f5fb] rounded-full px-3 py-1 text-[#483953] border border-transparent leading-none">{it}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
