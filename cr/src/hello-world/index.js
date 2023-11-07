const fs = require('fs');

exports.helloWorld = function(req, res) {
  try {
    const data = fs.readFileSync('/etc/secrets/function-teste1_secret_teste', 'utf8');
    console.log(data);
    res.send("Hello, World! -> " + data);
  } catch (err) {
    console.error(err);
    res.send("Error: " + err);
  }
};
