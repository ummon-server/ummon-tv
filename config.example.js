module.exports = {
  server: {
    url: process.env.url || 'http://localhost:8080',
    username: process.env.username || 'user',
    password: process.env.password || 'password',
    version: process.env.version || '*',
    timeout: process.env.timeout || 1
  }
}