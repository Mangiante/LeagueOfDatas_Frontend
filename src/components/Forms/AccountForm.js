import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";

function AccountForm() {
  const [gameName, setGameName] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [region, setRegion] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/api/accounts/${gameName}/${tagLine}/${region}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 3 }}
      >
        <TextField
          label="Game Name"
          variant="outlined"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          fullWidth
        />

        <TextField
          label="Tag Line"
          variant="outlined"
          value={tagLine}
          onChange={(e) => setTagLine(e.target.value)}
          fullWidth
        />

        <FormControl fullWidth>
          <InputLabel id="region-select-label">Region</InputLabel>
          <Select
            labelId="region-select-label"
            id="region-select"
            value={region}
            label="Region"
            onChange={handleChange}
          >
            <MenuItem value={"europe"}>Europe</MenuItem>
            <MenuItem value={"asia"}>Asia</MenuItem>
            <MenuItem value={"americas"}>Americas</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default AccountForm;
