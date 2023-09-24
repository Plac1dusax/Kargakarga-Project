const express = require("express")
const next = require("next")
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()
const url = require("url")

app.prepare().then(() => {
  const server = express()

  const newProjectsRouter = require("./src/pages/api/newProjects")
  server.use("/api/newProjects", newProjectsRouter)

  const cookies = require("./src/pages/api/cookies")
  server.use("/api/cookies", cookies)

  server.all("*", (req, res) => {
    return handle(req, res)
  })

  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`)
  })
})
