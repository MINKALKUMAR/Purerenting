import React from "react";

function About() {
  return (
    <div
      style={{
        paddingTop: "110px",
        background: "#B2E1FF",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* MAIN CARD */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "white",
          padding: "30px",
          borderRadius: "18px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          marginTop: "60px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "800",
            color: "#1A365A",
            textAlign: "center",
          }}
        >
          About PureRenting
        </h1>

        <p
          style={{
            marginTop: "18px",
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#1A365A",
            textAlign: "center",
          }}
        >
          PureRenting is a modern rental marketplace designed to connect tenants
          with property owners seamlessly. We focus on transparency, convenience,
          and trust.
        </p>

        {/* TWO COLUMN SECTION */}
        <div
          style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#F7D083",
              padding: "20px",
              borderRadius: "14px",
            }}
          >
            <h3 style={{ color: "#1A365A", fontWeight: "700" }}>
              🏡 Our Mission
            </h3>
            <p style={{ marginTop: "10px", color: "#1A365A" }}>
              To offer fast, reliable, and transparent rental experiences for
              both tenants and owners.
            </p>
          </div>

          <div
            style={{
              background: "#F7D083",
              padding: "20px",
              borderRadius: "14px",
            }}
          >
            <h3 style={{ color: "#1A365A", fontWeight: "700" }}>
              🚀 What We Do
            </h3>
            <p style={{ marginTop: "10px", color: "#1A365A" }}>
              We verify properties, guide tenants, and help owners promote their
              listings effectively.
            </p>
          </div>
        </div>

        {/* VISION */}
        <div
          style={{
            marginTop: "40px",
            background: "#1A365A",
            padding: "20px",
            borderRadius: "14px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "white", fontWeight: "700" }}>⭐ Our Vision</h3>
          <p
            style={{
              color: "white",
              marginTop: "10px",
              fontSize: "15px",
              lineHeight: "1.6",
            }}
          >
            To become India’s most trusted and preferred rental platform.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
