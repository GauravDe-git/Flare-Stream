import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <>
      <h1 className="p-2 bg-green-300">Hello</h1>
    </>
  );
};

root.render(<App />);
