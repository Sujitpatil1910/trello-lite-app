// pages/_app.jsx
import '../styles/globals.css'; // Import global styles (e.g., Tailwind CSS)
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated, redirectIfNotAuthenticated } from '../utils/auth';

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Redirect user to login if not authenticated
    if (!isAuthenticated() && router.pathname !== '/login' && router.pathname !== '/register') {
      router.push('/login');
    }
  }, [router]);

  return <Component {...pageProps} />;
}

export default App;
