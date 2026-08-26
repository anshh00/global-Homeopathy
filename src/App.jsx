import React from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ExplorePage from "./pages/ExplorePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import JobsPage from "./pages/JobsPage.jsx";
import LeadersPage from "./pages/LeadersPage.jsx";
import MediaPage from "./pages/MediaPage.jsx";
import ResearchPage from "./pages/ResearchPage.jsx";
import SummitPage from "./pages/SummitPage.jsx";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      window.setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ block: "start" });
      }, 0);
      return;
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/summit" element={<SummitPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/leaders" element={<LeadersPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
