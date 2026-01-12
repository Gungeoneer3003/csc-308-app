// src/main.jsx
import React, { useState } from "react";
import ReactDOMClient from "react-dom/client";
import MyApp from "./MyApp";
import "./main.css";

// src/MyApp.jsx (empty state)
const [characters, setCharacters] = useState([]);

// Create the container
const container = document.getElementById("root");

// Create a root
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the Root
root.render(<MyApp />);