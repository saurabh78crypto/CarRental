const express = require('express');
const app = express();

app.get('/', (req, res) => {
     res.send('Hello World from the server');
});

app.listen(3000, () =>{
    console.log('server is runnning at port no 3000');
})