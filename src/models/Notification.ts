import { INotification, NotificationErrorProps } from '@/interfaces/INotification';

export class Notification implements INotification {
  private errors: NotificationErrorProps[] = [];

  public addError(error: NotificationErrorProps): void {
    this.errors.push(error);
  }

  public hasErrors(): boolean {
    return this.errors.length > 0;
  }

  public getErrors(): NotificationErrorProps[] {
    return this.errors;
  }

  public getMessages(context?: string): string {
    let message = '';
    this.errors.forEach(error => {
      if (context === undefined || error.context === context) {
        message += `${error.context}: ${error.message}`;
      }
    });
    return message;
  }
}
