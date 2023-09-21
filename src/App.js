import { BrowserRouter, Routes, Route } from "react-router-dom";

import './assets/App.css';
import Layout from "./layouts/Layout";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Demat from "./pages/Demat";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Review from "./pages/Review";
import SocialMedia from "./pages/SocialMedia";
import Training from "./pages/Training";
import Video from "./pages/Video";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="social" element={<SocialMedia />} />
          <Route path="training" element={<Training />} />
          <Route path="video" element={<Video />} />
          <Route path="demat" element={<Demat />} />
          <Route path="reviews" element={<Review />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
