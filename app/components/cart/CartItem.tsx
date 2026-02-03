"use client";

import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import deleteIcon from "@/public/delete.svg"

export interface CartItemType {
  id: number;
  name: string;
  originalPrice: number;
  price: number;
  discountPercentage: number;
  image: string;
  quantity: number;
}

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, newQuantity: number) => void;
  onRemove: (id: number) => void;
}

export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex gap-4 py-6 border-b border-[#00000080]">
      <div className="relative w-16 h-16 shrink-0 rounded-md overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-col flex-1 justify-between">
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-2">
             <h3 className="text-base font-light text-black leading-[150%] tracking-[-0.5px]">
               {item.name}
             </h3>
             <div className="flex items-start sm:items-center gap-2">
                <span className="bg-[#0B840B] text-white text-sm font-medium px-4 py-1 rounded-full tracking-[-0.5px] leading-[150%] text-nowrap">
                   {item.discountPercentage}% OFF
                </span>
                <span className="text-[#0B840B] text-base font-normal tracking-[-0.5px] leading-[150%]">
                   Savings on this order
                </span>
             </div>
          </div>

          <div className="text-right shrink-0">
             <div className="text-[#888888] font-medium text-base line-through decoration-1 tracking-[-0.5px] leading-[150%]">
               ${item.originalPrice.toFixed(2)}
             </div>
             <div className="text-black text-base font-semibold tracking-[-0.5px] leading-[150%]">
               ${item.price.toFixed(2)}
             </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
           <div className="flex items-center gap-1">
              <button 
                onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                className="w-12 h-12 flex items-center justify-center border border-[#0000003D] text-[#888888] hover:bg-gray-50 transition-colors cursor-pointer"
                disabled={item.quantity <= 1}
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <div className="w-12 h-12 flex items-center justify-center text-sm font-medium border border-[#0000003D]">
                {item.quantity}
              </div>
              <button 
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="w-12 h-12 flex items-center justify-center border border-[#0000003D] text-[#888888] hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
           </div>

           <button 
             onClick={() => onRemove(item.id)}
             className="p-2 cursor-pointer"
           >
             <Image src={deleteIcon} alt="delete" width={20} height={20} />
           </button>
        </div>
      </div>
    </div>
  );
}
