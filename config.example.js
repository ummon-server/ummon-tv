module.exports = {
  server: {
    url: process.env.URL || 'http://localhost:8080',
    username: process.env.USERNAME || 'user',
    password: process.env.PASSWORD || 'password',
    version: process.env.VERSION || '*',
    timeout: process.env.TIMEOUT || 1
  }
}