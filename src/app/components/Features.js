import Image from 'next/image';
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Content Clipping",
    description: "Automatically detects and clips your stream's most engaging moments — laughter, clutches, chat spikes, and more. No timestamping needed.",
    image: "/features/clipping.png",
  },
  {
    title: "Strategic Promotion",
    description: "AI-powered growth engine that analyzes your content, platform trends, and audience behavior to post the right clip at the right time — with viral captions, formats, and hashtags.",
    image: "/features/promotion.png",
  },
  {
    title: "Monetization & Sponsorship Support",
    description: "Seamlessly inserts sponsor content, matches you with brand deals, and tracks earnings per clip — all through our built-in sponsorship marketplace. Monetize like a pro.",
    image: "/features/monetization.png",
  },
  {
    title: "Data-Driven Insights",
    description: "Your dashboard is your agent's brain — track viral performance, discover content patterns, A/B test styles, and evolve your brand strategy based on real viewer data.",
    image: "/features/analytics.png",
  },
];

export const Features = () => (
  <section className="text-center py-24 px-4">
    <div className='py-24'>
      <h2 
        className="text-3xl font-medium mb-4"
        data-aos="fade-up"
      >
        &quot;We&apos;re not a tool. We&apos;re your AI agent.&quot;
      </h2>
      <p 
        className="text-muted-foreground mb-16 max-w-lg mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Let our AI agents handle your content distribution while you focus on creation.
      </p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {features.map(({ title, description, image }, index) => (
        <div 
          key={title}
          className="group relative"
          data-aos="fade-up"
          data-aos-delay={150 + index * 50}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted">
            <Image 
              src={image} 
              alt={title} 
              width={400} 
              height={300}
              className="object-cover w-full h-full transition-all duration-500 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 flex items-center justify-center p-6">
              <p className="text-sm text-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-medium">
              {title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </section>
);  