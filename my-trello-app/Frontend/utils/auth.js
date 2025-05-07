export const isAuthenticated = () => {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('token');
  };
  
  export const redirectIfNotAuthenticated = (router) => {
    if (!isAuthenticated()) router.push('/login');
  };