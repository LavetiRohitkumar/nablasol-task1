import React from "react";
import {
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Box,
  Radio,
  RadioGroup,
  FormControl as MuiFormControl,
} from "@mui/material";

const ProjectType = ({ formData, handleChange, handleCheck }) => {
  return (
    <Box>
      <h2 style={{ textAlign: "center" }}>Project Type</h2>
      <p style={{ textAlign: "center" }}>
        Don't panic - You can also customize these permissions in settings
      </p>

      {/* Radio Button Group for Project Type */}
      
      <div class="btn-group" role="group" aria-label="Basic radio toggle button group" style={{margin:"20px"}}>
          <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
          <label class="btn btn-outline-primary" for="btnradio1">Time & Materials</label>

          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
          <label class="btn btn-outline-primary" for="btnradio2">Fixed Fee</label>

          <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
          <label class="btn btn-outline-primary" for="btnradio3">Non Billable</label>
      </div> <br />

      {/* <MuiFormControl component="fieldset" style={{ marginBottom: "20px" }}>
        <FormLabel component="legend">Project Type</FormLabel>
        <RadioGroup
          row
          aria-label="project-type"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Time & Materials"
            control={<Radio color="primary" />}
            label="Time & Materials"
          />
          <FormControlLabel
            value="Fixed Fee"
            control={<Radio color="primary" />}
            label="Fixed Fee"
          />
          <FormControlLabel
            value="Non-Billable"
            control={<Radio color="primary" />}
            label="Non-Billable"
          />
        </RadioGroup>
      </MuiFormControl> */}

      {/* Hourly Rate with Dropdown and Text Field */}
      <FormLabel style={{}}>Hourly</FormLabel>
      <p>We need hourly rates to track your project's billable amount</p>
      <Box display="flex" alignItems="center" gap="20px">
        {/* Hourly Rate Dropdown */}
        <FormControl fullWidth>
          <Select
            value={formData.hourlyRate}
            onChange={handleChange}
            name="hourlyRate"
            label="Project Hourly Rate"
            variant="outlined"
          >
            <MenuItem value={25}>$25</MenuItem>
            <MenuItem value={50}>$50</MenuItem>
            <MenuItem value={75}>$75</MenuItem>
            <MenuItem value={100}>$100</MenuItem>
            <MenuItem value={150}>$150</MenuItem>
          </Select>
        </FormControl>

        {/* Text Input Beside Hourly Rate */}
        <TextField
          label="Custom Rate"
          name="customRate"
          value={formData.customRate}
          onChange={handleChange}
          variant="outlined"
          placeholder="e.g., 120"
        />
      </Box>

      {/* Budget Dropdown */}
      <FormLabel>Budget</FormLabel>
      <p>We need a budget to track your project's billable amount</p>
      <FormControl fullWidth>
        <Select
          value={formData.budget}
          onChange={handleChange}
          name="budget"
          label="Project Budget"
          variant="outlined"
        >
          <MenuItem value={5000}>$5,000</MenuItem>
          <MenuItem value={10000}>$10,000</MenuItem>
          <MenuItem value={15000}>$15,000</MenuItem>
          <MenuItem value={20000}>$20,000</MenuItem>
        </Select>
      </FormControl>

      {/* Checkbox Options */}
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.budgetResets}
              onChange={handleCheck}
              name="budgetResets"
            />
          }
          label="Budget resets every month"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.sendAlert}
              onChange={handleCheck}
              name="sendAlert"
            />
          }
          label="Send email alerts if project exceeds budget"
        />
      </FormGroup>
    </Box>
  );
};

export default ProjectType;
