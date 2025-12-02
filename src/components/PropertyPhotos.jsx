// src/PropertyPhotos.jsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function PropertyPhotos() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pid } = useParams();
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // We passed property in navigate state
  const property = location.state?.property;

  // ⭐⭐ WHATSAPP CONTACT FUNCTION ADDED
  const contactOwner = () => {
    const msg = `Hi, I am interested in Property ID: ${property?.pid}`;
    const url = `https://wa.me/+919518159625?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  if (!property) {
    return (
      <div
        style={{
          padding: isMobile ? "16px" : "20px",
          maxWidth: "960px",
          margin: isMobile ? "20px auto" : "40px auto",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <h2 style={{ 
          marginBottom: "10px", 
          color: "#1A365A",
          fontSize: isMobile ? "20px" : "24px"
        }}>
          Property not found
        </h2>
        <p style={{ 
          marginBottom: isMobile ? "14px" : "16px", 
          color: "#4A5568",
          fontSize: isMobile ? "14px" : "16px"
        }}>
          We couldn&apos;t load details for property ID: {pid}. Please go back
          to the listings and try again.
        </p>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: isMobile ? "12px 20px" : "10px 18px",
            borderRadius: "999px",
            border: "none",
            backgroundColor: "#1A365A",
            color: "#ffffff",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: isMobile ? "14px" : "14px",
          }}
        >
          ← Back to Properties
        </button>
      </div>
    );
  }

  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#B2E1FF",
    padding: isMobile ? "16px 10px 30px" : "24px 12px 40px",
    paddingTop: isMobile ? "70px" : "80px",
    display: "flex",
    justifyContent: "center",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  };

  const contentStyle = {
    width: "100%",
    maxWidth: "1100px",
    backgroundColor: "white",
    borderRadius: isMobile ? "12px" : "16px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    padding: isMobile ? "16px 18px 22px" : "20px 24px 26px",
  };

  const headerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
    alignItems: isMobile ? "flex-start" : "flex-start",
    marginBottom: isMobile ? "12px" : "16px",
    gap: isMobile ? "12px" : "0",
  };

  const titleStyle = {
    fontSize: isMobile ? "20px" : "22px",
    fontWeight: 700,
    color: "#1A365A",
    marginBottom: "4px",
    lineHeight: isMobile ? "1.2" : "1.3",
  };

  const locationStyle = {
    fontSize: isMobile ? "13px" : "14px",
    color: "#4A5568",
    marginBottom: isMobile ? "6px" : "0",
  };

  const tagRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: isMobile ? "6px" : "8px",
    marginTop: isMobile ? "6px" : "8px",
    marginBottom: isMobile ? "8px" : "0",
  };

  const tagStyle = {
    fontSize: isMobile ? "10px" : "11px",
    padding: isMobile ? "3px 8px" : "4px 9px",
    borderRadius: "999px",
    backgroundColor: "#B2E1FF",
    color: "#1A365A",
    whiteSpace: "nowrap",
  };

  const badgeStyle = {
    fontSize: isMobile ? "11px" : "12px",
    padding: isMobile ? "5px 12px" : "4px 10px",
    borderRadius: "999px",
    backgroundColor: "#F7D083",
    color: "#1A365A",
    alignSelf: isMobile ? "flex-start" : "auto",
  };

  const priceStyle = {
    fontSize: isMobile ? "16px" : "18px",
    fontWeight: 700,
    color: "#1A365A",
    marginTop: isMobile ? "4px" : "6px",
  };

  // ⭐⭐ PID HIGHLIGHT
  const pidStyle = {
    fontSize: isMobile ? "11px" : "12px",
    color: "#1A365A",
    fontWeight: 700,
    backgroundColor: "#FFF3B0",
    padding: "4px 8px",
    display: "inline-block",
    borderRadius: "6px",
    marginTop: "4px",
    marginBottom: isMobile ? "8px" : "0",
  };

  const descriptionStyle = {
    fontSize: isMobile ? "13px" : "14px",
    color: "#4A5568",
    marginTop: isMobile ? "8px" : "8px",
    lineHeight: isMobile ? "1.4" : "1.5",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(220px, 1fr))",
    gap: isMobile ? "10px" : "12px",
    marginTop: isMobile ? "16px" : "18px",
  };

  const imgStyle = {
    width: "100%",
    height: isMobile ? "200px" : "220px",
    objectFit: "cover",
    borderRadius: isMobile ? "10px" : "12px",
    boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
  };

  // ⭐⭐ WHATSAPP BUTTON ADDED (BIG)
  const whatsappBtnStyle = {
    marginTop: "18px",
    padding: isMobile ? "13px 20px" : "12px 18px",
    backgroundColor: "#25D366",
    color: "white",
    width: isMobile ? "100%" : "auto",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: isMobile ? "15px" : "14px",
    textAlign: "center",
  };

  const backBtnStyle = {
    marginTop: isMobile ? "16px" : "18px",
    padding: isMobile ? "12px 20px" : "9px 16px",
    borderRadius: "999px",
    border: "none",
    backgroundColor: "#1A365A",
    color: "#ffffff",
    cursor: "pointer",
    fontSize: isMobile ? "14px" : "13px",
    fontWeight: 600,
    width: isMobile ? "100%" : "auto",
    minHeight: isMobile ? "48px" : "auto",
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <div style={headerStyle}>
          <div style={{ width: "100%" }}>
            <div style={titleStyle}>{property.title}</div>
            <div style={locationStyle}>{property.location}</div>

            <div style={tagRowStyle}>
              <span style={tagStyle}>{property.type}</span>
              {property.features?.slice(0, isMobile ? 3 : 4).map((f) => (
                <span key={f} style={tagStyle}>
                  {f}
                </span>
              ))}
              {property.features?.length > (isMobile ? 3 : 4) && (
                <span style={tagStyle}>
                  +{property.features.length - (isMobile ? 3 : 4)}
                </span>
              )}
            </div>

            <div style={priceStyle}>{property.price} / month</div>

            {/* ⭐⭐ HIGHLIGHTED PID */}
            <div style={pidStyle}>
              Property ID: {property.pid}
            </div>

            <div style={descriptionStyle}>{property.description}</div>
          </div>

          <div>
            <span style={badgeStyle}>
              {property.gender === "for-all"
                ? "For All"
                : property.gender.charAt(0).toUpperCase() +
                  property.gender.slice(1)}
            </span>
          </div>
        </div>

        {/* ⭐⭐ WHATSAPP BUTTON BELOW DETAILS */}
        <button style={whatsappBtnStyle} onClick={contactOwner}>
          Contact on WhatsApp
        </button>

        <h3
          style={{
            fontSize: isMobile ? "15px" : "16px",
            fontWeight: 600,
            color: "#1A365A",
            marginBottom: isMobile ? "6px" : "8px",
            marginTop: isMobile ? "12px" : "16px",
          }}
        >
          Property Photos ({property.images?.length || 0})
        </h3>

        {isMobile && property.images?.length > 0 && (
          <div style={{
            fontSize: "12px",
            color: "#718096",
            marginBottom: "8px",
          }}>
            Tap and hold to save or share
          </div>
        )}

        <div style={gridStyle}>
          {property.images?.map((src, idx) => (
            <div key={idx} style={{ position: "relative" }}>
              <img
                src={src}
                alt={`${property.title} - photo ${idx + 1}`}
                style={imgStyle}
                loading="lazy"
              />
              {isMobile && (
                <div style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "white",
                  borderRadius: "50%",
                  width: "28px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}>
                  {idx + 1}
                </div>
              )}
            </div>
          ))}
        </div>

        <button 
          style={backBtnStyle} 
          onClick={() => navigate("/")}
        >
          ← Back to Properties
        </button>
        
        {isMobile && (
          <div style={{
            marginTop: "16px",
            padding: "12px",
            backgroundColor: "#F7F9FC",
            borderRadius: "8px",
            fontSize: "12px",
            color: "#718096",
            textAlign: "center",
          }}>
            <div style={{ fontWeight: "600", marginBottom: "4px" }}>
              Need more info?
            </div>
            <div>Contact us at: +919518159625</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PropertyPhotos;
