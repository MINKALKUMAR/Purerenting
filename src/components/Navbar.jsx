import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  const [hoverBtn1, setHoverBtn1] = useState(false);
  const [hoverBtn2, setHoverBtn2] = useState(false);

  const [hoverFB, setHoverFB] = useState(false);
  const [hoverIG, setHoverIG] = useState(false);
  const [hoverWA, setHoverWA] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const premiumButton = (hover) => ({
    padding: "8px 20px",
    background: "#1A365A",
    color: "white",
    borderRadius: "22px",
    border: "2px solid #F7D083",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "0.9rem",
    animation: "goldGlow 3s infinite",
    transition: "0.3s",
    boxShadow: hover
      ? "0 0 16px #F7D083, 0 0 26px #B2E1FF"
      : "0 0 5px #F7D08380",
  });

  const iconStyle = (hover) => ({
    fontSize: "1.2rem",
    color: hover ? "#F7D083" : "#1A365A",
    cursor: "pointer",
    transition: "0.3s",
  });

  // Clean Hamburger
  const hamburgerBox = {
    width: "32px",
    height: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer",
    zIndex: 20000,
  };

  const bar = {
    width: "100%",
    height: "3px",
    background: "#1A365A",
    borderRadius: "3px",
    transition: "0.3s",
  };

  const styles = {
    navbar: {
      width: "100%",
      background: "#58BBF8",
      padding: "10px 18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 999,
    },

    leftWrapper: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
    },

    socialWrapper: {
      display: "flex",
      gap: "12px",
      alignItems: "center",
    },

    centerLinks: {
      display: isMobile ? "none" : "flex",
      gap: "24px",
      fontWeight: 600,
      color: "#1A365A",
      fontSize: "0.95rem",
      cursor: "pointer",
    },

    rightButtons: {
      display: isMobile ? "none" : "flex",
      gap: "12px",
    },

    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.45)",
      backdropFilter: "blur(3px)",
      zIndex: 9000,
      display: open ? "block" : "none",
    },

    mobileMenu: {
      position: "fixed",
      top: "70px",
      right: "20px",
      background: "#58BBF8",
      padding: "14px",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      display: open ? "flex" : "none",
      flexDirection: "column",
      gap: "14px",
      zIndex: 15000,
    },
  };

  return (
    <>
      <style>
        {`
        @keyframes goldGlow {
          0% { box-shadow: 0 0 5px #F7D08380; }
          50% { box-shadow: 0 0 12px #F7D083; }
          100% { box-shadow: 0 0 5px #F7D08380; }
        }
      `}
      </style>

      <nav style={styles.navbar}>
        
        {/* LEFT SIDE */}
        <div style={styles.leftWrapper}>
          <img
            src="/MainLogo.png"
            alt="Logo"
            style={{ height: "42px", cursor: "pointer" }}
            onClick={() => navigate("/")}
          />

          <div style={styles.socialWrapper}>
            <a href="https://www.facebook.com/profile.php?id=61571604236624" target="_blank">
              <FaFacebookF style={iconStyle(hoverFB)} />
            </a>
            <a href="https://www.instagram.com/pure_renting/" target="_blank">
              <FaInstagram style={iconStyle(hoverIG)} />
            </a>
            <a href="https://wa.me/+919518159625" target="_blank">
              <FaWhatsapp style={iconStyle(hoverWA)} />
            </a>
          </div>
        </div>

        {/* CENTER LINKS (DESKTOP) */}
        <div style={styles.centerLinks}>
          <span onClick={() => navigate("/")}>Home</span>
          <span onClick={() => navigate("/about")}>About</span>
          <span onClick={() => navigate("/services")}>Services</span>
          <span onClick={() => navigate("/contact")}>Contact</span>
        </div>

        {/* DESKTOP BUTTONS */}
        {!isMobile && (
          <div style={styles.rightButtons}>
            <button
              style={premiumButton(hoverBtn1)}
              onMouseEnter={() => setHoverBtn1(true)}
              onMouseLeave={() => setHoverBtn1(false)}
              onClick={() => navigate("/owner-registration")}
            >
              Property Owner Registration
            </button>

            <button
              style={premiumButton(hoverBtn2)}
              onMouseEnter={() => setHoverBtn2(true)}
              onMouseLeave={() => setHoverBtn2(false)}
              onClick={() => navigate("/tenant-registration")}
            >
              Tenant Information Form
            </button>
          </div>
        )}

        {/* MOBILE HAMBURGER */}
        {isMobile && (
          <div style={hamburgerBox} onClick={() => setOpen(!open)}>
            <div style={{ ...bar, transform: open ? "rotate(45deg) translateY(10px)" : "none" }}></div>
            <div style={{ ...bar, opacity: open ? 0 : 1 }}></div>
            <div style={{ ...bar, transform: open ? "rotate(-45deg) translateY(-10px)" : "none" }}></div>
          </div>
        )}

      </nav>

      {/* OVERLAY */}
      {isMobile && open && (
        <div style={styles.overlay} onClick={() => setOpen(false)} />
      )}

      {/* MOBILE MENU */}
      {isMobile && (
        <div style={styles.mobileMenu}>
          <span onClick={() => { navigate("/"); setOpen(false); }}>Home</span>
          <span onClick={() => { navigate("/about"); setOpen(false); }}>About</span>
          <span onClick={() => { navigate("/services"); setOpen(false); }}>Services</span>
          <span onClick={() => { navigate("/contact"); setOpen(false); }}>Contact</span>

          <button
            style={premiumButton(false)}
            onClick={() => {
              setOpen(false);
              navigate("/owner-registration");
            }}
          >
            Property Owner Registration
          </button>

          <button
            style={premiumButton(false)}
            onClick={() => {
              setOpen(false);
              navigate("/tenant-registration");
            }}
          >
            Tenant Information Form
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
