import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./styles/App.css";

import { ErrorBoundary } from "react-error-boundary";

import Home  from "./pages/Home";
import About  from "./pages/About";
import Users  from "./pages/Users";
import Error from "./pages/Error";

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

  const ErrorFallback = (props) => {
    return (
      <div>
        <h1>Something went wrong</h1>
        <pre>{props.error.message}</pre>
        <button onClick={props.resetErrorBoundary}>Try again</button>
      </div>
    );
  };

  return (
    <div className="app">
      <div>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {Navigate("/")}}>
          <RouterProvider router={router} />  
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App;


/* 


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