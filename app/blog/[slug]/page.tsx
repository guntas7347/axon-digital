import {
  ArrowRight,
  Bookmark,
  Calendar,
  Heart,
  Share,
  Timer,
  User,
} from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <a
          className="text-slate-500 dark:text-slate-400 text-sm font-medium"
          href="#"
        >
          Home
        </a>
        <span className="text-slate-500 dark:text-slate-400 text-sm">/</span>
        <a
          className="text-slate-500 dark:text-slate-400 text-sm font-medium"
          href="#"
        >
          Blog
        </a>
        <span className="text-slate-500 dark:text-slate-400 text-sm">/</span>
        <span className="text-slate-900 dark:text-white text-sm font-medium">
          Web Development
        </span>
      </div>
      {/* Hero Section */}
      <div className="mb-12">
        <div className="relative overflow-hidden rounded-xl h-[400px] md:h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-alt="Minimalist desk setup with laptop and coffee"
            style={{
              backgroundImage:
                'linear-gradient(0deg, rgba(16, 25, 34, 0.8) 0%, rgba(16, 25, 34, 0) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCsDCEd3o9CxwBwVRVh9nVVsGaawVHELhGE3-ut3rnevsXg3z70KsPlai5nE2DJh13cbGqvhOcdltj7Hi5jQnJgXNPDiYD4nDEZRnrWMWLyWWAuKrqAmz09hac3Nyorfg0fnzt6UcpemUIbIK0ArPCc-H-d2ezixbO5TGHU1p3dInGw7LRjXlekHCn4T5UBI0ACch36-_5EKctOncuKziPfwjMGetjCKLgfiid5XpiUjfe2KT-TFxJjfNMmh3pv9RYvYGR-fzTw0RE")',
            }}
          />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded mb-4 uppercase tracking-wider">
              Design Trends
            </span>
            <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4">
              The Future of Minimalist Web Design in 2024
            </h1>
            <div className="flex items-center gap-4 text-slate-300 text-sm md:text-base">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  <User />
                </span>{" "}
                By Alex Rivera
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  <Calendar />
                </span>{" "}
                Oct 24, 2023
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  <Timer />
                </span>{" "}
                5 min read
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Article Container */}
      <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
        {/* Floating Sidebar Actions */}
        <aside className="hidden lg:flex flex-col gap-6 sticky top-32 h-fit">
          <button className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors border border-slate-200 dark:border-slate-700">
            <span className="material-symbols-outlined">
              <Heart />
            </span>
          </button>
          <button className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors border border-slate-200 dark:border-slate-700">
            <span className="material-symbols-outlined">
              <Share />
            </span>
          </button>
          <button className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors border border-slate-200 dark:border-slate-700">
            <span className="material-symbols-outlined">
              <Bookmark />
            </span>
          </button>
        </aside>
        {/* Main Content Area */}
        <article className="flex-1 max-w-[720px] mx-auto">
          <div className="prose dark:prose-invert prose-slate">
            <p className="text-xl font-normal leading-relaxed text-slate-600 dark:text-slate-300 mb-8 italic border-l-4 border-primary pl-6">
              "Minimalism is not a lack of something. It's simply the perfect
              amount of something."
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-8 dark:text-white">
              The Core Philosophy
            </h2>
            <p>
              As we move further into the digital age, the noise surrounding us
              increases exponentially. For AXON Digital, minimalism isn't just
              an aesthetic choice; it's a functional requirement. Users today
              value speed, clarity, and intent above all else. When we strip
              away the non-essential, we allow the core message to shine
              through.
            </p>
            <p>
              In 2024, minimalist web design is evolving beyond just
              'whitespace'. It's becoming more about **Intelligent Reduction**.
              This means using advanced CSS techniques to create depth without
              clutter, and focusing on micro-interactions that guide the user
              rather than distract them.
            </p>
            <h3 className="text-xl font-semibold mb-3 mt-6 dark:text-white">
              Why Typography Matters More Than Ever
            </h3>
            <p>
              With fewer images and graphic elements, typography becomes the
              primary vehicle for brand personality. We leverage fonts like
              Space Grotesk for their geometric clarity and modern tech feel.
              Large headings don't just organize content; they define the visual
              hierarchy.
            </p>
            <ul className="list-disc pl-5 mb-6 flex flex-col gap-2 text-slate-600 dark:text-slate-300">
              <li>Readability increases user retention by 30%.</li>
              <li>
                High contrast prevents eye strain during long-form reading.
              </li>
              <li>Consistent font weights create a sense of reliability.</li>
            </ul>
            <div className="my-10 bg-slate-100 dark:bg-slate-800/50 p-6 rounded-lg border-l-4 border-primary">
              <h4 className="font-bold mb-2">Pro Tip: The 60-30-10 Rule</h4>
              <p className="m-0 text-sm">
                When designing minimalist interfaces, aim for 60% neutral
                background, 30% secondary typography/borders, and 10% primary
                accent color (like our Axon Blue).
              </p>
            </div>
            <h2 className="text-2xl font-bold mb-4 mt-8 dark:text-white">
              Responsive by Design
            </h2>
            <p>
              A minimalist design must work everywhere. Our student-led team
              focuses on 'fluid' layouts that adapt seamlessly from a 4K monitor
              to a mobile device. The challenge isn't just making it fit; it's
              maintaining the same sense of 'breathability' across all screen
              sizes.
            </p>
            <div className="rounded-xl overflow-hidden my-8 border border-slate-200 dark:border-slate-800">
              <div
                className="aspect-video bg-cover bg-center"
                data-alt="Responsive web design mockup on various screens"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBk6s15JfIofGAzZ5c7xeY0uVOt2d9NJ2_AGRKoHMCs6uaeWqZg0iqFwdP5vinLctkTGKNdi71p4kwE8Fg9PACWBwDCV9jZeaL2eei56QPb5EtM9uWL7dkc9A8MoXQKvYDC8n-I1XMQh9H5a7pNXQJAL_0RBY5tkXU9pW5mpC3xONbyXvVJIS2w2b5-k9NTNXzspowxIoPEZQySTx4YcNFMtbvX1k4VJNL-LzJAF9Suk6uZWXW2BpZdrn4t3wDmbEt7y1HZJF3ZFdU")',
                }}
              />
              <p className="text-center text-xs text-slate-500 py-3 bg-slate-50 dark:bg-slate-900/50">
                Fig 1.1 - Maintaining whitespace across different viewport
                widths.
              </p>
            </div>
            <p>
              Ultimately, the goal of AXON Digital is to build websites that
              feel like a breath of fresh air. By embracing the principles of
              minimalist design, we ensure that our client's content remains
              front and center, leading to higher engagement and better
              conversion rates.
            </p>
          </div>
          {/* Author Bio Section */}
          <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center gap-6">
            <div
              className="size-20 rounded-full bg-cover bg-center shrink-0"
              data-alt="Alex Rivera headshot"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDh-UY49ZnheREGgeDkRQrr19kfoUsaI0DXsCv7nuqlbGNA5Qchy_I1VTa-Yv25oOcVcfo936qBoe3rnQGTO9jSJ0XMf2yBsxxVL-Yf_jFB8iCRN9oyZcy0Op1VLBL977n_5F36wYkNEL2P8l1evAKmmcRagm6-RLlNI7O0retTcIjPehB-JZ4omIlpLeAbqQY5qZzGcSa1S3DCmDYpJMHeOIpp5pOh8OCnDuN4AAYoG1gp2VZxDd08jeX5P78OeQAvfTZ6L_e--Us")',
              }}
            />
            <div>
              <h4 className="text-lg font-bold dark:text-white mb-1">
                Alex Rivera
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                Lead Developer at AXON Digital • Computer Science Student
              </p>
              <p className="text-sm leading-relaxed">
                Alex is passionate about clean code and modern UI/UX design.
                When not building web apps, he's probably contributing to
                open-source projects or brewing the perfect cup of coffee.
              </p>
            </div>
          </div>
        </article>
      </div>
      {/* Newsletter Opt-in */}
      <section className="mt-24 mb-16 p-8 md:p-12 rounded-2xl bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <svg
            className="h-full w-full"
            fill="currentColor"
            viewBox="0 0 100 100"
          >
            <circle cx={100} cy={0} r={80} />
          </svg>
        </div>
        <div className="relative z-10 max-w-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Stay updated with AXON
          </h3>
          <p className="text-slate-400 mb-6">
            Join our newsletter to receive the latest insights on web
            development and design, delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              className="flex-1 bg-slate-800 border-none rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary outline-none"
              placeholder="Enter your email"
              type="email"
            />
            <button className="bg-primary hover:bg-primary/90 transition-colors px-6 py-3 rounded-lg font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      {/* Related Posts Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold dark:text-white">Related Posts</h2>
          <a
            className="text-primary font-semibold flex items-center gap-1 hover:underline"
            href="#"
          >
            View all{" "}
            <span className="material-symbols-outlined text-sm">
              <ArrowRight />
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group cursor-pointer">
            <div className="rounded-xl overflow-hidden mb-4 border border-slate-200 dark:border-slate-800 aspect-[16/10]">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                data-alt="Code snippets on a screen"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvboU6sdbbTHRB5jW84wjs2tj2d3G0Unp_fW1-ga_e5N5OSolj5CcOs0lHsOZw1Si9msCGxAwnGhdo223UfZ4p47iX7TRYW9FDYLudWdL-sLmEbxLCVBakpeI3YY7hgW-R856KKgdxfg3kwrSpfwmyeeCd3fxjtWtJnMlcul1V_G07i1b-wHi8wOOiaQLMWrDtRRWYxfNXIwZUGQrwKkjgQH7_sEncnhPIEyiOzSoN1dn7OBFqS3SspPB7Z9S5vhOO_NQenrIS0OU")',
                }}
              />
            </div>
            <p className="text-primary text-xs font-bold uppercase mb-2">
              Development
            </p>
            <h3 className="text-lg font-bold dark:text-white mb-2 group-hover:text-primary transition-colors">
              Mastering React Server Components
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
              How we're utilizing Next.js 14 to build ultra-fast client
              experiences for our partners.
            </p>
          </div>
          {/* Card 2 */}
          <div className="group cursor-pointer">
            <div className="rounded-xl overflow-hidden mb-4 border border-slate-200 dark:border-slate-800 aspect-[16/10]">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                data-alt="Abstract colorful design"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaVy-pCvOidMsMGNyI5ooYnRTkNkBp9Dje2iFPEUgIgRLFXNvvCvmuYoHxEU9334fUMvqP2Dn1xYtCsAK-ws1gnNnsFm8LaO_votQJwnvxSidrhfzFbvAzxS4683PsWmaoY2k428R7OBPqlWPyn5b-8MppMRRpdErCoEMST3v3L6eq8SrxAclryuXH4xnWVt5eFT4-YFF_R91Nnl1Dtcj3WPbToV-b97NX-S2EJYXi3P_XtqNS7WLoJL4GauMfzYgvauSAYTDNtMQ")',
                }}
              />
            </div>
            <p className="text-primary text-xs font-bold uppercase mb-2">
              Branding
            </p>
            <h3 className="text-lg font-bold dark:text-white mb-2 group-hover:text-primary transition-colors">
              Why Startups Need a Digital Identity
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
              Beyond a logo: building a comprehensive design system for your new
              venture.
            </p>
          </div>
          {/* Card 3 */}
          <div className="group cursor-pointer">
            <div className="rounded-xl overflow-hidden mb-4 border border-slate-200 dark:border-slate-800 aspect-[16/10]">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                data-alt="Team collaborating in a bright office"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFNB2fsiHeDsjMALZQ_3z2qv_O6Px5MDtG_ofyUI9Re7xyCP_sGTxVl2GHrJ3qpnjG-N4F7jwv_aoxsOVnp6VNbbpSWRiA_NoF7GjhOFpg-vcqzyMFHBFkrCVOHNV94425vSRa-S377IKXMr4PVu9tmcJx0Sxi8ENJtFSWXWZ_VPtqwK3rWaAZGSPddmTugRiTG0IB14XNXmrWvHO8Zx_wleqBvpbQzE0XiM3gMG93xv0fpZvyqWn4a0OdWr8nbO-PQfyYfoX256U")',
                }}
              />
            </div>
            <p className="text-primary text-xs font-bold uppercase mb-2">
              Company
            </p>
            <h3 className="text-lg font-bold dark:text-white mb-2 group-hover:text-primary transition-colors">
              Inside AXON Digital's Student Workspace
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
              A look into how our student-led team manages projects and academic
              life simultaneously.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
