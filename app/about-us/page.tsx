import {
  Brain,
  Building,
  Code,
  Link,
  MemoryStick,
  Palette,
  Rocket,
  School,
  Terminal,
} from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
              Engineering the{" "}
              <span className="text-primary italic">Future</span> of the Web
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-normal leading-relaxed mb-10 max-w-2xl">
              Born in engineering labs, AXON Digital is a student-led startup
              bridging the gap between academic excellence and modern web
              innovation. We don't just build websites; we engineer digital
              experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-base hover:shadow-lg hover:shadow-primary/20 transition-all">
                See our story
              </button>
              <button className="bg-zinc-200 dark:bg-zinc-800 text-slate-900 dark:text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      </section>
      {/* Journey Section */}
      <section className="py-20 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Started as a research project focused on high-performance web
                architectures, AXON evolved into a full-scale digital agency.
                Our team combines the rigorous methodology of engineering
                students with the agility of a modern startup.
              </p>
              {/* Timeline */}
              <div className="grid grid-cols-[40px_1fr] gap-x-4">
                <div className="flex flex-col items-center gap-1 pt-1">
                  <div className="text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      <School />
                    </span>
                  </div>
                  <div className="w-[2px] bg-primary/30 h-12 grow" />
                </div>
                <div className="flex flex-1 flex-col pb-8">
                  <p className="text-lg font-bold">The Genesis</p>
                  <p className="text-slate-500 text-sm">
                    University Labs, 2023
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[2px] bg-primary/30 h-2" />
                  <div className="text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      <Terminal />
                    </span>
                  </div>
                  <div className="w-[2px] bg-primary/30 h-12 grow" />
                </div>
                <div className="flex flex-1 flex-col pb-8">
                  <p className="text-lg font-bold">Building the Core</p>
                  <p className="text-slate-500 text-sm">
                    Assembling the Engineering Team
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 pb-1">
                  <div className="w-[2px] bg-primary/30 h-2" />
                  <div className="text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      <Rocket />
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="text-lg font-bold">AXON Digital Launch</p>
                  <p className="text-slate-500 text-sm">
                    Professional Web Services for Global Clients
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass-card p-4">
                <div
                  className="w-full h-full bg-cover bg-center rounded-xl"
                  data-alt="Engineering students working together in a modern lab environment"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBssdK7mM8lrgVE92SUTb-_n3o4koYddcC7_UCcvUCnwQAWZxss5m7iaw7vRPdb3PGaPKxI7fNOWdfCQrwlkRIRELrVw81eaL0qRnyJX07aiI9OeRkWn5r4zZBuIskaaj8dyGagFUYZvnhQGI-kFql7q1LxK9FttNPprqLS4vKx_7rCNFoLAtJcNSLIbU2bY70hXeagUdvmD3uvCeJYdR7lH9QX1zDiB179y-0EgAF9uYyDcoUymkKafr7J_Sxett339BUE_Kl87MA")',
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="text-primary font-bold text-4xl">15+</div>
                  <div className="text-xs uppercase tracking-widest font-bold opacity-60">
                    Projects
                    <br />
                    Completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* The Founders Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Founders</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Meet the engineering minds behind AXON Digital. Our leadership
              focuses on technical rigor, performance-driven design, and
              client-centric solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Guntas Sandhu Profile */}
            <div className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-primary/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="shrink-0">
                  <div className="size-32 rounded-xl overflow-hidden ring-4 ring-primary/10">
                    <img
                      alt="Guntas Sandhu"
                      className="w-full h-full object-cover"
                      data-alt="Portrait of Guntas Sandhu, Co-founder of AXON Digital"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw4O8ggdaiu9Z44irkgX8MRwp77VRcEbIiCW0rN9t9BxrmEPndTv36DeEjpkYT1RSRilIKFu28brnD2T4h4ZTA7wtISJGB9P3oWRMwHd1MI-_lrhZW4OXXUEAg2EkIqLEVfpzs_Ka4yFZJZVwKuqKw9EIlhyGJYtZ0pM5bTRlZ7dYd6a81tsWmVarAtVnwMlpH5oIxzEKeleoljDa0teNF17qXz0VUvQFnbarDxpI56XgZBSdDPfJMCE13wv4QqOCSPIHnbI0KLUc"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">Guntas Sandhu</h3>
                  <p className="text-primary font-medium text-sm mb-4">
                    Lead Architect &amp; Co-Founder
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    Specializing in distributed systems and modern frontend
                    frameworks. Guntas drives the technical vision at AXON,
                    ensuring every project is built on a scalable and robust
                    foundation.
                  </p>
                  <div className="flex justify-center md:justify-start gap-4">
                    <a
                      className="text-slate-400 hover:text-primary transition-colors"
                      href="#"
                    >
                      <span className="material-symbols-outlined">
                        <Link />
                      </span>
                    </a>
                    <a
                      className="text-slate-400 hover:text-primary transition-colors"
                      href="#"
                    >
                      <span className="material-symbols-outlined">
                        <Code />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Arpit Luthra Profile */}
            <div className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-primary/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="shrink-0">
                  <div className="size-32 rounded-xl overflow-hidden ring-4 ring-primary/10">
                    <img
                      alt="Arpit Luthra"
                      className="w-full h-full object-cover"
                      data-alt="Portrait of Arpit Luthra, Co-founder of AXON Digital"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhhSnbGs036iPmDswnvEqgSqUwTsG-EqShistBqUP-E8fLe4ocU_hW5K94uwjrxLYLgIqvVnTu3RV6eAFU2Ye0Oc1UK7gTJgpIVtVzahsqxPAJCZgfcSrDG9hEr9-oZT70NKh-J8OhEMRwtcuyfRmy5JlVnc0Edpg6YgaIbHh0efxu6Mj_M_y0hLJo2mmp76SSTkOh21QBXc1vaelkatu5mYihVfYAtQ8_PgVpiFCFzv04sDgnesLF-dNvI6_8BW4vTXUWdnv4TnI"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">Arpit Luthra</h3>
                  <p className="text-primary font-medium text-sm mb-4">
                    Product Strategist &amp; Co-Founder
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    With a focus on UI/UX engineering and product strategy,
                    Arpit bridges the gap between complex engineering and
                    intuitive user experiences, turning technical capabilities
                    into business value.
                  </p>
                  <div className="flex justify-center md:justify-start gap-4">
                    <a
                      className="text-slate-400 hover:text-primary transition-colors"
                      href="#"
                    >
                      <span className="material-symbols-outlined">
                        <Code />
                      </span>
                    </a>
                    <a
                      className="text-slate-400 hover:text-primary transition-colors"
                      href="#"
                    >
                      <span className="material-symbols-outlined">
                        <Palette />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Values/Why Us Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl glass-card">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">
                <MemoryStick />
              </span>
              <h4 className="text-xl font-bold mb-2">Performance First</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                We optimize for millisecond response times and perfect
                Lighthouse scores. Speed is a feature.
              </p>
            </div>
            <div className="p-6 rounded-xl glass-card">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">
                <Building />
              </span>
              <h4 className="text-xl font-bold mb-2">Scalable Design</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our architectures are built to grow from MVP to millions of
                users without technical debt.
              </p>
            </div>
            <div className="p-6 rounded-xl glass-card">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">
                <Brain />
              </span>
              <h4 className="text-xl font-bold mb-2">Academic Rigor</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                We apply formal engineering principles to the ever-evolving
                landscape of web development.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary rounded-2xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">
                Ready to build something extraordinary?
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                Let's collaborate on your next project and bring engineering
                excellence to your digital presence.
              </p>
              <button className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-zinc-100 transition-all">
                Get in Touch
              </button>
            </div>
            {/* Abstract Background Pattern */}
            <div
              className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
