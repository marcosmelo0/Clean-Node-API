import request from 'supertest'
import { app } from '../config/app'

describe('Content Type Middleware', () => {
  app.get('/test_content_type', (req, res) => {
    res.send('')
  })

  test('Should return default content type as json', async () => {
    await request(app)
      .get('/test_content_type')
      .send({ name: 'Marcos' })
      .expect('content-type', /json/)
  })

  test('Should return xml content type when forced', async () => {
    app.get('/test_content_type_xml', (req, res) => {
      res.type('xml')
      res.send('')
    })

    await request(app)
      .get('/test_content_type_xml')
      .send({ name: 'Marcos' })
      .expect('content-type', /xml/)
  })
})
