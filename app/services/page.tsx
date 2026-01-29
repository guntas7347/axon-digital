import {
  ArrowRight,
  Code,
  Palette,
  Cloud,
  ShoppingBag,
  Zap,
  Headset,
} from "lucide-react";
import Link from "next/link";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
};

const ServiceCard = ({
  icon,
  title,
  description,
  href = "#",
}: ServiceCardProps) => {
  return (
    <div className="service-card flex flex-col gap-5 p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-slate-900 dark:text-white text-xl font-bold font-display">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-auto pt-4">
        <Link
          href={href}
          className="text-primary text-sm font-bold flex items-center gap-2 group"
        >
          Learn More
          <ArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom high-performance websites using modern frameworks like Next.js and Tailwind CSS. Built for speed and scalability.",
      icon: <Code className="w-6 h-6" />,
      href: "/services/web-development",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centric interfaces designed for conversion and clarity. We focus on creating seamless digital experiences.",
      icon: <Palette className="w-6 h-6" />,
      href: "/services/ui-ux",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable infrastructure and deployment strategies using AWS and Vercel to ensure your app is always online.",
      icon: <Cloud className="w-6 h-6" />,
      href: "/services/cloud",
    },
    {
      title: "E-commerce",
      description:
        "Specialized digital storefronts and payment integrations with Stripe and Shopify to grow your business.",
      icon: <ShoppingBag className="w-6 h-6" />,
      href: "/services/ecommerce",
    },
    {
      title: "SEO & Performance",
      description:
        "Optimizing for core web vitals and search engine visibility to ensure your brand gets noticed.",
      icon: <Zap className="w-6 h-6" />,
      href: "/services/seo",
    },
    {
      title: "Maintenance",
      description:
        "Ongoing support and security updates to keep your digital assets safe and up-to-date with new tech.",
      icon: <Headset className="w-6 h-6" />,
      href: "/services/maintenance",
    },
  ];
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full max-w-[1200px] px-6 py-12 md:py-20">
        <div className="relative overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div
            className="flex min-h-[400px] flex-col gap-6 items-center justify-center p-8 text-center bg-cover bg-center"
            data-alt="Abstract geometric dark tech patterns"
            style={{
              backgroundImage:
                'linear-gradient(rgba(16, 25, 34, 0.8) 0%, rgba(16, 25, 34, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCM-1OK-eEmQc54HWveZsqwwwPu1HrZu6EB_NfDxeWHpW_VxKv84R12VNcuHT-l2c4GiRAN5TatLlbDlviuCRJel--unI0O_vuRk6L15Zz3fm3gs_H6zf4a8q4vowrkIhAdc-QM_IomuWkPgWTNnRSAeoetVEqO9IP5c1oo6B_U_BM7BM0OAoy1eL-uUgC3he491QsMHHekgn42lhi-LODCXrVXQI_2wV7MjZRwFSIgcdkqLkWU6UvyxZhN2NHntWDUBPJ4vHCiKE")',
            }}
          >
            <div className="flex flex-col gap-4 max-w-2xl">
              <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter font-display uppercase">
                Our Expertise
              </h1>
              <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed">
                Empowering your digital transformation with high-performance,
                user-centric web solutions crafted by the next generation of
                developers.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold tracking-wide hover:shadow-[0_0_20px_rgba(19,127,236,0.4)] transition-all">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Section Header */}
      <div className="w-full max-w-[1200px] px-6">
        <div className="flex flex-col gap-2 mb-8">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">
            Capabilities
          </span>
          <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight font-display">
            Specialized Solutions
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>
      </div>
      {/* Services Grid */}
      <div className="w-full max-w-[1200px] px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </div>
      {/* CTA Section */}
      <div className="w-full bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight font-display">
                Ready to start your next project?
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Join dozens of companies already scaling their digital presence
                with AXON Digital. Let's build something extraordinary together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-base font-bold tracking-wide hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                Start a Project
              </button>
              <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-transparent border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-base font-bold tracking-wide hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
