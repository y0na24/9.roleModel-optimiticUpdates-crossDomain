import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertTitle } from "./Alert";

type ErrorAlertProps = {
  errorMessage?: string;
};

export const ErrorAlert = ({ errorMessage }: ErrorAlertProps) => {
  return (
    <Alert variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>{errorMessage ?? "Произошла ошибка"}</AlertTitle>
    </Alert>
  );
};
