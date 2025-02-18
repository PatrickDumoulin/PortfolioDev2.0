import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import Acef from './container/Work/ProjectPages/Acef';

const MainLayout = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Footer />
  </div>
);

const ProjectLayout = ({ children }) => (
  <div className="app">
    <Navbar />
    {children}
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/acef",
    element: <ProjectLayout><Acef /></ProjectLayout>,
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;