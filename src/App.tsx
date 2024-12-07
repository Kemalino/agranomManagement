import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './homePage/mainLayout';

const WelcomePage = lazy(() => import('./components/welcomePage'));
const Map = lazy(() => import('./components/map'));

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap the main layout around the nested routes */}
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <WelcomePage />
              </Suspense>
            }
          />
          <Route
            path="map"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Map />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
