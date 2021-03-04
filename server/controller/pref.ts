const Koa = require('koa')
// const router = require('koa-router')()
// const Monk = require('monk')

// 取页面分类
const getCategory = async (ctx: any) => {
  try {
      // const db= Monk('localhost/test');//链接到库
      // const perf = db.get('ltt');//表
      // ctx.status = 200
      // let all = await perf.find({},{_id:false});
      // let cate = []
      // all.forEach((item, index) => {
      //   if(!cate.includes(item.perfTest.path) && item.perfTest.path) {
      //     cate.push(item.perfTest.path)
      //   }
      // });
      // const data = [...cate]
      const data = [{
        name: 'book',
        amount: 100,
      },{
        name: 'clothes',
        amount: 200,
      }]
      ctx.body = { status: 1, data }
  } catch (error) {
      ctx.body = {
        status: 0,
        info:error
      }
  }
}


module.exports = {
  getCategory
}
