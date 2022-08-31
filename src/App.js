import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ForumIcon from "@mui/icons-material/Forum";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Buttons } from "./Buttons";
import { Cards } from "./Cards";
import { Dashboard } from "./Dashboard";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Login } from "./Login";
import { NavBar } from "./NavBar";
import { Register } from "./Register";

export var data = [
  {
    id: "1",
    name: "EARNINGS (MONTHLY)",
    icon: <CalendarTodayIcon fontSize="large" />,
    progress: "",
    content: "$40,000",
    color: "#4e73df",
  },
  {
    id: "2",
    name: "EARNINGS (ANNUAL)",
    icon: <CurrencyExchangeIcon fontSize="large" />,
    progress: "",
    content: "$215,000",
    color: "#1cc88a",
  },
  {
    id: "3",
    name: "TASKS",
    icon: <AssignmentIcon fontSize="large" />,
    progress: "50",
    content: "",
    color: "#36b9cc",
  },
  {
    id: "4",
    name: "PENDING REQUESTS",
    icon: <ForumIcon fontSize="large" />,
    progress: "",
    content: 18,
    color: "#f6c23e",
  },
];

function App() {
  const location = useLocation();
  const path = location.pathname;
  var newWindowList = ["/login", "/register"];
  return newWindowList.includes(path) ? (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  ) : (
    <div className="App">
      <NavBar />

      <div className="mainContainer">
        <Header />
        <Routes>
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
