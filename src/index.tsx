import "~/scss/main.scss";

import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

import { Spinner } from "./common/Spinner";
import { LangContextProvider } from "./services/LangContext";

const AppLazy = lazy(() => import("./components/App/App"));

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Suspense fallback={<Spinner center fullScreen />}>
        <LangContextProvider>
          <AppLazy />
        </LangContextProvider>
      </Suspense>
    </StrictMode>
  );
}
