import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import homeimg from "../../images/homeimg.jpeg";
import "../../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${homeimg})` }}>
        <div className="headerContainer">
          <h1>Fast & Affordable Home Service </h1>
          <p>Get your branded & non-branded home
             appliances repaired by expert technicians @ your doorstep.
          </p>
          <Link to="/menu">
            <button>SERIVICES</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
