import data from './data'

export default () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(JSON.stringify(data)), 500)
})
