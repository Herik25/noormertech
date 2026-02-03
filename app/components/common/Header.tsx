"use client";

import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import call from "@/public/header/call.svg";
import logo from "@/public/logo.png";
import account from "@/public/header/account.svg";
import wishlist from "@/public/header/wishlist.svg";
import cart from "@/public/header/cart.svg";
import search from "@/public/header/search.svg";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/app/constants";

const ContactInfo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-2", className)}>
    <Image src={call} alt="Call" />
    <a 
      href="tel:+16467559535" 
      className="text-sm font-medium border-b border-black tracking-[-0.5px]"
    >
      +1 646 755 9535
    </a>
  </div>
);

const LogoImage = ({ className }: { className?: string }) => (
  <Link href="/" className="block">
     <Image src={logo} alt="Logo" className={cn("h-8 w-auto lg:h-auto", className)} />
  </Link>
);

const ActionIcons = () => (
   <div className="flex items-center justify-end gap-2 md:gap-4 pr-2">
    <Link href="/account" aria-label="Account">
      <Image src={account} alt="Account" />
    </Link>
    <Link href="/wishlist" aria-label="Wishlist">
      <Image src={wishlist} alt="Wishlist" />
    </Link>
    <Link href="/cart" aria-label="Cart" className="relative">
      <Image src={cart} alt="Cart" />
      <span className="absolute -top-2 -right-2 bg-tertiary text-[10px] font-medium w-4 h-4 flex items-center justify-center rounded-full border border-secondary">
        1
      </span>
    </Link>
  </div>
);


export default function Header() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<Record<string, boolean>>({});

  const toggleMobileSubmenu = (label: string) => {
    setMobileMenuOpen((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <header className="w-full font-sans bg-white">
      <div className="bg-tertiary text-center py-3 px-4 border-b border-secondary hidden lg:block">
        <p className="text-xs md:text-sm tracking-[-0.5px] font-normal">
          Reach us on Instagram @competitionsuitshop, and our seasoned experts will personally guide you
        </p>
      </div>

      <div className="py-3 md:py-5 border-b">
        <div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-3 items-center gap-3 xl:max-w-7xl mx-auto px-4 relative">
          
          <div className="lg:hidden order-1">
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Open menu" className="p-2">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="p-4 overflow-y-auto" onOpenAutoFocus={(e) => e.preventDefault()}>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <div className="flex flex-col gap-2">
                  <div className="mb-4">
                     <LogoImage className="max-w-60 h-auto min-h-7" />
                  </div>
                  
                  <nav className="flex flex-col gap-2 text-base font-medium">
                    {NAV_ITEMS.map((item) => (
                      <div key={item.label}>
                        {item.children ? (
                          <>
                            <div 
                              className="flex items-center justify-between cursor-pointer hover:text-primary transition-colors py-2"
                              onClick={() => toggleMobileSubmenu(item.label)}
                            >
                              <span>{item.label}</span>
                              <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", mobileMenuOpen[item.label] && "rotate-180")} />
                            </div>
                            {mobileMenuOpen[item.label] && (
                              <div className="flex flex-col gap-3 pl-2">
                                {item.children.map((child) => (
                                  <Link 
                                    key={child.name} 
                                    href={child.href} 
                                    className="text-sm hover:text-primary transition-colors"
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link href={item.href!} className="block hover:text-primary transition-colors py-2">
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>

                  <ContactInfo className="mt-4" />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden lg:block order-1">
            <ContactInfo />
          </div>
          <div className="lg:mx-0 order-2 justify-self-center min-w-0 px-2 w-full flex justify-center">
             <LogoImage className="w-auto max-w-full h-auto object-contain" />
          </div>

          <div className="order-3">
             <ActionIcons />
          </div>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="xl:max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row items-center justify-between gap-y-4 gap-4 md:gap-6">
          
          <nav className="hidden lg:block w-full lg:w-auto">
            <ul className="flex items-center justify-center lg:justify-start gap-4 md:gap-6 min-w-max text-xs md:text-sm font-medium tracking-[-0.5px]">
              {NAV_ITEMS.map((item) => (
                 <li key={item.label} className={cn("relative group flex items-center gap-1 hover:text-primary transition-colors py-2 z-20", item.children && "cursor-pointer")}>
                    {item.children ? (
                        <>
                           <span>{item.label}</span>
                           <ChevronDown className="w-3.5 h-3.5 group-hover:text-primary transition-transform group-hover:rotate-180" />
                           <div className="absolute top-full left-0 bg-white border border-border shadow-lg rounded-md min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform translate-y-2 group-hover:translate-y-0">
                              <div className="flex flex-col py-2">
                                 {item.children.map((child) => (
                                    <Link 
                                       key={child.name} 
                                       href={child.href} 
                                       className="px-4 py-2 hover:bg-gray-50 text-black hover:text-primary transition-colors text-left"
                                    >
                                       {child.name}
                                    </Link>
                                 ))}
                              </div>
                           </div>
                        </>
                    ) : (
                       <Link href={item.href!}>
                          {item.label}
                       </Link>
                    )}
                 </li>
              ))}
            </ul>
          </nav>

          <div className="w-full lg:w-[320px] relative">
            <input
              type="text"
              placeholder="Search your Competition Suit"
              className={cn(
                "w-full h-10 pl-4 pr-9 border rounded-[8px] text-sm placeholder:text-[#000000A3] focus:outline-none transition-colors duration-200",
                isSearchFocused ? 'border-black' : 'border-[#0000003D]'
              )}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <button className="absolute right-0 top-0 h-full w-10 flex items-center justify-center">
              <Image src={search} alt="Search" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}