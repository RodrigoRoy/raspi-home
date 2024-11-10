import prisma from "~/lib/prisma"

export default defineEventHandler(async(event) => {
    const {name, content, picture} = await readBody(event)

    return await prisma.comment.update({
        where: {
            id: parseInt(event.context.params.id)
        },
        data: {
            name: name, content: content, picture: picture
        }
    })
})