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

const getRecipeCount = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM "Recipe"', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rowCount);
    })
  }) 
} 

const createRecipes = (body) => {
  return new Promise(function(resolve, reject) {
    const { id, name, description, servings, difficulty, steps, cooking_time, rating, username, date, categories, ingredients } = body
    pool.query('INSERT INTO "Recipe" ("Recipe_ID", "Recipe_Name", "Description", "Servings", "Difficulty", "Steps", "Cooking_Time", "Rating", "Author_Username", "Creation_Date", "Categories", "Ingredients") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)', 
    [id, name, description, servings, difficulty, steps, cooking_time, rating, username, date, categories, ingredients], (error, results) => {
      if (error) {
        console.log(error);
        reject(error)
      }
      resolve(`A new Recipe has been added added`)
    })
  })
}

const deleteRecipes = () => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM "Recipe" WHERE "Recipe_ID" = $1', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Recipe deleted with ID: ${id}`)
    })
  })
}

const updateRecipes = () => {
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
        reject(error)
      }
      resolve(`A new User has been added added`)
    })
  })
}

const updateUser = () => {
  return new Promise(function(resolve, reject) {
    pool.query('UPDATE "User" SET ',
     [], (error, results) => {
      if (error) {
        console.log(error);
        reject(error)
      }
      resolve(`Last Access time updated`)
    })
  })
}

const getItem = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM "Item"', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

const createItem = (body) => {
  return new Promise(function(resolve, reject) {
    const { id, aisle, name, date } = body
    pool.query('INSERT INTO "Item" ("Item_ID", "Aisle", "Item_Name", "Expiration_Date") VALUES ($1, $2, $3, $4)',
     [id, aisle, name, date], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new Item has been added added`)
    })
  })
}




module.exports = {
  getRecipes,
  createRecipes,
  updateRecipes,
  deleteRecipes,
  getUsers,
  createUser,
  updateUser,
  getUserCount,
  getItem,
  createItem,
  getRecipeCount,
}