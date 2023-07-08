import React from "react";
import { createRoot } from 'react-dom/client';
import HarryPotter from "./HarryPotter";
import "./index.css";

const App = () => (<HarryPotter />);
const root = createRoot(document.getElementById("app"));
root.render(<App />);
