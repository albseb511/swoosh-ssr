// const withPWA = require('next-pwa')

module.exports = {
    env: {
        MONGO_SERVER_URL: "mongodb://admin:Kunnan541544!@localhost:27017/swoosh?authSource=admin"
    },
    pwa: {
        dest: 'public'
      }
}