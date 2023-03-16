import React from "react";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Skills.css";
const Lang = ({ lang }) => {
  const theme = createTheme({
    palette: {
      primary: { main: "#C364FA" },
      secondary: { main: "#A230ED" },
      warning: { main: "#6B00D7" },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Button
        sx={{ mr: 2 }}
        variant="contained"
        color={
          lang.proficiency == "high"
            ? "primary"
            : lang.proficiency == "intermediate"
            ? "secondary"
            : "warning"
        }
      >
        {lang.name}
      </Button>
    </ThemeProvider>
  );
};

export default Lang;
