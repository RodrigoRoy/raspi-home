import prisma from "~/lib/prisma"

export default defineEventHandler(async(event) => {
    const {name, content, picture} = await readBody(event)

    return await prisma.comment.create({
        data: {
            name: name, content: content, picture: picture
        }
    })
})