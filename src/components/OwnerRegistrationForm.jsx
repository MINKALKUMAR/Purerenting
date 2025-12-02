import React, { useState, useEffect, useRef } from "react";

function OwnerRegistrationForm({ mode }) {
  const [open, setOpen] = useState(mode === "page");
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [propertyStructure, setPropertyStructure] = useState("");
  const formRef = useRef(null);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsSmallMobile(width < 480);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (mode === "popup") {
      const handler = () => setOpen(true);
      window.addEventListener("open-owner-form", handler);
      return () => window.removeEventListener("open-owner-form", handler);
    }
  }, [mode]);

  // Reset form when opening in popup mode
  useEffect(() => {
    if (open && mode === "popup") {
      setPropertyStructure("");
    }
  }, [open, mode]);

  if (mode === "popup" && !open) return null;

  // COLORS
  const BLUE = "#B2E1FF";
  const GOLD = "#F7D083";
  const NAVY = "#1A365A";

  // Responsive styles
  const pageWrapper = {
    paddingTop: isSmallMobile ? "70px" : isMobile ? "80px" : "110px",
    paddingBottom: isMobile ? "40px" : "0",
    paddingLeft: isMobile ? "15px" : "20px",
    paddingRight: isMobile ? "15px" : "20px",
    background: BLUE,
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: mode === "page" ? "flex-start" : "center",
    overflowY: mode === "page" ? "auto" : "hidden",
  };

  const overlayStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    backdropFilter: "blur(2px)",
    display: "flex",
    justifyContent: "center",
    alignItems: isMobile ? "flex-start" : "center",
    zIndex: 9999,
    padding: isMobile ? "20px 15px" : "0",
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
  };

  const card = {
    width: "100%",
    maxWidth: isSmallMobile ? "100%" : isMobile ? "95%" : "750px",
    background: "white",
    padding: isSmallMobile ? "16px 12px" : isMobile ? "20px 16px" : "30px 28px",
    borderRadius: isSmallMobile ? "10px" : isMobile ? "12px" : "16px",
    boxShadow: "0 8px 28px rgba(0,0,0,0.18)",
    margin: isMobile ? "auto" : "0",
    boxSizing: "border-box",
  };

  const heading = {
    textAlign: "center",
    fontSize: isSmallMobile ? "20px" : isMobile ? "22px" : "26px",
    color: NAVY,
    fontWeight: "800",
    marginBottom: isSmallMobile ? "14px" : isMobile ? "16px" : "20px",
    lineHeight: "1.3",
  };

  const grid = {
    display: "grid",
    gap: isSmallMobile ? "10px" : isMobile ? "12px" : "16px",
    gridTemplateColumns:
      isSmallMobile ? "1fr" : isMobile ? "1fr" : "repeat(auto-fit, minmax(240px, 1fr))",
    marginBottom: isSmallMobile ? "16px" : isMobile ? "18px" : "22px",
  };

  const label = {
    fontWeight: "700",
    fontSize: isSmallMobile ? "12px" : isMobile ? "13px" : "14px",
    color: NAVY,
    marginBottom: isSmallMobile ? "4px" : isMobile ? "5px" : "6px",
    display: "block",
  };

  const input = {
    width: "100%",
    padding: isSmallMobile ? "10px" : isMobile ? "10px 12px" : "12px 14px",
    borderRadius: isSmallMobile ? "8px" : isMobile ? "8px" : "10px",
    fontSize: isSmallMobile ? "14px" : isMobile ? "14px" : "15px",
    border: `1px solid #9BB4C6`,
    outline: "none",
    background: "#F9FCFF",
    boxSizing: "border-box",
  };

  const textarea = {
    ...input,
    height: isSmallMobile ? "70px" : isMobile ? "80px" : "100px",
    resize: "none",
    fontFamily: "inherit",
  };

  const checkboxRow = {
    display: "grid",
    gridTemplateColumns: isSmallMobile
      ? "1fr"
      : isMobile
        ? "repeat(2, minmax(140px, 1fr))"
        : "repeat(auto-fit, minmax(150px, 1fr))",
    gap: isSmallMobile ? "6px" : isMobile ? "8px" : "10px",
    background: "#F9FCFF",
    padding: isSmallMobile ? "10px" : isMobile ? "12px" : "14px",
    borderRadius: isSmallMobile ? "8px" : isMobile ? "10px" : "12px",
    border: "1px solid #9BB4C6",
    marginBottom: isSmallMobile ? "12px" : isMobile ? "15px" : "18px",
  };

  const checkboxItem = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: isSmallMobile ? "12px" : isMobile ? "13px" : "14px",
    color: NAVY,
    fontWeight: 600,
  };

  const submitBtn = {
    width: "100%",
    padding: "14px",
    background: NAVY,
    color: "white",
    fontWeight: "700",
    borderRadius: "12px",
    fontSize: isSmallMobile ? "15px" : "17px",
    cursor: "pointer",
    border: "none",
    marginTop: "18px",
  };

  const closeBtn = {
    width: "100%",
    padding: "12px",
    background: GOLD,
    color: NAVY,
    fontWeight: "700",
    borderRadius: "12px",
    fontSize: "15px",
    cursor: "pointer",
    border: "none",
    marginTop: "10px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Convert FormData to plain object for easier access
    const data = Object.fromEntries(formData.entries());
    
    const roomDetails = formData.getAll("roomDetails").join(", ");
    const amenities = formData.getAll("amenities").join(", ");

    // Get the property structure value - use the state value since it's a controlled component
    const propertyStructureValue = propertyStructure || "-";
    
    // Only get floor number if House Floor is selected
    const floorNumberValue = propertyStructureValue === "House Floor" 
      ? (data.floorNumber || "-") 
      : "";
    
    const propertyStructureSection =
      propertyStructureValue === "House Floor"
        ? `🏘️ *Property Structure*  
${propertyStructureValue}  
Floor: ${floorNumberValue}`
        : `🏘️ *Property Structure*  
${propertyStructureValue}`;

    const msg = `
🏠 *New Property Registration*  

👤 *Owner Details*  
Name: ${data.ownerName || "-"}  
Phone: ${data.phoneNumber || "-"}  
Email: ${data.email || "-"}  

${propertyStructureSection}  

🏘️ *Property Details*  
Type: ${data.propertyType || "-"}  
City: ${data.location || "-"}  
Address: ${data.detailedLocation || "-"}  
Rent: ₹${data.rent || "-"}  
Negotiable: ${data.negotiable || "-"}  
Allowed For: ${data.allowedFor || "-"}  

🛏️ *Room Details:*  
${roomDetails || "-"}

⭐ *Amenities:*  
${amenities || "-"}

📝 Additional Info:  
${data.additionalInfo || "-"}  
`;

    const phone = "+919518159625";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    
    // Reset form after submission
    if (mode === "page") {
      e.target.reset();
      setPropertyStructure("");
    }
  };

  const handleClose = () => {
    if (mode === "popup") {
      setPropertyStructure(""); // Reset the property structure
      setTimeout(() => setOpen(false), 50);
    }
  };

  return (
    <div style={mode === "page" ? pageWrapper : overlayStyle}>
      <style>{`
        input, select, textarea {
          transition: all 0.25s ease;
          font-family: inherit;
        }
        input:focus, select:focus, textarea:focus {
          border-color: ${NAVY};
          box-shadow: 0 0 8px ${GOLD};
          background: white;
        }
      `}</style>

      <div ref={formRef} style={card}>
        <h2 style={heading}>Property Owner Registration</h2>

        <form onSubmit={handleSubmit}>

          {/* BASIC DETAILS GRID */}
          <div style={grid}>

            {/* Full Name */}
            <div>
              <label style={label}>Full Name *</label>
              <input style={input} name="ownerName" placeholder="Enter your full name" required />
            </div>

            {/* Phone */}
            <div>
              <label style={label}>Phone Number *</label>
              <input
                style={input}
                name="phoneNumber"
                maxLength="10"
                pattern="[0-9]{10}"
                placeholder="10-digit mobile number"
                required
                type="tel"
                inputMode="numeric"
              />
            </div>

            {/* Email */}
            <div>
              <label style={label}>Email</label>
              <input style={input} type="email" name="email" placeholder="Optional email address" />
            </div>

            {/* Property Type */}
            <div>
              <label style={label}>Property Type *</label>
              <select style={input} name="propertyType" required>
                <option value="">Select property type</option>
                <option>1 RK</option>
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
                <option>PG</option>
              </select>
            </div>

            {/* ⭐ PROPERTY STRUCTURE (converted to dropdown) - FIXED */}
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={label}>Property Structure *</label>
              <select
                style={input}
                name="propertyStructure"
                value={propertyStructure}
                required
                onChange={(e) => setPropertyStructure(e.target.value)}
              >
                <option value="">Select structure</option>
                <option value="Flat">Flat</option>
                <option value="House Floor">House Floor</option>
              </select>
            </div>

            {/* ⭐ FLOOR NUMBER only when House Floor selected */}
            {propertyStructure === "House Floor" && (
              <div>
                <label style={label}>Floor Number *</label>
                <input
                  style={input}
                  type="number"
                  name="floorNumber"
                  placeholder="e.g., 1, 2, 3"
                  required
                />
              </div>
            )}

            {/* City */}
            <div>
              <label style={label}>City *</label>
              <select style={input} name="location" required>
                <option value="">Select city</option>
                <option>Mohali</option>
                <option>Chandigarh</option>
                <option>Panchkula</option>
              </select>
            </div>

            {/* Address */}
            <div style={isMobile ? { gridColumn: "1 / -1" } : {}}>
              <label style={label}>Detailed Address *</label>
              <input
                style={input}
                placeholder="e.g., Sector 55, Near Metro"
                name="detailedLocation"
                required
              />
            </div>

            {/* Rent */}
            <div>
              <label style={label}>Monthly Rent *</label>
              <input style={input} name="rent" type="number" placeholder="e.g., 15000" required />
            </div>

            {/* Negotiable */}
            <div>
              <label style={label}>Rent Negotiable *</label>
              <select style={input} name="negotiable" required>
                <option value="">Select option</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            {/* Allowed For */}
            <div>
              <label style={label}>Allowed For *</label>
              <select style={input} name="allowedFor" required>
                <option value="">Select occupancy</option>
                <option>Boys</option>
                <option>Girls</option>
                <option>Family</option>
                <option>For All</option>
              </select>
            </div>
          </div>

          {/* Room Details */}
          <label style={label}>Room Details (Select all that apply)</label>
          <div style={checkboxRow}>
            {[
              "Fully Furnished",
              "Semi Furnished",
              "Unfurnished",
              "Independent",
              "AC",
              "Cooler",
              "Fan",
              "RO",
            ].map((item) => (
              <label key={item} style={checkboxItem}>
                <input type="checkbox" name="roomDetails" value={item} />
                <span>{item}</span>
              </label>
            ))}
          </div>

          {/* Amenities */}
          <label style={label}>Amenities (Select all that apply)</label>
          <div style={checkboxRow}>
            {[
              "Wi-Fi",
              "Power Backup",
              "Parking (2-Wheeler)",
              "Parking (4-Wheeler)",
              "Water Supply (24x7)",
              "Lift",
              "Security / CCTV",
              "Geyser",
              "Washing Machine",
            ].map((item) => (
              <label key={item} style={checkboxItem}>
                <input type="checkbox" name="amenities" value={item} />
                <span>{item}</span>
              </label>
            ))}
          </div>

          {/* Additional Info */}
          <div>
            <label style={label}>Additional Information</label>
            <textarea
              style={textarea}
              placeholder="e.g., No restrictions, notice period details..."
              name="additionalInfo"
            />
          </div>

          {/* Buttons */}
          <button type="submit" style={submitBtn}>
            {isSmallMobile ? "Submit to WhatsApp" : "Submit & Open WhatsApp"}
          </button>

          {mode === "popup" && (
            <button type="button" style={closeBtn} onClick={handleClose}>
              Close Form
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default OwnerRegistrationForm;