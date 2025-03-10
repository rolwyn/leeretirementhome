import { CircleAlert, House, MapPinHouse, Cog } from 'lucide-react';
// import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants' 
import ModeToggle from './mode-toggle';
import Contact from '@/components/contact';

const Header = () => {
	return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <House 
              height={38}
              width={38} 
            />
            {/* <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
            /> */}
						<span className="hidden lg:block font-bold text-xl ml-3">
							{APP_NAME}
						</span>
          </Link>
        </div>
				<div className="space-x-2">
					<ModeToggle />
					<Button asChild variant='ghost'>
						<Link href='/locations'>
							<MapPinHouse /> Locations
						</Link>
					</Button>
          <Button asChild variant='ghost'>
						<Link href='/services'>
							<Cog /> Services
						</Link>
					</Button>
          <Button asChild variant='ghost'>
						<Link href='/about'>
							<CircleAlert /> About
						</Link>
					</Button>
					<Contact type={'Menu'}/>
					{/* <Button asChild variant='ghost'>
						<Link href='/sign-in'>
							<UserIcon /> Sign In
						</Link>
					</Button> */}
          {/* <Button asChild>
						<Link href='/contact'>
							<Mail /> Contact
						</Link>
					</Button> */}
				</div>
      </div>
    </header>
  );
}
 
export default Header;