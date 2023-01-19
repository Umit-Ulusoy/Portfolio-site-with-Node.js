const express = require('express'); 
const app = express();  
app.get('/', (req, res) => {
    res.send('HELLOOO');
});

const PORT = process.env.PORT || 80;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));