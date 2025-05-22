import express from 'express'
import setupMiddlewares from './middlewares'

const app = express()
const port = 5050
setupMiddlewares(app)

export { app, port }
