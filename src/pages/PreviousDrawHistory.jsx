import React, { useEffect, useState } from "react";
import styles from "../styles/PreviousDrawHistory.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

// Function to parse dates
const parseDate = (dateString) => {
  return new Date(dateString);
};

const PreviousDrawHistory = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  let [metaData, setMetaData] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: "drawDateFull",
    direction: "descending",
  });
  const [selectedRoundType, setSelectedRoundType] = useState(""); // State for round type filter
  const itemsPerPage = 30;

  useEffect(() => {
    fetch(
      "https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json#/rounds"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data.rounds);
          setData(data.rounds);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Extract unique round types
  const getUniqueRoundTypes = (data) => {
    const roundTypes = data.map(item => item.drawName);
    return [...new Set(roundTypes)];
  };

  const uniqueRoundTypes = React.useMemo(() => getUniqueRoundTypes(data), [data]);

  // Sorting logic
  const sortedData = React.useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        let comparison = 0;

        if (sortConfig.key === "drawDateFull") {
          comparison =
            parseDate(a[sortConfig.key]) - parseDate(b[sortConfig.key]);
        } else if (
          sortConfig.key === "drawSize" ||
          sortConfig.key === "drawCRS"
        ) {
          comparison = (a[sortConfig.key] || 0) - (b[sortConfig.key] || 0);
        } else {
          comparison = a[sortConfig.key]?.localeCompare(b[sortConfig.key]) || 0;
        }

        return sortConfig.direction === "ascending" ? comparison : -comparison;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  // Filtered data based on selected round type
  const filteredData = React.useMemo(() => {
    return sortedData.filter(item =>
      selectedRoundType === "" || item.drawName === selectedRoundType
    );
  }, [sortedData, selectedRoundType]);

  // Calculate the data to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Change sort order
  const handleSort = (key) => {
    let direction = "descending";
    if (sortConfig.key === key && sortConfig.direction === "descending") {
      direction = "ascending";
    }
    setSortConfig({ key, direction });
  };

  const pageNumbers = Math.ceil(filteredData.length / itemsPerPage);
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/previousDrawHistoryMeta")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setMetaData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
              <Helmet>
        <title>
          {metaData?.metaTitle
            ? metaData?.metaTitle
            : "Brightlight Immigration"}
        </title>
        <meta
          name="description"
          content={
            metaData?.metaDesc
              ? metaData?.metaDesc
              : "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services. We are committed to providing honest and accurate advice to guide you through your immigration journey."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={
            metaData?.metaOgTitle
              ? metaData?.metaOgTitle
              : " Brightlight Immigration"
          }
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            metaData?.metaOgDesc
              ? metaData?.metaOgDesc
              : "Discover the story behind Brightlight Immigration, our commitment to providing honest and accurate advice, and how our team can assist you with your immigration needs."
          }
        />
        <meta
          name="Keywords"
          content={
            metaData?.metaKeywords
              ? metaData?.metaKeywords
              : "Brightlight Immigration, Immigration Services, Mission, Team"
          }
        />
      </Helmet>
      <Navbar1 />
      <div className={styles.bannerParent}>
        <div className={styles.bannerMain}>
          <h1>Previous Draw History</h1>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div className={styles.filterContainer}>
          <p>Filter Data by Round Type:</p>
          <select
            value={selectedRoundType}
            onChange={(e) => setSelectedRoundType(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="">All</option>
            {uniqueRoundTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>
                <button
                  className={styles.sortButton}
                  onClick={() => handleSort("drawNumber")}
                >
                  <span className={styles.headingSpan}>#</span>
                  <span
                    className={`${styles.dropdownArrow} ${
                      sortConfig.key === "drawNumber"
                        ? styles[sortConfig.direction]
                        : ""
                    }`}
                  >
                    {sortConfig.key === "drawNumber"
                      ? sortConfig.direction === "ascending"
                        ? "▲"
                        : "▼"
                      : "▼"}
                  </span>
                </button>
              </th>
              <th>
                <button
                  className={styles.sortButton}
                  onClick={() => handleSort("drawDateFull")}
                >
                  <span className={styles.headingSpan}>Date</span>
                  <span
                    className={`${styles.dropdownArrow} ${
                      sortConfig.key === "drawDateFull"
                        ? styles[sortConfig.direction]
                        : ""
                    }`}
                  >
                    {sortConfig.key === "drawDateFull"
                      ? sortConfig.direction === "ascending"
                        ? "▲"
                        : "▼"
                      : "▼"}
                  </span>
                </button>
              </th>
              <th>
                <button
                  className={styles.sortButton}
                  onClick={() => handleSort("drawName")}
                >
                  <span className={styles.headingSpan}>Round Type</span>
                  <span
                    className={`${styles.dropdownArrow} ${
                      sortConfig.key === "drawName"
                        ? styles[sortConfig.direction]
                        : ""
                    }`}
                  >
                    {sortConfig.key === "drawName"
                      ? sortConfig.direction === "ascending"
                        ? "▲"
                        : "▼"
                      : "▼"}
                  </span>
                </button>
              </th>
              <th>
                <button
                  className={styles.sortButton}
                  onClick={() => handleSort("drawSize")}
                >
                  <span className={styles.headingSpan}>Invitations Issued</span>
                  <span
                    className={`${styles.dropdownArrow} ${
                      sortConfig.key === "drawSize"
                        ? styles[sortConfig.direction]
                        : ""
                    }`}
                  >
                    {sortConfig.key === "drawSize"
                      ? sortConfig.direction === "ascending"
                        ? "▲"
                        : "▼"
                      : "▼"}
                  </span>
                </button>
              </th>
              <th>
                <button
                  className={styles.sortButton}
                  onClick={() => handleSort("drawCRS")}
                >
                  <span className={styles.headingSpan}>
                    CRS score of lowest-ranked candidate invited
                  </span>
                  <span
                    className={`${styles.dropdownArrow} ${
                      sortConfig.key === "drawCRS"
                        ? styles[sortConfig.direction]
                        : ""
                    }`}
                  >
                    {sortConfig.key === "drawCRS"
                      ? sortConfig.direction === "ascending"
                        ? "▲"
                        : "▼"
                      : "▼"}
                  </span>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => {
              const url = item.drawNumberURL?.trim().split("href='")[1];
              return (
                <tr className={styles.dataAll} key={index}>
                  <td>
                    <a href={`https://www.canada.ca/${url}`}>
                      {item?.drawNumber}
                    </a>
                  </td>
                  <td>
                    <p>{item.drawDateFull}</p>
                  </td>
                  <td>
                    <p>{item.drawName}</p>
                  </td>
                  <td>
                    <p>{item.drawSize}</p>
                  </td>
                  <td>
                    <p>{item.drawCRS}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className={styles.pagination}>
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            {"<<"}
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          <span>
            Page {currentPage} of {pageNumbers}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pageNumbers}
          >
            {">"}
          </button>
          <button
            onClick={() => handlePageChange(pageNumbers)}
            disabled={currentPage === pageNumbers}
          >
            {">>"}
          </button>
        </div>
      </div>

      <Footer1 />
    </>
  );
};

export default PreviousDrawHistory;
