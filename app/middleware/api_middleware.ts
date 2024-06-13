import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class ApiMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    return await next()
  }
}
