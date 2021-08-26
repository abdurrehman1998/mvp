import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function replace(name, params) {
  navigationRef.current?.replace(name, params);
}

export function dispatch(params) {
  navigationRef.current?.dispatch(params);
}

export function reset(screenName) {
  navigationRef.current?.reset({
    routes: [{name: screenName}],
  });
}

export function goBack(params) {
  navigationRef.current?.goBack(params);
}

const getCurrentRouteName = () => {
  return navigationRef.current?.getRootState?.().routes?.[0]?.name;
};

export const NavigationService = {
  goBack: goBack,
  navigate: navigate,
  reset: reset,
  dispatch: dispatch,
  getCurrentRouteName: getCurrentRouteName,
};
