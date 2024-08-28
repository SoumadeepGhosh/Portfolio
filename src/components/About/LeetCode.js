import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

function LeetCodeCalendar({ username }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://leetcode-stats-api.herokuapp.com/ghoshsoumadeep98/`);
      const result = await response.json();
      // Assume result might be an object with an array under a specific key
      setData(result.activity || []); // Example structure: { activity: [...] }
    };

    fetchData();
  }, [username]);

  const renderCalendar = () => {
    if (!Array.isArray(data)) return <div>No data available</div>;

    return data.map((day) => (
      <div
        key={day.date}
        style={{
          display: "inline-block",
          width: "15px",
          height: "15px",
          margin: "2px",
          backgroundColor: day.problemsSolved ? "#c084f5" : "#ebedf0",
        }}
        title={`${day.date}: ${day.problemsSolved} problems solved`}
      ></div>
    ));
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">LeetCode</strong> Activity
      </h1>
      <div>{renderCalendar()}</div>
    </Row>
  );
}

export default function LeetCode() {
  return (
    <LeetCodeCalendar username="ghoshsoumadeep98"  />


  );
}
