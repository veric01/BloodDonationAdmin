const express = require('express');
const app = express();
const port = 4000;

app.use(express.static(__dirname + '/'));

app.get('/add', (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;

    const result = parseInt(num1) + parseInt(num2);
    let response = {data:result, message:'success',statusCode:200}
    
    res.json({ response }); 
    console.log(response)
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});