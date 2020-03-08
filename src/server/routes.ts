import Router from "koa-router"
import * as fs from "fs"
import * as path from "path"
import { getPhonewords } from "./api/phonewords"

// tslint:disable-next-line no-var-requires
const config = require("../../config")
const router = new Router()

router.get("/api/phonewords", async (ctx, next) => {
  try {
    const { term }= ctx.request.query
    const result = await getPhonewords(term)
    ctx.body = result
  } catch (err) {
    console.error("err", err)
    ctx.status = 500
    ctx.body = "Internal error"
  }
})

router.get("(.*)", async ctx => {
  const index = fs.readFileSync(
    path.resolve(__dirname, "../../client/index.html"),
    {
      encoding: "utf8"
    }
  );
  const processedIndex = index.replace(
    "var config=;",
    `var config=${JSON.stringify(config)};`
  );

  ctx.status = 200
  ctx.body = processedIndex
});

export default router