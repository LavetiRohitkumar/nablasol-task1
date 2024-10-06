import React from "react";
import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Typography,
} from "@mui/material";

const ManageProjects = ({ formData, handleChange }) => {
  return (
    <Box>
      <h2 style={{ textAlign: "center" }}>Who can manage projects</h2>
      <p style={{textAlign:"center"}}>Don't panic - You can also customize this permissions in settings</p>
      {/* <FormLabel>Who can manage projects?</FormLabel> */}
      <RadioGroup
        aria-label="managePermission"
        name="managePermission"
        value={formData.managePermission}
        onChange={handleChange}
        style={{margin:"60px"}}
      >
        {/* Everyone */}
        <Box
          mb={2}
          p={2}
          border="1px solid #ccc"
          borderRadius="8px"
          display="flex"
          flexDirection="column"
        >
          <FormControlLabel
            value="Everyone"
            control={<Radio />}
            label={
              <Box>
                <Typography variant="h6">Everyone</Typography>
                <Typography variant="body2" color="textSecondary">
                  All users can now to see it, but guests cannot access the projects.
                </Typography>
              </Box>
            }
          />
        </Box>

        {/* Only Admins */}
        <Box
          mb={2}
          p={2}
          border="1px solid #ccc"
          borderRadius="8px"
          display="flex"
          flexDirection="column"
        >
          <FormControlLabel
            value="Only Admins"
            control={<Radio />}
            label={
              <Box>
                <Typography variant="h6">Only Admin's</Typography>
                <Typography variant="body2" color="textSecondary">
                  Only admins can manage everything.
                </Typography>
              </Box>
            }
          />
        </Box>

        {/* Specific People */}
        <Box
          mb={2}
          p={2}
          border="1px solid #ccc"
          borderRadius="8px"
          display="flex"
          flexDirection="column"
        >
          <FormControlLabel
            value="Specific People"
            control={<Radio />}
            label={
              <Box>
                <Typography variant="h6">Specific People</Typography>
                <Typography variant="body2" color="textSecondary">
                  Only some specific people can able to see it.
                </Typography>
              </Box>
            }
          />
        </Box>
      </RadioGroup>
    </Box>
  );
};

export default ManageProjects;
