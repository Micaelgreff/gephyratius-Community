import { create_http_server } from "./infrastructure/http/fastify/server.js";

const http_server = create_http_server()


try {
    http_server.listen({
        port: 3000,
        host: '0.0.0.0'
    })
} catch (err){
    http_server.log.error(err)
    process.exit(1)
}


