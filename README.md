🚀 User Directory Dashboard

A modern User Directory Dashboard built using React + Vite + Tailwind CSS, featuring a clean glassmorphism UI, dark/light theme, and smooth user experience.

⸻

📌 Features

📊 Dashboard
• Displays users in a responsive table layout
• Shows:
• Name
• Email
• Phone
• Company

🔍 Search
• Real-time client-side filtering
• Search by:
• Name
• Email

🔄 Sorting
• Sort users by:
• Name
• Company
• Toggle ascending / descending

👤 User Detail Page
• Click a row to view full user details
• Displays:
• Email, Phone, Username
• Company
• Address

⸻

✨ UI Highlights
• 💎 Glassmorphism UI (Tailwind CSS only)
• 🌙 Dark / Light mode toggle
• 🌌 Animated gradient background
• 🧊 Skeleton loaders for better UX
• 📌 Sticky table header (dynamic on scroll)
• ⚡ Smooth transitions & micro-interactions
• 📱 Fully responsive design

⸻

🛠️ Tech Stack
• React (Vite)
• Tailwind CSS (v4)
• React Router DOM
• Axios
• Lucide React (icons)

⸻

📡 API

Data fetched from:

https://jsonplaceholder.typicode.com/users

⸻

📁 Project Structure

src/
│
├── components/
│ ├── Navbar.jsx
│ ├── ThemeToggle.jsx
│ ├── SearchBar.jsx
│ ├── UserTable.jsx
│ ├── TableSkeleton.jsx
│ ├── UserDetailSkeleton.jsx
│ ├── Breadcrumb.jsx
│ └── BackgroundGlow.jsx
│
├── pages/
│ ├── Dashboard.jsx
│ └── UserDetail.jsx
│
├── services/
│ └── api.js
│
├── App.jsx
├── main.jsx
└── index.css

⸻

⚙️ Installation & Setup

# Clone the repository

git clone https://github.com/madhu-naggari/user-data.git

# Navigate to project

cd user-data

# Install dependencies

npm install

# Run development server

npm run dev

⸻

🚀 Deployment (GitHub Pages)

npm run build
npm run deploy

👉 Live URL:
https://madhu-naggari.github.io/user-data/

⸻

💡 Key Implementation Details
• Client-side filtering & sorting
• Table-fixed layout for alignment
• Class-based dark mode handling
• Glassmorphism using Tailwind utilities
• Skeleton loading for better UX
• React Router basename for GitHub Pages

⸻

🧠 Learnings
• Managing UI state (loading, sorting, filtering)
• Building reusable components
• Responsive UI design with Tailwind
• Handling deployment issues in Vite

⸻

🚀 Future Improvements
• Pagination
• Advanced filters
• Column resizing
• Sorting indicators (↑ ↓)
• Performance optimization

⸻

👨‍💻 Author

Madhu Naggari

⸻

⭐ Conclusion

This project demonstrates strong frontend fundamentals:
• Clean component structure
• Modern UI/UX design
• Performance-focused approach
• Production deployment handling

⸻

✨ Built with modern frontend best practices
