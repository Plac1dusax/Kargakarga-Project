const server = require("express")
const router = server.Router()

router.use(server.json())
router.use(server.urlencoded({ extended: false }))

const newProjects = []

router.get("/", (req, res) => {
  res.json({ newProjects: [] })
})

router.post("/", (req, res) => {
  const { newProject } = req.body

  newProjects.push(newProject)

  console.log(newProjects)

  res.json({ newProjects: newProjects })
})

module.exports = router
