const csv = require("csv-parser");
const fs = require("fs");

var contents = fs.readFileSync(
  "./Atlanta Engineering Lunch and Learns.ics",
  "utf8"
);
// write function to grab all attendees
// example parse
// Format
//
const lines = contents.split(/\r?\n/);
const attendees = lines.filter(attendee =>
  attendee.includes("PARTSTAT=ACCEPTED")
);
const emails = attendees.map(attendee => {
  const email = attendee.split(":");
  return email[2];
});
// write to a new file named brownbag
const firstLine = "Login Name,Firstname,Lastname,Title,Company,Amount";
var stream = fs.createWriteStream("brownbag.csv");
stream.once("open", function(fd) {
  stream.write(firstLine);
  stream.write("\n");
  emails.forEach(email => {
    stream.write(email);
    stream.write(",,,,,\n");
  });
  stream.end();
});
