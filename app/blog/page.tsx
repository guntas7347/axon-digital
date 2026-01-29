import { ArrowRight, Loader } from "lucide-react";
import React from "react";

const Blog = () => {
  return (
    <main className="flex-1">
      {/* Hero / Heading Section */}
      <section className="mx-auto max-w-[960px] px-6 py-16 md:py-24">
        <div className="flex flex-col gap-4">
          <h1 className="text-black dark:text-white text-5xl md:text-7xl font-black leading-none tracking-tighter">
            The Wire<span className="text-primary">.</span>
          </h1>
          <p className="text-gray-600 dark:text-[#92adc9] text-xl max-w-2xl leading-relaxed">
            Insights into web development, design trends, and engineering from
            the student-led engineering team at AXON.
          </p>
        </div>
      </section>
      {/* Filters Section */}
      <section className="mx-auto max-w-[960px] px-6 mb-12">
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          <button className="flex h-10 shrink-0 items-center justify-center rounded-full bg-primary px-6 text-white text-sm font-bold">
            All Stories
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-[#233648] hover:bg-gray-200 dark:hover:bg-[#2d455c] px-6 text-gray-800 dark:text-white text-sm font-medium transition-colors">
            #Engineering
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-[#233648] hover:bg-gray-200 dark:hover:bg-[#2d455c] px-6 text-gray-800 dark:text-white text-sm font-medium transition-colors">
            #UIUX
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-[#233648] hover:bg-gray-200 dark:hover:bg-[#2d455c] px-6 text-gray-800 dark:text-white text-sm font-medium transition-colors">
            #Performance
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-[#233648] hover:bg-gray-200 dark:hover:bg-[#2d455c] px-6 text-gray-800 dark:text-white text-sm font-medium transition-colors">
            #React
          </button>
        </div>
      </section>
      {/* Blog List Section */}
      <section className="mx-auto max-w-[960px] px-6 space-y-16 pb-24">
        {/* Blog Post 1 */}
        <article className="group relative flex flex-col md:flex-row gap-8 items-start">
          <div
            className="w-full md:w-1/3 aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
            data-alt="Abstract minimalist code editor on high resolution monitor"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDG18SjnvAjcNkMbKLTi7nnx7FN1vI8C3iwT_szHN_4e4ewvmdV4PeoLZZpJk0y028KzNF5yYKVeAgs76nK2fhf_hNy1EOpHcj2nQ2BzBvRwKs-0_M70pkf-ekFspIj1hn3ntvPkhEmRKId2wsxO_dgVkQS3OdpJgYIuCiN1Watz5MLqhPNksAwokQaG3xv1xCMbbjmrlOqLGXVDpZJxDq4IxNWOhXbODs96_3pwATA2vP_Ygvb18My3u-I8YUvU4Ty1MSroDjOx2A")',
            }}
          ></div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest">
              <span>Engineering</span>
              <span className="size-1 bg-primary rounded-full" />
              <span className="text-gray-500 dark:text-[#92adc9]">
                OCT 24, 2023
              </span>
            </div>
            <h3 className="text-black dark:text-white text-2xl md:text-3xl font-bold leading-tight group-hover:text-primary transition-colors">
              Optimizing Next.js for Peak Performance
            </h3>
            <p className="text-gray-600 dark:text-[#92adc9] text-base leading-relaxed line-clamp-2">
              An in-depth look at how we leverage server components and edge
              computing to deliver blazing-fast experiences for our enterprise
              partners.
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-gray-400 dark:text-[#506c88] text-sm italic">
                6 min read
              </span>
              <a
                className="inline-flex items-center gap-1 text-primary font-bold group/link"
                href="#"
              >
                Read Article
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover/link:translate-x-1">
                  <ArrowRight />
                </span>
              </a>
            </div>
          </div>
        </article>

        {/* Load More Button */}
        <div className="flex justify-center pt-8">
          <button className="flex items-center gap-2 px-8 py-3 border border-gray-300 dark:border-[#233648] text-gray-800 dark:text-white font-bold rounded-lg hover:bg-gray-50 dark:hover:bg-[#1a2938] transition-all group">
            Load More Articles
            <span className="material-symbols-outlined animate-spin text-[18px] group-hover:rotate-90 transition-transform">
              <Loader />
            </span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Blog;
