import React from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import DirectoryPage from "./pages/DirectoryPage.jsx";
import ExplorePage from "./pages/ExplorePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LeadersPage from "./pages/LeadersPage.jsx";
import MediaPage from "./pages/MediaPage.jsx";
import ResearchPage from "./pages/ResearchPage.jsx";
import SummitPage from "./pages/SummitPage.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/summit" element={<SummitPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/leaders" element={<LeadersPage />} />
          <Route path="/directory" element={<DirectoryPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
