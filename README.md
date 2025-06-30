# Fast Pizza App

A modern, responsive web application for ordering pizzas online. Built with React, Vite, and Tailwind CSS, the Fast Pizza App provides a seamless user experience for browsing the menu, managing a cart, and placing orders.

## Features

- **Browse Menu:** View a list of available pizzas fetched from a remote API.
- **Add to Cart:** Select pizzas and manage your cart before checkout.
- **Order Creation:** Place new orders with customer details and optional priority.
- **Order Tracking:** Search for and view the status of existing orders.
- **Responsive UI:** Clean, mobile-friendly design using Tailwind CSS.
- **Error Handling:** User-friendly error messages and loading states.
- **Modular Features:** Each main feature (menu, cart, order, user) is organized in its own directory for maintainability and scalability.

## Tech Stack

- **Frontend:** React 19, React Router 7
- **State Management:** Redux Toolkit, React Redux
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Linting/Formatting:** ESLint, Prettier

## Project Structure

```
fast-pizza-app/
├── public/                # Static assets
├── src/
│   ├── features/          # Main app features (user, order, menu, cart)
│   ├── services/          # API service modules
│   ├── ui/                # Reusable UI components
│   ├── utilities/         # Helper functions
│   ├── App.jsx            # Main app and routing
│   └── main.jsx           # App entry point
├── index.html             # HTML entry point
├── package.json           # Project metadata and scripts
├── tailwind.config.js     # Tailwind CSS config
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Caisere/fast-pizza-app.git
   cd fast-pizza-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run preview` — Preview the production build
- `npm run lint` — Lint the codebase

## API & Data Flow

- **Menu & Orders:** Data is fetched from [react-fast-pizza-api.jonas.io](https://react-fast-pizza-api.jonas.io/api).
- **Order Creation:** Orders are submitted via POST requests; phone validation is performed before submission.
- **Order Tracking:** Users can search for orders by ID and view their status and estimated delivery time.
- **State Management:** The app uses Redux Toolkit and React Redux for managing global UI state (cart, user, orders).

## Main Components & Features

- **Menu:** Displays pizzas from the API, allows adding to cart.
- **Cart:** Shows selected pizzas, allows order placement.
- **Order:** Displays order details, status, and delivery estimate.
- **User:** Simple username input to personalize the experience.
- **UI Components:** Header, Footer, Loader, Buttons, Error messages, etc.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
