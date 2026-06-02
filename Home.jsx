import React from "react";
import pass from "../assets/pass.png";
import Footer from "./Footer";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right,#0A3D62,#3C91E6)",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: "120px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            padding: "30px",
            borderRadius: "15px",
            width: "600px",
          }}
        >
          <h1 style={{ fontSize: "38px" }}>
            Passport Application Assistance Portal
          </h1>

          <h3>Your Passport Journey Starts Here</h3>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
            }}
          >
            Apply for passports, upload documents,
            book appointments and track application
            status easily through our portal.
          </p>

        </div>

        <img
          src={pass}
          alt="Passport"
          style={{
            width: "280px",
            borderRadius: "15px",
          }}
        />
      </div>

      <div style={{ marginTop: "120px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;