import { Button, Paper, styled } from "@mui/material";

export const OutputContainer = styled("div")(({ theme }) => ({
    width: "100%",
    textAlign: "right",
    height: "2em",
    padding: theme.spacing(2),
    fontSize: "3em",
    overflow: "hidden",
  }));
  
  export const CalculatorBase = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    borderRadius: 15,
  }));

  export const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
    backgroundColor: "rgb(254,241,73,.1)",
    borderColor: props.selected ? "#fff" : "rgba(255, 241, 73, 0.5)",
  }));