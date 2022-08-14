console.log('Cassoma escola');

const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient



app.use(bodyParser.urlencoded({ extended: true }))


MongoClient.connect("mongodb+srv://heisler:dude007@cluster0.oxiqyov.mongodb.net/?retryWrites=true&w=majority" ,{ useUnifiedTopology: true })
  .then(client => {

    console.log('connectado na base de dados')
    const db = client.db('cassomaescola')
    const studentCollection = db.collection('students')

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.json())


app.get('/', (req, res) => {

  db.collection('students').find().toArray()
    
    .then(results => {
          res.render('index.ejs', { students: results })
      console.log(results)
    })
    
    .catch(error => console.error(error))


})

app.put('/students', (req, res) => {

    studentCollection.findOneAndUpdate(
  { nome: 'heisler' },

  {
        $set: {
      nome: req.body.nome,
      turma: req.body.turma
    }
  },

  {
    upsert: true
  }
  
)
      .then(result => {
               res.json(' Estudantes atualizados')
       })
    .catch(error => console.error(error))
})



    app.post('/students', (req, res) => {
  
  studentCollection.insertOne(req.body)

    .then(result => {
      console.log(result)
    })
    .catch(error => console.error(error))
})


app.delete('/students', (req, res) => {
  studentCollection.deleteOne( 
      { name: req.body.name }
    )

    .then(result => {
      if (result.deletedCount === 0) {
        return res.json('Não existe mais dados')
      }
      res.json(`Ficheiro foi apagado`)
    })
    .catch(error => console.error(error))
})




  })

    




app.listen(3000, function() {
  console.log('O servidor esta em produção na porta  3000')
})
