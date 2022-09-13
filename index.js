const express = require('express');
const cors = require('cors');
const app = express();
const quotesJSONArray = require('./quotesSource.json');

app.use(cors());

console.log(quotesJSONArray, typeof quotesJSONArray)
app.get('/', (req, res) => {
  res.send('Welcome to the Mindfulness Daily Quotes API. Use the specific url endings to access the quotes.')
});

app.get('/quotesList',(req, res) =>{
  res.send({'quotesList': quotesJSONArray})
});

app.get('/randomQuote',(req, res)=>{
    const randomNumber = Math.floor(Math.random()  *21)
    const quoteItem = quotesJSONArray[randomNumber]
    res.send(quoteItem)    
});


app.listen(process.env.PORT || 5000);
module.exports = app;