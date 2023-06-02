import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Error, Register } from "./pages";
import { AddJobs, AllJobs, Profile, SharedLayout, Stats } from './pages/dashboard';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<Stats />} />
          <Route path="profile" element={<Profile />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJobs />} />

        </Route>
        <Route path='landing' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
};
