import { useEffect } from 'react';
import { AppRouting } from './components/AppRouting';
import { NavPanel } from './components/header/Navbar';
import { useAppDispatch } from './store/hooksStore';
import { checkUser } from './store/actionCreators/actionCreator';
import './App.scss';
import { usePreloader } from './hooks/usePreloader';
import { Footer } from './components/footer/Footer';

function App() {
  const preloader = usePreloader();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <div className="App">
      {preloader}
      <NavPanel />
      <div style={{ minHeight: '80vh' }}>
        <AppRouting />
      </div>
      <Footer />
    </div>
  );
}

export default App;
