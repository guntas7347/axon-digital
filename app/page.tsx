import { ArrowLeft, ArrowRight, Star } from "lucide-react";

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
              <button className="w-full sm:w-auto rounded-lg bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                Start a Project
              </button>
              <button className="w-full sm:w-auto rounded-lg border border-slate-300 dark:border-slate-700 px-8 py-4 text-base font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                View Portfolio
              </button>
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
          <div className="flex overflow-hidden hide-scrollbar px-10 md:px-40 pb-10">
            <div className="flex gap-6 mx-auto">
              {/* Card 1 */}
              <div className="group flex w-[300px] md:w-[400px] flex-col gap-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    data-alt="Modern sleek e-commerce website interface dark theme"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAErC4-wjoVunc_d9_cnkLEp6MtNt1ox1HEcUR1W3903fyHQ4rTUrdnYo2eyi1A7K12o94RauDUe0OZCGPJuKGxrFWTwvYYQclWwzD6C9wVlbuy8xNtEYFkLE7VYGeBuBniZWxMqx1QxjELSu-jsEDj4KJ_vKSppHiEieT4qS6SfAjUrV3uBXm5tbrUVXW3txysH6Tqzndta7hPMxgsFP9iv0xwaxitDcxh-a45U6ij8Z2dARvcTsk4BQW7wiYFC6AYcNC8ZgGPpz0")',
                    }}
                  ></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Vantage E-com</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Web Development • Next.js
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="group flex w-[300px] md:w-[400px] flex-col gap-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    data-alt="SaaS dashboard with blue data visualizations"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKpPVuR6g9ebr3DzK6IBsGuTITPNvRAxAl37FeEb9DcGREtVXr8BbNGFdq6dNWKNy_Nu8rDzvgTxa54zImdba45eDBTD5bZ6tnkco_gzCm79bgWd-xTmGWYqmiDrenxE15cj4JEyG-eIyyMZ0YOsZ98j4gMNPBtYPQR08_lxBCa9Qg1rXjV06PwOZl6b-2wOIucYmdIb1wdlg12bUPZCy8HflFKUY3b51BEG91Leou-opLQz-8R7ktBbT25fHxlwokY4lAgmI8wTQ")',
                    }}
                  ></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Pulse Analytics</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    UI/UX Design • Dashboard
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="group flex w-[300px] md:w-[400px] flex-col gap-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    data-alt="Mobile banking app screens with clean layout"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEB-BuJc74AcjTn0ZiCL2iYCjr2Ws2ojAt3uQsuSpuRqoh6-BitgVDr4jWV_LPjAGlQPyBpgd62exNuXxJ9ZWfL1MQRj5igUSG2fQ2SeJcSMGngpjWnhoSFVSnqdNPj-F9Ysb3YtBMj-sIfpH1oZaqPs4ONEs1_FixVjiVAu09VSFLBzXbQ6crcwsYZOFHIlWtm-ApcmuCf7R72yxLbl6ou-fxXN3U0l7Szsp2UG_vsXKDWbzgIWIAA2b8uBz-ZPmB7OctoSf5mMU")',
                    }}
                  ></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">NeoBank Mobile</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    App Design • Fintech
                  </p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="group flex w-[300px] md:w-[400px] flex-col gap-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    data-alt="Minimalist architectural brand identity design"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuRosSHAA39S61qEcSckHwwRYxz0s2uFou15SQPzBkb1ouXL9Ptcss0aU1jPpfPnQWmuLJPngIHjVRv5rU4Xs55MuH_Q_f2tRCAOXOwsySdbe73qE-BJOo1g2myBI-jLBpBprh9CidWgmrgLrkN6ndhMPBv-InX0-O-O3FggQIX0fdnM1F5bPrGnv_aYna9Ivm7cwupLqnK51u10zF2k0SWrCqmhLm9tItonbMjSS2nZiGwrk4uuKhgnj-xO_tnMWcw-eimgEhyvQ")',
                    }}
                  ></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Arc Identity</h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    Branding • Identity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Section (Reviews API Style) */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className=" text-yellow-500 font-variation-settings-'FILL'-1">
                  <Star />
                </span>
                <span className=" text-yellow-500 font-variation-settings-'FILL'-1">
                  <Star />
                </span>{" "}
                <span className=" text-yellow-500 font-variation-settings-'FILL'-1">
                  <Star />
                </span>{" "}
                <span className=" text-yellow-500 font-variation-settings-'FILL'-1">
                  <Star />
                </span>{" "}
                <span className=" text-yellow-500 font-variation-settings-'FILL'-1">
                  <Star />
                </span>
                <span className="ml-2 font-bold">5.0 Rating</span>
              </div>
              <h2 className="text-3xl font-bold md:text-4xl">
                What our clients say
              </h2>
              <p className="text-slate-500 mt-4">
                Verified reviews from Google
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Review 1 */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      J
                    </div>
                    <div>
                      <p className="font-bold text-sm">John Doe</p>
                      <p className="text-xs text-slate-500">2 months ago</p>
                    </div>
                  </div>
                  <img
                    alt="Google"
                    className="h-5 w-5 opacity-50"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKfViW4kqhUiLtl5__faptK2XzYixjsqI9IUkDUqpKbmwBn4r6eV-oQFrpFpWz39-ZYfX2gHLLDFr7Lfs0696SQSl4u1aswQ4ZL4LsWBXWAQEaog0UQYao50t3bc0lz-PKigMeX7s1H-swTy4hdE4ByKj_Rval1NOVQjT1eAto5lVoAzbax_lSddj49s7r_L33a3d0MlbePyznRNCQvWCQnghDFARZ1z02lvWFdIBZ0z96IE4RJI1YZBTvuS5Wt-LaXqoixkQ5ZVs"
                  />
                </div>
                <div className="flex text-yellow-500 mb-3">
                  <span className=" text-yellow-500 font-variation-settings-'FILL'-1">
                    <Star />
                  </span>{" "}
                  <span className=" text-yellow-500 font-variation-settings-'FILL'-1">
                    <Star />
                  </span>{" "}
                  <span className=" text-yellow-500 font-variation-settings-'FILL'-1">
                    <Star />
                  </span>{" "}
                  <span className=" text-yellow-500 font-variation-settings-'FILL'-1">
                    <Star />
                  </span>{" "}
                  <span className=" text-yellow-500 font-variation-settings-'FILL'-1">
                    <Star />
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  "AXON Digital transformed our business presence online. Guntas
                  and Arpit are visionaries who truly understand modern tech
                  stacks."
                </p>
              </div>
            </div>
          </div>
        </section>
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
