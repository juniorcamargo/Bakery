import { NotificationErrorProps } from '@/interfaces/INotification';

export default class NotificationError extends Error {
  constructor(errors: NotificationErrorProps[]) {
    const message = errors
      .map(error => {
        return `${error.context}: ${error.message}`;
      })
      .join(', ');
    super(message);
  }
}
