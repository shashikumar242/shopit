import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Provider } from "react-redux";
import App from './App';
import { ToastContainer,Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import store from './store';


const queryClient = new QueryClient();

const toastOptions = {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: "dark",
  transition : Zoom
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store} > 
  <QueryClientProvider client={queryClient}> 
    <App />
    <ReactQueryDevtools initialIsOpen={true} />
    <ToastContainer {...toastOptions}/>
    </QueryClientProvider>
    </Provider>
);
