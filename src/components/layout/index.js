import React from "react";
import { connect } from "react-redux";
import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Index = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Outlet className="main-content" />
      <Footer />
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
