const Pool = require('pg').Pool

const pool = new Pool({
  user: 'p32001c',
  host: 'reddwarf.cs.rit.edu',
  database: 'p32001c',
  password: 'Cebai4xoorahquahleuw',
  port: 5432,
})

const getRecipes = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM "Recipe"', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}
const createRecipes = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, email } = body
    pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new merchant has been added added: ${results.rows[0]}`)
    })
  })
}

const deleteRecipes = () => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Merchant deleted with ID: ${id}`)
    })
  })
}

const getUsers = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM "User"', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

const getUserCount = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM "User"', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rowCount);
    })
  }) 
} 

const createUser = (body) => {
  return new Promise(function(resolve, reject) {
    const { username, password, creation_date, last_access_date, user_id } = body
    pool.query('INSERT INTO "User" ("Username", "Password", "Creation_Date", "Last_Access_Date", "User_ID") VALUES ($1, $2, $3, $4, $5)',
     [username, password, creation_date, last_access_date, user_id], (error, results) => {
      if (error) {
        console.log(error);
        reject(error)
      }
      resolve(`A new merchant has been added added`)
    })
  })
}



module.exports = {
  getRecipes,
  createRecipes,
  deleteRecipes,
  getUsers,
  createUser,
  getUserCount,
}