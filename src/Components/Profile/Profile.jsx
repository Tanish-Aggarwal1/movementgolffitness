import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGoogleSheetData, setLoading, setError } from "../../store/dataSlice";

function Profile() {
  const { googleSheetData, loading, error } = useSelector((state) => state.data);
  const session = useSelector((state) => state.auth.session); // Access session from Redux
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true)); // Set loading to true
      try {
        const response = await fetch("http://localhost:5000/api/sheet-data");
        const data = await response.json();
        console.log("Fetched Data:", data); // Debugging
        dispatch(setGoogleSheetData(data)); // Save data to Redux
      } catch (error) {
        console.error("Error fetching data:", error);
        dispatch(setError(error.message)); // Handle error
      } finally {
        dispatch(setLoading(false)); // Reset loading state
      }
    };

    fetchData();
  }, [dispatch]);

  const headers = googleSheetData && googleSheetData.length > 0 ? googleSheetData[0] : [];
  const filteredRows = googleSheetData
    ? googleSheetData.slice(1).filter((row) => row[1] === session?.email) // Hardcoded email for now
    : [];

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  if (!googleSheetData || googleSheetData.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredRows.length > 0 ? (
            filteredRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers?.length || 1}>No data available for this user.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Profile;