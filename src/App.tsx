import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LayoutHome from './pages/home/layoutHome'
import { useEffect, useRef } from 'react';

const queryClient = new QueryClient();

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    if (pathName === '/') {
      navigate('/categories/1');
    }
  }, [navigate]);

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<LayoutHome />} />
        <Route path='/categories/:categoryId' element={<LayoutHome />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
