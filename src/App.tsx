import { Suspense, lazy } from "react";

const ScrollPages = lazy(() =>
  import("./pages/scrollPages").then(({ ScrollPages }) => ({
    default: ScrollPages,
  }))
);
const LoadingPage = lazy(() =>
  import("./pages/loading").then(({ LoadingPage }) => ({
    default: LoadingPage,
  }))
);
function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <ScrollPages />
    </Suspense>
  );
}

export default App;
