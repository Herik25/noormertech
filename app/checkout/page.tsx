"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { CART_ITEMS } from '@/app/constants';

interface CartItemType {
    id: number;
    name: string;
    originalPrice: number;
    price: number;
    discountPercentage: number;
    image: string;
}

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [quantities] = useState<{ [key: number]: number }>(
    (CART_ITEMS as unknown as CartItemType[]).reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const calculateSubtotal = () => {
    return CART_ITEMS.reduce((total, item) => {
        return total + (item.price * (quantities[item.id] || 1));
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping: number = 0;
  const tax: number = 0;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white sm:px-8 px-4 py-8 md:py-16 font-sans">
        <div className="xl:max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                {/* Left Column: Forms */}
                <div className="flex-1 order-2 lg:order-1">
                    <form>
                        <div className="mb-10">
                            <h2 className="text-xl text-[#1C1C1C] font-medium tracking-[-0.5px] mb-6">Delivery Details</h2>
                            <div className="grid md:grid-cols-2 gap-y-6 gap-x-4">
                                <div>
                                    <label className="text-sm text-[#1C1C1C] font-medium block mb-2 tracking-[-0.5px]">First Name</label>
                                    <input type="text" placeholder="Enter First Name"
                                        className="h-[52px] px-4 bg-tertiary border border-secondary text-black w-full text-base rounded-[4px] focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-[#888888]" />
                                </div>
                                <div>
                                    <label className="text-sm text-[#1C1C1C] font-medium block mb-2 tracking-[-0.5px]">Last Name</label>
                                    <input type="text" placeholder="Enter Last Name"
                                        className="h-[52px] px-4 bg-tertiary border border-secondary text-black w-full text-base rounded-[4px] focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-[#888888]" />
                                </div>
                                <div>
                                    <label className="text-sm text-[#1C1C1C] font-medium block mb-2 tracking-[-0.5px]">Email</label>
                                    <input type="email" placeholder="Enter Email"
                                        className="h-[52px] px-4 bg-tertiary border border-secondary text-black w-full text-base rounded-[4px] focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-[#888888]" />
                                </div>
                                <div>
                                    <label className="text-sm text-[#1C1C1C] font-medium block mb-2 tracking-[-0.5px]">Phone No.</label>
                                    <input type="number" placeholder="Enter Phone No."
                                        className="h-[52px] px-4 bg-tertiary border border-secondary text-black w-full text-base rounded-[4px] focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-[#888888]" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="text-sm text-[#1C1C1C] font-medium block mb-2 tracking-[-0.5px]">Address Line</label>
                                    <input type="text" placeholder="Enter Address Line"
                                        className="h-[52px] px-4 bg-tertiary border border-secondary text-black w-full text-base rounded-[4px] focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-[#888888]" />
                                </div>
                                <div>
                                    <label className="text-sm text-[#1C1C1C] font-medium block mb-2 tracking-[-0.5px]">City</label>
                                    <input type="text" placeholder="Enter City"
                                        className="h-[52px] px-4 bg-tertiary border border-secondary text-black w-full text-base rounded-[4px] focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-[#888888]" />
                                </div>
                                <div>
                                    <label className="text-sm text-[#1C1C1C] font-medium block mb-2 tracking-[-0.5px]">State</label>
                                    <input type="text" placeholder="Enter State"
                                        className="h-[52px] px-4 bg-tertiary border border-secondary text-black w-full text-base rounded-[4px] focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-[#888888]" />
                                </div>
                                <div>
                                    <label className="text-sm text-[#1C1C1C] font-medium block mb-2 tracking-[-0.5px]">Zip Code</label>
                                    <input type="text" placeholder="Enter Zip Code"
                                        className="h-[52px] px-4 bg-tertiary border border-secondary text-black w-full text-base rounded-[4px] focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-[#888888]" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-xl text-[#1C1C1C] font-medium tracking-[-0.5px] mb-6">Payment</h2>
                            <div className="flex flex-wrap gap-y-6 gap-x-8 mt-4 mb-8">
                                <div className="flex items-center">
                                    <input 
                                        type="radio" 
                                        name="pay-method" 
                                        className="w-5 h-5 cursor-pointer accent-primary" 
                                        id="card" 
                                        checked={paymentMethod === 'card'}
                                        onChange={() => setPaymentMethod('card')}
                                    />
                                    <label htmlFor="card" className="ml-3 flex gap-2 cursor-pointer items-center">
                                        <div className="w-12 h-8 relative">
                                            <Image src="/cards/visa.svg" alt="visa" fill className="object-contain" />
                                        </div>
                                        <div className="w-12 h-8 relative">
                                            <Image src="/cards/mastercard.svg" alt="mastercard" fill className="object-contain" />
                                        </div>
                                        <div className="w-12 h-8 relative">
                                            <Image src="/cards/american express.svg" alt="american express" fill className="object-contain" />
                                        </div>
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input 
                                        type="radio" 
                                        name="pay-method" 
                                        className="w-5 h-5 cursor-pointer accent-primary" 
                                        id="paypal" 
                                        checked={paymentMethod === 'paypal'}
                                        onChange={() => setPaymentMethod('paypal')}
                                    />
                                    <label htmlFor="paypal" className="ml-3 flex gap-2 cursor-pointer items-center">
                                        <div className="w-20 h-8 relative">
                                           <Image src="/cards/paypal.svg" alt="paypal" fill className="object-contain" />
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {paymentMethod === 'card' && (
                                <div className="grid md:grid-cols-2 gap-y-6 gap-x-4">
                                    <div className="md:col-span-2">
                                        <label className="text-sm text-[#1C1C1C] font-medium block mb-2 tracking-[-0.5px]">Cardholder&apos;s Name</label>
                                        <input type="text" placeholder="Enter Cardholder's Name"
                                            className="h-[52px] px-4 bg-tertiary border border-secondary text-black w-full text-base rounded-[4px] focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-[#888888]" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="text-sm text-[#1C1C1C] font-medium block mb-2 tracking-[-0.5px]">Card Number</label>
                                        <input type="text" placeholder="Enter Card Number"
                                            className="h-[52px] px-4 bg-tertiary border border-secondary text-black w-full text-base rounded-[4px] focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-[#888888]" />
                                    </div>
                                    <div>
                                        <label className="text-sm text-[#1C1C1C] font-medium block mb-2 tracking-[-0.5px]">Expiry</label>
                                        <input type="text" placeholder="MM/YY"
                                            className="h-[52px] px-4 bg-tertiary border border-secondary text-black w-full text-base rounded-[4px] focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-[#888888]" />
                                    </div>
                                    <div>
                                        <label className="text-sm text-[#1C1C1C] font-medium block mb-2 tracking-[-0.5px]">CVV</label>
                                        <input type="text" placeholder="123"
                                            className="h-[52px] px-4 bg-tertiary border border-secondary text-black w-full text-base rounded-[4px] focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-[#888888]" />
                                    </div>
                                </div>
                            )}
                            
                            <div className="flex gap-4 flex-col lg:flex-row mt-10">
                                <button type="button" className="rounded-full px-6 py-3 w-full text-base font-semibold tracking-[-0.5px] bg-tertiary border border-secondary hover:bg-primary hover:text-white text-black order-2 lg:order-1 transition-colors cursor-pointer">
                                    Continue Shopping
                                </button>
                                <button type="button" className="rounded-full px-6 py-3 w-full text-base font-semibold tracking-[-0.5px] bg-primary text-white order-1 lg:order-2 transition-colors cursor-pointer border border-primary hover:bg-white hover:text-primary">
                                    Complete Purchase
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Right Column: Order Summary - Sticky */}
                <div className="w-full lg:w-[420px] shrink-0 order-1 lg:order-2 relative">
                   <div className="sticky top-8">
                        <h2 className="text-xl text-[#1C1C1C] font-medium tracking-[-0.5px] mb-6">Order Summary</h2>
                        <div className="bg-white border border-[#00000080] rounded-lg overflow-hidden">
                            <div className="p-6 md:p-8">
                                <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                    {CART_ITEMS.map((item: CartItemType) => (
                                        <div key={item.id} className="flex gap-4">
                                            <div className="relative w-24 h-24 shrink-0 rounded-md overflow-hidden">
                                                <Image 
                                                    src={item.image}
                                                    alt={item.name} 
                                                    fill 
                                                    className="object-contain p-1" 
                                                />
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div>
                                                    <h3 className="text-sm font-medium text-[#1C1C1C] leading-[150%] tracking-[-0.5px] line-clamp-2">{item.name}</h3>
                                                    <p className="text-xs font-normal text-[#666666] mt-1 tracking-[-0.5px]">Size: M</p>
                                                </div>
                                                <div className="flex justify-between items-end mt-2">
                                                    <h6 className="text-base text-[#1C1C1C] font-semibold tracking-[-0.5px]">${item.price.toFixed(2)}</h6>
                                                    
                                                    <div className="text-sm text-[#1C1C1C] font-medium tracking-[-0.5px]">
                                                        Qty: {quantities[item.id] || 1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="h-px bg-[#00000040] w-full my-6" />

                                <div>
                                    <ul className="text-[#1C1C1C] space-y-3 font-normal text-sm leading-[150%] tracking-[-0.5px]">
                                        <li className="flex justify-between">
                                            <span>Subtotal</span> 
                                            <span className="font-medium">${subtotal.toFixed(2)}</span>
                                        </li>
                                        <li className="flex justify-between text-black">
                                            <span>Shipping</span> 
                                            <span className="font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Tax</span> 
                                            <span className="font-medium">${tax.toFixed(2)}</span>
                                        </li>
                                    </ul>
                                    <div className="h-px bg-[#00000040] w-full my-6" />
                                    <div className="flex justify-between text-base font-medium text-[#1C1C1C] tracking-[-0.5px]">
                                        <span>Total</span> 
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout