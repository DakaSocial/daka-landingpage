import { Routes, Route } from "react-router-dom";

import Home from './pages/LandingPage';
import Policy from './pages/agreements/Policy';
import Service from './pages/agreements/Service';

export default function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/policy" element={<Policy />} />
      <Route index path="/service" element={<Service />} />
    </Routes>
  )
}