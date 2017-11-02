// set up a temporary (in memory) database
const Datastore = require('nedb')
const LOG = require('../utils/logger.js')
const puppies = require('../data/puppies.json')

module.exports = (app) => {
  LOG.info('START seeder.')
  const db = new Datastore()
  db.loadDatabase()

  // insert the sample data into our data store
  db.insert(puppies)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.puppies = db.find(puppies)

  LOG.debug(`${puppies.length} puppies`)
  LOG.info('END Seeder. Sample data read and verified.')
}
