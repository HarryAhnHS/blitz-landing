import Image from 'next/image';
import { CTAModal } from './CTAModal';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';

export const Hero = () => {
    return (
      <section className="flex flex-col items-center justify-center text-center py-48 px-4 gap-8">
        <div className='flex flex-col items-center justify-center text-center'>
            <Image 
            src="/magic-orb.png" 
            alt="magic orb" 
            width={120} 
            height={120} 
            />
            <h1 className="text-lg sm:text-xl max-w-xl font-light">
            We make agents that increase your engagement and build traction
            across all social media platforms
            </h1>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center items-center">
        <CTAModal 
          trigger={
            <Button variant="outline" size="lg" className="gap-2">
              Get Started
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          }
        />
        </div>
      </section>
    );
  };