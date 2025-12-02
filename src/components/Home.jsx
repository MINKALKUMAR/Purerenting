import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  const containerStyle = {
    minHeight: "80vh",
    width: "100%",
    backgroundColor: "#B2E1FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    paddingTop: "80px",
  };

  const boxStyle = {
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,0.4)",
    borderRadius: isMobile ? "18px" : "22px",
    padding: isMobile ? "25px 18px" : "40px 35px",
    textAlign: "center",
    maxWidth: "750px",
    width: isMobile ? "95%" : "80%",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  };

  const logoStyle = {
    width: isMobile ? "65px" : "100px",
    marginBottom: isMobile ? "12px" : "15px",
    filter: "drop-shadow(0px 3px 6px rgba(0,0,0,0.3))",
  };

  const titleStyle = {
    fontSize: isMobile ? "24px" : "36px",
    fontWeight: "800",
    color: "#1A365A",
    marginBottom: isMobile ? "8px" : "10px",
    lineHeight: isMobile ? "1.2" : "1.3",
  };

  const textStyle = {
    fontSize: isMobile ? "12px" : "14px",
    color: "#1A365A",
    marginBottom: isMobile ? "20px" : "25px",
    lineHeight: isMobile ? "1.4" : "1.5",
    padding: isMobile ? "0 5px" : "0",
  };

  const buttonContainer = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "12px" : "15px",
    width: "100%",
    justifyContent: "center",
    marginTop: isMobile ? "8px" : "10px",
  };

  const buttonStyleCommon = {
    flex: 1,
    padding: isMobile ? "14px 12px" : "12px",
    borderRadius: "10px",
    fontSize: isMobile ? "14px" : "16px",
    fontWeight: "600",
    cursor: "pointer",
    border: "none",
    minHeight: isMobile ? "50px" : "auto",
    transition: "all 0.2s ease",
  };

  const button1Style = {
    ...buttonStyleCommon,
    backgroundColor: "#1A365A",
    color: "white",
  };

  const button2Style = {
    ...buttonStyleCommon,
    backgroundColor: "#F7D083",
    color: "#1A365A",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <img
          src="/MainLogo.png"
          alt="PureRenting Logo"
          loading="lazy"
          style={logoStyle}
        />

        <h1 style={titleStyle}>PureRenting</h1>

        <p style={textStyle}>
          Find your Rentals Properties in the best locations. Filter by
          preferences to find exactly what you need.
        </p>

        {/* Buttons */}
        <div style={buttonContainer}>
          {/* OWNER FORM BUTTON */}
          <button
            style={button1Style}
            onClick={() => navigate("/owner-registration")}
            onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            {isMobile
              ? "List Your Property"
              : "List Your Property – Get Tenants Fast!"}
          </button>

          {/* TENANT FORM BUTTON */}
          <button
            style={button2Style}
            onClick={() => navigate("/tenant-registration")}
            onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            {isMobile
              ? "Looking for Property?"
              : "Looking for Property? Fill Tenant Form"}
          </button>
        </div>

        {isMobile && (
          <p
            style={{
              fontSize: "12px",
              color: "#1A365A",
              marginTop: "20px",
              opacity: "0.8",
            }}
          >
            Tap buttons above to get started
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
