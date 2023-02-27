import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./components/Header";
import store, {persistor} from "./utils/store";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Footer from "./components/Footer";
import Account from "./components/Auth/Account";
import LikedVideos from "./components/Private Pages/LikedVideos";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Body />
        <Footer/>
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PersistGate loading={null} persistor={persistor}>
    <App /></PersistGate>),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "signup",
        element: <Signup/>,
      },
      {
        path: "account",
        element: <Account/>,
      },
      {
        path: "likedVideos",
        element: <LikedVideos/>
      }
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
