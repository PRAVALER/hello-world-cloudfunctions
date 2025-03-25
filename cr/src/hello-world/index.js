const fs = require('fs');
const functions = require('@google-cloud/functions-framework');


//teste teste
exports.simpleHelloWorld = function(req, res) {
  try {
    res.send("Hello, World from function-http-one original address: https://us-east1-pravaler-ctx-core-stage.cloudfunctions.net/function-http-one \n");
  } catch (err) {
    console.error(err);
    res.send("Error: " + err);
  }
};

//teste teste
exports.helloWorld = function(req, res) {
  try {
    const data = fs.readFileSync('/etc/secrets/' + process.env.CONFIG_FILE, 'utf8');
    console.log(data);
    res.send("Hello, World! -> " + data);
  } catch (err) {
    console.error(err);
    res.send("Error: " + err);
  }
};

functions.cloudEvent('helloPubSub', cloudEvent => {
  const base64name = cloudEvent.data.message.data;
  const name = base64name ? Buffer.from(base64name, 'base64').toString() : 'World';
  console.log(`Hello, ${name}!`);
});

// Karpinski 2024
// 17:10
