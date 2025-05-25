import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState<any>("");
  const [output, setOutput] = useState<any>("");
  const buttons = [
    { id: 1, value: "7" },
    { id: 2, value: "8" },
    { id: 3, value: "9" },
    { id: 4, value: "+" },
    { id: 5, value: "4" },
    { id: 6, value: "5" },
    { id: 7, value: "6" },
    { id: 8, value: "-" },
    { id: 9, value: "1" },
    { id: 10, value: "2" },
    { id: 11, value: "3" },
    { id: 12, value: "*" },
    { id: 13, value: "C" },
    { id: 14, value: "0" },
    { id: 15, value: "=" },
    { id: 16, value: "/" },
  ];

  const handleInput = (value: string) => {
    if (value === "=") {
      if (!input) {
        setOutput("Error");
      } else {
        try {
          setOutput(eval(input));
        } catch (error: any) {
          setInput("Error");
        }
      }
      return;
    } else if (value === "C") {
      setInput("");
      return;
    }
    setInput((prev: string) => prev + value);
  };
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="h3">React Calculator</Typography>
      <TextField
        name="input"
        value={input}
        size="small"
        onChange={(value: any) => setInput(value)}
      />
      <Typography variant="body1">{output}</Typography>
      <Grid container sx={{ width: "400px" }} spacing={2}>
        {buttons?.map((button: any, index: any) => (
          <Grid key={index} size={{ lg: 3, md: 3 }}>
            <Button
              sx={{
                backgroundColor: "lightGrey",
                border: "1px solid black",
                color: "#000",
              }}
              onClick={() => handleInput(button?.value)}
            >
              {button?.value}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Calculator;
