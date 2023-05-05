const express = require('express')
const router = express.Router()

const { getAll, save } = require("../controllers/recipies")
router.get('/', getAll)
router.post('/', save)

module.exports = router;
