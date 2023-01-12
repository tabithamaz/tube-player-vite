import React, {useContext} from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
// import Home from "./Home";
import Home from "./mycomponents/Home";
import Connexion from "./Connexion";
import Header from "./Header";
import Sidebar from "./Components/Sidebar";
import PlayVideo from "./mycomponents/PlayVideo";
import Subscription from "./mycomponents/Subscription";
import SubscriptionPlayList from "./mycomponents/SubscriptionPlayList";
import Search from "./mycomponents/Search";
import {ChangeContexte} from "./ChangeContexte";
import { ContextProvider } from "./ChangeContexte";

function App() {
  const {user} = useContext(ChangeContexte);



  console.log("Logged user : ", user)

  const Layout = ({ children }) => {
    
    return (
      
      <>
        <Header />
        <div className="home">
          <Sidebar />
          <div className="app_page">{children}</div>
        </div>
      </>
    );
  };
  return (
    
    <ContextProvider>
       <BrowserRouter>
       
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/playvideo/:id"
          element={
            <Layout>
              <PlayVideo />
            </Layout>
          }
        />
        <Route
          path="/subscription/"
          element={
            <Layout>
              <Subscription />
            </Layout>
          }
        />
        <Route
          path="/subscriptionplaylist/:id"
          element={
            <Layout>
              <SubscriptionPlayList />
            </Layout>
          }
        />
         <Route
          path="/search/:id"
          element={
            <Layout>
              <Search/>
            </Layout>
          }
        />
      </Routes>
      </BrowserRouter>
      </ContextProvider>
  
  );
}

export default App;
