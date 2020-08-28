const path = require("path");
const fs = require("fs");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    fs.readFile(path.resolve(__dirname, "../db/db.json"), "utf8", function (
      err,
      data
    ) {
      if (err) {
        console.error(err);
        return res.end();
      }
      const notes = JSON.parse(data);
      res.json(notes);
    });
  });
  app.post("/api/notes", function (req, res) {
    let newNote = req.body;
    fs.readFile(path.resolve(__dirname, "../db/db.json"), "utf8", function (
      err,
      data
    ) {
      if (err) {
        console.error(err);
        return res.end();
      }
      const notes = JSON.parse(data);

      // add new note ro array
      // save stringified version of updated array to db/dbb.json

      res.json(notes);
    });
  });
  app.delete("/api/notes/:id", function (req, res) {
    let id = req.params.id;
    fs.readFile(path.resolve(__dirname, "../db/db.json"), "utf8", function (
      err,
      data
    ) {
      if (err) {
        console.error(err);
        return res.end();
      }
      const notes = JSON.parse(data);

      // remover note ad index id
      // save stringified version of updated array to db/dbb.json

      res.json(notes);
    });
  });
};
