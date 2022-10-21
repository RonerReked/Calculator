import { Button, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { GridDigitButton } from "./styles/GridDigitButton";
import { GridOperationButton } from "./styles/GridOperationButton";
import { CalculatorBase, OutputContainer } from "./styles/styles.d";
import theme from "./theme/theme";

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [overwrite, setOverwrite] = useState(true);

  const selectOperation = (operation: string) => {
    setOperation(operation);
  };

  const clear = () => {
    setPrevValue("");
    setOperation("");
    setCurrentValue("0");
    setOverwrite(true);
  };

  const del = () => {
    setCurrentValue("0");
    setOverwrite(true);
  };

  const percent = () => {
    const curr = parseFloat(currentValue);
    setCurrentValue((curr / 100).toString());
  };

  const setDigit = (digit: string) => {
    if (
      (currentValue[0] === "0" && digit === "0") ||
      (currentValue.includes(".") && digit == ".")
    )
      return;

    if (overwrite && digit !== ".") {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverwrite(false);
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
                selectOperation={clear}
                selectedOperation={operation}
              />
              <GridOperationButton
                operation={"C"}
                selectOperation={del}
                selectedOperation={operation}
              />
              <GridOperationButton
                operation={"%"}
                selectOperation={percent}
                selectedOperation={operation}
              />
              <GridOperationButton
                operation={"/"}
                selectOperation={selectOperation}
                selectedOperation={operation}
              />
            </Grid>
            <Grid item container columnSpacing={1}>
              <GridDigitButton digit={"7"} enterDigit={setDigit} />
              <GridDigitButton digit={"8"} enterDigit={setDigit} />
              <GridDigitButton digit={"9"} enterDigit={setDigit} />
              <GridOperationButton
                operation={"X"}
                selectOperation={selectOperation}
                selectedOperation={operation}
              />
            </Grid>
            <Grid item container columnSpacing={1}>
              <GridDigitButton digit={"4"} enterDigit={setDigit} />
              <GridDigitButton digit={"5"} enterDigit={setDigit} />
              <GridDigitButton digit={"6"} enterDigit={setDigit} />
              <GridOperationButton
                operation={"+"}
                selectOperation={selectOperation}
                selectedOperation={operation}
              />
            </Grid>
            <Grid item container columnSpacing={1}>
              <GridDigitButton digit={"1"} enterDigit={setDigit} />
              <GridDigitButton digit={"2"} enterDigit={setDigit} />
              <GridDigitButton digit={"3"} enterDigit={setDigit} />
              <GridOperationButton
                operation={"-"}
                selectOperation={selectOperation}
                selectedOperation={operation}
              />
            </Grid>
            <Grid item container columnSpacing={1}>
              <GridDigitButton digit={"0"} enterDigit={setDigit} xs={6} />
              <GridDigitButton digit={"."} enterDigit={setDigit} />
              <Grid item xs={3}>
                <Button fullWidth variant="contained">
                  =
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CalculatorBase>
      </Container>
    </ThemeProvider>
  );
}

export default App;
