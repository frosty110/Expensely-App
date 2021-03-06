const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; // variable provided by heroku

app.use(express.static(publicPath));

// matching - get all files in the public folder
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// port is 3000 if local else whatever is provided by heroku's process.env
app.listen(port, () => {
    console.log('Server is up.' + port);
});