# 🚗 RentalCar

A modern car rental application built with Next.js 16, allowing users to browse, filter, and book rental cars.

## 🌐 Live Demo

[rental-car-kappa-khaki.vercel.app](https://rental-car-kappa-khaki.vercel.app)

## ✨ Features

- 🔍 Browse a catalog of rental cars with infinite pagination (Load more)
- 🎯 Filter cars by brand, max price, and mileage range
- 📄 Detailed car page with specifications, rental conditions, and features
- 📋 Booking form with validation (Formik + Yup)
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Custom Select component built with react-select
- ⚡ Smooth entry animations
- 🔔 Toast notifications for user feedback
- 🚫 Empty state and 404 page handling
- 🖥️ Server-side data prefetching with TanStack Query

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Data Fetching:** TanStack Query v5 (useInfiniteQuery)
- **Forms:** Formik + Yup
- **HTTP Client:** Axios
- **Select:** React Select
- **Icons:** React Icons
- **Notifications:** React Hot Toast
- **Fonts:** Manrope (Google Fonts)

## 📁 Project Structure

```
rental-car/
├── app/
│   ├── api/
│   │   ├── api.ts                      # Axios instance (server-side)
│   │   └── cars/
│   │       ├── route.ts                # GET /api/cars
│   │       ├── filters/
│   │       │   └── route.ts            # GET /api/cars/filters
│   │       └── [carId]/
│   │           ├── route.ts            # GET /api/cars/[carId]
│   │           └── booking-requests/
│   │               └── route.ts        # POST /api/cars/[carId]/booking-requests
│   ├── catalog/
│   │   ├── page.tsx                    # Catalog page
│   │   └── [carId]/
│   │       └── page.tsx                # Car details page
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx                     # Global loading UI
│   ├── not-found.tsx                   # 404 page
│   └── page.tsx                        # Home page
├── components/
│   ├── BookingForm/
│   ├── CarCard/
│   ├── CarDetails/
│   ├── CarsList/
│   ├── CarsNotFound/                   # Empty state component
│   ├── Header/
│   ├── Hero/                           # Home page hero section
│   ├── SearchBox/
│   ├── TanStackProvider/
│   └── ui/
│       ├── Button/                     # Reusable button/link component
│       ├── CustomSelect/               # Styled react-select component
│       └── Loader/                     # Loading spinner
├── lib/
│   └── api/
│       ├── api.ts                      # Axios instance (client-side)
│       ├── clientApi.ts                # Client-side API functions
│       └── serverApi.ts                # Server-side API functions
├── types/
│   ├── car.ts
│   └── filters.ts
└── public/
    ├── home-bg.jpg
    ├── sprite.svg
    └── icon.svg
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/denis-ovcharov/rental-car.git
cd rental-car
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env.local` file:

```env
BACKEND_API_URL=https://ac.goit.global/car-rental-task
NEXT_PUBLIC_API_URL=http://localhost:3000
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Environment Variables

| Variable              | Description                                |
| --------------------- | ------------------------------------------ |
| `BACKEND_API_URL`     | External API base URL (server-side only)   |
| `NEXT_PUBLIC_API_URL` | Next.js app URL (for client-side requests) |

## 👤 Author

**Denys Ovcharov**
