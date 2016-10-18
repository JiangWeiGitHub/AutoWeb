import path from 'path'

import app from '../app'

app.get('/', (req, res) =>
  res.set('Content-Type', 'text/html')
    .sendFile(path.join(__dirname, '../views/index.html')))
