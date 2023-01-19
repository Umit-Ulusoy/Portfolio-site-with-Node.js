title Node.js Project Maker
echo off
mkdir new-project
cd new-project
mkdir models views controllers
echo const express = require('express'); >> app.js
echo const app = express();  >> app.js
echo app.get('/', (req, res) => { >> app.js
echo res.send('HELLOOO'); >> app.js
echo app.listen(80, () => console('The server is running')); >> app.js
echo "This is a test project" >> README.md
echo Project created successfully!