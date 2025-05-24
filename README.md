# AlgoU ReactJS - Dynamic Post List Application

A beginner-friendly React.js application built with Vite that demonstrates modern web development practices. This project fetches and displays posts from an external API in an interactive table format with a responsive design.

## Features

- **Dynamic Data Loading**: Fetches posts from JSONPlaceholder API
- **Interactive Table**: Clickable rows with visual selection feedback
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Mode Support**: Built-in dark/light theme compatibility
- **Modern UI**: Styled with Tailwind CSS for a clean, professional look

## Technologies Used

- **React 18.3.1** - Modern JavaScript library for building user interfaces
- **Vite 5.3.1** - Fast build tool and development server
- **Tailwind CSS 3.4.4** - Utility-first CSS framework for styling
- **Axios 1.7.2** - HTTP client for API requests
- **ESLint** - Code linting for better code quality

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd AlgoU-ReactJS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## Usage

The application displays a table of posts fetched from the JSONPlaceholder API. You can:

- **View Posts**: See a list of post titles in a clean table format
- **Select Posts**: Click on any row to highlight it (visual feedback)
- **Responsive Navigation**: Use the navigation bar (optimized for mobile and desktop)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Footer.jsx      # Application footer
│   ├── Navbar.jsx      # Navigation bar
│   └── Table.jsx       # Interactive data table
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles (Tailwind CSS)
```

## API Integration

This project uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to fetch sample post data. The API provides:

- Free fake REST API for testing and prototyping
- No authentication required
- Returns JSON data suitable for learning purposes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

### Production Dependencies
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `axios`: ^1.7.2

### Development Dependencies
- `@vitejs/plugin-react`: ^4.3.1
- `tailwindcss`: ^3.4.4
- `eslint`: ^8.57.0
- `vite`: ^5.3.1

## Contributing

This is a learning project. Feel free to fork and experiment with the code to understand React concepts better.

## License

MIT License

Copyright (c) 2024 AlgoU ReactJS