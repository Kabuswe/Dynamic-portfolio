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
        {'education':1
    })
    
    res.json(doc)
});

export default handler