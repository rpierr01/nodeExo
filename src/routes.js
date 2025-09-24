import React from 'react';
import AboutPage from './pages/aboutPage';
import CharactersPage from './pages/characters';
import ContactPage from './pages/contactPage';
import Layout from './Layout';

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Une erreur est survenue ou la page est introuvable.</div>,
    children: [
      {
        index: true,
        element: <CharactersPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
];

export default routes;
