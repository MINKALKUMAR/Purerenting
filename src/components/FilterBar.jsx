// ⬅️ only change here: import useState as well
import React, { useState } from "react";

function FilterBar({ filters, onChange, properties }) {
  //
  // ----------------------------
  // 1️⃣ LOCATION SORTING LOGIC
  // ----------------------------
  //

  const extractSectorNumber = (location) => {
    // Example: "Sector 114, Mohali" → 114
    const match = location.match(/Sector\s+(\d+)/i);
    return match ? parseInt(match[1], 10) : 9999;
  };

  const chandigarhLocations = [];
  const mohaliLocations = [];

  properties.forEach((p) => {
    if (p.location.toLowerCase().includes("chandigarh")) {
      chandigarhLocations.push(p.location);
    } else if (p.location.toLowerCase().includes("mohali")) {
      mohaliLocations.push(p.location);
    }
  });

  // Unique + sorted numerically
  const sortedChandigarh = [...new Set(chandigarhLocations)].sort(
    (a, b) => extractSectorNumber(a) - extractSectorNumber(b)
  );

  const sortedMohali = [...new Set(mohaliLocations)].sort(
    (a, b) => extractSectorNumber(a) - extractSectorNumber(b)
  );

  const finalLocations = ["all", ...sortedChandigarh, ...sortedMohali];
  const locationOptions = finalLocations.filter((l) => l !== "all");

  //
  // ----------------------------
  // 2️⃣ OTHER FILTER OPTIONS
  // ----------------------------
  //

  const uniqueTypes = [
    "all",
    ...Array.from(new Set(properties.map((p) => p.type))),
  ];

  const uniqueGenders = [
    "all",
    ...Array.from(new Set(properties.map((p) => p.gender))),
  ];

  //
  // ----------------------------
  // 3️⃣ INLINE CSS
  // ----------------------------
  //

  const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "16px",
    padding: "16px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  };

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "12px",
  };

  const groupStyle = {
    flex: "1 1 180px",
    display: "flex",
    flexDirection: "column",
  };

  const labelStyle = {
    fontSize: "13px",
    fontWeight: "600",
    color: "#1A365A",
    marginBottom: "4px",
  };

  const selectStyle = {
    padding: "8px 10px",
    borderRadius: "8px",
    border: "1px solid #CBD5E0",
    fontSize: "13px",
    outline: "none",
  };

  const searchInputStyle = {
    padding: "8px 10px",
    borderRadius: "8px",
    border: "1px solid #CBD5E0",
    fontSize: "13px",
    outline: "none",
  };

  const actionRowStyle = {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    flexWrap: "wrap",
  };

  const primaryBtnStyle = {
    padding: "9px 16px",
    borderRadius: "999px",
    border: "none",
    backgroundColor: "#1A365A",
    color: "white",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
  };

  const resetBtnStyle = {
    padding: "9px 16px",
    borderRadius: "999px",
    border: "none",
    backgroundColor: "#F7D083",
    color: "#1A365A",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
  };

  // 💠 chips (selected locations) styling
  const chipContainerStyle = {
    marginTop: "8px",
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  };

  const chipStyle = {
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 10px",
    borderRadius: "999px",
    backgroundColor: "#E3F2FF",
    fontSize: "12px",
    color: "#1A365A",
  };

  const chipCloseBtnStyle = {
    marginLeft: "6px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: "12px",
    lineHeight: 1,
  };

  //
  // ----------------------------
  // 4️⃣ HANDLE UPDATES
  // ----------------------------
  //

  const handleChange = (field, value) => {
    onChange({
      ...filters,
      [field]: value,
    });
  };

  const handleReset = () => {
    onChange({
      location: [], // ⬅️ no default "all", empty = nothing selected
      type: "all",
      gender: "all",
      price: "all",
      search: "",
    });
  };

  // selected locations always as array
  const selectedLocations = Array.isArray(filters.location)
    ? filters.location
    : [];

  const handleAddLocation = (value) => {
    if (!value) return;
    if (selectedLocations.includes(value)) return;
    handleChange("location", [...selectedLocations, value]);
  };

  const handleRemoveLocation = (loc) => {
    const updated = selectedLocations.filter((l) => l !== loc);
    handleChange("location", updated);
  };

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        {/* Location */}
        <div style={groupStyle}>
          <label style={labelStyle}>Location</label>
          {/* simple dropdown, each change adds a location */}
          <select
            style={selectStyle}
            value="" // always show placeholder
            onChange={(e) => handleAddLocation(e.target.value)}
          >
            <option value="">Select location</option>
            {locationOptions.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          {/* chips for selected locations */}
          {selectedLocations.length > 0 && (
            <div style={chipContainerStyle}>
              {selectedLocations.map((loc) => (
                <span key={loc} style={chipStyle}>
                  {loc}
                  <button
                    type="button"
                    style={chipCloseBtnStyle}
                    onClick={() => handleRemoveLocation(loc)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Property Type */}
        <div style={groupStyle}>
          <label style={labelStyle}>Property Type</label>
          <select
            style={selectStyle}
            value={filters.type}
            onChange={(e) => handleChange("type", e.target.value)}
          >
            {uniqueTypes.map((type) => (
              <option key={type} value={type}>
                {type === "all" ? "All Types" : type}
              </option>
            ))}
          </select>
        </div>

        {/* Gender */}
        <div style={groupStyle}>
          <label style={labelStyle}>Suitable For</label>
          <select
            style={selectStyle}
            value={filters.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
          >
            {uniqueGenders.map((g) => (
              <option key={g} value={g}>
                {g === "all"
                  ? "All (Family / Boys / Girls)"
                  : g === "for-all"
                  ? "For All"
                  : g.charAt(0).toUpperCase() + g.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div style={groupStyle}>
          <label style={labelStyle}>₹ Rent per month</label>
          <select
            style={selectStyle}
            value={filters.price}
            onChange={(e) => handleChange("price", e.target.value)}
          >
            <option value="all">Any</option>
            <option value="10k">≤ ₹10,000</option>
            <option value="20k">≤ ₹20,000</option>
            <option value="30k">≤ ₹30,000</option>
            <option value="above30">≥ ₹30,000</option>
          </select>
        </div>

        {/* Search */}
        <div style={groupStyle}>
          <label style={labelStyle}>Search (Sector / PID / Keyword)</label>
          <input
            type="text"
            style={searchInputStyle}
            placeholder="e.g. 126, Mohali, 1 BHK…"
            value={filters.search}
            onChange={(e) => handleChange("search", e.target.value)}
          />
        </div>
      </div>

      <div style={actionRowStyle}>
        <button style={resetBtnStyle} onClick={handleReset}>
          Reset Filters
        </button>
        <button style={primaryBtnStyle}>Apply Filters</button>
      </div>
    </div>
  );
}

export default FilterBar;
