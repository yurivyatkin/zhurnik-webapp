import express from 'express'
import mongodb from 'mongodb'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
const dbUrl = 'mongodb://localhost/zhurnik'

// TODO Add validation

mongodb.MongoClient.connect(dbUrl, function (err, db) {
  if (err) { console.log(err) }

  app.get('/api/notes/:date', (req, res) => {
    db.collection('notes').findOne({ date: req.params.date }, (err, note) => {
      if (err) { console.log(err) }
      res.json(note)
    })
  })

  app.post('/api/notes', (req, res) => {
    const { date, content } = req.body
    db.collection('notes').insert({ date, content }, (err, result) => {
      if (err) {
        res.status(500).json({ errors: { global: 'Something went wrong' } })
      } else {
        res.json({ note: result.ops[0] })
      }
    })
  })

  app.put('/api/notes/:date', (req, res) => {
    const { date, content } = req.body
    db.collection('notes').findOneAndUpdate(
      { date: date },
      { $set: { date, content } },
      { returnOriginal: false },
      (err, result) => {
        if (err) { res.status(500).json({ errors: { global: err } }) }
        res.json({ note: result.value })
      }
    )
  })

  app.listen(8080, () => console.log('Server is running on localhost:8080'))
})
