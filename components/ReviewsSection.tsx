import { Star } from "lucide-react";

const reviews = [
  {
    name: "John Doe",
    initial: "J",
    time: "2 months ago",
    rating: 5,
    text: `AXON Digital transformed our business presence online. 
Guntas and Arpit are visionaries who truly understand modern tech stacks.`,
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="text-yellow-500 font-variation-settings-'FILL'-1"
              >
                <Star />
              </span>
            ))}
            <span className="ml-2 font-bold">5.0 Rating</span>
          </div>

          <h2 className="text-3xl font-bold md:text-4xl">
            What our clients say
          </h2>
          <p className="text-slate-500 mt-4">Verified reviews from Google</p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {r.initial}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{r.name}</p>
                    <p className="text-xs text-slate-500">{r.time}</p>
                  </div>
                </div>
              </div>

              <div className="flex mb-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span
                    key={i}
                    className="text-yellow-500 font-variation-settings-'FILL'-1"
                  >
                    <Star />
                  </span>
                ))}
              </div>

              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                “{r.text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
