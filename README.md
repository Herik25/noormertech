# Frontend Developer Assessment - E-Commerce/Competition Suit Interface

[![Live Deployment](https://img.shields.io/badge/Live-Demo-brightgreen.svg?style=for-the-badge&logo=vercel)](https://noormertech.vercel.app)
[![Framework](https://img.shields.io/badge/Next.js-15.0-black.svg?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Styling](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> **Submission for Frontend Developer Role** 
> This repository contains the solution for the frontend technical assessment. The objective was to build a responsive, pixel-perfect e-commerce interface with specific interactive functionalities.

---

## � Assignment Overview

The goal of this assessment was to demonstrate proficiency in:
1.  **Pixel-Perfect Implementation**: Replicating provided UI designs with high fidelity.
2.  **Responsive Design**: Ensuring flawless layout adaptation across mobile, tablet, and desktop viewports.
3.  **UX-Focused**: transformed static UI mockups into dynamic, interactive elements
4.  **Component Architecture**: Structuring a Next.js application for scalability and readability.

---

## ✅ Implemented Features

### 1. Home Page & Hero Section
*   **Requirement**: Create an engaging landing area with hero visuals.
*   **Implementation**: 
    *   Developed a responsive Hero component using `next/image` for optimized loading.
    *   Implemented a custom carousel for the "Client Stories" section, allowing smooth transitions between testimonials.
    *   Applied distinct typography (`Montserrat` and `Inter`) to match the design aesthetics.

### 2. Interactive Image Gallery (`/all-images`)
*   **Requirement**: A gallery view with a modal for detailed viewing.
*   **Implementation**:
    *   **Custom Modal**: Built a dedicated modal component triggered by selecting an image.
    *   **In-Modal Navigation**: Integrated a carousel within the modal, allowing users to navigate through images without closing the view.
    *   **Responsive Grid**: The main gallery uses a CSS grid that adapts column counts based on screen size.

### 3. Shopping Cart Functionality (`/cart`)
*   **Requirement**: A functional cart with dynamic price calculation and discount logic.
*   **Implementation**:
    *   **Dynamic State**: Implemented `useState` to handle item quantities. Changing quantity instantly updates the item total and subtotal.
    *   **Remove Item**: Added functionality to remove items from the cart, updating the state accordingly.
    *   **Discount Code System**: Created a working promo code input.
        *   Test Codes: `SAVE10` (10% off), `SAVE20` (20% off).
        *   Logic: Applies discount dynamically to the subtotal and displays the saved amount.
    *   **Responsive Layout**: On mobile, the summary stacks below items; on desktop, it moves to a sidebar.

### 4. Checkout Page (`/checkout`)
*   **Requirement**: A checkout form with order summary and responsive layout.
*   **Implementation**:
    *   **Sticky Sidebar**: The Order Summary persists on the right side during scrolling on desktop for better UX.
    *   **Payment Toggle**: Implemented radio button logic to switch between "Card" and "PayPal" payment methods, conditionally rendering the credit card form.
    *   **Form Layout**: Used a responsive grid for input fields that stacks on mobile and expands to 2 columns on desktop.
    *   **Theme Integration**: Utilized the project's primary and secondary colors for focus states and buttons.

---

## 📂 Project Structure

The project follows a **Feature-First** directory structure to keep related logic together, demonstrating scalable architecture practices.

```bash
app/
├── all-images/          # Image Gallery Route
├── cart/                # Shopping Cart Route
├── checkout/            # Checkout Route
├── components/          # Reusable UI Components
│   ├── allImages/       # Gallery-specific components (Modal, Grid)
│   ├── cart/            # Cart logic (CartItem, CartSummary)
│   ├── home/            # Landing page components (Hero, Carousel)
│   └── common/          # Shared atoms (Header, Button)
└── constants/           # Static data (Mock Products, Nav Items)
```

---

## 🛠 Tech Stack & Decisions

*   **Next.js 15 (App Router)**: Chosen for its robust structure, server-side rendering capabilities, and modern routing paradigms.
*   **TypeScript**: Used to ensure type safety, particularly for Cart Item interfaces and Props, reducing runtime errors.
*   **Tailwind CSS**: Selected for its utility-first approach, enabling rapid, pixel-perfect styling and easy responsive adjustments without context switching.
*   **Lucide React**: Used for lightweight, consistent iconography standard across the application.

---

## 🚀 How to Run

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/noormertech.git
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    ```
4.  **View the application**:
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

<div align="center">
  <sub>Submitted by [Your Name]</sub>
</div>
