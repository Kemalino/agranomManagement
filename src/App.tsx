import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './homePage/mainLayout';
import AshgabatWeatherMap from './components/weather';

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
          <Route
            path="weather"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AshgabatWeatherMap />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
