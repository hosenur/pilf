// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'

export default class ProjectsController {
  async store({ request, response }: HttpContext) {
    console.log(request, response)
  }
}
