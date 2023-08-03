const path = require(“path”);
app.get('/*', function (req, res) {
 res.sendFile(
 path.join(__dirname, 'path/to/your/index.html'),
function (err) {
if (err) {
 res.status(500).send(err);
}
}
);
});