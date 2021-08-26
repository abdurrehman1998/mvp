import Snackbar from 'react-native-snackbar';

export const showMessage = ({message, buttonTitle}) => {
  if (!message) {
    return;
  }
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
    action: {
      text: buttonTitle || 'Ok',
      textColor: 'green',
    },
  });
};
