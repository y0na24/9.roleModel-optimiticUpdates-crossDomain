import { toast } from "sonner";
import { injectable } from "inversify";
import type { Toaster } from "./toast.types";

@injectable()
export class SonnerToaster implements Toaster {
  showSuccess(message: string) {
    toast.success(message);
  }

  showError(message: string) {
    toast.error(message);
  }

  showWarning(message: string) {
    toast.warning(message);
  }

  showInfo(message: string) {
    toast.info(message);
  }
}
