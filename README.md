# Basic Blog App - Frontend

This repository contains the frontend code for the **Basic Blog App**, built using **React** for dynamic content rendering and **TailwindCSS** for responsive, utility-first styling. The project is a prototype designed for practice purposes and demonstrates fundamental concepts of building a simple blog application.

## Features
- **Dynamic Content Rendering**: React is used to create a seamless and interactive user experience.
- **Utility-First Styling**: TailwindCSS and DaisyUI provide responsive and aesthetically pleasing design components.
- **Blog List Component**: Displays a list of existing blog posts.
- **Blog Form Component**: Allows users to create new blog posts.
- **API Integration**: Axios is used to communicate with the backend, enabling fetching and submitting of blog posts.

## Project Status
This project is a **prototype** and is intended for practice purposes. Major features like authentication and authorization (e.g., login and logout) are not yet implemented. Future updates may include these and other advanced functionalities.

## Tech Stack
- **React**: For building the user interface.
- **TailwindCSS**: For responsive and utility-first styling.
- **DaisyUI**: A TailwindCSS component library for beautiful UI elements.
- **Axios**: For making HTTP requests to the backend API.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/): Required to run the development server.
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/): Package manager for installing dependencies.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/shant0786/basic-blog-mern-app.git
   ```

2. Navigate to the frontend directory:
   ```bash
   cd basic-blog-mern-app/client
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Application
Start the development server:
```bash
npm start
```
or
```bash
yarn start
```

The application will be available at `http://localhost:3000`.

## Directory Structure
```
client/
├── src/
│   ├── components/       # Reusable React components (e.g., BlogList, BlogForm)
│   ├── services/         # Axios API service functions
│   ├── styles/           # TailwindCSS and DaisyUI configurations
│   └── App.js            # Main application entry point
├── public/               # Static files
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Future Improvements
- **Authentication and Authorization**: Add login, logout, and user roles.
- **Enhanced UI/UX**: Incorporate more interactive components and animations.
- **Backend Features**: Include features like user management and database integration.

## Contributing
Contributions are welcome! Please feel free to fork the repository and submit a pull request.

## License
This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Contact
For any inquiries, please contact [Humaun Al Rasel](https://github.com/shant0786).

