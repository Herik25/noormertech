"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import InstagramIcon from "@/public/socials/instagram.svg";
import YoutubeIcon from "@/public/socials/youtube.svg";
import MailIcon from "@/public/socials/mail.svg";
import CallIcon from "@/public/socials/call.svg";
import VisaCard from "@/public/cards/visa.svg";
import MastercardCard from "@/public/cards/mastercard.svg";
import AmexCard from "@/public/cards/american express.svg";
import GoogleWallet from "@/public/cards/google wallet.svg";
import PaypalCard from "@/public/cards/paypal.svg";
import Logo from "@/public/logo.png";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-black text-sm font-normal tracking-[-0.5px] leading-[150%] hover:text-primary transition-colors block"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="lg:max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 py-12">
          <div className="flex flex-col space-y-8 lg:w-1/5 shrink-0">
            <div className="w-[250px]">
               <Image src={Logo} alt="Competition Suit Shop" className="w-full h-auto object-contain" />
            </div>

            <div className="space-y-5">
              <Link href="#" className="flex items-center gap-3 group">
                <Image src={InstagramIcon} alt="Instagram" width={20} height={20} className="w-5 h-5 shrink-0" />
                <span className="text-black text-sm tracking-[-0.5px] leading-[150%] font-normal group-hover:text-primary transition-colors">
                  @competitionsuitshop
                </span>
              </Link>
              
              <Link href="#" className="flex items-center gap-3 group">
                <Image src={YoutubeIcon} alt="Youtube" width={20} height={20} className="w-5 h-5 shrink-0" />
                <span className="text-black text-sm tracking-[-0.5px] leading-[150%] font-normal group-hover:text-primary transition-colors">
                  Competition Suit Shop
                </span>
              </Link>

              <Link href="mailto:info@competitionsuitshop.com" className="flex items-center gap-3 group">
                <Image src={MailIcon} alt="Email" width={20} height={20} className="w-5 h-5 shrink-0" />
                <span className="text-black text-sm tracking-[-0.5px] leading-[150%] font-normal group-hover:text-primary transition-colors">
                  info@competitionsuitshop.com
                </span>
              </Link>

              <Link href="tel:+16467559535" className="flex items-center gap-3 group">
                <Image src={CallIcon} alt="Phone" width={20} height={20} className="w-5 h-5 shrink-0" />
                <span className="text-black text-sm tracking-[-0.5px] leading-[150%] font-normal group-hover:text-primary transition-colors">
                  +1 646 755 9535
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Links Grid */}
          <div className="flex-1 flex flex-col gap-12">
            
            {/* Top Grid: Company & Resources */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-8 lg:gap-12">
               
               {/* Company Section (Spans 5 cols) */}
               <div className="md:col-span-5">
                 <h3 className="font-medium text-lg mb-4 tracking-[-0.5px]">Company</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                   <ul className="space-y-3">
                     <li><FooterLink href="#">Home</FooterLink></li>
                     <li><FooterLink href="#">Blogs</FooterLink></li>
                     <li><FooterLink href="#">About Us</FooterLink></li>
                     <li><FooterLink href="#">Best Time to Order</FooterLink></li>
                     <li><FooterLink href="#">Reviews & Testimonials</FooterLink></li>
                   </ul>
                   <ul className="space-y-3">
                     <li><FooterLink href="#">Bikini Top Style</FooterLink></li>
                     <li><FooterLink href="#">Bikini Bottom Style</FooterLink></li>
                     <li><FooterLink href="#">Figuresuit Top Style</FooterLink></li>
                     <li><FooterLink href="#">Figuresuit Bottom Style</FooterLink></li>
                   </ul>
                 </div>
               </div>

               {/* Resources Section (Spans 6 cols) */}
               <div className="md:col-span-6">
                 <h3 className="font-medium text-lg mb-4 tracking-[-0.5px]">Resources</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                   <ul className="space-y-3">
                     <li><FooterLink href="#">My Account</FooterLink></li>
                     <li><FooterLink href="#">Custom Competition Suit</FooterLink></li>
                     <li><FooterLink href="#">NPC Bikini Competition Suits</FooterLink></li>
                     <li><FooterLink href="#">Gift Cards</FooterLink></li>
                   </ul>
                   <ul className="space-y-3">
                     <li><FooterLink href="#">Measurement Guide</FooterLink></li>
                     <li><FooterLink href="#">Payment Plan</FooterLink></li>
                     <li><FooterLink href="#">Why choose us</FooterLink></li>
                     <li><FooterLink href="#">Fabrics</FooterLink></li>
                   </ul>
                 </div>
               </div>
            </div>

            {/* Bottom Grid: Help Center */}
            <div className="lg:col-span-12">
               <h3 className="font-medium text-lg mb-4 tracking-[-0.5px]">Help Center</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-0">
                  <ul className="space-y-3">
                     <li><FooterLink href="#">Contact Us</FooterLink></li>
                     <li><FooterLink href="#">FAQs</FooterLink></li>
                     <li><FooterLink href="#">Terms & Conditions</FooterLink></li>
                  </ul>
                  <ul className="space-y-3">
                     <li><FooterLink href="#">Schedule a Consult</FooterLink></li>
                     <li><FooterLink href="#">Returns and Remake</FooterLink></li>
                  </ul>
                  <ul className="space-y-3">
                     <li><FooterLink href="#">Cancellation Policy</FooterLink></li>
                     <li><FooterLink href="#">Refund Policy</FooterLink></li>
                  </ul>
                  <ul className="space-y-3">
                     <li><FooterLink href="#">Privacy Policy</FooterLink></li>
                     <li><FooterLink href="#">Payment & Delivery</FooterLink></li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="py-8 border-t border-t-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 lg:max-w-7xl mx-auto px-4">
          <p className="text-black text-sm font-normal tracking-[-0.5px] leading-[150%]">
          © 2025 Competition Suit Shop
          </p>
          <div className="flex items-center gap-4">
              <Image src={VisaCard} alt="Visa" width={46} height={15} />
              <Image src={MastercardCard} alt="Mastercard" width={25} height={15} />
              <Image src={AmexCard} alt="American Express" width={47} height={15} />
              <Image src={GoogleWallet} alt="Google Wallet" width={13} height={15} />
              <Image src={PaypalCard} alt="PayPal" width={56} height={15} />
          </div>
        </div>
      </div>
    </footer>
  );
}