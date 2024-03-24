const modules = import.meta.glob('./*.vue', { eager: true, import: 'default' })

export default Object.values(modules)
