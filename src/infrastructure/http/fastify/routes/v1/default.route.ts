import type { FastifyInstance } from "fastify";

export async function defaultRouters(fastify: FastifyInstance){
    fastify.route({
        method: 'GET',
        url: '/',
        handler: async (req, res) => {
            return { hello: 'world', from: 'v1' }
        }
    })
}