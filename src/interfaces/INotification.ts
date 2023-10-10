export type NotificationErrorProps = {
  context: string;
  message: string;
};

export interface INotification {
  addError(error: NotificationErrorProps): void;
  hasErrors(): boolean;
  getErrors(): NotificationErrorProps[];
  getMessages(context?: string): string;
}
