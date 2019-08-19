import axios from 'axios'
import md5 from 'md5'

export default axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  responseType: 'json',
  params: {
    ts: 1,
    apikey: process.env.REACT_APP_MARVEL_PUBLIC_KEY,
    hash: md5(1 + process.env.REACT_APP_MARVEL_PRIVATE_KEY + process.env.REACT_APP_MARVEL_PUBLIC_KEY)
  }
})
