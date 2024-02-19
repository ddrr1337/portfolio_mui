import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : "linear-gradient(#02294F, #090E10)",
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          sx={{ width: { xs: "100%", sm: "50%" }, mr: { xs: 0, sm: 5 } }}
        >
          <Typography
            component="h1"
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "self-start",
              textAlign: "self-start",
            }}
          >
            FullStack&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              developer
            </Typography>
          </Typography>
          <Typography
            component="h5"
            variant="h5"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "self-start",
              textAlign: "self-start",
            }}
          >
            *New Project&nbsp;
            <Typography
              component="span"
              variant="h5"
              sx={{
                color: "warning.light",
              }}
            >
              Parquecar App
            </Typography>
          </Typography>
          <Typography
            component="h7"
            variant="h7"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "self-start",
              textAlign: "self-start",
            }}
          >
            ParqueCar is a marketplace to find and sell your parking space in an
            easy and straightforward way. <br /> The project is created with
            React Native (EXPO) for the frontend and Django DRF for the backend.
            It allows payment through the use of crypto (Brownie).
          </Typography>
        </Stack>

        {/* Box con la imagen */}
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: "self-end",
            height: 420,
            width: { xs: "100%", sm: "45%" },
            backgroundImage: `url("/images/parquecar_hero.jpg")`,
            backgroundSize: "cover",
            borderRadius: "10px",
            outline: "1px solid",
            outlineColor:
              theme.palette.mode === "light"
                ? alpha("#BFCCD9", 0.5)
                : alpha("#9CCCFC", 0.1),
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
                : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
          })}
        />
      </Container>
    </Box>
  );
}
