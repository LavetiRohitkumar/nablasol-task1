import React from "react";
import {
  FormLabel,
  TextField,
  Button,
  Box,
} from "@mui/material";

const Team = ({ formData, setFormData, newMember, setNewMember, addTeamMember }) => {
  const removeTeamMember = (member) => {
    setFormData((prev) => ({
      ...prev,
      team: prev.team.filter((m) => m !== member),
    }));
  };

  return (
    <div style={{borderRadius:"3px", borderColor:"black", width:"500px"}}>
    <h2 style={{textAlign:"center"}}>Team</h2>
    <Box>
      <FormLabel>Invite or Add a Person</FormLabel>
      <div className="tsk" style={{display:"flex",flexDirection:"row",alignItems:"center",justifyItems:"center"}}>
      <TextField
        fullWidth
        label="Add a person"
        value={newMember}
        onChange={(e) => setNewMember(e.target.value)}
        margin="normal"
      />
      <Button onClick={addTeamMember} variant="contained" style={{ height:"60px"}}>
        Add
      </Button>
      </div>
      <Box mt={2}>
        {formData.team.map((member, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <span>{member}</span>
            <Button onClick={() => removeTeamMember(member)}>x</Button>
          </div>
        ))}
      </Box>
    </Box>
    </div>
  );
};

export default Team;
