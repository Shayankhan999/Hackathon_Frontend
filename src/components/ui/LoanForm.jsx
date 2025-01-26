import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextField, Button, Snackbar } from "@mui/material";

function LoanForm() {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cnic: "",
    email: "",
    name: "",
    loanAmount: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowSuccessMessage(true);
  };

  const handleCloseSnackbar = () => {
    setShowSuccessMessage(false);
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Apply for {category} - {subcategory}
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="space-y-4">
          <TextField
            fullWidth
            label="CNIC"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Loan Amount"
            name="loanAmount"
            type="number"
            value={formData.loanAmount}
            onChange={handleChange}
            required
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="mt-6 w-full"
        >
          Submit Application
        </Button>
      </form>
      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Loan application submitted successfully!"
      />
    </div>
  );
}

export default LoanForm;
