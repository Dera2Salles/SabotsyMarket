import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/landingPage";
import { ProducerDashboardPage } from "../pages/ProducerDashBoard";
import { AuthLayout } from "../pages/Login";

export const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<ProducerDashboardPage />} />
        <Route path="/login" element={<AuthLayout />} />
      </Routes>
    </BrowserRouter>
  );
};
