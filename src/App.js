import React, { useState } from "react";
import DarkVeil from "./DarkVeil";
import "./App.css";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaDiscord,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const links = [
  {
    name: "Meu Instagram",
    url: "https://www.instagram.com/medeiross.dev/",
    done: false,
    icon: <FaInstagram className="icon" />,
  },
  {
    name: "Meu GitHub",
    url: "https://github.com/Leh-meh",
    done: false,
    icon: <FaGithub className="icon" />,
  },
  {
    name: "Meu LinkedIn",
    url: "https://www.linkedin.com/in/leticia-medeiros-204809309/",
    done: false,
    icon: <FaLinkedin className="icon" />,
  },
  {
    name: "Meu WhatsApp",
    url: "https://wa.me/5511971918268?text=Olá%20Letícia%2C%20vi%20seu%20perfil%20e%20gostaria%20de%20conversar!",
    done: false,
    icon: <FaWhatsapp className="icon" />,
  },
  {
    name: "Meu Discord",
    url: "https://discord.gg/WgJ7p7kJ",
    done: false,
    icon: <FaDiscord className="icon" />,
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`hero ${darkMode ? "dark-theme" : "light-theme"}`}>
      {/* DarkVeil background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <DarkVeil
          hueShift={darkMode ? 20 : 220} // Ajuste para tons azulados
          noiseIntensity={0.03}
          scanlineIntensity={darkMode ? 0.2 : 0.07}
          speed={0.3}
          baseColor={darkMode ? "#0f0f1a" : "#f8fafc"}
         colorPalette={
  darkMode 
    ? ['#00a2ff', '#a78bfa', '#00ffaa']  // Azul, roxo e verde
    : ['#dbeafe', '#bfdbfe', '#93c5fd']   // Azuis claros
}
        />
      </div>

      {/* Linktree box */}
      <div className="linktree-box">
        {/* Botão de alternar tema dentro da box */}
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? (
            <FaSun className="theme-icon" />
          ) : (
            <FaMoon className="theme-icon" />
          )}
        </button>

        <img
          src="minha-foto.jpg"
          alt="Foto de perfil"
          className="profile-pic"
        />
        <h1>@medeiross.dev</h1>

        <h2>🚀 Conecte-se comigo!</h2>

        <p>
          Sou desenvolvedora front-end apaixonada por criar experiências
          digitais. Confira meus projetos, redes sociais e entre em contato por
          aqui. 💻✨
        </p>

        <div className="links-list">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`link-button ${link.done ? "done" : ""}`}
            >
              <span className="icon-container">
                {React.cloneElement(link.icon, {
                  style: {
                    color: darkMode ? "inherit" : "#4a5568",
                  },
                })}
                {link.done && <span className="checkmark">✓</span>}
              </span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
