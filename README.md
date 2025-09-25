# Task Manager React Application

A modern React application built with Vite and styled with Tailwind CSS. This project demonstrates best practices for building responsive, component-based web applications with React.

## Features

- Component architecture with reusable UI components
- State management using React hooks (useState, useEffect, useContext)
- Custom hooks for local storage persistence
- API integration with loading and error states
- Responsive design with Tailwind CSS
- Dark mode support
- React Router for navigation

## Technology Stack

- **React**: Frontend library for building user interfaces
- **Vite**: Next-generation frontend tooling for faster development
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React Router**: Declarative routing for React applications
- **PostCSS**: Tool for transforming CSS with JavaScript plugins

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## Tailwind CSS Integration

This project uses Tailwind CSS for styling. The integration is done through:

1. CDN approach for development (via script tag in index.html)
2. PostCSS configuration for production builds

## Build for Production

To build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

URL: `http://taskmanagervicky.netlify.app/`

## License

MIT
