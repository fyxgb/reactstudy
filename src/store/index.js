const modules = require.context('./modules/', true, /\.js$/)

const stores = {}
modules.keys().forEach(item => {
  const tmpKey = item.replace(/\.\//g, '').replace(/_store\.js/g, 'Store');
  stores[tmpKey] = modules(item).default
})

export default stores
