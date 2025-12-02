import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

function Footer() {
  const wrapperStyle = {
    width: "100%",
    background: "linear-gradient(to right, #0f2744, #1A365A, #0f2744)",
    color: "white",
    padding: "50px 20px 20px 20px",
    marginTop: "40px",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "40px",
  };

  const columnStyle = {
    flex: "1 1 280px",
    minWidth: "250px",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#B2E1FF",
  };

  const lineStyle = {
    width: "40px",
    height: "3px",
    backgroundColor: "#F7D083",
    marginBottom: "15px",
  };

  const textStyle = {
    fontSize: "14px",
    lineHeight: "1.6",
    marginBottom: "20px",
    color: "#E8EEF5",
  };

  const socialRow = {
    display: "flex",
    gap: "12px",
    marginTop: "10px",
  };

  const socialIcon = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "1px solid #F7D083",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    color: "#F7D083",
    cursor: "pointer",
    transition: "0.3s",
  };

  const linkList = {
    listStyle: "none",
    padding: 0,
  };

  const linkItem = {
    marginBottom: "10px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#E8EEF5",
    fontSize: "14px",
    transition: "0.3s",
  };

  const contactRow = {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
    fontSize: "14px",
    alignItems: "center",
  };

  const bottomBar = {
    textAlign: "center",
    color: "#B2E1FF",
    fontSize: "13px",
    marginTop: "40px",
    paddingTop: "15px",
    borderTop: "1px solid #28486e",
  };

  return (
    <footer style={wrapperStyle}>
      <div style={containerStyle}>
        
        {/* ----- Column 1: Brand ----- */}
        <div style={columnStyle}>
          <h3 style={titleStyle}>PureRenting</h3>
          <div style={lineStyle}></div>

          <p style={textStyle}>
            Find your perfect property in the best locations. We connect tenants 
            with property owners for a seamless renting experience.
          </p>

          <div style={socialRow}>
            <a 
              href="https://www.facebook.com/profile.php?id=61571604236624" 
              target="_blank" 
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div style={socialIcon}><FaFacebookF /></div>
            </a>

            <a 
              href="https://www.instagram.com/pure_renting/" 
              target="_blank" 
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div style={socialIcon}><FaInstagram /></div>
            </a>

            <a 
              href="https://wa.me/+919518159625" 
              target="_blank" 
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div style={socialIcon}><FaWhatsapp /></div>
            </a>

            <a 
              href="#" 
              target="_blank" 
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div style={socialIcon}><FaLinkedin /></div>
            </a>
          </div>
        </div>

        {/* ----- Column 2: Quick Links ----- */}
        <div style={columnStyle}>
          <h3 style={titleStyle}>Quick Links</h3>
          <div style={lineStyle}></div>

          <ul style={linkList}>
            <li style={linkItem}><a style={linkStyle} href="/">› Home</a></li>
            <li style={linkItem}><a style={linkStyle} href="/properties">› Find Property</a></li>
            <li style={linkItem}><a style={linkStyle} href="/owner-registration">› List Your Property</a></li>
            <li style={linkItem}><a style={linkStyle} href="/how-it-works">› How It Works</a></li>
            <li style={linkItem}><a style={linkStyle} href="/privacy-policy">› Privacy Policy</a></li>
          </ul>
        </div>

        {/* ----- Column 3: Contact ----- */}
        <div style={columnStyle}>
          <h3 style={titleStyle}>Contact Us</h3>
          <div style={lineStyle}></div>

          <div style={contactRow}>📍 <span>Sector 66, Mohali</span></div>
          <div style={contactRow}>📞 <span>+919518159625</span></div>
          <div style={contactRow}>✉️ <span>rentmyproperty.org.in@gmail.com</span></div>
          <div style={contactRow}>⏰ <span>Monday–Sunday: 9AM – 7PM</span></div>
        </div>

      </div>

      <div style={bottomBar}>
        © {new Date().getFullYear()} PureRenting. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
