import { MongoClient } from 'mongodb'
import {config} from './config';

const client = new MongoClient(config.mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

export async function getData(path_name){
  let params = {}

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

  if (!client.isConnected())
    await client.connect()

  const resp = await
  client
  .db('DynamicPortfolio')
  .collection('users')
  .findOne({profile_id: config.profile_id},params)

  const data = JSON.parse(JSON.stringify(resp))
 
  return data

}