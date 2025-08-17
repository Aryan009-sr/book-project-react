import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import BookDetails from './components/Bookdetails.jsx';
import Demo from './components/Demo.jsx';
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />, // The App component acts as the main layout
    children: [
      {
        index: true, // This makes the Home component the default child route for "/"
        element: <Home />,
      },
      {
        path: 'About', // Note: no leading slash for child routes
        element: <About />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
      {
        path:'book/:id',
        element: <BookDetails />
      },
      {
        path:'Demo',
        element: <Demo/>
      }
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);