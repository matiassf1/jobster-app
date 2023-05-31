import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Error, Register, Dashboard } from "./pages";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='landing' element={<Landing />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <ToastContainer position='top-center' />
      </BrowserRouter>
  );
};
