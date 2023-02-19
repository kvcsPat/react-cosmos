import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../home/Page";
import ApodPage from "../apod/Page";
import SearchPage from "../search/Page";
import SearchResults from "../search/Results";
import GalleryPage from "../gallery/Page";
import AboutPage from "../about/Page";

export default function Routing() {
  return (
    <BrowserRouter basename="/react-cosmos">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apod" element={<ApodPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/apod/date=:value" element={<SearchResults />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
