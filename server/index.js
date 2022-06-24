// app.js
import express, { json } from 'express';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3001;
import knex from "knex"
import knexfile from './knexfile.js';
const myKnex = knex(knexfile[process.env.NODE_ENV||'development'])

app.use(cors());
app.use(json());

app.get('/movies', function(req, res) {
  myKnex//can already see what database we are in
    .select('*')
    .from('movies')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});


app.post('/movies', async function (req, res) {  
  console.log("Some One Tried To add data to me", req.body.title); 
  await myKnex('movies').insert({title: req.body.title})
  res.send('I am Impossible!'); 
})  

app.delete('/movies', async function (req, res) {
  await myKnex
  .delete()
  .from("movies")
  .where({title: req.body.title})
  .then(data => res.status(200)) 
  .catch(err =>
    res.status(404).json({
      message:
        'The data you are looking for could not be found. Please try again'
    }))
  })

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});