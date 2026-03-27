import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserDetail from "./pages/UserDetail";

export default function App() {
  return (
    <BrowserRouter basename="/user-data">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
