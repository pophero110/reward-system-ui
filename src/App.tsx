import { lazy, Suspense } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import { Route, Routes } from "react-router";
import { LoadingOrError } from "@/components/LoadingOrError";
import { Room } from "./pages/Room";
import { QuestDetails } from "./pages/QuestDetails";

// const Details = lazy(async () =>
//   import("@/pages/Details").then((m) => ({ default: m.Details })),
// );

function renderError({ error }: FallbackProps) {
  return <LoadingOrError error={error} />;
}

// <Route element={<Details />} path=":fruitName" />
export function App() {
  return (
    <ErrorBoundary fallbackRender={renderError}>
      <Suspense fallback={<LoadingOrError />}>
        <Routes>
          <Route element={<Room />} index={true} />
          <Route element={<QuestDetails />} path="quests/:id" />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
