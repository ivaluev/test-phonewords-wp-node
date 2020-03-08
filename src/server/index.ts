import Koa from "koa"
import path from "path"
import body from "koa-body"
import serve from "koa-static"
import compress from "koa-compress"
import router from "./routes"

// tslint:disable-next-line no-var-requires
const config = require("../../config")
const createServer = async () => {
  const app = new Koa()

  app.use(compress())
  app.use(serve(path.resolve(__dirname, "../../dist")))
  app.use(body())
  app.use(router.routes())
  app.use(router.allowedMethods())

  return app
}

const server = createServer();
server.then(app => {
  app.listen(config.PORT, () => {
    console.log(`Web app is served at http://localhost:${config.PORT}`)
  })
})
