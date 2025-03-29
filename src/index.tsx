import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./components/App/App";
import { LangContextProvider } from "./services/LangContext/LangContext";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <LangContextProvider>
        <App />
      </LangContextProvider>
    </StrictMode>
  );
}
