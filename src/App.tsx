import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "./theme";
import { Hero, WhatsInside, LeadForm, Footer } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: { xs: 2, md: 4 },
          py: { xs: 3, md: 5 },
          textAlign: "center",
        }}
      >
        <Hero />
        <WhatsInside />
        <LeadForm />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
