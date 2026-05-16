import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import OurTeam from "./pages/OurTeam";
import Okhaldhunga from "./pages/Okhaldhunga";
import Solukhumbu from "./pages/Solukhumbu";
import ConnectUs from "./pages/ConnectUs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="ourTeam" element={<OurTeam />} />
          <Route path="solukhumbu" element={<Solukhumbu />} />
          <Route path="okhaldhunga" element={<Okhaldhunga />} />
          <Route path="connect" element={<ConnectUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
