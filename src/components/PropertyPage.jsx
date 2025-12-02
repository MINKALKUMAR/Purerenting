// import React, { useState, useMemo } from "react";
// import FilterBar from "./FilterBar";
// import PropertyGrid from "./PropertyGrid";
// import Footer from "./Footer";

// // ------------------------
// // ⭐ MULTIPLE IMAGE SUPPORT
// // ------------------------
// const MOCK_PROPERTIES = [
//   {
//     id: 1,
//     pid: "M127G",
//     title: "Modern Apartment in Sector 127",
//     location: "Sector 127, Mohali",
//     type: "1 BHK",
//     gender: "for-all",
//     price: "₹14,500",
//     features: ["Fully Furnished", "Independent", "Owner Free"],
//     description: "Beautiful 1BHK with modern amenities near shopping center.",
//     images: [
//       "https://www.trimurty.com/blog/wp-content/uploads/2016/08/property-investement.jpg",
//       "https://www.reihub.net/wp-content/uploads/2024/08/property-valuation.jpg",
//       "https://www.trimurty.com/blog/wp-content/uploads/2016/08/property-investement.jpg",
//       "https://www.reihub.net/wp-content/uploads/2024/08/property-valuation.jpg",
//       "https://www.trimurty.com/blog/wp-content/uploads/2016/08/property-investement.jpg",
//     ],
//   },

//   {
//     id: 2,
//     pid: "M114K921",
//     title: "1 RK in Sector 114, Mohali",
//     location: "Sector 114, Mohali",
//     type: "1 RK",
//     gender: "boys",
//     price: "₹6,000",
//     features: ["Semi-Furnished", "Independent"],
//     description: "Budget-friendly 1 RK, ideal for students and working boys.",
//     images: [
//       "https://ik.imagekit.io/minkal/assets/2.M114K921/B1.jpg?updatedAt=1754802913145",
//       "https://ik.imagekit.io/minkal/assets/2.M114K921/B1.jpg",
//     ],
//   },
//   {
//     id: 3,
//     pid: "M114K921-2",
//     title: "1 RK in Sector 114, Mohali",
//     location: "Sector 114, Mohali",
//     type: "1 RK",
//     gender: "boys",
//     price: "₹6,000",
//     features: ["Semi-Furnished", "Independent"],
//     description: "Budget-friendly 1 RK, ideal for students and working boys.",
//     images: [
//       "https://ik.imagekit.io/minkal/assets/2.M114K921/B1.jpg?updatedAt=1754802913145",
//       "https://ik.imagekit.io/minkal/assets/2.M114K921/B1.jpg",
//     ],
//   },
//   {
//     id: 4,
//     pid: "M114K921-3",
//     title: "1 RK in Sector 114, Mohali",
//     location: "Sector 114, Mohali",
//     type: "1 RK",
//     gender: "boys",
//     price: "₹6,000",
//     features: ["Semi-Furnished", "Independent"],
//     description: "Budget-friendly 1 RK, ideal for students and working boys.",
//     images: [
//       "https://ik.imagekit.io/minkal/assets/2.M114K921/B1.jpg?updatedAt=1754802913145",
//       "https://ik.imagekit.io/minkal/assets/2.M114K921/B1.jpg",
//     ],
//   },
//   {
//     id: 5,
//     pid: "M114K921-4",
//     title: "1 RK in Sector 114, Mohali",
//     location: "Sector 114, Mohali",
//     type: "1 RK",
//     gender: "boys",
//     price: "₹6,000",
//     features: ["Semi-Furnished", "Independent"],
//     description: "Budget-friendly 1 RK, ideal for students and working boys.",
//     images: [
//       "https://ik.imagekit.io/minkal/assets/2.M114K921/B1.jpg?updatedAt=1754802913145",
//       "https://ik.imagekit.io/minkal/assets/2.M114K921/B1.jpg",
//     ],
//   },

//   {
//     id: 6,
//     pid: "C19CB814",
//     title: "Spacious 1 RK in Sector 19C, Chandigarh",
//     location: "Sector 19C, Chandigarh",
//     type: "1 RK",
//     gender: "girls",
//     price: "₹11,000",
//     features: ["Fully Furnished", "AC", "RO"],
//     description: "Luxury studio with premium furniture in central Chandigarh.",
//     images: [
//       "https://ik.imagekit.io/minkal/assets/3.C19CB814/C1.jpg?updatedAt=1754802915880",
//       "https://ik.imagekit.io/minkal/assets/4.C23DJ2977/D1.jpg?updatedAt=1754802918027",
//     ],
//   },

//   {
//     id: 7,
//     pid: "C23DJ2977",
//     title: "1 BHK in Sector 23D, Chandigarh",
//     location: "Sector 23D, Chandigarh",
//     type: "1 BHK",
//     gender: "for-all",
//     price: "₹13,500",
//     features: ["Fully Furnished", "Independent", "Owner Free"],
//     description: "Prime location with easy access to market and schools.",
//     images: [
//       "https://ik.imagekit.io/minkal/assets/4.C23DJ2977/D1.jpg?updatedAt=1754802918027",
//     ],
//   },

//   {
//     id: 8,
//     pid: "M126Sk701",
//     title: "1 BHK in Sector 126, Mohali",
//     location: "Sector 126, Mohali",
//     type: "1 BHK",
//     gender: "for-all",
//     price: "₹12,000",
//     features: ["2nd Floor", "Newly built", "RO"],
//     description: "Newly built, airy 1BHK perfect for couples or singles.",
//     images: [
//       "https://www.tribecacare.com/wp-content/uploads/2022/07/Edinburgh-Property-management.jpg",
//       "https://tse2.mm.bing.net/th/id/OIP.VomCWk6XNWw0D6bRsP0lBgHaEX?rs=1&pid=ImgDetMain&o=7&rm=3",
//       "https://www.tribecacare.com/wp-content/uploads/2022/07/Edinburgh-Property-management.jpg",
//       "https://tse2.mm.bing.net/th/id/OIP.VomCWk6XNWw0D6bRsP0lBgHaEX?rs=1&pid=ImgDetMain&o=7&rm=3",
//       "https://www.tribecacare.com/wp-content/uploads/2022/07/Edinburgh-Property-management.jpg",
//       "https://tse2.mm.bing.net/th/id/OIP.VomCWk6XNWw0D6bRsP0lBgHaEX?rs=1&pid=ImgDetMain&o=7&rm=3",
//     ],
//   },
// ];

// function PropertyPage() {
//   const [filters, setFilters] = useState({
//     location: "all",
//     type: "all",
//     gender: "all",
//     price: "all",
//     search: "",
//   });

//   const [visibleCount, setVisibleCount] = useState(6);

//   const handleFilterChange = (updatedFilters) => {
//     setFilters(updatedFilters);
//     setVisibleCount(6);
//   };

//   // ----------------------
//   // ⭐ FILTER LOGIC (UPDATED)
//   // ⭐ FOR-ALL SUPPORT FIXED
//   // ----------------------
//   const filtered = useMemo(() => {
//     const sorted = [...MOCK_PROPERTIES].slice().reverse();

//     return sorted.filter((p) => {
//       // Location
//       const okLocation =
//         filters.location === "all" || p.location === filters.location;

//       // Type
//       const okType = filters.type === "all" || p.type === filters.type;

//       // ⭐ FIXED GENDER LOGIC  
//       // boys → (boys + for-all)
//       // girls → (girls + for-all)
//       const okGender =
//         filters.gender === "all" ||
//         p.gender === filters.gender ||
//         (filters.gender !== "all" && p.gender === "for-all");

//       // Price
//       const numericPrice = parseInt(p.price.replace(/[^0-9]/g, ""), 10);
//       let okPrice = true;
//       if (filters.price === "10k") okPrice = numericPrice <= 10000;
//       else if (filters.price === "20k") okPrice = numericPrice <= 20000;
//       else if (filters.price === "30k") okPrice = numericPrice <= 30000;
//       else if (filters.price === "above30") okPrice = numericPrice >= 30000;

//       // Search
//       const q = filters.search.trim().toLowerCase();
//       const okSearch =
//         q === "" ||
//         p.title.toLowerCase().includes(q) ||
//         p.pid.toLowerCase().includes(q) ||
//         p.location.toLowerCase().includes(q);

//       return okLocation && okType && okGender && okPrice && okSearch;
//     });
//   }, [filters]);

//   const visibleProperties = filtered.slice(0, visibleCount);
//   const hasMore = visibleCount < filtered.length;

//   const loadMore = () => setVisibleCount((prev) => prev + 6);

//   // PAGE STYLES
//   const pageStyle = {
//     minHeight: "100vh",
//     backgroundColor: "#B2E1FF",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   };

//   const contentStyle = {
//     width: "100%",
//     maxWidth: "1200px",
//   };

//   const headingStyle = {
//     textAlign: "center",
//     color: "#1A365A",
//     marginTop: "20px",
//     marginBottom: "10px",
//     fontSize: "26px",
//     fontWeight: "700",
//   };

//   const subTextStyle = {
//     textAlign: "center",
//     color: "#1A365A",
//     marginBottom: "20px",
//     fontSize: "14px",
//   };

//   return (
//     <div style={pageStyle}>
//       <div style={contentStyle}>
//         <h2 style={headingStyle}>Explore Rental Properties</h2>
//         <p style={subTextStyle}>
//           Use filters to find properties matching your budget and requirements.
//         </p>

//         <FilterBar
//           filters={filters}
//           onChange={handleFilterChange}
//           properties={MOCK_PROPERTIES}
//         />

//         <PropertyGrid
//           properties={visibleProperties}
//           onLoadMore={loadMore}
//           hasMore={hasMore}
//           visibleCount={visibleProperties.length}
//           totalCount={filtered.length}
//         />
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default PropertyPage;
import React, { useState, useMemo } from "react";
import FilterBar from "./FilterBar";
import PropertyGrid from "./PropertyGrid";
import Footer from "./Footer";

// ------------------------
// ⭐ MULTIPLE IMAGE SUPPORT
// ------------------------
const MOCK_PROPERTIES = [
  {
    id: 1,
    pid: "M127G",
    title: "Modern Apartment in Sector 127",
    location: "Sector 127, Mohali",
    type: "1 BHK",
    gender: "for-all",
    price: "₹14,500",
    features: ["Fully Furnished", "Independent", "Owner Free"],
    description: "Beautiful 1BHK with modern amenities near shopping center.",
    images: [
      "https://www.trimurty.com/blog/wp-content/uploads/2016/08/property-investement.jpg",
      "https://www.reihub.net/wp-content/uploads/2024/08/property-valuation.jpg",
      "https://www.trimurty.com/blog/wp-content/uploads/2016/08/property-investement.jpg",
      "https://www.reihub.net/wp-content/uploads/2024/08/property-valuation.jpg",
      "https://www.trimurty.com/blog/wp-content/uploads/2016/08/property-investement.jpg",
    ],
  },

  {
    id: 2,
    pid: "M114K921",
    title: "1 RK in Sector 114, Mohali",
    location: "Sector 114, Mohali",
    type: "1 RK",
    gender: "boys",
    price: "₹6,000",
    features: ["Semi-Furnished", "Independent"],
    description: "Budget-friendly 1 RK, ideal for students and working boys.",
    images: [
      "https://ik.imagekit.io/minkal/assets/2.M114K921/B1.jpg?updatedAt=1754802913145",
      "https://ik.imagekit.io/minkal/assets/2.M114K921/B1.jpg",
    ],
  },
  {
    id: 3,
    pid: "M114K921-2",
    title: "1 RK in Sector 114, Mohali",
    location: "Sector 114, Mohali",
    type: "1 RK",
    gender: "boys",
    price: "₹6,000",
    features: ["Semi-Furnished", "Independent"],
    description: "Budget-friendly 1 RK, ideal for students and working boys.",
    images: [
      "https://ik.imagekit.io/minkal/assets/2.M114K921/B1.jpg?updatedAt=1754802913145",
      "https://ik.imagekit.io/minkal/assets/2.M114K921/B1.jpg",
    ],
  },
  {
    id: 4,
    pid: "M114K921-3",
    title: "1 RK in Sector 114, Mohali",
    location: "Sector 114, Mohali",
    type: "1 RK",
    gender: "boys",
    price: "₹6,000",
    features: ["Semi-Furnished", "Independent"],
    description: "Budget-friendly 1 RK, ideal for students and working boys.",
    images: [
      "https://ik.imagekit.io/minkal/assets/2.M114K921/B1.jpg?updatedAt=1754802913145",
      "https://ik.imagekit.io/minkal/assets/2.M114K921/B1.jpg",
    ],
  },
  {
    id: 5,
    pid: "M114K921-4",
    title: "1 RK in Sector 114, Mohali",
    location: "Sector 114, Mohali",
    type: "1 RK",
    gender: "boys",
    price: "₹6,000",
    features: ["Semi-Furnished", "Independent"],
    description: "Budget-friendly 1 RK, ideal for students and working boys.",
    images: [
      "https://ik.imagekit.io/minkal/assets/2.M114K921/B1.jpg?updatedAt=1754802913145",
      "https://ik.imagekit.io/minkal/assets/2.M114K921/B1.jpg",
    ],
  },

  {
    id: 6,
    pid: "C19CB814",
    title: "Spacious 1 RK in Sector 19C, Chandigarh",
    location: "Sector 19C, Chandigarh",
    type: "1 RK",
    gender: "girls",
    price: "₹11,000",
    features: ["Fully Furnished", "AC", "RO"],
    description: "Luxury studio with premium furniture in central Chandigarh.",
    images: [
      "https://ik.imagekit.io/minkal/assets/3.C19CB814/C1.jpg?updatedAt=1754802915880",
      "https://ik.imagekit.io/minkal/assets/4.C23DJ2977/D1.jpg?updatedAt=1754802918027",
    ],
  },

  {
    id: 7,
    pid: "C23DJ2977",
    title: "1 BHK in Sector 23D, Chandigarh",
    location: "Sector 23D, Chandigarh",
    type: "1 BHK",
    gender: "for-all",
    price: "₹13,500",
    features: ["Fully Furnished", "Independent", "Owner Free"],
    description: "Prime location with easy access to market and schools.",
    images: [
      "https://ik.imagekit.io/minkal/assets/4.C23DJ2977/D1.jpg?updatedAt=1754802918027",
    ],
  },

  {
    id: 8,
    pid: "M126Sk701",
    title: "1 BHK in Sector 126, Mohali",
    location: "Sector 126, Mohali",
    type: "1 BHK",
    gender: "for-all",
    price: "₹12,000",
    features: ["2nd Floor", "Newly built", "RO"],
    description: "Newly built, airy 1BHK perfect for couples or singles.",
    images: [
      "https://www.tribecacare.com/wp-content/uploads/2022/07/Edinburgh-Property-management.jpg",
      "https://tse2.mm.bing.net/th/id/OIP.VomCWk6XNWw0D6bRsP0lBgHaEX?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://www.tribecacare.com/wp-content/uploads/2022/07/Edinburgh-Property-management.jpg",
      "https://tse2.mm.bing.net/th/id/OIP.VomCWk6XNWw0D6bRsP0lBgHaEX?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://www.tribecacare.com/wp-content/uploads/2022/07/Edinburgh-Property-management.jpg",
      "https://tse2.mm.bing.net/th/id/OIP.VomCWk6XNWw0D6bRsP0lBgHaEX?rs=1&pid=ImgDetMain&o=7&rm=3",
    ],
  },
];

function PropertyPage() {
  const [filters, setFilters] = useState({
    location: [], // ⬅️ was "all"
    type: "all",
    gender: "all",
    price: "all",
    search: "",
  });

  const [visibleCount, setVisibleCount] = useState(6);

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
    setVisibleCount(6);
  };

  // ----------------------
  // ⭐ FILTER LOGIC (UPDATED)
  // ⭐ FOR-ALL SUPPORT FIXED
  // ----------------------
  const filtered = useMemo(() => {
    const sorted = [...MOCK_PROPERTIES].slice().reverse();

    const selectedLocations = Array.isArray(filters.location)
      ? filters.location
      : [];

    return sorted.filter((p) => {
      // Location
      const okLocation =
        selectedLocations.length === 0 ||
        selectedLocations.includes(p.location);

      // Type
      const okType = filters.type === "all" || p.type === filters.type;

      // ⭐ FIXED GENDER LOGIC  
      // boys → (boys + for-all)
      // girls → (girls + for-all)
      const okGender =
        filters.gender === "all" ||
        p.gender === filters.gender ||
        (filters.gender !== "all" && p.gender === "for-all");

      // Price
      const numericPrice = parseInt(p.price.replace(/[^0-9]/g, ""), 10);
      let okPrice = true;
      if (filters.price === "10k") okPrice = numericPrice <= 10000;
      else if (filters.price === "20k") okPrice = numericPrice <= 20000;
      else if (filters.price === "30k") okPrice = numericPrice <= 30000;
      else if (filters.price === "above30") okPrice = numericPrice >= 30000;

      // Search
      const q = filters.search.trim().toLowerCase();
      const okSearch =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.pid.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q);

      return okLocation && okType && okGender && okPrice && okSearch;
    });
  }, [filters]);

  const visibleProperties = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const loadMore = () => setVisibleCount((prev) => prev + 6);

  // PAGE STYLES
  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#B2E1FF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const contentStyle = {
    width: "100%",
    maxWidth: "1200px",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#1A365A",
    marginTop: "20px",
    marginBottom: "10px",
    fontSize: "26px",
    fontWeight: "700",
  };

  const subTextStyle = {
    textAlign: "center",
    color: "#1A365A",
    marginBottom: "20px",
    fontSize: "14px",
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h2 style={headingStyle}>Explore Rental Properties</h2>
        <p style={subTextStyle}>
          Use filters to find properties matching your budget and requirements.
        </p>

        <FilterBar
          filters={filters}
          onChange={handleFilterChange}
          properties={MOCK_PROPERTIES}
        />

        <PropertyGrid
          properties={visibleProperties}
          onLoadMore={loadMore}
          hasMore={hasMore}
          visibleCount={visibleProperties.length}
          totalCount={filtered.length}
        />
      </div>

      <Footer />
    </div>
  );
}

export default PropertyPage;
