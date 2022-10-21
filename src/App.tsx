import { CssBaseline, ThemeProvider } from "@mui/material";
import { Calculator } from "./Calculator";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
