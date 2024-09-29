import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import BottomNav from "./components/common/BottomNav";
import Shop from "./pages/Shop";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
        </Routes>
        <BottomNav />
    </BrowserRouter>
  );
};

export default App;
