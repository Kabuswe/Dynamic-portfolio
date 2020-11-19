import nextConnect from 'next-connect'
import { MongoClient } from 'mongodb'
import {config} from './config';

//Instantiate new mongoDB client
const client = new MongoClient(config.mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

/**
 * getData function used in each getStaticProps for all the 
 * routes ( '/', '/experience', '/education', '/skills', '/projects', '/certifications')
 * 
 * Each route makes an asynchronous call to the database and retrieves data 
 * (The above action is according to Next.js' Static generation with data)
 * 
 */
export async function getData(path_name){
  let params = {}

  //Check path_name and return an object containing database field names required by the specific path_name
  switch(path_name){
    case 'home':
      params = {
        'first_name':1, 
        'last_name':1, 
        'profile_picture':1, 
        'summary':1,
        'email':1,
        'github':1,
        'linkedIn':1,
        'phone':1,
        'headline':1
      }
      break
    case 'experience':
      params = { 'position_groups':1 }
      break
    case 'education':
      params = { 'education':1 }
      break
    case 'skills':
      params = { 'skills':1 }
      break
    case 'projects':
      params = { 'projects':1 }
      break
    case 'certifications':
      params = { 'certifications':1 }
      break
    default:
      break
  }

  /**
   * Check if connection to the MongoDB database has already been established 
   * If not connected invoke the connect() method on the client object
   * **/
  if (!client.isConnected())
    await client.connect()

  //Return data specific to the user profile (profile_id) and the list of fields (params)
  const resp = await
  client
  .db('DynamicPortfolio')
  .collection('users')
  .findOne({profile_id: config.profile_id},params)

  const data = JSON.parse(JSON.stringify(resp))
 
  return data

}

//Setup MongoDB as middleware to be used with an object of the (next-connect) module
async function database(req, res, next) {
  if (!client.isConnected()) await client.connect()
  req.dbClient = client
  req.db = client.db('DynamicPortfolio')
  return next()
}

const middleware = nextConnect()

middleware.use(database)

export default middleware