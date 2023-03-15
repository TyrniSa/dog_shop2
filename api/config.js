module.exports = {
  PORT: process.env.PORT,
  SERVER_URL: process.env.SERVER_URL,
  CLIENT_URL: process.env.CLIENT_URL,
  DB: {
    PGHOST: process.env.PGHOST,
    PGUSER: process.env.PGUSER,
    PGDATABASE: process.env.PGDATABASE,
    PGPASSWORD: process.env.PGPASSWORD,
    PGPORT: process.env.PGPORT
  },
  SECRET: process.env.SECRET
}