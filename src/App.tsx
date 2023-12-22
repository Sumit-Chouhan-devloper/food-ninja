import React from "react";
import 'animate.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Blog from "./views/Blog";
import About from "./components/About";

const MyComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog/" element={<Blog />} />
        <Route path="/Blog/:id" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyComponent;
