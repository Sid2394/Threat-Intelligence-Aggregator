import { useState } from "react";
import api from "../services/api";

import { toast } from "react-toastify";

function IPLookup() {
  const [ip, setIp] = useState("");
  const [result, setResult] = useState(null);

  const checkIP = async () => {
    if (!ip.trim()) {
      toast.warning("Please enter an IP address");
      return;
    }

    try {
      const response = await api.get(`/ip/${ip}`);
      setResult(response.data.data);
    } catch (error) {
      toast.error("Unable to fetch IP reputation.");
      console.error(error);
      setResult(null);
    }
  };

  return (
    <div className="lookup">
      <h3>IP Reputation Lookup</h3>

      <div className="lookup-box">
  <input
    type="text"
    placeholder="Enter IP Address"
    value={ip}
    onChange={(e) => setIp(e.target.value)}
  />

  <button onClick={checkIP}>
    Check
  </button>
</div>

      {result && (
        <div className="ip-result">
          <h4>Result</h4>

          <p><strong>IP:</strong> {result.ip}</p>

          <p><strong>Country:</strong> {result.country}</p>

          <p><strong>ISP:</strong> {result.isp}</p>

          <p><strong>Domain:</strong> {result.domain}</p>

          <p><strong>Usage Type:</strong> {result.usage_type}</p>

          <p><strong>Abuse Score:</strong> {result.abuse_score}</p>

          <p><strong>Total Reports:</strong> {result.reports}</p>

          <p><strong>Distinct Users:</strong> {result.distinct_users}</p>

          <p><strong>TOR:</strong> {result.is_tor ? "Yes" : "No"}</p>

          <p><strong>Whitelisted:</strong> {result.is_whitelisted ? "Yes" : "No"}</p>

          <p><strong>Last Reported:</strong> {result.last_reported || "N/A"}</p>
        </div>
      )}
    </div>
  );
}

export default IPLookup;