import prisma from "~/lib/prisma"

export default defineEventHandler(async(event) => {
    const {name, content} = await readBody(event)

    return await prisma.comment.create({
        data: {
            name, content
        }
    })
})