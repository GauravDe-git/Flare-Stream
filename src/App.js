import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./components/Header";
import store from "./utils/store";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";


const root = ReactDOM.createRoot(document.getElementById("root"));



const App = () => {
  return (
      <Provider store={store}>
      <div>
        <Header/>
        <Body/>
      </div>
        
      </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [{
      path: "/",
      element: <MainContainer/>,
    },
    {
      path: "watch",
      element: <WatchPage/>,
    }]
  }
])

root.render(<RouterProvider router={appRouter}/>);
