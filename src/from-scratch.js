const resolvedWrapper = (value) => {
  return new Promise((resolve) => resolve(value));
};

const rejectedWrapper = (errorMessage) => {
  return new Promise((resolve, reject) => {
    const error = new Error(errorMessage)
    reject(error);
  });
};

const handleResolvedPromise = (promise) => {
  return promise.then((response) => {
    console.log(response);
    return response.toUpperCase();
  });
};

const handleResolvedOrRejectedPromise = (promise) => {
  return promise
              .then((response) => {
                console.log(response);
                return response.toUpperCase();
              })
              .catch((error) => {
                console.error(`Your error message was: ${error.message}`);
                return null;
              });
};

const pauseForMs = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
