import prisma from "~/lib/prisma"

export default defineEventHandler(async(event) => {
    return await prisma.comment.delete({
        where: {
            id: parseInt(event.context.params.id)
        }
    })
})