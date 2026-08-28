import Fastify from 'fastify'


export function create_http_server(){
  const app = Fastify({
      logger: true
  })


  app.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })

  return app
}