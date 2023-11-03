const fs = require("fs");

const jsonData = '{"log": []}';

fs.writeFile("db.json", jsonData, "utf8", (err) => {
  if (err) {
    console.log("An error occured while writing JSON db File.");
    return console.log(err);
  }

  console.log("JSON db file has been saved.");
});
