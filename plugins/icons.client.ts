export default defineNuxtPlugin(() => {
  const icons = Object.fromEntries(
    Object.entries(import.meta.glob('@/assets/icons/*.svg', { as: 'raw' })).map(
      ([key, value]) => {
        const filename = key.split('/').pop()!.split('.').shift()
        return [filename, value]
      }
    )
  )
  return {
    provide: {
      icons
    }
  }
})
