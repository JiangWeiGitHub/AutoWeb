import express from 'express'

let app = express()
let port = '8080'

app.listen(port, () => {
  console.log('Listening on port ${port}!')
})
