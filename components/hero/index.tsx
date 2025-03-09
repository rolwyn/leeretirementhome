import { APP_NAME } from '@/lib/constants';
import Image from 'next/image'
import { Button } from '../ui/button';
import Link from 'next/link';

const Hero = () => {
  return ( 
    <div className="relative w-full">
      <Image
        src="/images/hero.jpg"
        className=""
        alt={`${APP_NAME} Hero`}
        height={200}
        width={2000}
        quality={100}
        style={{ height: "650px", objectFit: "cover" }}
        priority={true}
      />
      
      {/* Text overlay */}
      <div className="absolute inset-0 bg-black/50 transition-opacity">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold drop-shadow-md mb-6">
              Welcome to <span className="text-[#e3ce15]">Golden Time</span> & Sah Rang Bong Care Assisted Living
            </h2>
            <p className="mt-2 text-lg drop-shadow">
              Where compassionate care meets comfort and community
            </p>
            <p className="mt-2 text-lg lg:text-xl drop-shadow max-w-6xl lg:mx-auto p-5 md:px-10 w-full">
              We are a dedicated assisted living facility committed to providing a warm, safe, and enriching environment for seniors. Our mission is to enhance the lives of our residents by offering personalized care, fostering independence, and promoting well-being.
            </p>
            <Button asChild>
              <Link href='/contact'>
                Contact Us
              </Link>
					  </Button>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Hero;