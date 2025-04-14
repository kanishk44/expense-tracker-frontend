# Expense Tracker

A modern web application for tracking and managing your expenses built with React, Redux, and Firebase.

## Features

- User authentication and authorization
- Add, edit, and delete expenses
- Categorize expenses
- View expense history and statistics
- Responsive design for all devices

## Tech Stack

- **Frontend Framework:** React 19
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Authentication & Database:** Firebase
- **Routing:** React Router DOM
- **Build Tool:** Vite
- **Testing:** Jest, React Testing Library

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd expense-tracker
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report
- `npm run lint` - Run ESLint

## Project Structure

```
expense-tracker/
├── public/          # Static assets
├── src/             # Source code
│   ├── components/  # React components
│   ├── features/    # Redux slices and features
│   ├── hooks/       # Custom React hooks
│   ├── pages/       # Page components
│   ├── services/    # API and Firebase services
│   ├── utils/       # Utility functions
│   └── App.jsx      # Main application component
├── .eslintrc.js     # ESLint configuration
├── jest.config.js   # Jest configuration
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.js   # Vite configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
