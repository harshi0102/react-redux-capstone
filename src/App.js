import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CountryInfo from './components/CountryInfo';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import { getWeatherAPI } from './redux/Country/Country';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeatherAPI());
  }, [dispatch]);
  return (
    <div className="appcontainer">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:country" element={<CountryInfo />} />
      </Routes>
    </div>
  );
}

export default App;
