import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PropertyGrid({ properties, onLoadMore, hasMore, visibleCount, totalCount }) {
  const navigate = useNavigate();

  const gridWrapperStyle = {
    marginTop: "10px",
    marginBottom: "20px",
  };

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    justifyContent: "center", // ⭐ Center items on mobile/tablet
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    overflow: "hidden",
    flex: "1 1 260px",
    maxWidth: "calc(33.333% - 12px)",
    minWidth: "260px",
    display: "flex",
    flexDirection: "column",
  };

  const imageWrapperStyle = {
    position: "relative",
    width: "100%",
    height: "190px",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "190px",
    objectFit: "cover",
    cursor: "pointer",
    transition: "transform 0.4s ease, opacity 0.4s ease",
  };

  const bodyStyle = {
    padding: "12px 14px 14px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "700",
    color: "#1A365A",
  };

  const locationStyle = {
    fontSize: "13px",
    color: "#4A5568",
  };

  const chipRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginTop: "4px",
  };

  const chipStyle = {
    fontSize: "11px",
    padding: "4px 8px",
    borderRadius: "999px",
    backgroundColor: "#B2E1FF",
    color: "#1A365A",
  };

  const priceStyle = {
    fontSize: "16px",
    fontWeight: "700",
    color: "#1A365A",
    marginTop: "4px",
  };

  const descStyle = {
    fontSize: "12px",
    color: "#4A5568",
    marginTop: "4px",
  };

  // ⭐ UPDATED PID STYLE — only underline, no yellow background
  const pidStyle = {
    fontSize: "11px",
    color: "#1A365A",
    fontWeight: "700",
    paddingBottom: "2px",
    borderBottom: "2px solid #F7D083", // underline only
    display: "inline-block",
  };

  const footerRowStyle = {
    display: "flex",
    justifyContent: "space-between", // ⭐ Gender left, PID right
    alignItems: "center",
    marginTop: "6px",
  };

  const badgeStyle = {
    fontSize: "11px",
    padding: "4px 8px",
    borderRadius: "999px",
    backgroundColor: "#F7D083",
    color: "#1A365A",
  };

  const btnStyle = {
    display: "block",
    margin: "10px auto 0",
    padding: "10px 20px",
    backgroundColor: "#1A365A",
    color: "white",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "13px",
  };

  // ⭐ WhatsApp Contact Button
  const contactBtnStyle = {
    marginTop: "10px",
    padding: "10px 18px",
    backgroundColor: "#25D366",
    color: "white",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "13px",
    textAlign: "center",
  };

  const emptyStyle = {
    textAlign: "center",
    padding: "20px",
    fontSize: "14px",
    color: "#1A365A",
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: "12px",
  };

  const navBtnBaseStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "16px",
    lineHeight: 1,
  };

  const leftNavBtnStyle = {
    ...navBtnBaseStyle,
    left: "8px",
  };

  const rightNavBtnStyle = {
    ...navBtnBaseStyle,
    right: "8px",
  };

  const infoTextStyle = {
    textAlign: "center",
    marginTop: "6px",
    fontSize: "12px",
    color: "#1A365A",
  };

  // ------------------------
  // ⭐ Slider / Carousel Logic
  // ------------------------
  const [activeImageIndex, setActiveImageIndex] = useState({});

  useEffect(() => {
    const intervals = [];

    properties.forEach((p) => {
      if (!p.images || p.images.length <= 1) return;

      const intervalId = setInterval(() => {
        setActiveImageIndex((prev) => {
          const current = prev[p.id] || 0;
          const nextIndex = (current + 1) % p.images.length;
          return { ...prev, [p.id]: nextIndex };
        });
      }, 3000);

      intervals.push(intervalId);
    });

    return () => intervals.forEach((id) => clearInterval(id));
  }, [properties]);

  const goNext = (p) => {
    const nextIndex =
      ((activeImageIndex[p.id] || 0) + 1) % p.images.length;

    setActiveImageIndex((prev) => ({
      ...prev,
      [p.id]: nextIndex,
    }));
  };

  const goPrev = (p) => {
    const prevIndex =
      (activeImageIndex[p.id] - 1 + p.images.length) % p.images.length;

    setActiveImageIndex((prev) => ({
      ...prev,
      [p.id]: prevIndex,
    }));
  };

  const handleImageClick = (p) => {
    navigate(`/property/${p.pid}`, { state: { property: p } });
  };

  // ⭐ WhatsApp Contact Function
  const contactOwner = (pid) => {
    const msg = `Hi, I am interested in Property ID: ${pid}`;
    const url = `https://wa.me/+919518159625?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={gridWrapperStyle}>
      {properties.length === 0 ? (
        <div style={emptyStyle}>
          No properties found with selected filters. Try changing filters.
        </div>
      ) : (
        <>
          <div style={gridStyle}>
            {properties.map((p, index) => {
              const images = p.images || [];
              const currentIndex = activeImageIndex[p.id] || 0;

              return (
                <div key={`${p.pid}-${index}`} style={cardStyle}>
                  <div style={imageWrapperStyle}>
                    <img
                      src={images[currentIndex]}
                      alt={p.title}
                      style={imageStyle}
                      loading="lazy"
                      onClick={() => handleImageClick(p)}
                    />

                    {images.length > 1 && (
                      <>
                        <button
                          type="button"
                          style={leftNavBtnStyle}
                          onClick={(e) => {
                            e.stopPropagation();
                            goPrev(p);
                          }}
                        >
                          {"<"}
                        </button>

                        <button
                          type="button"
                          style={rightNavBtnStyle}
                          onClick={(e) => {
                            e.stopPropagation();
                            goNext(p);
                          }}
                        >
                          {">"}
                        </button>
                      </>
                    )}
                  </div>

                  <div style={bodyStyle}>
                    <div style={titleStyle}>{p.title}</div>
                    <div style={locationStyle}>{p.location}</div>

                    <div style={chipRowStyle}>
                      <span style={chipStyle}>{p.type}</span>
                      {p.features.slice(0, 3).map((f) => (
                        <span key={f} style={chipStyle}>
                          {f}
                        </span>
                      ))}
                    </div>

                    <div style={priceStyle}>{p.price} / month</div>
                    <div style={descStyle}>{p.description}</div>

                    {/* ⭐ Gender (left) | PID (right, underline only) */}
                    <div style={footerRowStyle}>
                      <span style={badgeStyle}>
                        {p.gender === "for-all"
                          ? "For All"
                          : p.gender.charAt(0).toUpperCase() +
                            p.gender.slice(1)}
                      </span>

                      <span style={pidStyle}>{p.pid}</span>
                    </div>

                    {/* ⭐ WhatsApp Contact Button */}
                    <button
                      style={contactBtnStyle}
                      onClick={() => contactOwner(p.pid)}
                    >
                      Contact on WhatsApp
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {hasMore && (
            <button style={btnStyle} onLoadMore={onLoadMore} onClick={onLoadMore}>
              + Load More Properties
            </button>
          )}

          <div style={infoTextStyle}>
            Showing {visibleCount} of {totalCount} properties
          </div>
        </>
      )}
    </div>
  );
}

export default PropertyGrid;
