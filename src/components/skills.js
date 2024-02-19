import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import { FaEthereum } from "react-icons/fa";

const items = [
  {
    icon: <CoPresentIcon />,
    title: "dynamicFrontends",
    description:
      "Skilled in React, Next.js, and mobile app development. Transforming ideas into impactful digital experiences, delivering effective and engaging solutions for web and mobile projects.",
  },
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "powerful_backend",
    description:
      "Skilled in creating robust, scalable, and secure backends using Django and Django Rest Framework. Transforms concepts into efficient and reliable backend solutions for diverse projects.",
  },
  {
    icon: <FaEthereum size={23} />,
    title: "Smart Contract Creation",
    description:
      "Experienced in crafting secure and efficient decentralized applications through designed smart contracts. Transforming innovative concepts into robust blockchain solutions.",
  },
];

export default function Skills() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "60%" },
            textAlign: { xs: "center", sm: "left", md: "center" },
          }}
        >
          <Typography
            component="h1"
            variant="h1"
            sx={{
              alignSelf: "center",
              textAlign: "center",
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
            variant="body1"
            sx={{
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            Creates complete web solutions, handling both front-end and back-end
            technologies for seamless application development.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
