'use client'
import { CircleAlert, House, MapPinHouse, Cog, Languages, ChevronDown } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants' 
import ModeToggle from './mode-toggle';
import Contact from '@/components/contact';

import {useLocale} from 'next-intl';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
	const t = useTranslations('Header')
	const locale = useLocale();
	const pathname = usePathname();
	return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start justify-center">
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
				<div className="space-x-2 flex">
					<ModeToggle />
					<Button asChild variant='ghost'>
						<Link href='/locations'>
							<MapPinHouse /> {t('locations')}
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
				<DropdownMenu >
					<DropdownMenuTrigger 
						className='text-sm flex items-center cursor-pointer outline-0'>
							<Button variant="outline">
								<Languages className='text-xs'/> {locale === 'en'? 'English': 'Korean'} <ChevronDown />
							</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>Language</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Link href={pathname} locale="en">English</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link href={pathname} locale="ko">Korean</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
      </div>
    </header>
  );
}
 
export default Header;