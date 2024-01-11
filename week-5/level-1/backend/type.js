const zod = require('zod');

const createCard = zod.object({
    name: zod.string(),
    description: zod.string(),
    interests: zod.array(zod.string()),
    linkedin: zod.string(),
    twitter: zod.string(),
})

const modifyCard = zod.object({
    id: zod.string(),
    name: zod.string(),
    description: zod.string(),
    interests: zod.array(zod.string()),
    linkedin: zod.string(),
    twitter: zod.string(),
})

const deleteCard = zod.object({
    id: zod.string(),
})
module.exports = {
    createCard,
    modifyCard,
    deleteCard
}