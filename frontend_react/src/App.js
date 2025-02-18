import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import Acef from './container/Work/ProjectPages/Acef';
import SpaceGame from './container/Work/ProjectPages/SpaceGame';
import Bulky from './container/Work/ProjectPages/Bulky';
import ModernRecruit from './container/Work/ProjectPages/ModernRecruit';
import AnimalSpecies from './container/Work/ProjectPages/AnimalSpecies';
import MyPortfolio from './container/Work/ProjectPages/MyPortfolio';

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
  },
  {
    path: "/spacegame",
    element: <ProjectLayout><SpaceGame /></ProjectLayout>,
  },
  {
    path: "/bulkybook",
    element: <ProjectLayout><Bulky /></ProjectLayout>,
  },
  {
    path: "/modernrecruit",
    element: <ProjectLayout><ModernRecruit /></ProjectLayout>,
  },
  {
    path: "/asc",
    element: <ProjectLayout><AnimalSpecies /></ProjectLayout>,
  },
  {
    path: "/portfolio",
    element: <ProjectLayout><MyPortfolio /></ProjectLayout>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;