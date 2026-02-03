"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CartSummaryProps {
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  onApplyDiscount: (code: string) => { success: boolean; message: string };
}

export default function CartSummary({ 
  subtotal, 
  discount, 
  deliveryFee, 
  total,
  onApplyDiscount 
}: CartSummaryProps) {
  const [discountCode, setDiscountCode] = useState("");
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleApply = () => {
    if (!discountCode.trim()) return;
    const result = onApplyDiscount(discountCode);
    setMessage({
      type: result.success ? 'success' : 'error',
      text: result.message
    });
    if (!result.success) {
        setTimeout(() => {
            setDiscountCode("");
            setMessage(null);
        }, 2000);
    }
  };

  return (
    <div className="flex flex-col gap-7 h-full">
      <div>
        <h3 className="text-lg tracking-[-0.5px] leading-[125%] font-medium text-[#1C1C1C] mb-4">Discount</h3>
        <div className="flex gap-2 border-t border-[#00000080] pt-6 pb-2">
          <input
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value.toUpperCase())}
            placeholder="TRY CODE SAVE10 OR SAVE20"
            className="flex-1 min-w-0 h-12 rounded-[4px] border border-secondary bg-tertiary px-4 text-base focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-[#888888]"
          />
          <Button 
            onClick={handleApply}
            className="shrink-0 h-12 px-6 bg-secondary hover:bg-primary hover:text-white text-black font-medium rounded-[4px] border-none text-base tracking-[-0.5px] leading-[150%] cursor-pointer"
          >
            Apply
          </Button>
        </div>
        {message && (
          <p className={`text-sm mt-2 ${message.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
            {message.text}
          </p>
        )}
      </div>

      <div className="h-px bg-[#00000040] w-full" />

      <div>
        <h3 className="text-lg tracking-[-0.5px] leading-[125%] font-medium text-[#1C1C1C] mb-4">Payment Summary</h3>
        <div className="space-y-6 border-t border-[#00000080] pt-6">
           <div className="flex justify-between items-center text-black font-normal leading-[150%] tracking-[-0.5px]">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
           </div>
           {discount > 0 && (
             <div className="flex justify-between items-center text-black font-normal leading-[150%] tracking-[-0.5px]">
                <span>Discount</span>
                <span>-${discount.toFixed(2)}</span>
             </div>
           )}
           <div className="flex justify-between items-center text-black font-normal leading-[150%] tracking-[-0.5px]">
              <span>Delivery fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
           </div>
           
           <div className="h-px bg-[#00000040] w-full my-6" />
           
           <div className="flex justify-between items-center text-black font-normal leading-[150%] tracking-[-0.5px]">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
           </div>
        </div>

        <div className="lg:hidden mt-6 flex justify-center items-center gap-2">
          <div className="relative flex items-center">
            <input 
              type="checkbox" 
              id="express-delivery" 
              className="peer h-5 w-5 cursor-pointer appearance-none rounded-sm border border-[#E10174] checked:bg-[#E10174] checked:border-[#E10174] transition-all"
            />
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
               </svg>
            </div>
          </div>
          <label htmlFor="express-delivery" className="text-sm text-black cursor-pointer leading-[150%] font-normal tracking-[-0.5px]">
            In a hurry? Add Express Delivery (in 10 days)
          </label>
        </div>

        <Button 
           className="w-full mt-2 md:mt-4 lg:mt-6 h-12 bg-primary border border-primary hover:bg-white text-white hover:text-primary text-base font-semibold rounded-full cursor-pointer"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}
