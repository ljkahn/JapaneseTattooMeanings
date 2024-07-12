const http = require('http');

// This function returns a Promise object allowing the caller to chain .then() and .catch() to asynchronously handle the
// resolved value or rejected error.
const asyncRequest = (url) =>
  new Promise((resolve, reject) => {
    let error;
    let rawData = '';

    // Use the http.get method to send an asynchronous request to an api at the given url.
    http
      .get(url, (res) => {
        // Check for an error code (not equal to 200)
        if (res.statusCode !== 200) {
          // Creates an error object representing the failed http request
          error = new Error(`Request Failed.\nStatus Code: ${res.statusCode}`);
          res.resume();
          return;
        }

        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          rawData += chunk;
        });
      })
      .on('error', (e) => {
        reject(e);
      })
      .on('close', () => {
        // The 'close' event fires after the incoming message is completely received. Error will be undefined if the
        // response status code was 200.
        if (error) {
          // The following line calls reject with an error. Calling reject will reject the promise with the error. This executes cb in
          // `asyncRequest().catch(cb)`.
          reject(error);
        } else {
          // The following line calls resolve with the data from the api. Calling resolve will resolve the promise with
          // the rawData. This executes cb in `asyncRequest().then(cb)`.
          resolve(rawData);
        }
      });
  });

asyncRequest('http://numbersapi.com/random/trivia')
  // The callback function passed to .then() is called when the resolve parameter is called in the Promise.
  .then((data) => console.log(data))
  // The callback function passed to .catch() is called when the reject parameter is called in the Promise
  .catch((error) => console.log(error));
