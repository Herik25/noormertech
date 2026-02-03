"use client";

import { useState } from "react";
import { CART_ITEMS, DISCOUNT_CODES } from "@/app/constants";
import CartItem, { CartItemType } from "./CartItem";
import CartSummary from "./CartSummary";

const initialItems: CartItemType[] = CART_ITEMS.map(item => ({
  ...item,
  quantity: 1,
}));

export default function CartSection() {
  const [items, setItems] = useState<CartItemType[]>(initialItems);
  const [appliedDiscount, setAppliedDiscount] = useState<{ code: string; percentage: number } | null>(null);

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const handleApplyDiscount = (code: string) => {
    const normalizedCode = code.trim();
    
    if (appliedDiscount?.code === normalizedCode) {
        return { success: false, message: "Code already applied" };
    }

    const discount = DISCOUNT_CODES.find(d => d.code === normalizedCode);
    
    if (discount) {
      setAppliedDiscount(discount);
      return { success: true, message: "Code applied successfully!" };
    } else {
      return { success: false, message: "Invalid discount code" };
    }
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = appliedDiscount ? (subtotal * (appliedDiscount.percentage / 100)) : 0;
  const deliveryFee = 0;
  const total = subtotal - discountAmount + deliveryFee;

  return (
    <section className="w-full bg-white my-8 lg:my-16">
      <div className="xl:max-w-7xl mx-auto px-4">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="flex-1">
             <h2 className="text-lg tracking-[-0.5px] leading-[125%] font-medium text-[#1C1C1C] mb-4">Shopping Bag</h2>
             <div className="border-t border-[#00000080]">
                {items.length > 0 ? (
                  items.map(item => (
                    <CartItem 
                      key={item.id} 
                      item={item} 
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemove={handleRemoveItem}
                    />
                  ))
                ) : (
                  <div className="py-12 text-center text-secondary">
                    Your shopping bag is empty.
                  </div>
                )}
             </div>
          </div>

          <div className="w-full lg:w-[400px] shrink-0">
             <CartSummary 
               subtotal={subtotal}
               discount={discountAmount}
               deliveryFee={deliveryFee}
               total={total}
               onApplyDiscount={handleApplyDiscount}
             />
          </div>
        </div>
      </div>
    </section>
  );
}
