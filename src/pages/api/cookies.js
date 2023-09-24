const server = require("express")
const router = server.Router()

router.use(server.json())
router.use(server.urlencoded({ extended: false }))

router.get("/", (req, res) => {
  res.cookie("name", "user-name", {
    maxAge: 1000 * 1000 * 1000,
    httpOnly: true,
    secure: true,
  })

  res.cookie("password", "niceTryHacker", {
    maxAge: 1000 * 1000 * 1000,
    httpOnly: true,
    secure: true,
  })

  res.json({ message: "Cookies created" })
})

module.exports = router
