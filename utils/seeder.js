// set up a temporary (in memory) database
const Datastore = require('nedb')
const LOG = require('../utils/logger.js')

// require each data file

const transaction = require('../data/transaction.json')
const products = require('../data/products.json')
const categorys = require('../data/categorys.json')
const orders = require('../data/orders.json')
const products = require('../data/products.json')
const orderLineItems = require('../data/orderLineItems.json')
const accounts = require('../data/accounts.json')

module.exports = (app) => {
  LOG.info('START seeder.')
  const db = {}

  // transaction don't depend on anything else...................

  db.transaction = new Datastore()
  db.transaction.loadDatabase()

  // insert the sample data into our data store
  db.transaction.insert(transaction)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.transaction = db.transaction.find(transaction)
  LOG.debug(`${app.locals.transaction.query.length} transaction seeded`)

  // Products don't depend on anything else .....................
  db.categorys = new Datastore()
  db.categorys.loadDatabase()

  db.accounts = new Datastore()
  db.accounts.loadDatabase()

  db.orders = new Datastore()
  db.orders.loadDatabase()

  db.products = new Datastore()
  db.products.loadDatabase()

  db.orderLineItems = new Datastore()
  db.orderLineItems.loadDatabase()


  // insert the sample data into our data store
  db.categorys.insert(categorys)

  // insert the sample data into our data store
  db.orders.insert(orders)

  db.products.insert(products)

  db.orderLineItems.insert(orderLineItems)

  db.accounts.insert(accounts)


  // initialize app.locals (these objects will be available to our controllers)
  app.locals.categorys = db.categorys.find(categorys)
  LOG.debug(`${app.locals.categorys.query.length} categorys seeded`)
  
  // initialize app.locals (these objects will be available to our controllers)
  app.locals.orders = db.orders.find(orders)
  LOG.debug(`${app.locals.orders.query.length} orders seeded`)

  app.locals.accounts = db.accounts.find(accounts)
  LOG.debug(`${app.locals.account.query.length} accounts seeded`)

  app.locals.products = db.products.find(products)
  LOG.debug(`${app.locals.products.query.length} products seeded`)

  app.locals.orderLineItems = db.orderLineItems.find(orderLineItems)
  LOG.debug(`${app.locals.orderLineItems.query.length} orderLineItems seeded`)

  LOG.info('END Seeder. Sample data read and verified.')
}






  
