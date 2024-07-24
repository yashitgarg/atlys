# Atlys Frontend Developer Assignment

This project is a mini frontend application developed as part of the Atlys Frontend Developer assignment. It demonstrates a user interface for a social media-like platform, focusing on the login/signup process and a basic post viewing interface.

## Live Demo

[https://atlys-yashitgarg.netlify.app/](https://atlys-yashitgarg.netlify.app/)

## Features

- Responsive design matching the provided Figma mockup
- Login and Signup forms with smooth transitions
- Post viewing interface with like and comment functionality (UI only)
- Animations and transitions for enhanced user experience

## Usage

## Routing

- The default route (`/`) redirects to the login page (`/login`).
- The login page is accessible at `/login`.
- Upon successful login or registration (clicking the "Continue" button):
  - The user is redirected to the home page (`/home`).
  - The home page displays the main content of the application.

## Navigation Flow

1. When you first access the application, you'll be directed to the login page.
2. You can switch between the login and registration forms using the provided links.
3. After entering your credentials and clicking "Continue":
   - If on the login form: You'll be logged in and redirected to the home page.
   - If on the registration form: Your account will be created, and you'll be redirected to the home page.
4. The home page showcases the main features of the application, including posts, likes, and comments (UI only).

Note: As this is a frontend-only implementation, no actual authentication takes place. The navigation simulates the expected flow of a fully functional application.

## Technologies Used

- React
- TailwindCSS for styling
- React Router for navigation

## Setup and Installation

- 1. Clone the repository:
- 2. Navigate to the project directory:
- 3. Install dependencies: `npm install`
- 4. Start the development server: `npm run dev'
- 5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Design Decisions

- Modular component structure for maintainability and reusability
- Custom styling with TailwindCSS to closely match the Figma design
- Minimal use of external libraries to demonstrate core React and CSS skills
- Responsive design to ensure compatibility across various device sizes

## Areas for Improvement

- Implement actual authentication logic
- Add form validation
- Enhance accessibility features
- Implement actual comment and like functionality

## Contributing

This project is part of an assignment and is not open for contributions. However, feedback and suggestions are welcome.
