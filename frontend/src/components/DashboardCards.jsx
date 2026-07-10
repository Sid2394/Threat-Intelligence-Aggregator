import {
  FaBug,
  FaExclamationTriangle,
  FaFire,
  FaShieldAlt,
  FaDatabase,
} from "react-icons/fa";

function DashboardCards({ stats }) {
  const cards = [
    {
      title: "Total CVEs",
      value: stats.total,
      icon: <FaDatabase />,
      color: "#3b82f6",
    },
    {
      title: "Critical",
      value: stats.critical,
      icon: <FaFire />,
      color: "#ef4444",
    },
    {
      title: "High",
      value: stats.high,
      icon: <FaExclamationTriangle />,
      color: "#f97316",
    },
    {
      title: "Medium",
      value: stats.medium,
      icon: <FaBug />,
      color: "#eab308",
    },
    {
      title: "Low",
      value: stats.low,
      icon: <FaShieldAlt />,
      color: "#22c55e",
    },
  ];

  return (
    <div className="cards">
      {cards.map((card, index) => (
        <div
          key={index}
          className="dashboard-card"
          style={{
            borderTop: `5px solid ${card.color}`,
          }}
        >
          <div
            className="card-icon"
            style={{ color: card.color }}
          >
            {card.icon}
          </div>

          <h3>{card.title}</h3>

          <h1>{card.value}</h1>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;