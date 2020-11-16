import nextConnect from 'next-connect'
import middleware from '../../../middleware/database'

const handler = nextConnect()

handler
.use(middleware)
.put(async (req, res) => {
    const {
        query: { profile_id },
    } = req

    let obj = req.body

    let doc = null

    switch(obj.link_type){
        case 'github':
            doc = await req.db
            .collection('users')
            .findOneAndUpdate(
            {profile_id: profile_id},
            {$set: {
                github: obj.link
            }},
            {new: true,useFindAndModify: false})
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
              })
            .catch((err) => {
                res.statusCode = 502;
                res.end("Error updatig user profile : "+err)
            });
            break
        case 'linkedIn':
            doc = await req.db
            .collection('users')
            .findOneAndUpdate(
            {profile_id: profile_id},
            {$set: {
                linkedIn: obj.link
            }},
            {new: true,useFindAndModify: false})
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
              })
            .catch((err) => {
                res.statusCode = 502;
                res.end("Error updatig user profile : "+err)
            });
            break
        case 'email':
            doc = await req.db
            .collection('users')
            .findOneAndUpdate(
            {profile_id: profile_id},
            {$set: {
                email: obj.link
            }},
            {new: true,useFindAndModify: false})
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
              })
            .catch((err) => {
                res.statusCode = 502;
                res.end("Error updatig user profile : "+err)
            });
            break
        case 'phone':
            doc = await req.db
            .collection('users')
            .findOneAndUpdate(
            {profile_id: profile_id},
            {$set: {
                phone: obj.link
            }},
            {new: true,useFindAndModify: false})
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
              })
            .catch((err) => {
                res.statusCode = 502;
                res.end("Error updatig user profile : "+err)
            });
            break
        case 'resume':
            doc = await req.db
            .collection('users')
            .findOneAndUpdate(
            {profile_id: profile_id},
            {$set: {
                resume: obj.link
            }},
            {new: true,useFindAndModify: false})
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
              })
            .catch((err) => {
                res.statusCode = 502;
                res.end("Error updatig user profile : "+err)
            });
            break
        case 'headline':
            doc = await req.db
            .collection('users')
            .findOneAndUpdate(
            {profile_id: profile_id},
            {$set: {
                headline: obj.link
            }},
            {new: true,useFindAndModify: false})
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
              })
            .catch((err) => {
                res.statusCode = 502;
                res.end("Error updatig user profile : "+err)
            });
            break
    }
});

export default handler