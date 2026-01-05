# Our Lady Consolata School Website

A modern, responsive website for Our Lady Consolata Primary School in Mundika, Busia County.

## 🚀 Quick Start

```bash
cd "C:\Users\nyamu\Desktop\2026 Projects\Websites\Samples\Our lady Consolata\consolata-school"
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Features

### 🏫 School Website Features
- **5 Complete Pages**: Home, About, Academics, Facilities, Contact
- **Mobile-First Responsive Design** - Perfect on all devices
- **Professional Color Scheme** - Soft Navy Blue (#1F3A5F) and Warm Gold (#D4A017)
- **School-Specific Content** - All your provided content included
- **React Router** - Smooth navigation between pages
- **Tailwind CSS** - Modern utility-first styling

### 🎨 Design Highlights
- **School Colors**: Professional institutional palette
- **Clean Layout**: No clutter, professional appearance
- **Responsive**: Works perfectly on mobile, tablet, and desktop
- **Accessible**: Proper contrast and semantic HTML

## 📁 Project Structure

```
consolata-school/
├── public/              # Static assets
├── src/
│   ├── components/     # Reusable components
│   │   ├── Header.jsx  # Navigation
│   │   └── Footer.jsx  # Site footer
│   ├── pages/          # Main pages
│   │   ├── Home.jsx    # Landing page
│   │   ├── About.jsx   # About our school
│   │   ├── Academics.jsx # Curriculum & performance
│   │   ├── Facilities.jsx # School facilities
│   │   └── Contact.jsx # Contact information
│   ├── data/          # School data configuration
│   │   └── schoolData.js
│   ├── App.jsx        # Main app with routing
│   └── main.jsx       # Application entry point
├── index.html         # Main HTML file
├── package.json       # Dependencies and scripts
├── tailwind.config.js # Tailwind configuration
└── README.md         # This file
```

## 🔧 Customization

### Update School Information
Edit `src/data/schoolData.js` to update:
- School name and location
- Contact information
- KCPE results
- School history and values
- Curriculum and facilities

### Change Colors
Edit `tailwind.config.js` in the `colors` section.

### Update Content
Edit the respective page files in `src/pages/`.

## 📞 Contact Information

The contact information is pre-filled with:
- **School Name**: Our Lady Consolata Primary School
- **Location**: Mundika, Busia County
- **Phone**: (123) 456-7890
- **Email**: info@consolata.sc.ke

## 🎯 Pages Included

1. **Home** - First impression with hero, about snapshot, why choose us, academic highlights
2. **About** - School identity, philosophy, history, values, mission
3. **Academics** - Curriculum, teaching approach, academic performance, success stories
4. **Facilities** - Learning environment, boarding facilities, spiritual spaces
5. **Contact** - Location, contact information, contact form

## 📱 Responsive Design

- **Mobile (< 640px)**: Single column layout, hamburger menu
- **Tablet (641px - 1024px)**: Two column grids, enhanced navigation
- **Desktop (> 1025px)**: Three column grids, full navigation

## 🚀 Deployment

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to deploy to any static hosting service.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📚 Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library

---

*Created specifically for Our Lady Consolata Primary School in Mundika, Busia County*