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
        {/* Project 1 */}
        <div className="group flex flex-col gap-5">
          <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Modern minimalist e-commerce dashboard for fashion"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvezHjItmyZc61hCz-yEcfqDSjfMvKRKu1bKDA05Tg-oNQ7kJ-Rdts4jUV6vbrD1vXPRMNN7USlFZjM5XXXrgfElSx0t1HoUt5isZBN8KPYqcJHwoHCQQzswPJ9sVOGB8K9jfwWBvA8iN5YLRJkhGeWIF7mWe4uKg_OKU24YOa5PLcjBoW6HbhbUkFPYceapHQlLqV4pW2WnCfJmfTBk16GKGkg0Ezwsyknx0qXi81yf3Xd0JH_wQt-rvvjoYqMjFjxhxuHdkohR4")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-sm font-medium flex items-center gap-2">
                View Case Study{" "}
                <span className="material-symbols-outlined text-sm">
                  <ArrowRight />
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                Project Alpha
              </h3>
              <span className="bg-primary/10 text-primary text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded">
                E-commerce
              </span>
            </div>
            <p className="text-slate-500 dark:text-[#92adc9] text-sm leading-relaxed">
              A full-scale digital storefront for a premium boutique, featuring
              real-time inventory and custom payment workflows.
            </p>
            <div className="flex gap-2 mt-1">
              <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                #React
              </span>
              <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                #Shopify
              </span>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="group flex flex-col gap-5">
          <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Abstract dark themed data analytics dashboard"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDF-lodM7_8xcdXd9RJtJJP-EoCunzI6QZL4drOKxWxX2rvBaOrjcxsdb4Y2Tk_pt_xBPXoLfjYBfz0lGtQhXC95G9hQ1K-7l_piwOSbRKLgdxD__1tySvi8zccqgl886fHN6vR75t1EiniThNIFOsJLwMgo-bMHsUY0F4W5wy2IYR34OzOpqq4Ux0hWDZCaAb8W-6_ybWjyPX2jR3g-RaUJH6SUrFuKK7-lWlHc6R96VwI2kykaxRqsmwQt_8iq9hwQAfB0y2xTAg")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-sm font-medium flex items-center gap-2">
                View Case Study{" "}
                <span className="material-symbols-outlined text-sm">
                  <ArrowRight />
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                Beta Dashboard
              </h3>
              <span className="bg-primary/10 text-primary text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded">
                UI/UX Design
              </span>
            </div>
            <p className="text-slate-500 dark:text-[#92adc9] text-sm leading-relaxed">
              Intelligent analytics platform designed for student organizations
              to track engagement and resource allocation.
            </p>
            <div className="flex gap-2 mt-1">
              <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                #Figma
              </span>
              <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                #DataViz
              </span>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="group flex flex-col gap-5">
          <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Creative photography portfolio website layout"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDluK-vA0LkY1MpPybdCWTI6WakYz-Jy_foVQY2FrWuKEDiam1DSkO3paLbcONLlUFAvBwy30F4yDPDAsec5b74Ztk4oSQWpep1pQvNwoXXrK3W3F7h1nw2tYz_rhiuCVgqVbVxgyHi-nfea39zifaD1OPlSw45QTvlE66UpyU0eUL7Aa8Ha1sBog83HvuD1l1uzuGZnQ70JdjpqJ3CmD7OgKUpl26-3GyKVL5Hyhsxob18cvWLz0hgTkMdx9tuaHpq6GY-7nHaPp8")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-sm font-medium flex items-center gap-2">
                View Case Study{" "}
                <span className="material-symbols-outlined text-sm">
                  <ArrowRight />
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                Gamma Site
              </h3>
              <span className="bg-primary/10 text-primary text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded">
                Web Development
              </span>
            </div>
            <p className="text-slate-500 dark:text-[#92adc9] text-sm leading-relaxed">
              A high-performance portfolio site for an award-winning
              photographer focusing on large-format media display.
            </p>
            <div className="flex gap-2 mt-1">
              <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                #Astro
              </span>
              <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                #Tailwind
              </span>
            </div>
          </div>
        </div>
        {/* Project 4 */}
        <div className="group flex flex-col gap-5">
          <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Fitness mobile application UI design"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCq7uCbJ8lTR_j3xkOLle54_fP8bHwvTOC8sLAqc9nnohu8rQ7AUMY-XcBtaxoirwhLIaWfIvgpkqtH0zipMbX5sLn5zsZWi_O_ND98SQVlC3J3ovOwhJwi3i1ixkDyNcw_xPq0qpwCc6-DwcID7GjFloxbJ4liA1DfTUVFVYSqWIOwPIptvieKOoRS6CmbEjXMJT5UYlZ6freQ1V-ST0lQOMfonS_6CPBDbnzSTuclFO_LB2sjP4pB8j6TtZr1glU7ibTKWJQF8MY")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-sm font-medium flex items-center gap-2">
                View Case Study{" "}
                <span className="material-symbols-outlined text-sm">
                  <ArrowRight />
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                Delta App
              </h3>
              <span className="bg-primary/10 text-primary text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded">
                Mobile App
              </span>
            </div>
            <p className="text-slate-500 dark:text-[#92adc9] text-sm leading-relaxed">
              Fitness tracking mobile app with social features and real-time
              workout synchronization.
            </p>
            <div className="flex gap-2 mt-1">
              <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                #Flutter
              </span>
              <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                #Firebase
              </span>
            </div>
          </div>
        </div>
        {/* Project 5 */}
        <div className="group flex flex-col gap-5">
          <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Corporate branding and logo identity mockups"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvY9iW9b_mQvPj7jnKfa1Bx2hdzQhapnH-AsEfYTeA_HTofRRMVMUnoThGBDsqbUmWdPx9hMKLUeI7hbP8a3let03gMGJnP7VKJ1rUoguDCGXmKhZViwyheJsAQiwepVYtvylK5NAXV_9P0478ZDukI3OFeMoiO2O34RC3iXHfHsWOdOcns1U9laUJHHAQFUHYYPr5agYOHUZokURVx_iSGSNZ_o6GYlBPUqbaP6V2paB9xkno8qII40gfmz98xhHbPS29lvui2Fs")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-sm font-medium flex items-center gap-2">
                View Case Study{" "}
                <span className="material-symbols-outlined text-sm">
                  <ArrowRight />
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                Zeta Identity
              </h3>
              <span className="bg-primary/10 text-primary text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded">
                Branding
              </span>
            </div>
            <p className="text-slate-500 dark:text-[#92adc9] text-sm leading-relaxed">
              Complete visual identity for a tech startup including logo,
              typography, and brand guidelines.
            </p>
            <div className="flex gap-2 mt-1">
              <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                #Design
              </span>
              <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                #CreativeDirection
              </span>
            </div>
          </div>
        </div>
        {/* Project 6 */}
        <div className="group flex flex-col gap-5">
          <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Custom backend management system interface"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD18j9Z0GFF7KP_8QaSseSRwknOiLxlLxKSmzBEpW_-Pc5mmZa0M97Ynfbjw-LZ8yEQk6KlN2FIDr3YD3gsf6XM7qG6iZENBDIoVBy26D1Q9YdeSqcFOGrJhsHfSZorHTWX6qbqK5rrVeZ-k5ElLmViAjKwjUgWbvY2jdL_L8jFAfNCMshAUmuxRM9Pua4hykO29x602nlW6c9HmcaFv0RP7mhbG1KIvxRk8MeCBXLq4gSZROjtmzzKJZapvd-_OWT_SibuAp29Mjg")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-sm font-medium flex items-center gap-2">
                View Case Study{" "}
                <span className="material-symbols-outlined text-sm">
                  <ArrowRight />
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                Epsilon CMS
              </h3>
              <span className="bg-primary/10 text-primary text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded">
                Web App
              </span>
            </div>
            <p className="text-slate-500 dark:text-[#92adc9] text-sm leading-relaxed">
              A proprietary content management system optimized for heavy media
              load and global distribution.
            </p>
            <div className="flex gap-2 mt-1">
              <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                #NodeJS
              </span>
              <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                #AWS
              </span>
            </div>
          </div>
        </div>
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
