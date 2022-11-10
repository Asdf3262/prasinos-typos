export { default as UIPostCard } from '../..\\components\\UI\\PostCard.vue'
export { default as UISocialCard } from '../..\\components\\UI\\SocialCard.vue'
export { default as LayoutTheBloggers } from '../..\\components\\layout\\TheBloggers.vue'
export { default as LayoutTheFooter } from '../..\\components\\layout\\TheFooter.vue'
export { default as LayoutTheFronts } from '../..\\components\\layout\\TheFronts.vue'
export { default as LayoutTheHeader } from '../..\\components\\layout\\TheHeader.vue'
export { default as LayoutTheHome } from '../..\\components\\layout\\TheHome.vue'
export { default as LayoutTheHub } from '../..\\components\\layout\\TheHub.vue'
export { default as LayoutTheTriples } from '../..\\components\\layout\\TheTriples.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
