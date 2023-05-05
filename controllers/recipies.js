const service = require('../services/recipies')

const getAll = async (req, res, next) => {
    try {
        const data = await service.getAll()
        console.log(`controller getAll: ${data}`)
        res.json(data)

    } catch (error) {
        console.log(error)
        next(error)
    }
}


const save = async (req, res, next) => {
    try {
        console.log(`req.body: ${req.body}`)
        const {
            name,
            healthLabels,
            cookTimeMinutes,
            prepTimeMinutes,
            ingredients,
        } = req.body;

        const newRecipe = {
            name,
            healthLabels: [...healthLabels],
            cookTimeMinutes,
            prepTimeMinutes,
            ingredients: [...ingredients],
        };

        res.status(201).json({ data: await service.save(newRecipe) });
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    getAll,
    save
}