import { PrismaClient } from "@prisma/client"
import fastify from "fastify"


const app = fastify()
const prisma = new PrismaClient()


app.get('/users', async () => {
    return await prisma.user.findMany()
})

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
}).then(() => {
    console.log('HTTP foi 2 wtf?? e ai??')
})