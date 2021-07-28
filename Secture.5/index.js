const fs = require("fs");

// First initialize
fs.writeFile(
  "employees.json",
  JSON.stringify({ name: "Employee 1 Name", salary: 2000 }),
  (err) => {
    if (err) throw err;
    console.log("Dosya oluşturma işlemi başarılı.");
  }
);

// Reading
fs.readFile("employees.json", (err, data) => {
  if (err) throw err;
  console.log(`Dosya Okundu : ${data}`);
});

// Updating
fs.writeFile(
  "employees.json",
  JSON.stringify({ name: "Employee 1 Name Updated", salary: 2500 }),
  (err) => {
    if (err) throw err;
    console.log("Dosya güncelleme işlemi başarılı.");
  }
);


// Deleting
fs.unlink("employees.json",(err)=>{
    if(err) throw err;
    console.log("Dosya silme işlemi başarılı.")
});