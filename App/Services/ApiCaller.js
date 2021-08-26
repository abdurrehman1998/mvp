import {showMessage} from '../Utilities/UiUtilities';
import {call, delay, race} from 'redux-saga/effects';

const timeoutParam = 10000;

function* callServer(apiFunction, reqData, showError = false) {
  const {response, timeout} = yield race({
    response: call(apiFunction, reqData),
    timeout: delay(timeoutParam),
  });

  if (timeout) {
    if (showError) {
      showMessage({
        title: 'Could not connect to network',
        isDelay: true,
      });
    }
    throw {
      error: true,
      message: 'Could not connect to network',
      problem: 'TIMEOUT_ERROR',
      statusCode: 504,
    };
  }
  const {ok = false, data: resData, status = ''} = response || {};
  if (ok) {
    return {error: false, response: resData || {}};
  } else {
    const {error_code = '', errorCode, errorMessage} = resData || {};
    let message = errorMessage;
    if (response.problem === 'TIMEOUT_ERROR') {
      message = 'Could not connect to network';
    }
    showError && showMessage({message, isDelay: true});

    throw {
      error: true,
      message,
      status,
      errorCode: error_code || errorCode,
    };
  }
}

export default {
  callServer,
};
