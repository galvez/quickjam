import Vue from 'vue'
import state from '~/store/state'
import * as actions from '~/store/actions'

export default async function (ctx, inject) {
  // Global state
  const $state = Vue.observable(await state(ctx))
  if (ctx.ssrContext) {
    ctx.ssrContext.nuxt.$state = $state
  }

  ctx.$state = process.client
    ? Vue.observable(window.__NUXT__.$state)
    : ctx.ssrContext.nuxt.$state
  inject('state', ctx.$state)

  // Register global actions
  ctx.$actions = {}
  for (const action of Object.keys(actions)) {
    ctx.$actions[action] = (...args) => {
      return actions[action](ctx, ...args)
    }
  }
  inject('actions', ctx.$actions)
}
