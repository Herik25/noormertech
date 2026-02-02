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
} from "@/components/ui/sheet";

export default function Header() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="w-full font-sans bg-white">
      {/* Top Notification Bar */}
      <div className="bg-tertiary text-center py-3 px-4 border-b border-secondary hidden lg:block">
        <p className="text-xs md:text-sm tracking-[-0.5px] font-normal">
          Reach us on Instagram @competitionsuitshop, and our seasoned experts will personally guide you
        </p>
      </div>

      {/* Main Header Area */}
      <div className="py-3 md:py-5 border-b">
        <div className="grid grid-cols-[auto_auto_1fr] lg:grid-cols-3 items-center gap-3 xl:max-w-7xl mx-auto px-4 relative">
          
          {/* Mobile/Tablet Menu Trigger (Hidden on LG aka Desktop) */}
          <div className="lg:hidden order-1">
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Open menu" className="p-2">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="p-4" onOpenAutoFocus={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-6">
                  <Link href="/" className="block mb-4">
                    <Image src={logo} alt="Logo" className="max-w-60" />
                  </Link>
                  <nav className="flex flex-col gap-4 text-base font-medium">
                    <div className="flex items-center justify-between cursor-pointer hover:text-primary transition-colors">
                      <span>Competition Suit</span>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className="flex items-center justify-between cursor-pointer hover:text-primary transition-colors">
                      <span>Style & Measurement Guide</span>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                    <Link href="/buy-now" className="hover:text-primary transition-colors">Buy now, Design later</Link>
                    <Link href="/schedule" className="hover:text-primary transition-colors">Schedule a Consult</Link>
                    <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                  </nav>
                  {/* Contact Info in Mobile Menu (optional) */}
                   <div className="flex items-center gap-2 mt-4">
                    <Image src={call} alt="Call" />
                    <a 
                      href="tel:+16467559535" 
                      className="text-sm font-medium border-b border-black tracking-[-0.5px]"
                    >
                      +1 646 755 9535
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Left: Contact Info (Desktop/LG Only) */}
          <div className="hidden lg:flex items-center gap-2 order-1">
            <Image src={call} alt="Call" />
            <a 
              href="tel:+16467559535" 
              className="text-sm font-medium border-b border-black tracking-[-0.5px]"
            >
              +1 646 755 9535
            </a>
          </div>

          {/* Center: Logo (Absolute Center on Mobile, Static on Desktop) */}
          <div className="lg:mx-0 order-2 shrink-0">
            <Link href="/" className="block">
              {/* Responsive logo size */}
              <Image src={logo} alt="Logo" className="h-8 w-auto lg:h-auto" />
            </Link>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center justify-end gap-2 md:gap-4 order-3 pr-2">
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
        </div>
      </div>

      {/* Bottom Navigation & Search */}
      <div className="border-b border-border">
        <div className="xl:max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row items-center justify-between gap-y-4 gap-4 md:gap-6">
          
          {/* Navigation Links (Desktop/LG Only) */}
          <nav className="hidden lg:block w-full lg:w-auto">
            <ul className="flex items-center justify-center lg:justify-start gap-4 md:gap-6 min-w-max text-xs md:text-sm font-medium tracking-[-0.5px]">
              <li className="relative group cursor-pointer flex items-center gap-1 hover:text-primary transition-colors">
                <span>Competition Suit</span>
                <ChevronDown className="w-3.5 h-3.5 group-hover:text-primary transition-transform group-hover:rotate-180" />
              </li>
              <li className="relative group cursor-pointer flex items-center gap-1 hover:text-primary transition-colors">
                <span>Style & Measurement Guide</span>
                <ChevronDown className="w-3.5 h-3.5 group-hover:text-primary transition-transform group-hover:rotate-180" />
              </li>
              <li>
                <Link href="/buy-now" className="hover:text-primary transition-colors">Buy now, Design later</Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-primary transition-colors">Schedule a Consult</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              </li>
            </ul>
          </nav>

          {/* Search Bar - Visible on all */}
          <div className="w-full lg:w-[320px] relative">
            <input
              type="text"
              placeholder="Search your Competition Suit"
              className={`w-full h-10 pl-4 pr-9 border rounded-[8px] text-sm placeholder:text-[#000000A3] focus:outline-none transition-colors duration-200 ${isSearchFocused ? 'border-black' : 'border-[#0000003D]'}`}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <button className="absolute right-0 top-0 h-full w-10 flex items-center justify-center text-gray-500 hover:text-gray-700">
              <Image src={search} alt="Search" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}