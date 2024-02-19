import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";

const darkLogos = [
  "js.png",
  "ts.png",
  "react.png",
  "next.png",
  "redux.png",
  "python.png",
  "django.png",
  "keras.png",
  "solidity.svg",
  "eth.png",
  "ubuntu.png",
  "docker.png",
];

const logoStyle = {
  width: "50px",

  margin: "0 25px",
  opacity: 0.7,
};

export default function LogoCollection() {
  const theme = useTheme();

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="h4"
        align="center"
        color="text.secondary"
        sx={{ mb: 8 }}
      >
        My ToolBox
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 1 }}>
        {darkLogos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={`/images/logos/${logo}`}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
