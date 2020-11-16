import nextConnect from 'next-connect'
import middleware from '../../middleware/database'
import {config} from '../../middleware/config'

const handler = nextConnect()

handler
.use(middleware)
.get(async (req, res) => {
    let doc = await req.db
    .collection('users')
    .findOne({profile_id: config.profile_id},
        {
            'first_name':1, 
            'last_name':1, 
            'profile_picture':1, 
            'summary':1,
            'email':1,
            'github':1,
            'linkedIn':1,
            'phone':1
        })
    
    res.json(doc)
});

export default handler