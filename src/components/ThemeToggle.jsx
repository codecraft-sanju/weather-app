import React from "react";

function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="mb-4 px-4 py-2 bg-gray-800 text-white rounded-md"
      onClick={toggleTheme}
    >
      Toggle {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeToggle;
