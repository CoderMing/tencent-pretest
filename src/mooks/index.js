import data from './data'

export default () => new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 500)
  })
