import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './routes.jsx';

const router = createBrowserRouter(routes);

function App() {
  return (
<<<<<<< HEAD
    <div>
      <NumberOfCharacters characters={characters} />
      <CharactersList characters={characters} />
    </div>
=======
    <>
      <RouterProvider router={router} />
    </>
>>>>>>> pageApp
  );
}

export default App;
