import app from './lib/express'
import config from './config'
import { init } from './lib/mongoose'

init();

app.listen(config.port, (err) => {
  console.log('Server listening on port 3000');
});


