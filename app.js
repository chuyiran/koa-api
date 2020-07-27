//引入
const koa = require('koa')
const Router = require('koa-router')
const Bodyparser = require('koa-bodyparser')

//实例化
const app = new koa()
const router = new Router()

//设置路由
router.get('/', async ctx => {
    ctx.body = { msg: 'hello koa' }
})

//配置路由
app.use(router.routes(), router.allowedMethods())

//设置端口号
const port = process.env.PORT || 5000

//监听商品并启动服务
app.listen(port, () => {
    console.log(`server is running at ${port}`);
})