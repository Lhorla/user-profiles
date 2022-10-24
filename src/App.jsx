import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home  from "./components/Home";
import About  from "./components/About";
import Users  from "./components/Users";
import Error from "./components/error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;


/* 
import { ErrorBoundary } from "react-error-boundary";

  function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

 <ErrorBoundary FallBackComponent={ErrorFallback}>
    
  </ErrorBoundary>
*/