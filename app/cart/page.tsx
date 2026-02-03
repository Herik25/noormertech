import CartSection from "@/app/components/cart/CartSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart | Competition Suit Shop",
  description: "Review and purchase your custom competition suits.",
};

export default function CartPage() {
  return (
    <main>
       <CartSection />
    </main>
  );
}