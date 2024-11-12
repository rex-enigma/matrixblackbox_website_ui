import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home_page/home";
import Features from "./pages/features_page/featuresPage";
import Uses from "./pages/uses_page/usesPage";
import Business from "./pages/business_page/businessPage";
import Blog from "./pages/blog_page/blogPage";
import Resources from "./pages/resources_page/resourcesPage";
import NavBar from "./components/navbar/navbar";
import FormSection from "components/formSection/formSection";
import Footer from "components/footer/footer";

import ChatView from "components/chatView/chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./main.css";

import {
  BuyNowReadMoreLaptopPage,
  BuyNowReadMoreDesktopPage,
  BuyNowReadMoreTvPage,
} from "pages/buyNow_readMore_page/buyNowReadMorePage";

ReactDOM.render(
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/uses" component={Uses} />
      <Route path="/business" component={Business} />
      <Route path="/blog" component={Blog} />
      <Route path="/resources" component={Resources} />

      <Route path="/laptopBuyPage" component={BuyNowReadMoreLaptopPage} />
      <Route path="/desktopBuyPage" component={BuyNowReadMoreDesktopPage} />
      <Route path="/tvBuyPage" component={BuyNowReadMoreTvPage} />
    </Switch>
    <FormSection />
    <Footer />
    <ChatView />
  </Router>,
  document.getElementById("root")
);
