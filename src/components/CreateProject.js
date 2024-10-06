import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Snackbar,
  Alert,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import ProjectDetails from "./ProjectDetails";
import ProjectType from "./ProjectType";
import SelectView from "./SelectView";
import ManageProjects from "./ManageProjects";
import Tasks from "./Tasks";
import Team from "./Team";

const CreateProject = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectName: "",
    client: "",
    startDate: "",
    endDate: "",
    notes: "",
    projectType: "",
    hourlyRate: "",
    budget: "",
    budgetResets: false,
    sendAlert: false,
    viewType: "",
    managePermission: "Everyone",
    tasks: [],
    team: [],
  });
  const [newTask, setNewTask] = useState("");
  const [newMember, setNewMember] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const navigate = useNavigate(); // Initialize useNavigate

  const steps = ["Project Details", "Project Type", "Select View", "Manage Projects", "Tasks", "Team"];

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save formData to localStorage whenever it's updated
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const nextStep = () => {
    if (validateStep(step)) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const validateStep = (currentStep) => {
    if (currentStep === 1 && !formData.projectName) {
      setSnackbar({ open: true, message: "Project Name is required!", severity: "error" });
      return false;
    }
    return true;
  };

  const addTask = () => {
    if (newTask.trim() === "") {
      setSnackbar({ open: true, message: "Task cannot be empty!", severity: "error" });
      return;
    }
    setFormData((prev) => ({
      ...prev,
      tasks: [...prev.tasks, newTask],
    }));
    setNewTask("");
  };

  const addTeamMember = () => {
    if (newMember.trim() === "") {
      setSnackbar({ open: true, message: "Member cannot be empty!", severity: "error" });
      return;
    }
    setFormData((prev) => ({
      ...prev,
      team: [...prev.team, newMember],
    }));
    setNewMember("");
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: "", severity: "success" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit formData to backend here
    // After submission, you can clear the localStorage
    localStorage.removeItem("formData");
    // Show success snackbar
    setSnackbar({ open: true, message: "Form successfully submitted!", severity: "success" });
    // Redirect to the first page after a delay
    setTimeout(() => {
      navigate("/"); // Replace with your desired route
    }, 2000); // Adjust the delay as needed
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <ProjectDetails formData={formData} handleChange={handleChange} />;
      case 2:
        return <ProjectType formData={formData} handleChange={handleChange} handleCheck={handleCheck} />;
      case 3:
        return <SelectView formData={formData} handleChange={handleChange} />;
      case 4:
        return <ManageProjects formData={formData} handleChange={handleChange} />;
      case 5:
        return (
          <Tasks 
            formData={formData} 
            setFormData={setFormData} 
            newTask={newTask} 
            setNewTask={setNewTask} 
            addTask={addTask} 
          />
        );
      case 6:
        return (
          <Team
            formData={formData} 
            setFormData={setFormData} 
            newMember={newMember} 
            setNewMember={setNewMember} 
            addTeamMember={addTeamMember} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box>
      <Stepper activeStep={step - 1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <form onSubmit={handleSubmit}>
        {renderStepContent()}
        <Box mt={2}>
          {step > 1 && (
            <Button onClick={prevStep} variant="contained" color="secondary">
              Back
            </Button>
          )}
          {step < 6 && (
            <Button onClick={nextStep} variant="contained" color="primary" style={{ marginLeft: "10px" }}>
              Next
            </Button>
          )}
          {step === 6 && (
            <Button type="submit" variant="contained" color="primary" style={{ marginLeft: "10px" }}>
              Submit
            </Button>
          )}
        </Box>
      </form>
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CreateProject;
