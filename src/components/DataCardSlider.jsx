import React, { useState } from "react";

const DataCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const dataObject = {
  //   agent_count: 23174,
  //   data_collectors_count: 2146,
  //   device_count: 1399998,
  //   message_collectors_count: 333,
  //   organizations_count: 239,
  //   pf_lab: 48,
  //   pf_not_prod_lab: 0,
  //   pf_prod: 78,
  //   request_id: "6e0ed7a9-fdfc-4b67-a289-89752829d6aa",
  //   rp_lab: 6,
  //   rp_not_prod_lab: 0,
  //   rp_prod: 29,
  //   sl1_lab: 64,
  //   sl1_not_prod_lab: 0,
  //   sl1_prod: 139,
  // };

  // const cardData = [
  //   {
  //     id: 1,
  //     title: "Device Count",
  //     value: "1399998",
  //     color: "#FF8C42",
  //   },
  //   {
  //     id: 2,
  //     title: "Organization Count",
  //     value: "13999",
  //     color: "#FF8C42",
  //   },

  //   {
  //     id: 3,
  //     title: "Agent Count",
  //     value: "23174",
  //     color: "#6BCF7F",
  //   },
  //   {
  //     id: 4,
  //     title: "Data Collectors",
  //     value: "2146",
  //     color: "#FFD23F",
  //   },
  //   {
  //     id: 5,
  //     title: "Message Collectors",
  //     value: "333",
  //     color: "#4A90E2",
  //   },
  //   {
  //     id: 6,
  //     title: "SL1",
  //     value: "177",
  //     subtitle: "(114/63)",
  //     label: "(Prod/Lab)",
  //     color: "#F7DC6F",
  //   },
  //   {
  //     id: 7,
  //     title: "PowerFlow",
  //     value: "126",
  //     subtitle: "(78/48)",
  //     label: "(Prod/Lab)",
  //     color: "#82E0AA",
  //   },
  //   {
  //     id: 8,
  //     title: "Restorepoint",
  //     value: "35",
  //     subtitle: "(28/7)",
  //     label: "(Prod/Lab)",
  //     color: "#F8A978",
  //   },
  // ];

  // const rawCardData = [
  //   {
  //     title: "Device Count",
  //     value: dataObject.device_count.toString(),
  //     color: "#FF8C42",
  //   },
  //   {
  //     title: "Organization Count",
  //     value: dataObject.organizations_count.toString(),
  //     color: "#4A90E2",
  //   },
  //   {
  //     title: "Agent Count",
  //     value: dataObject.agent_count.toString(),
  //     color: "#6BCF7F",
  //   },
  //   {
  //     title: "Data Collectors",
  //     value: dataObject.data_collectors_count.toString(),
  //     color: "#FFD23F",
  //   },
  //   {
  //     title: "Message Collectors",
  //     value: dataObject.message_collectors_count.toString(),
  //     color: "#4A90E2",
  //   },
  //   {
  //     title: "SL1",
  //     value: (dataObject.sl1_prod + dataObject.sl1_lab).toString(),
  //     subtitle: `(${dataObject.sl1_prod}/${dataObject.sl1_lab})`,
  //     label: "(Prod/Lab)",
  //     color: "#F7DC6F",
  //   },
  //   {
  //     title: "PowerFlow",
  //     value: (dataObject.pf_prod + dataObject.pf_lab).toString(),
  //     subtitle: `(${dataObject.pf_prod}/${dataObject.pf_lab})`,
  //     label: "(Prod/Lab)",
  //     color: "#82E0AA",
  //   },
  //   {
  //     title: "Restorepoint",
  //     value: (dataObject.rp_prod + dataObject.rp_lab).toString(),
  //     subtitle: `(${dataObject.rp_prod}/${dataObject.rp_lab})`,
  //     label: "(Prod/Lab)",
  //     color: "#F8A978",
  //   },
  // ];

  // const cardData = rawCardData.map((item, index) => ({
  //   id: index + 1, // Dynamic ID
  //   ...item,
  // }));

  const dataObject = {
    agent_count: 23174,
    data_collectors_count: 2146,
    device_count: 1399998,
    message_collectors_count: 333,
    organizations_count: 239,
    pf_lab: 48,
    pf_not_prod_lab: 0,
    pf_prod: 78,
    request_id: "6e0ed7a9-fdfc-4b67-a289-89752829d6aa",
    rp_lab: 6,
    rp_not_prod_lab: 0,
    rp_prod: 29,
    sl1_lab: 64,
    sl1_not_prod_lab: 0,
    sl1_prod: 139,
  };

  // Color palette (cycled for demonstration)
  const colors = [
    "#FF8C42",
    "#4A90E2",
    "#6BCF7F",
    "#FFD23F",
    "#82E0AA",
    "#F8A978",
    "#F7DC6F",
    "#A29BFE",
  ];

  // const groupedKeys = ["sl1", "pf", "rp"];

  // const titleMap = {
  //   sl1: "SL1",
  //   pf: "PowerFlow",
  //   rp: "Restorepoint",
  // };

  // const cardData = [];

  // Object.entries(dataObject).forEach(([key, value]) => {
  //   if (
  //     groupedKeys.some((prefix) => key.startsWith(prefix)) ||
  //     key.includes("_not_prod_lab") ||
  //     key === "request_id"
  //   ) {
  //     return;
  //   }

  //   cardData.push({
  //     id: cardData.length + 1,
  //     title: key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
  //     value: value.toString(),
  //     color: colors[cardData.length % colors.length],
  //   });
  // });

  // groupedKeys.forEach((key) => {
  //   const prod = dataObject[`${key}_prod`] || 0;
  //   const lab = dataObject[`${key}_lab`] || 0;
  //   cardData.push({
  //     id: cardData.length + 1,
  //     title: titleMap[key] || key.toUpperCase(), // Use mapped name
  //     value: (prod + lab).toString(),
  //     subtitle: `(${prod}/${lab})`,
  //     label: "(Prod/Lab)",
  //     color: colors[cardData.length % colors.length],
  //   });
  // });
  const groupedKeys = ["sl1", "pf", "rp"];
  const titleMap = {
    sl1: "SL1",
    pf: "PowerFlow",
    rp: "Restorepoint",
  };

  // Desired order of keys for non-grouped items
  const nonGroupedOrder = [
    "device_count",
    "organizations_count",
    "agent_count",
    "data_collectors_count",
    "message_collectors_count",
  ];

  // Custom titles for non-grouped keys
  const customTitleMap = {
    organizations_count: "Organization Count", // singular title fix
    message_collectors_count: "Message Collectors", // ensure consistent title
    device_count: "Device Count",
    agent_count: "Agent Count",
    data_collectors_count: "Data Collectors",
  };

  // Build non-grouped cards in order, with custom titles
  const nonGroupedCards = nonGroupedOrder
    .map((key, i) => {
      if (!(key in dataObject)) return null;

      return {
        id: i + 1,
        title:
          customTitleMap[key] ||
          key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: dataObject[key].toString(),
        color: colors[i % colors.length],
      };
    })
    .filter(Boolean);

  // Build grouped cards
  const groupedCards = groupedKeys.map((key, i) => {
    const prod = dataObject[`${key}_prod`] || 0;
    const lab = dataObject[`${key}_lab`] || 0;
    return {
      id: nonGroupedCards.length + i + 1,
      title: titleMap[key],
      value: (prod + lab).toString(),
      subtitle: `(${prod}/${lab})`,
      label: "(Prod/Lab)",
      color: colors[(nonGroupedCards.length + i) % colors.length],
    };
  });

  // Final combined array
  const cardData = [...nonGroupedCards, ...groupedCards];

  const cardsPerView = 4;
  const totalSlides = cardData.length;

  // const nextSlide = () => {
  //   setCurrentIndex((prev) => (prev + 1) % totalSlides);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  // };

  const maxIndex = cardData.length - cardsPerView; // last possible slide index

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const containerStyle = {
    width: "100%",
    maxWidth: "1152px",
    margin: "0 auto",
    padding: "24px",
    background: "linear-gradient(135deg, #EBF4FF 0%, #E0E7FF 100%)",
    borderRadius: "12px",
  };

  const sliderContainerStyle = {
    position: "relative",
  };

  const overflowContainerStyle = {
    overflow: "hidden",
    borderRadius: "8px",
  };

  const translateXValue = -(currentIndex * (100 / cardsPerView));
  const cardWidth = 100 / cardsPerView;

  const sliderTrackStyle = {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    transform: "translateX(" + translateXValue + "%)",
  };

  const cardWrapperStyle = {
    flexShrink: 0,
    // width: cardWidth + "%",
    padding: "0 8px",
    width: "280px",
  };

  const cardStyle = {
    background: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "4px 24px",
    height: "120px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderTop: "4px solid",
    transition: "box-shadow 0.3s ease",
  };

  const cardHoverStyle = {
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
  };

  const cardContentStyle = {
    textAlign: "center",
  };

  const cardTitleStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#374151",
    marginBottom: "8px",
  };

  const cardValueStyle = {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: "4px",
  };

  const subtitleStyle = {
    fontSize: "14px",
    color: "#6B7280",
  };

  const subtitleBoldStyle = {
    fontWeight: "500",
  };

  const subtitleLabelStyle = {
    color: "#9CA3AF",
    marginLeft: "4px",
  };

  const colorBarStyle = {
    height: "8px",
    borderRadius: "4px",
    margin: "12px auto 0",
    width: "60%",
  };

  const arrowButtonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "white",
    borderRadius: "50%",
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    zIndex: 10,
  };

  const leftArrowStyle = {
    ...arrowButtonStyle,
    left: "0",
    transform: "translateY(-50%) translateX(-16px)",
  };

  const rightArrowStyle = {
    ...arrowButtonStyle,
    right: "0",
    transform: "translateY(-50%) translateX(16px)",
  };

  const arrowHoverStyle = {
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
    transform: "translateY(-50%) scale(1.1)",
  };

  const indicatorsStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "24px",
    gap: "8px",
  };

  const indicatorStyle = {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    transition: "all 0.3s ease",
    border: "none",
    cursor: "pointer",
  };

  const activeIndicatorStyle = {
    ...indicatorStyle,
    background: "#4F46E5",
    transform: "scale(1.25)",
  };

  const inactiveIndicatorStyle = {
    ...indicatorStyle,
    background: "#D1D5DB",
  };

  const summaryStyle = {
    marginTop: "32px",
    background: "white",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const summaryGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
    textAlign: "center",
  };

  const summaryItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const summaryLabelStyle = {
    fontSize: "14px",
    color: "#6B7280",
  };

  const summaryValueStyle = {
    fontSize: "20px",
    fontWeight: "600",
  };

  return (
    <div style={containerStyle}>
      <div style={sliderContainerStyle}>
        <div style={overflowContainerStyle}>
          <div style={sliderTrackStyle}>
            {cardData.map((card) => (
              <div key={card.id} style={cardWrapperStyle}>
                <div
                  style={{
                    ...cardStyle,
                    borderTopColor: card.color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = cardStyle.boxShadow;
                  }}
                >
                  <div style={cardContentStyle}>
                    <h3 style={cardTitleStyle}>{card.title}</h3>
                    <div style={cardValueStyle}>{card.value}</div>
                    {card.subtitle && (
                      <div style={subtitleStyle}>
                        <span style={subtitleBoldStyle}>{card.subtitle}</span>
                        {card.label && (
                          <span style={subtitleLabelStyle}>{card.label}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          style={leftArrowStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = arrowHoverStyle.boxShadow;
            e.currentTarget.style.transform =
              "translateY(-50%) translateX(-16px) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = arrowButtonStyle.boxShadow;
            e.currentTarget.style.transform =
              "translateY(-50%) translateX(-16px) scale(1)";
          }}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#6B7280"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          style={rightArrowStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = arrowHoverStyle.boxShadow;
            e.currentTarget.style.transform =
              "translateY(-50%) translateX(16px) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = arrowButtonStyle.boxShadow;
            e.currentTarget.style.transform =
              "translateY(-50%) translateX(16px) scale(1)";
          }}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#6B7280"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DataCardSlider;
