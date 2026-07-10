import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import api from "../services/api";

import { toast } from "react-toastify";

function SearchBar({ setCves, loadAllCVEs }) {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (search.trim() === "") {
      loadAllCVEs();
      return;
    }

    try {
      const res = await api.get(`/cves/search/${search}`);
      setCves([res.data]);
    } catch {
      setCves([]);
      toast.error("CVE not found");
    }
  };

  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search by CVE ID (Example: CVE-1999-1212)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />

      <button onClick={handleSearch}>
        <FaSearch />
        Search
      </button>

    </div>
  );
}

export default SearchBar;