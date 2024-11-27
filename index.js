const fs = require("fs");
fs.writeFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf8",
  (err) => {
    if (err) console.log(err);
  }
);
fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);

  const updatedData = '{"name": "Employee 1 Updated", "salary": 3000}';
  fs.writeFile("employees.json", updatedData, "utf8", (err) => {
    if (err) console.log(err);
    else {
      console.log("File successfully updated.");
      fs.readFile("employees.json", "utf8", (err, data) => {
        if (err) console.log(err);
        console.log(data);
        fs.unlink("employees.json", (err) => {
            if (err) console.log(err);
            console.log("File successfully deleted.");
          });
      });
      
    }
  });
});
