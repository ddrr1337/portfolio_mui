import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

const openSourceData = [
  {
    icon: <GitHubIcon sx={{ fontSize: 40 }} />,
    name: "ddrr1337",
    link: "https://github.com/ddrr1337/react-native-map-clustering-flex",
    testimonial:
      "This modification allows you to pass a new prop notToCluster with keys of markers you don't want to cluster. This won't prevent the Marker to show, but will prevent to be wrapped into a cluster.",
  },
  {
    icon: <GitHubIcon sx={{ fontSize: 40 }} />,
    name: "ddrr1337",
    link: "https://github.com/ddrr1337/dividend-distribution-contract",
    testimonial:
      "Let's suppose you are the owner of an ERC20 contract. Say you want the tokens of that ERC20 contract to represent a share of your company's profits. Now, occasionally, you want to distribute those profits, let's say in (DAI), to the holders of your ERC20 token. This contract attempts to solve the following problems that arise from dividend distribution",
  },
];

export default function OpenSource() {
  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: { sm: "column", md: "row" },
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Open Source
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Check my contributions to Open Source Community
        </Typography>
        <Link href="https://github.com/ddrr1337" target="_blank">
          https://github.com/ddrr1337
        </Link>
      </Box>
      <Grid container spacing={2}>
        {openSourceData.map((openSource, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {openSource.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  pr: 2,
                }}
              >
                {/* Wrap CardHeader with Link */}
                <CardHeader
                  avatar={openSource.icon}
                  title={openSource.name}
                  subheader={
                    <Link href={openSource.link} underline="hover">
                      {openSource.link}
                    </Link>
                  }
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
