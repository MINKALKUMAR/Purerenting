import React, { useEffect, useState } from "react";

function TenantRegistrationForm({ mode }) {
  const [open, setOpen] = useState(mode === "page");
  const [showPetDetails, setShowPetDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    if (mode === "popup") {
      const handler = () => setOpen(true);
      window.addEventListener("open-tenant-form", handler);
      return () => window.removeEventListener("open-tenant-form", handler);
    }
  }, [mode]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (mode === "popup" && !open) return null;

  // THEME
  const BLUE = "#B2E1FF";
  const GOLD = "#F7D083";
  const NAVY = "#1A365A";

  // Responsive Styles
  const pageWrapper = {
    paddingTop: isMobile ? "80px" : "110px",
    paddingLeft: isMobile ? "10px" : "20px",
    paddingRight: isMobile ? "10px" : "20px",
    paddingBottom: isMobile ? "30px" : "40px",
    background: BLUE,
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  };

  const overlayStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    backdropFilter: "blur(2px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    padding: isMobile ? "15px" : "20px",
  };

  const card = {
    width: "100%",
    maxWidth: "850px",
    background: "white",
    padding: isMobile ? "20px" : "30px",
    borderRadius: "16px",
    boxShadow: "0 8px 28px rgba(0,0,0,0.18)",
    margin: "0 auto",
  };

  const heading = {
    textAlign: "center",
    fontSize: isMobile ? "22px" : "28px",
    color: NAVY,
    fontWeight: "900",
    marginBottom: isMobile ? "18px" : "24px",
    lineHeight: "1.3",
  };

  const grid = {
    display: "grid",
    gap: isMobile ? "14px" : "18px",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(260px, 1fr))",
    marginBottom: isMobile ? "20px" : "24px",
  };

  const label = {
    fontWeight: "700",
    fontSize: isMobile ? "13px" : "14px",
    color: NAVY,
    marginBottom: "6px",
    display: "block",
  };

  const input = {
    width: "100%",
    padding: isMobile ? "10px" : "12px",
    borderRadius: "10px",
    border: "1px solid #9BB4C6",
    background: "#F9FCFF",
    fontSize: isMobile ? "14px" : "15px",
    boxSizing: "border-box",
  };

  const textarea = {
    ...input,
    height: isMobile ? "80px" : "90px",
    resize: "none",
  };

  const checkboxGrid = {
    padding: isMobile ? "12px" : "14px",
    borderRadius: "12px",
    border: "1px solid #9BB4C6",
    background: "#F9FCFF",
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(180px, 1fr))",
    gap: isMobile ? "8px" : "10px",
    marginBottom: isMobile ? "16px" : "18px",
  };

  const checkboxItem = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: isMobile ? "13px" : "14px",
    color: NAVY,
    fontWeight: "600",
  };

  const submitBtn = {
    width: "100%",
    padding: isMobile ? "12px" : "14px",
    background: NAVY,
    color: "white",
    fontWeight: "800",
    borderRadius: "12px",
    fontSize: isMobile ? "16px" : "18px",
    cursor: "pointer",
    border: "none",
    marginTop: isMobile ? "16px" : "18px",
    transition: "all 0.3s ease",
  };

  const closeBtn = {
    width: "100%",
    padding: isMobile ? "10px" : "12px",
    background: GOLD,
    color: NAVY,
    fontWeight: "800",
    borderRadius: "12px",
    fontSize: isMobile ? "14px" : "16px",
    cursor: "pointer",
    border: "none",
    marginTop: isMobile ? "8px" : "10px",
    transition: "all 0.3s ease",
  };

  // Pet options container
  const petOptionsContainer = {
    display: "flex",
    gap: isMobile ? "15px" : "20px",
    marginBottom: "10px",
    flexWrap: "wrap",
  };

  // Add hover effects for buttons
  const buttonHover = `
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    button:active {
      transform: translateY(0);
    }
  `;

  // SUBMIT HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const preferredLocations = data.getAll("preferredLocation").join(", ");
    const furnishing = data.getAll("furnishing").join(", ");
    const amenities = data.getAll("amenities").join(", ");

    const msg = `
🏠 *TENANT INFORMATION FORM*

👤 *PERSONAL INFORMATION*
Name: ${data.get("fullName")}
Age: ${data.get("age")}
Phone: ${data.get("phoneNumber")}
Email: ${data.get("email") || "-"}
Occupation: ${data.get("occupation")}
Native Place: ${data.get("nativePlace")}
Current Address: ${data.get("currentAddress") || "-"}

🏘️ *PROPERTY REQUIREMENTS*
Preferred Locations: ${preferredLocations || "-"}
Specific Areas: ${data.get("specificAreas") || "-"}
Occupancy Type: ${data.get("occupancyType")}
Property Type: ${data.get("propertyType")}
Budget: ₹${data.get("budget")}
Budget Flexibility: ${data.get("budgetFlexibility") || "-"}
Move-in Time: ${data.get("moveInTime")}
Stay Duration: ${data.get("stayDuration") || "-"}

🛋️ *Furnishing Preference*
${furnishing || "-"}

⭐ *Essential Amenities*
${amenities || "-"}

👥 *Family / Pets Info*
Family Size: ${data.get("familySize") || "-"}
Pets: ${data.get("pets")}
Pet Details: ${data.get("petDetails") || "-"}

📝 *Special Requirements*
${data.get("specialRequirements") || "-"}

🏠 *Previous Rental Experience*
${data.get("previousRental") || "-"}

📢 *How did you hear about us?*
${data.get("referralSource") || "-"}

Thank you!`;

    const url = `https://wa.me/+917830063882?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={mode === "page" ? pageWrapper : overlayStyle}>
      <style>{`
        input, select, textarea {
          transition: 0.25s ease;
          font-family: inherit;
        }
        input:focus, select:focus, textarea:focus {
          border-color: ${NAVY};
          background: white;
          box-shadow: 0 0 8px ${GOLD};
          outline: none;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          input, select, textarea {
            font-size: 16px; /* Prevents zoom on iOS */
          }
        }
        
        @media (max-width: 480px) {
          .checkbox-item {
            font-size: 12px;
          }
        }
        
        ${buttonHover}
      `}</style>

      <div style={card}>
        <h2 style={heading}>Tenant Information Form</h2>

        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div style={grid}>
            <div>
              <label style={label}>Full Name *</label>
              <input 
                style={input} 
                name="fullName" 
                placeholder="Enter your full name" 
                required 
              />
            </div>

            <div>
              <label style={label}>Age *</label>
              <input 
                type="number" 
                style={input} 
                name="age" 
                min="18" 
                max="100" 
                placeholder="Age 18–100" 
                required 
              />
            </div>

            <div>
              <label style={label}>Phone Number *</label>
              <input
                style={input}
                name="phoneNumber"
                maxLength="10"
                pattern="[0-9]{10}"
                placeholder="10-digit mobile number"
                required
              />
            </div>

            <div>
              <label style={label}>Email</label>
              <input 
                style={input} 
                type="email" 
                name="email" 
                placeholder="Optional" 
              />
            </div>

            <div>
              <label style={label}>Occupation</label>
              <input 
                style={input} 
                name="occupation" 
                placeholder="Student, Job, Business..." 
              />
            </div>

            <div>
              <label style={label}>Native Place</label>
              <input 
                style={input} 
                name="nativePlace" 
                placeholder="Your hometown" 
              />
            </div>

            <div style={{ gridColumn: isMobile ? "auto" : "1/-1" }}>
              <label style={label}>Current Address</label>
              <textarea 
                style={textarea} 
                name="currentAddress" 
                placeholder="Optional" 
              />
            </div>
          </div>

          {/* Preferred Locations */}
          <label style={label}>Preferred Locations *</label>
          <div style={checkboxGrid}>
            {["Mohali", "Chandigarh"].map((loc) => (
              <label key={loc} style={checkboxItem}>
                <input 
                  type="checkbox" 
                  name="preferredLocation" 
                  value={loc} 
                  style={{ marginRight: "6px" }}
                /> 
                {loc}
              </label>
            ))}
          </div>

          <label style={label}>Specific Areas</label>
          <textarea 
            style={textarea} 
            name="specificAreas" 
            placeholder="Example: Sector 70, Sector 66..." 
          />

          {/* Property Preferences */}
          <div style={grid}>
            <div>
              <label style={label}>Occupancy Type *</label>
              <select style={input} name="occupancyType" required>
                <option>Boys</option>
                <option>Girls</option>
                <option>Family</option>
                <option>Livin couple</option>
              </select>
            </div>

            <div>
              <label style={label}>Property Type *</label>
              <select style={input} name="propertyType" required>
                <option>Room</option>
                <option>1 RK</option>
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>PG</option>
              </select>
            </div>

            <div>
              <label style={label}>Budget (₹/month)</label>
              <input 
                type="number" 
                style={input} 
                name="budget" 
                placeholder="Example: 8000" 
              />
            </div>

            <div>
              <label style={label}>Budget Flexibility</label>
              <select style={input} name="budgetFlexibility">
                <option>No</option>
                <option>Yes, Slightly</option>
                <option>Flexible</option>
              </select>
            </div>

            <div>
              <label style={label}>Move-in Time *</label>
              <select style={input} name="moveInTime" required>
                <option>Immediately</option>
                <option>Within 1 Week</option>
                <option>Within 1 Month</option>
              </select>
            </div>

            <div>
              <label style={label}>Expected Stay Duration</label>
              <input 
                style={input} 
                name="stayDuration" 
                placeholder="e.g., 11 months" 
              />
            </div>
          </div>

          {/* Furnishing */}
          <label style={label}>Furnishing Preference</label>
          <div style={checkboxGrid}>
            {["Fully Furnished", "Semi Furnished", "Unfurnished"].map((item) => (
              <label key={item} style={checkboxItem}>
                <input 
                  type="checkbox" 
                  name="furnishing" 
                  value={item} 
                  style={{ marginRight: "6px" }}
                /> 
                {item}
              </label>
            ))}
          </div>

          {/* Amenities */}
          <label style={label}>Essential Amenities</label>
          <div style={checkboxGrid}>
            {[
              "Wi-Fi",
              "Power Backup",
              "Geyser",
              "RO",
              "Parking",
              "Security / CCTV",
              "Washing Machine",
              "Air Conditioning",
            ].map((item) => (
              <label key={item} style={checkboxItem}>
                <input 
                  type="checkbox" 
                  name="amenities" 
                  value={item} 
                  style={{ marginRight: "6px" }}
                /> 
                {item}
              </label>
            ))}
          </div>

          {/* Family & Pets */}
          <div style={grid}>
            <div>
              <label style={label}>Family Size</label>
              <input 
                type="number" 
                style={input} 
                name="familySize" 
                placeholder="Number of people" 
              />
            </div>
            
            <div>
              <label style={label}>Do you have pets?</label>
              <div style={petOptionsContainer}>
                <label style={checkboxItem}>
                  <input
                    type="radio"
                    name="pets"
                    value="Yes"
                    onChange={() => setShowPetDetails(true)}
                    style={{ marginRight: "6px" }}
                  />
                  Yes
                </label>

                <label style={checkboxItem}>
                  <input
                    type="radio"
                    name="pets"
                    value="No"
                    onChange={() => setShowPetDetails(false)}
                    defaultChecked
                    style={{ marginRight: "6px" }}
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          {showPetDetails && (
            <div style={{ marginBottom: isMobile ? "16px" : "18px" }}>
              <label style={label}>Pet Details</label>
              <textarea
                style={textarea}
                name="petDetails"
                placeholder="Type, breed, number of pets"
              />
            </div>
          )}

          {/* Additional Info */}
          <label style={label}>Special Requirements</label>
          <textarea 
            style={textarea} 
            name="specialRequirements" 
            placeholder="Any specific needs" 
          />

          <div style={{ marginBottom: isMobile ? "16px" : "18px" }}>
            <label style={label}>Previous Rental Experience</label>
            <textarea 
              style={textarea} 
              name="previousRental" 
              placeholder="Any previous rental history or references" 
            />
          </div>

          <label style={label}>How did you hear about us?</label>
          <select name="referralSource" style={input}>
            <option>Facebook</option>
            <option>Instagram</option>
            <option>Google</option>
            <option>Friends</option>
            <option>Other</option>
          </select>

          {/* BUTTONS */}
          <button type="submit" style={submitBtn}>
            Submit & Open WhatsApp
          </button>

          {mode === "popup" && (
            <button 
              type="button" 
              style={closeBtn} 
              onClick={() => setOpen(false)}
            >
              Close Form
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default TenantRegistrationForm;