function getSeverityClass(severity) {
  switch (severity) {
    case "CRITICAL":
      return "badge critical";

    case "HIGH":
      return "badge high";

    case "MEDIUM":
      return "badge medium";

    case "LOW":
      return "badge low";

    default:
      return "badge";
  }
}

function CVETable({ cves = [] }) {
  const cveList = Array.isArray(cves) ? cves : [];

  return (
    <div className="table-wrapper">
      <table className="cve-table">
        <thead>
          <tr>
            <th>CVE ID</th>
            <th>Severity</th>
            <th>CVSS</th>
            <th>Published</th>
          </tr>
        </thead>

        <tbody>
          {cveList.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No CVEs Found
              </td>
            </tr>
          ) : (
            cveList.map((cve) => (
              <tr key={cve.id}>
                <td>
                  <a
                    href={cve.url}
                    target="_blank"
                    rel="noreferrer"
                    className="cve-link"
                  >
                    {cve.cve_id}
                  </a>
                </td>

                <td>
                  <span className={getSeverityClass(cve.severity)}>
                    {cve.severity}
                  </span>
                </td>

                <td>
                  <span
                    className={
                      cve.cvss_score >= 9
                        ? "score critical-score"
                        : cve.cvss_score >= 7
                        ? "score high-score"
                        : cve.cvss_score >= 4
                        ? "score medium-score"
                        : "score low-score"
                    }
                  >
                    {cve.cvss_score}
                  </span>
                </td>

                <td>
                  {new Date(cve.published_date).toLocaleDateString()}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CVETable;