import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/styles/global.scss';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const CarDetailPage = lazy(() => import('./pages/CarDetailPage'));
const SparePartsPage = lazy(() => import('./pages/SparePartsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const NoMatch = lazy(() => import('./pages/NoMatch'));

function App() {
  return (
      <Router>
          <Suspense fallback={<p> Loading...</p>}>
              <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/about' element={<AboutPage />} />
                  <Route path='/search' element={<SearchPage />} />
                  <Route path='/cars/:id' element={<CarDetailPage />} />
                  <Route path='/spare-parts' element={<SparePartsPage />} />
                  <Route path='/services' element={<ServicesPage />} />
                  <Route path="*" element={<NoMatch />} />
              </Routes>
          </Suspense>
      </Router>
  );
}

export default App;
