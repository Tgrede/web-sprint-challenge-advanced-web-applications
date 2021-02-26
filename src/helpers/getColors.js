import axios from 'axios'

export const getColors = () => {
  return axios()
  .get('/test')
  .then((res) => { 
    return res
  })
  .catch((err) => {
    return err
  })
}