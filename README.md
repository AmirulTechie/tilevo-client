# Tilevo

> Tilevo is a full-stack tile gallery platform where users can explore, search, and discover premium tile collections — powered by Next.js and BetterAuth.

---

## 🎯 Purpose

Tilevo is a modern tile gallery web application that allows users to browse a curated collection of premium tiles, view detailed information about each tile, and manage their personal profile. It features secure authentication with Google OAuth and a fully responsive design across all devices.

---

## 🔗 Live URL

[https://tilevo.vercel.app](https://tilevo.vercel.app)

---

## ✨ Key Features

- 🏠 **Home Page** — Hero banner, scrolling marquee, and featured tile showcase
- 🖼️ **Tile Gallery** — Browse and live-search all tiles by name or category
- 🔍 **Tile Details** — Full tile information with high-resolution preview
- 🔐 **Authentication** — Email/password login and Google OAuth via BetterAuth
- 👤 **My Profile** — View and update logged-in user name and profile image
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🔒 **Route Protection** — Private routes secured with Next.js middleware
- ⚡ **Loading States** — Loaders shown during data fetching
- 🚫 **404 Page** — Custom not-found page implementation

---

## 📦 NPM Packages Used

| Package | Purpose |
|---|---|
| `better-auth` | Authentication with MongoDB adapter |
| `react-hook-form` | Form state management and validation |
| `react-hot-toast` | Toast notifications for success and error feedback |
| `animate.css` | CSS animation library for page transitions and entrance effects |
| `react-fast-marquee` | Scrolling marquee on the home page |