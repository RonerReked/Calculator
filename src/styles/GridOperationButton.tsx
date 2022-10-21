import { Grid } from "@mui/material";
import { FC } from "react";
import { StyledButton } from "./styles.d";

interface GridOperationButtonProps {
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string;
}

export const GridOperationButton: FC<GridOperationButtonProps> = ({
  operation,
  selectOperation,
  selectedOperation = 3,
}) => {
  return (
    <Grid item xs={3}>
      <StyledButton
        fullWidth
        variant="outlined"
        onClick={() => selectOperation(operation)}
        selected={selectedOperation === operation}
      >
        {operation}
      </StyledButton>
    </Grid>
  );
};
