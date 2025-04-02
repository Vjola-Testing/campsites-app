export const filterNullValuesFromObject = <T>(
  typedObj: T
): Record<string, any> => {
  const result = Object.keys(typedObj as Record<string, any>)
    .filter((key) => typedObj[key as keyof T] !== null)
    .reduce(
      (obj, key) => ({
        ...obj,
        [key]: typedObj[key as keyof T],
      }),
      {}
    );
  return result;
};

export const CONNECTION_STRING =
  "postgresql://postgres:fidesctl@fidesctl-db:5432/fidesctl_test";

  if (!cmpFrame) {
    // we have recur'd up the windows and have found no __tcfapiLocator frame
    addFrame(TCF_FRAME_NAME);
    currentWindow.__tcfapi = tcfAPIHandler;
    currentWindow.addEventListener("message", postMessageEventHandler, false);
  }
