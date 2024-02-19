import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import Hidden from "@mui/material/Hidden";
import { useTheme } from "@mui/system";

function AppAppBar({ mode, toggleColorMode }) {
  const initialsColors = ["info", "primary.light", "success.light"];
  const theme = useTheme();

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                px: 0,
              }}
            >
              <Typography
                component="h1"
                variant="h6"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignSelf: "self-start",
                  textAlign: "self-start",
                }}
              >
                <Hidden smUp>
                  {/* Mostrar solo las iniciales en pantallas más pequeñas que 'md' */}
                  {["A", "G", "R"].map((letter, index) => (
                    <Typography
                      key={index}
                      component="span"
                      variant="h6"
                      sx={{
                        color: initialsColors[index],
                      }}
                    >
                      {letter}
                    </Typography>
                  ))}
                </Hidden>
                <Hidden smDown>
                  {/* Mostrar el nombre completo en pantallas 'md' y más grandes */}
                  Agustín
                  <Typography
                    component="span"
                    variant="h6"
                    sx={{
                      color: (theme) =>
                        theme.palette.mode === "light"
                          ? "primary.main"
                          : "primary.light",
                    }}
                  >
                    González
                  </Typography>
                  <Typography
                    component="span"
                    variant="h6"
                    sx={{
                      color: "success.light",
                    }}
                  >
                    Ribas
                  </Typography>
                </Hidden>
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <Link href={"https://github.com/ddrr1337"} target={"_blank"}>
                <GitHubIcon sx={{ marginRight: 1, marginTop: 0.5 }} />
              </Link>
              <Link href={"https://twitter.com/iNcAeLuM007"} target={"_blank"}>
                <XIcon sx={{ marginRight: 1, marginTop: 0.5 }} />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/in/agustin-gonzalez-ribas-71146b12a/"
                }
                target={"_blank"}
              >
                {" "}
                <LinkedInIcon sx={{ marginRight: 1, marginTop: 0.5 }} />
              </Link>

              <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
                href="/material-ui/getting-started/templates/sign-up/"
                target="_blank"
                sx={{
                  marginLeft: { xs: 1, sm: 5 },
                }}
              >
                Contact
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
