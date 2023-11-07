import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeContextProvider } from "./contexts/ThemeContext/ThemeContext.component.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Suspense fallback="...loading">
        <App />
      </Suspense>
    </ThemeContextProvider>
  </React.StrictMode>
);
