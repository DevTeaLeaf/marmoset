import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Lottery from "./pages/Lottery";
import Shop from "./pages/Shop";
import Rules from "./pages/Rules";
import { Whitepaper } from "./pages/Whitepaper";
import { ScrollToTop } from "./components/ScrollToTop";
import Management from "./pages/Management";
import Info from "./pages/Info";
import { Share } from "./pages/Share";
import ManagementLottery from "./pages/ManagementLottery";
import { Winners } from "./pages/Winners";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lottery" element={<Lottery />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/info" element={<Info />} />
        <Route path="/management" element={<Management />} />
        <Route path="/management_lottery" element={<ManagementLottery />} />
        <Route path="/share" element={<Share />} />
        <Route path="/winners" element={<Winners />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
