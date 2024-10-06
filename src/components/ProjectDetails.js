import React from "react";
import {
  FormLabel,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Grid,
  Box,
  Button,
} from "@mui/material";

const ProjectDetails = ({ formData, handleChange, nextStep }) => {
  return (
    <Box p={2}>
      <h2 style={{textAlign:"center"}}>Create a Project</h2>
      {/* Project Name */}
      <FormLabel>Project name</FormLabel>
      <TextField
        fullWidth
        label="Enter project name here"
        name="projectName"
        value={formData.projectName}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />

      {/* Client Dropdown and New Client Input */}
      <FormLabel>Client</FormLabel>
      <Grid container spacing={2} marginY={2}>
        <Grid item xs={6}>
          <FormControl fullWidth margin="normal">
            <Select
              value={formData.client}
              onChange={handleChange}
              name="client"
              label="Select Existing Client"
              variant="outlined"
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select a Client
              </MenuItem>
              <MenuItem value={"Client 1"}>Client 1</MenuItem>
              <MenuItem value={"Client 2"}>Client 2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Add New Client"
            name="newClient"
            value={formData.newClient}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>

      {/* Start Date and End Date */}
      <FormLabel>Dates</FormLabel>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            type="date"
            label="Start Date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            margin="normal"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="date"
            label="End Date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            margin="normal"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>
      </Grid>

      {/* Notes Section */}
      <FormLabel>Notes</FormLabel>
      <TextField
        fullWidth
        label="Optional"
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        multiline
        rows={4} // Increased rows for bigger text area
      />

      {/* Next Button aligned to the right */}
      {/* <Box mt={2} display="flex" justifyContent="flex-end">
        <Button onClick={nextStep} variant="contained" color="primary">
          Next
        </Button>
      </Box> */}
    </Box>
  );
};

export default ProjectDetails;
