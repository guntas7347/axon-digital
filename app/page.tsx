import ReviewsSection from "@/components/ReviewsSection";
import { recentWorks } from "@/lib/recentWorks";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-6 py-20 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Student-Led Digital Agency
            </div>
            <h1 className="mb-8 text-5xl font-black leading-tight tracking-tight md:text-7xl lg:text-8xl">
              Building the <span className="text-primary">Future</span> of the
              Web
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 dark:text-slate-400 md:text-xl">
              A boutique studio pushing the boundaries of modern design and
              functional development. Led by{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Guntas Sandhu
              </span>{" "}
              &amp;{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Arpit Luthra
              </span>
              .
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-lg bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
              >
                Start a Project
              </Link>
              <Link
                href="/works"
                className="w-full sm:w-auto rounded-lg border border-slate-300 dark:border-slate-700 px-8 py-4 text-base font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </div>
          {/* Abstract background glow */}
          <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
        </section>
        {/* Horizontal Carousel Section */}
        <section className="py-20 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="px-6 mx-auto max-w-7xl">
            <div className="flex items-end justify-between mb-12 px-4">
              <div>
                <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
                  Our Portfolio
                </p>
                <h2 className="text-3xl font-bold md:text-4xl">Recent Works</h2>
              </div>
              <div className="hidden md:flex gap-2">
                <button className="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <span className="">
                    <ArrowLeft />
                  </span>
                </button>
                <button className="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <span className="">
                    <ArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="px-6 sm:px-10 lg:px-32 pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {recentWorks.map((p) => (
                <Link
                  key={p.title}
                  href={p.href}
                  className="group flex w-full max-w-[420px] flex-col gap-4 mx-auto"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      data-alt={p.slug}
                      style={{ backgroundImage: `url("${p.image}")` }}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400">
                      {p.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section (Reviews API Style) */}
        <ReviewsSection />
        {/* Final CTA Section */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-black mb-6 md:text-5xl">
              Ready to build something{" "}
              <span className="text-primary italic">exceptional</span>?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-10 text-lg">
              Let's collaborate on your next digital venture. Our team is ready
              to take your vision to the next level.
            </p>
            <button className="rounded-full bg-primary px-12 py-5 text-lg font-bold text-white shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
              Get in Touch
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
