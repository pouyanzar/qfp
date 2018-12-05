const parseXlsx =  require('parseXlsx');

const express = require('express'),
    app = express();
const PORT = process.env.PORT || 8080;

app.parseXlsx('Info-1.xlsx').then((data) => {
    // data is an array of arrays
    console.log(data);
  });
  


app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
})