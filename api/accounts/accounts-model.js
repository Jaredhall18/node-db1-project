const db = require('./../../data/db-config')

const getAll = async () => {
  // Select * from accounts;
  const rows = await db('accounts')
    .select('name', 'budget')
    return rows
}

const getById = async (id) => {
  const result = await db("accounts").where("id", id).first();
  return result;
};

const create = async account => {
  // DO YOUR MAGIC
  const [accountId] = await db('accounts')
    .insert(account)
  const newAccount = await getById(accountId)
  return newAccount
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
