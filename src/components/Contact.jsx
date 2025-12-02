import React from "react";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "+919518159625";
    const message = "Hello, I want to contact PureRenting.";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div
      style={{
        paddingTop: "110px",
        background: "#B2E1FF",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        marginTop: "60px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          maxWidth: "650px",
          width: "100%",
          borderRadius: "16px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "800",
            color: "#1A365A",
          }}
        >
          Contact Us
        </h1>

        <p style={{ textAlign: "center", color: "#1A365A", marginTop: "12px" }}>
          We’d love to hear from you. Reach out anytime!
        </p>

        {/* FORM */}
        <form style={{ marginTop: "25px" }} onSubmit={handleSubmit}>
          <label style={{ color: "#1A365A", fontWeight: "700" }}>
            Your Name
          </label>
          <input
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "1px solid #9BB4C6",
            }}
            placeholder="Enter your name"
          />

          <label style={{ color: "#1A365A", fontWeight: "700" }}>
            Phone Number
          </label>
          <input
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "1px solid #9BB4C6",
            }}
            placeholder="Enter your phone number"
          />

          <label style={{ color: "#1A365A", fontWeight: "700" }}>
            Message
          </label>
          <textarea
            style={{
              width: "100%",
              padding: "12px",
              height: "120px",
              marginTop: "5px",
              borderRadius: "10px",
              border: "1px solid #9BB4C6",
            }}
            placeholder="Write your message..."
          ></textarea>

          <button
            type="submit"
            style={{
              width: "100%",
              background: "#1A365A",
              color: "white",
              padding: "14px",
              borderRadius: "12px",
              fontWeight: "700",
              fontSize: "16px",
              border: "none",
              marginTop: "18px",
            }}
          >
            Send Message
          </button>
        </form>

        {/* CONTACT DETAILS */}
        <div
          style={{
            marginTop: "30px",
            textAlign: "center",
            color: "#1A365A",
          }}
        >
          <p>📍 Sector 66, Mohali</p>
          <p>📞 +919518159625</p>
          <p>✉️ rentmyproperty.org.in@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
