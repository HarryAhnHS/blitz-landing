"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const features = [
    {
      id: "ai-clipping",
      title: "Automatic Clipping & Editing",
      isActive: true,
      content: {
        title: "Your stream, auto-edited into viral-ready clips.",
        description:
          "We detect your most viral moments — then enhance them with cinematic transitions, stylized captions, and auto-formatted exports. No timestamps, no editing — just nonstop content.",
        features: [
          "AI highlight detection from stream/VOD",
          "Dynamic captions with voice-matched styling",
          "Platform-specific formatting (TikTok, Reels, Shorts)",
          "Auto-transitions, zooms, and meme inserts",
          "Multi-resolution exporting (9:16, 1:1, 16:9)"
        ],
        image: "/features/clipping.png"
      }
    },
    {
      id: "distribution",
      title: "Smart Distribution & Growth",
      content: {
        title: "Post smarter. Grow faster.",
        description:
          "Our AI handles everything from hashtags to timing. Post across all platforms with content tailored to each, and let our A/B testing engine learn what gets views — and what drives loyalty.",
        features: [
          "Best-time auto-posting by platform",
          "A/B testing for captions, layout & posting time",
          "Engagement-focused hashtag & title generation",
          "Cross-platform scheduling",
          "Style-aware clip variants for TikTok, Reels, Shorts"
        ],
        image: "/features/promotion.png"
      }
    },
    {
      id: "monetization",
      title: "Monetization & Sponsorships",
      content: {
        title: "Not just viral — profitable.",
        description:
          "We embed sponsors into your content in real-time and match you with brands that fit your vibe. Track performance, manage revenue, and get paid — all in one place.",
        features: [
          "Smart sponsor insertion (overlay, voice, banner)",
          "Brand matching marketplace",
          "CPM-based revenue reporting",
          "Campaign performance dashboard",
          "Creator-specific ad targeting preferences"
        ],
        image: "/features/monetization.png"
      }
    },
    {
      id: "analytics",
      title: "Creator Intelligence Dashboard",
      content: {
        title: "Your growth, tracked and optimized.",
        description:
          "Our dashboard isn't just analytics — it's your growth co-pilot. From audience patterns to viral moment detection, we deliver insights that help you evolve, earn, and engage better.",
        features: [
          "Real-time engagement tracking",
          "Audience mood & behavior insights",
          "Clip library with performance trends",
          "Content calendar + scheduling recommendations",
          "Sponsor ROI & growth forecasts"
        ],
        image: "/features/analytics.png"
      }
    }
];  

export const DetailedFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className='text-center mb-16'>
          <h2 
            className="text-3xl font-medium mb-4"
            data-aos="fade-up"
          >
            &quot;We&apos;re not a tool. We&apos;re your AI agent.&quot;
          </h2>
          <p 
            className="text-muted-foreground max-w-lg mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let our AI agents handle your content distribution while you focus on creation.
          </p>
        </div>

        <Tabs
          value={activeFeature}
          onValueChange={setActiveFeature}
          className="space-y-8"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-[240px] shrink-0" data-aos="fade-right">
              <TabsList className="flex flex-row lg:flex-col h-auto p-1 bg-muted/50 w-full">
                {features.map((feature) => (
                  <TabsTrigger
                    key={feature.id}
                    value={feature.id}
                    className="w-full h-14 justify-start text-left py-8 data-[state=active]:bg-background"
                  >
                    {feature.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="flex-1 lg:pl-8 min-h-[500px]" data-aos="fade-left">
              <AnimatePresence mode="wait">
                {features.map((feature) => (
                  activeFeature === feature.id && (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="grid lg:grid-cols-2 gap-12 items-start"
                    >
                      <div className="space-y-8 text-left">
                        <div className="space-y-4">
                          <h3 className="text-3xl font-semibold leading-tight">
                            {feature.content.title}
                          </h3>
                          <p className="text-muted-foreground text-lg leading-relaxed">
                            {feature.content.description}
                          </p>
                        </div>
                        
                        <ul className="space-y-4">
                          {feature.content.features.map((item, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                              <span className="text-base leading-relaxed">
                                {item}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                        <motion.div
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="rounded-xl overflow-hidden border bg-muted shadow-xl aspect-[4/3]"
                        >
                          <Image
                            src={feature.content.image}
                            alt={feature.title}
                            width={480}
                            height={360}
                            className="object-cover rounded-xl"
                            priority
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}; 