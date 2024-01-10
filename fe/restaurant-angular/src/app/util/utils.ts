import {MessageService} from "primeng/api";

export class Snackbar {
  constructor(private messageService: MessageService) {
  }

  displaySuccessful(message: string): void {
    this.messageService.add({
      severity: 'success',
      summary: '',
      detail: message,
    });
  }

  displayWarning(message: string): void {
    this.messageService.add({
      severity: 'warn',
      summary: '',
      detail: message,
    });
  }

  displayError(message: string): void {
    this.messageService.add({
      severity: 'error',
      summary: '',
      detail: message,
    });
  }
}
