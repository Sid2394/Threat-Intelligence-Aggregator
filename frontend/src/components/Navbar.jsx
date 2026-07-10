import { FaShieldAlt, FaSyncAlt } from "react-icons/fa";

function Navbar({ onRefresh, loading }) {
  return (
    <nav className="navbar">

      <div className="logo">
        <FaShieldAlt size={30} />

        <div>
          <h1>Threat Intelligence Aggregator</h1>
          <p>Cyber Security Dashboard</p>
        </div>
      </div>

      <button
        className="refresh-btn"
        onClick={onRefresh}
        disabled={loading}
      >
        <FaSyncAlt />

        {loading ? "Updating..." : "Refresh"}
      </button>

    </nav>
  );
}

export default Navbar;