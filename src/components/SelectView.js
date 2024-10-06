import React, { useState } from "react";
import { FormLabel, Select, MenuItem, Box } from "@mui/material";
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';

const SelectView = ({ formData, handleChange }) => {
  const [selectedView, setSelectedView] = useState(formData.viewType);

  // Handle icon click to update selection
  const handleIconClick = (viewType) => {
    setSelectedView(viewType);
    handleChange({ target: { name: 'viewType', value: viewType } });
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Select a View</h2>
      <p style={{ textAlign: "center" }}>You can also customize this view in settings</p>

      {/* Icon Selection */}
      <div
        className="iconBox"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "40px",
          marginTop: "20px",
        }}
      >
        {/* List View Icon */}
        <div
          className="boxItem"
          onClick={() => handleIconClick("List")}
          style={{
            cursor: "pointer",
            textAlign: "center",
            border: selectedView === "List" ? "2px solid blue" : "2px solid transparent",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <BallotOutlinedIcon style={{ fontSize: 50, color: selectedView === "List" ? "blue" : "black" }} />
          <p style={{ marginTop: "10px", fontWeight: selectedView === "List" ? "bold" : "normal" }}>
            List View
          </p>
        </div>

        {/* Board View Icon */}
        <div
          className="boxItem"
          onClick={() => handleIconClick("Board")}
          style={{
            cursor: "pointer",
            textAlign: "center",
            border: selectedView === "Board" ? "2px solid blue" : "2px solid transparent",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <DashboardIcon style={{ fontSize: 50, color: selectedView === "Board" ? "blue" : "black" }} />
          <p style={{ marginTop: "10px", fontWeight: selectedView === "Board" ? "bold" : "normal" }}>
            Board View
          </p>
        </div>
      </div>
    </>
  );
};

export default SelectView;
