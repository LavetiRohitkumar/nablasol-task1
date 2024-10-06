import React from "react";
import {
  FormLabel,
  TextField,
  Button,
  Box,
  Checkbox,
} from "@mui/material";

const Tasks = ({ formData, setFormData, newTask, setNewTask, addTask }) => {
  const removeTask = (task) => {
    setFormData((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((t) => t !== task),
    }));
  };

  return (
    <div style={{borderRadius:"3px", borderColor:"black", width:"500px"}}>
    <h2 style={{textAlign:"center"}}>Tasks</h2>
    <Box>
      <FormLabel>Add a task</FormLabel>
      <div className="tsk" style={{display:"flex",flexDirection:"row",alignItems:"center",justifyItems:"center"}}>
      <TextField
        fullWidth
        label="Add task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        margin="normal"
        // style={{height:"50px"}}
      />
      <Button onClick={addTask} variant="contained" style={{   }}>
        Add
      </Button>
      </div>
      <Box mt={2}>
        {formData.tasks.map((task, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <Checkbox checked={true} />
            <span>{task}</span>
            <Button onClick={() => removeTask(task)}>x</Button>
          </div>
        ))}
      </Box>
    </Box>
    </div>
  );
};

export default Tasks;
