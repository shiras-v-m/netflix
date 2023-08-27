import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
const createNotification = (type,msg) => {
    switch (type) {
      case 'info':
        NotificationManager.info(msg);
        break;
      case 'success':
        NotificationManager.success(msg);
        break;
      case 'warning':
        NotificationManager.warning(msg,type);
        break;
      case 'error':
        NotificationManager.error(msg, 5000, () => {
          alert('callback');
        });
        break;
    }
}
export default createNotification