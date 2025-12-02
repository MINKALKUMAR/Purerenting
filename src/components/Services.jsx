import React from "react";

function Services() {
  return (
    <div
      style={{
        paddingTop: "110px",
        background: "#B2E1FF",
        minHeight: "100vh",
        padding: "20px",
        marginTop: "60px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "800",
            color: "#1A365A",
          }}
        >
          Our Services
        </h1>

        <p
          style={{
            marginTop: "10px",
            color: "#1A365A",
            fontSize: "16px",
            marginBottom: "40px",
          }}
        >
          Premium rental solutions designed for tenants and property owners.
        </p>

        {/* SERVICE CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "16px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            }}
          >
            <h2 style={{ color: "#1A365A", fontWeight: "700" }}>
              🏠 Verified Properties
            </h2>
            <p style={{ marginTop: "12px", color: "#1A365A" }}>
              All listings are verified with real photos. Zero fake listings.
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "16px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            }}
          >
            <h2 style={{ color: "#1A365A", fontWeight: "700" }}>
              👤 Tenant Help
            </h2>
            <p style={{ marginTop: "12px", color: "#1A365A" }}>
              We assist tenants in choosing the best rooms, PGs, or flats.
            </p>
          </div>
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "16px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            }}
          >
            <h2 style={{ color: "#1A365A", fontWeight: "700" }}>
              🛠️ End-to-End Support
            </h2>
            <p style={{ marginTop: "12px", color: "#1A365A" }}>
              From inquiry to deal closure—we assist you throughout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
