module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'listicledb',
    user: process.env.DB_USER || 'ibanza',
    password: process.env.DB_PASS || 'asdfasdf',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'localhost',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secretHashWordIsThis'
  }
}