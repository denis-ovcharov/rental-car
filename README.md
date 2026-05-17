# 🚗 RentalCar

A modern car rental application built with Next.js 16, allowing users to browse, filter, and book rental cars.

## ✨ Features

- 🔍 Browse a catalog of rental cars with pagination (Load more)
- 🎯 Filter cars by brand, price, and mileage
- 📄 Detailed car page with specifications, rental conditions, and features
- 📋 Booking form with validation (Formik + Yup)
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast loading with skeleton placeholders
- 🔔 Toast notifications for user feedback

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Data Fetching:** TanStack Query (React Query)
- **Forms:** Formik + Yup
- **HTTP Client:** Axios
- **Icons:** React Icons
- **Notifications:** React Hot Toast

## 📁 Project Structure

```
rental-car/
├── app/
│   ├── api/              # Next.js API route handlers (proxy)
│   │   └── cars/
│   │       ├── route.ts
│   │       ├── filters/
│   │       └── [carId]/
│   │           ├── route.ts
│   │           └── booking-requests/
│   ├── catalog/
│   │   ├── page.tsx      # Catalog page
│   │   └── [carId]/
│   │       └── page.tsx  # Car details page
│   ├── layout.tsx
│   ├── page.tsx          # Home page
│   └── globals.css
├── components/
│   ├── Header/
│   ├── CarsList/
│   ├── CarCard/
│   ├── CarDetails/
│   ├── BookingForm/
│   ├── SearchBox/
│   └── TanStackProvider/
├── lib/
│   └── api/
│       ├── api.ts        # Axios instances
│       ├── clientApi.ts  # Client-side API functions
│       └── serverApi.ts  # Server-side API functions
├── types/
│   ├── car.ts
│   └── brands.ts
└── public/
```
