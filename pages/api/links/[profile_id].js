import nextConnect from 'next-connect'
import middleware from '../../../middleware/database'

/**
 * REST API to allow extra fields to be injected into an existing mongoDB document
 * The only request method allowed is PUT
 * 
 * The extra fields to be included are not covered by the linkedin-public-profile api, which is why 
 * this REST API is needed
 * 
 * The REST API receives a request with the (profile_id) as a parameter and a request body containing 
 * a JSON object of the form ({'link': 'link_value_here', 'link_type': 'link_type_here'})
 */

const handler = nextConnect()

handler
.use(middleware)
.put(async (req, res) => {
    //Retrieve parameter (profile_id) from request object
    const {
        query: { profile_id },
    } = req

    let obj = req.body

    let doc = null

    //Determine the link type and perform a field update to the document of the user having a profile id of (profile_id)
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