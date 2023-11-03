const fs = require("fs");

const jsonData = '{"log": []}';

fs.writeFile("db.json", jsonData, "utf8", (err) => {
  if (err) {
    console.error("An error occured while writing JSON db File.");
    return console.error(err);
  }

  console.log("JSON db file has been saved.");
});
