import dva from 'remax-dva'
import { createLogger } from 'redux-logger'
import models from './models'

const app = dva({
  onAction: createLogger()
})

models.forEach(model => app.model(model))

export default app


