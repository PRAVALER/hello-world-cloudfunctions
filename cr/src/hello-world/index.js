const fs = require('fs');
const functions = require('@google-cloud/functions-framework');

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
