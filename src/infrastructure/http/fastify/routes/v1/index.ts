import type { FastifyInstance } from "fastify";

import { defaultRouters } from "./default.route.js";


export async function v1_routes(fastify: FastifyInstance){
    await fastify.register(defaultRouters)
}

