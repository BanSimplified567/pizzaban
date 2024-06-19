import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import Account from './components/UI/Account/Account.jsx';
import Menu from './components/UI/Order/Menu.jsx';
import About from './components/UI/Page/About.jsx';
import Contact from './components/UI/Page/Contact.jsx';
import Home from './components/UI/Page/Home.jsx';
import Navbar from './components/UI/Page/Navbar.jsx';
import Service from './components/UI/Page/Service.jsx';
import Cart from './components/UI/Order/Cart/Cart.jsx';
import pizzaReducer from './components/UI/Order/Actions/PizzaSlice.jsx';

function RootLayout() {
   return (
      <div className="root">
         <Navbar />

         <main className="main">
            <Outlet />
         </main>
      </div>
   );
}

const router = createBrowserRouter([
   {
      element: <RootLayout />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            path: '/menu',
            element: <Menu />,
         },
         {
            path: '/service',
            element: <Service />,
         },
         {
            path: '/about',
            element: <About />,
         },
         {
            path: '/contact',
            element: <Contact />,
         },
         {
            path: '/account',
            element: <Account />,
         },
         {
            path: '/cart',
            element: <Cart />,
         },
      ],
   },
]);
function logErrorToService(error, info) {
   // Use your preferred error logging service
   console.error('Caught an error:', error, info);
}
function ErrorFallback({ error, resetErrorBoundary }) {
   return (
      <div role="alert">
         <p>Something went wrong:</p>
         <pre>{error.message}</pre>
         <button onClick={resetErrorBoundary}>Try again</button>
      </div>
   );
}

const store = configureStore({
   reducer: {
      pizza: pizzaReducer,
   },
});

function App() {
   return (
      <Provider store={store}>
         <ErrorBoundary FallbackComponent={ErrorFallback} onError={logErrorToService}>
            <RouterProvider router={router}></RouterProvider>
         </ErrorBoundary>
      </Provider>
   );
}

export default App;
