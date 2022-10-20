import { CssBaseline, Paper, styled, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import theme from "./theme/theme";

const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <CalculatorBase elevation={3}>Hello World</CalculatorBase>
      </Container>
    </ThemeProvider>
  );
}

export default App;
