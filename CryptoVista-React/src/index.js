import React from "react";
import ReactDOM from "react-dom/client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TransactionsProvider } from "./pages/Transact/context/Transactioncontext";
import WatchListContextProvider from "./pages/CryptoTrack/context/WatchListContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WatchListContextProvider>
    <TransactionsProvider>
      <BrowserRouter>
        <App />
        <Toaster />
        <ToastContainer />
      </BrowserRouter>
    </TransactionsProvider>
  </WatchListContextProvider>
);
