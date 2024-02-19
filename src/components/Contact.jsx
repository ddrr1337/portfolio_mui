import React, { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import {
  Button,
  Container,
  Grid,
  TextField,
  TextareaAutosize,
  CircularProgress,
  Typography,
  Box,
  useTheme,
  Avatar,
} from "@mui/material";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    fetch(`http://localhost:8001/api/contact/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        message: formData.message,
      }),
    }).then(() => {
      setLoading(false);
      setIsSuccess(true);
    });
  };

  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box mb={8} mt={5}>
              <Typography variant="h5" color="textPrimary">
                Contact Me, Ask Any Question.
              </Typography>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="body1">Or Try Social Networks</Typography>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Link href={"https://github.com/ddrr1337"} target={"_blank"}>
                    <GitHubIcon sx={{ marginRight: 1, marginTop: 0.5 }} />
                  </Link>
                  <Link
                    href={"https://twitter.com/iNcAeLuM007"}
                    target={"_blank"}
                  >
                    <XIcon sx={{ marginRight: 1, marginTop: 0.5 }} />
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/agustin-gonzalez-ribas-71146b12a/"
                    }
                    target={"_blank"}
                  >
                    <LinkedInIcon sx={{ marginRight: 1, marginTop: 0.5 }} />
                  </Link>
                </Box>
              </Box>
            </Box>

            <Box display="flex" justifyContent="center">
              <form className="mb-10 w-full max-w-md">
                {/* ... (resto del formulario) */}
              </form>
            </Box>
          </Box>

          <Box display="flex" justifyContent="center">
            <form className="mb-10 w-full max-w-md">
              <TextField
                label="Email"
                id="email"
                name="email"
                fullWidth
                margin="normal"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                required
              />

              {/* Campo de entrada de texto para el contenido del mensaje */}
              <TextField
                label="Message Content"
                id="message"
                name="message"
                multiline
                rows={5}
                fullWidth
                margin="normal"
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <Button
                onClick={sendEmail}
                variant="contained"
                color="primary"
                disabled={loading}
                style={{ marginTop: "16px" }} // Ajusta el valor según sea necesario
              >
                {loading ? (
                  <Box px={2}>
                    <CircularProgress
                      size={20}
                      sx={{ marginTop: 1 }}
                      color="inherit"
                    />
                  </Box>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            borderRadius={4}
            border="1px solid #e0e6ed"
            bgcolor="black.light/60"
            p={5}
            boxShadow={[4, 6, 10, -3, "#bfc9d4"]}
            sx={{
              border: "#1b2e4b",
              bg: "#191e3a",
              boxShadow: "none",
            }}
          >
            <Box textAlign="center">
              <Box mb={5} mx="auto" overflow="hidden" borderRadius="full">
                <Avatar
                  src="/images/gut.jpg"
                  alt="image"
                  sx={{
                    height: 120,
                    width: 120,
                    objectFit: "cover",
                    margin: "auto",
                    display: "block", // Asegura que el Avatar se muestre como un bloque
                  }}
                />
              </Box>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="textPrimary"
              >
                Agustín González Ribas
              </Typography>
              <Typography color="textSecondary">FullStack Developer</Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ marginTop: 2 }}
              >
                <EmailIcon sx={{ marginRight: 1 }} />
                <Typography color="textSecondary">
                  incaelum@hotmail.com
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center">
                <PhoneIcon sx={{ marginRight: 1 }} />
                <Typography color="textSecondary">+34 637 414 825</Typography>
              </Box>
              <Typography mt={5} fontWeight="semibold" fontStyle="italic">
                Hello! I'm a finance enthusiast and a passionate creator in the
                tech space. I specialize in web development using Python and
                Next.js, and I have experience in artificial intelligence.
              </Typography>
              <Typography mt={2} fontWeight="semibold" fontStyle="italic">
                As the founder of Dividend Labs, I aim to merge my interest in
                finance with innovative technological solutions. My focus is on
                using technology to transform how we interact with financial
                data. Through my work, I aspire to provide creative and valuable
                solutions.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
