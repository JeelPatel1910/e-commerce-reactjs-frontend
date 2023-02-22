export const getSentenceFromCamelCase = (message) => {
  let pattern = /[A-Za-z]/g;

  let messages = message.match(pattern);

  let errorMessage = "";

  for (let i = 0; i < messages.length; i++) {
    errorMessage +=
      messages[i] === messages[i].toUpperCase()
        ? " " + messages[i].toLowerCase()
        : messages[i];
  }

  return (errorMessage[0].toUpperCase() + errorMessage.slice(1)).trim();
};
export const checkValidation = (errors, data) => {
  const finalErrors = {};

  Object.keys(data).forEach((key) => {
    if (!data[key]) {
      finalErrors[key] = `${getSentenceFromCamelCase(key)} is required.`;
    }
  });

  Object.keys(errors).forEach((key) => {
    if (errors[key] !== "") {
      finalErrors[key] = errors[key];
    }
  });

  return finalErrors;
};
