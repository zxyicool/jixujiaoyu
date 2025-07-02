import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ApplyGuide from "@/pages/ApplyGuide";
import Materials from "@/pages/Materials";
import Application from "@/pages/Application";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => {},
  logout: () => {},
});

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyGuide />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/application" element={<Application />} />
      </Routes>
    </AuthContext.Provider>
  );
}
