import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import OurTeam from "./pages/OurTeam";
import Okhaldhunga from "./pages/Okhaldhunga";
import Solukhumbu from "./pages/Solukhumbu";
import Kathmandu from "./pages/Kathmandu";
import ConnectUs from "./pages/ConnectUs";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import News from "./pages/News";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="ourTeam" element={<OurTeam />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="solukhumbu" element={<Solukhumbu />} />
          <Route path="okhaldhunga" element={<Okhaldhunga />} />
          <Route path="kathmandu" element={<Kathmandu />} />
          <Route path="connect" element={<ConnectUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// rgba(255,255,255,0.92);
