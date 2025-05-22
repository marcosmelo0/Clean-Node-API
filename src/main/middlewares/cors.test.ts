import request from 'supertest'
import { app } from '../config/app'

describe('Body Parser Middleware', () => {
  app.get('/test_cors', (req, res) => {
    res.send()
  })

  test('Should parse body as json', async () => {
    await request(app)
      .get('/test_cors')
      .send({ name: 'Marcos' })
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*')
  })
})
