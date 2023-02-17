import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import store from "./utils/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Sidebar />
      </Provider>
    </div>
  );
};

root.render(<App />);
