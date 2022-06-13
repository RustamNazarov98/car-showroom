import React, {lazy, Suspense, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/styles/global.scss';
import {Login} from "./components";
import {useActions} from "./hooks/useActions";

const HomePage = lazy(() => import('./pages/HomePage'));
const CarsPage = lazy(() => import('./pages/CarsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const CarDetailPage = lazy(() => import('./pages/CarDetailPage'));
const SparePartsPage = lazy(() => import('./pages/SparePartsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AddPage = lazy(() => import('./pages/AddPage'));
const EditPage = lazy(() => import('./pages/EditPage'));
const MyPublicationPage = lazy(() => import('./pages/MyPublicationPage'));
const NoMatch = lazy(() => import('./pages/NoMatch'));

function App() {
    const {loginUser} = useActions();
    const phone = localStorage.getItem('phone_number');

    useEffect(() => {
        if(phone){loginUser(phone)}
    },[])

  return (
      <Router>
          <Suspense fallback={<p> Loading...</p>}>
              <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/about' element={<AboutPage />} />
                  <Route path='/search' element={<SearchPage />} />
                  <Route path='/cars' element={<CarsPage />} />
                  <Route path='/cars' element={<CarsPage />} />
                  <Route path='/cars/:id' element={<CarDetailPage />} />
                  <Route path='/spare-parts' element={<SparePartsPage />} />
                  <Route path='/services' element={<ServicesPage />} />
                  <Route path='/publication/add' element={<AddPage />} />
                  <Route path='/publication/edit/:id' element={<EditPage />} />
                  <Route path='/publication/my' element={<MyPublicationPage />} />
                  <Route path="*" element={<NoMatch />} />
              </Routes>
              <Login/>
          </Suspense>
      </Router>
  );
}

export default App;
