import { recentWorks } from "@/lib/recentWorks";
import { ArrowRight } from "lucide-react";

const Works = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-6">
            Selected <span className="text-primary">Works</span>
          </h2>
          <p className="text-slate-500 dark:text-[#92adc9] text-xl font-normal max-w-2xl leading-relaxed">
            We bridge the gap between imagination and technical excellence.
            Explore our curated selection of digital solutions built for the
            future.
          </p>
        </div>
      </section>
      {/* Filters */}
      <section className="mb-12">
        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-2 rounded-full bg-primary text-white text-sm font-semibold transition-all">
            All Projects
          </button>
          <button className="px-6 py-2 rounded-full bg-slate-200 dark:bg-[#233648] text-slate-700 dark:text-white text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
            Web Development
          </button>
          <button className="px-6 py-2 rounded-full bg-slate-200 dark:bg-[#233648] text-slate-700 dark:text-white text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
            Mobile Apps
          </button>
          <button className="px-6 py-2 rounded-full bg-slate-200 dark:bg-[#233648] text-slate-700 dark:text-white text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
            UI/UX Design
          </button>
          <button className="px-6 py-2 rounded-full bg-slate-200 dark:bg-[#233648] text-slate-700 dark:text-white text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
            Branding
          </button>
          <button className="px-6 py-2 rounded-full bg-slate-200 dark:bg-[#233648] text-slate-700 dark:text-white text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
            E-commerce
          </button>
        </div>
      </section>
      {/* Project Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentWorks.map((project) => (
          <a
            key={project.slug}
            href={project.href}
            className="group flex flex-col gap-5"
          >
            <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
              <div
                className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url("${project.image}")` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white text-sm font-medium flex items-center gap-2">
                  View Case Study <ArrowRight />
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="bg-primary/10 text-primary text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded">
                  {project.description}
                </span>
              </div>

              <p className="text-slate-500 dark:text-[#92adc9] text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-2 mt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-slate-400 dark:text-slate-500 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </section>

      {/* Call to Action */}
      <section className="mt-32 py-20 bg-primary/5 rounded-3xl border border-primary/10 flex flex-col items-center text-center px-6">
        <h3 className="text-4xl md:text-5xl font-black mb-6">
          Have a project in mind?
        </h3>
        <p className="text-slate-500 dark:text-[#92adc9] text-lg max-w-xl mb-10">
          Let's turn your ideas into digital reality. Our team of student
          engineers and designers is ready to build with you.
        </p>
        <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-primary/20">
          Get Started Today
        </button>
      </section>
    </main>
  );
};

export default Works;
