import './index.css';

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import App from './App';
import SplashScreen from './routes/SplashScreen'; 
import LoginRegisterScreen from './routes/LoginRegisterScreen';
import LoginScreen from './routes/LoginScreen';
import RegisterScreen from './routes/RegisterScreen';
import MainScreen from './routes/MainScreen';
import NotifyScreen from './routes/NotifyScreen';
import ValidateScreen from './routes/ValidateScreen';

const DelayComponentTransition: React.FC<{ from: React.ComponentType<any>, to: string, delay: number }> = ({ from: FromComponent, to, delay }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(to);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [ to, delay, navigate]);

  return FromComponent ? <FromComponent /> : null;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <DelayComponentTransition 
        from={SplashScreen} 
        to="/access" 
        delay={2000} />
      },
      {
        path: '/access',
        element: <LoginRegisterScreen />,
      },
      {
        path: '/login',
        element: <LoginScreen />,
      },
      {
        path: '/register',
        element: <RegisterScreen />,
      },
      {
        path: '/main',
        element: <MainScreen />,
      },
      {
        path: '/notify',
        element: <NotifyScreen />,
      },
      {
        path: '/validate/:id',
        element: <ValidateScreen />,
      }
    ]
  }
]
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
