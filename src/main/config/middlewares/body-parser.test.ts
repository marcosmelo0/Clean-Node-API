import request from 'supertest'
import { app } from '../app'

beforeAll(() => {
  app.post('/test_body_parser', (req, res) => {
    res.send(req.body)
  })
})

describe('Body Parser Middleware', () => {
  test('Should parse body as json', async () => {
    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Marcos' })
      .expect({ name: 'Marcos' })
  })
})
