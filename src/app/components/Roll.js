import { ArrowRight } from 'lucide-react';
import { CTAModal } from './CTAModal';
import { Button } from "@/components/ui/button";

export const Roll = () => {
  return (
    <div className="py-12">
      <div className="relative w-full mx-auto">
        <div className="mx-auto relative">
          {/* Video Overlay - now always dark */}
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] z-10" />

          {/* CTA Section */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center space-y-6 p-4" data-aos="fade-up">
              <h2 className="text-3xl sm:text-4xl font-semibold drop-shadow-md">
                Transform Your Content Strategy
              </h2>
              <p className="max-w-lg mx-auto text-lg drop-shadow-md">
                Join creators who are automating their content distribution and growing their audience
              </p>
              <CTAModal 
                trigger={
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="backdrop-blur-sm shadow-lg"
                  >
                    Join Waitlist
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                }
              />
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
          
          {/* Video */}
          <div className="relative rounded-2xl overflow-hidden">
            <video
              src="/roll.mp4"
              className="w-full shadow-2xl"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 