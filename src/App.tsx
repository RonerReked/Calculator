import { CssBaseline, Grid, Paper, styled, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { GridOperationButton } from "./styles/GridOperationButton";
import theme from "./theme/theme";

const OutputContainer = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "right",
  height: "2em",
  padding: theme.spacing(2),
  fontSize: "3em",
  overflow: "hidden",
}));

const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
}));

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");

  const selectOperation = (operation: string) => {
    setOperation(operation);
  };

  const setDigit = (digit: string) => {
    setCurrentValue(digit);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <CalculatorBase elevation={3}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <OutputContainer>{currentValue}</OutputContainer>
            </Grid>
            <Grid item container columnSpacing={1}>
              <GridOperationButton
                operation={"AC"}
                selectOperation={selectOperation}
                selectedOperation={operation}
              ></GridOperationButton>
            </Grid>
          </Grid>
        </CalculatorBase>
      </Container>
    </ThemeProvider>
  );
}

export default App;
