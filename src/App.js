import DemoPage from "./DemoPage";
import Layout from "./components/Layout";
import Calender1 from "./pages/Calendar1";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    const [doors, setDoors] = React.useState([]);
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/julereisen-til-atlantis" element={<Calender1 />} />
            <Route path="/demo" element={<DemoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }