import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./homePage/mainLayout";

function App() {
  // const HomePage = lazy(() => import("./homePage/mainLayout"));
  const WelcomePage = lazy(() => import("./components/welcomePage"));

  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;
