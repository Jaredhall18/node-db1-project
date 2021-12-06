const db = require('./../../data/db-config')

const getAll = async () => {
  // Select * from accounts;
  const rows = await db('accounts')
    .select('name', 'budget')
    return rows
}

const getById = id => {
  // DO YOUR MAGIC
}

const create = account => {
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
