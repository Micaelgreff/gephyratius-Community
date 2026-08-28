import Fastify from 'fastify'
import { v1_routes } from './routes/v1/index.js'

export function create_http_server(){
  const app = Fastify({
      logger: true
  })

  app.register(v1_routes, {prefix: '/api/v1'})

  app.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })

  return app
}