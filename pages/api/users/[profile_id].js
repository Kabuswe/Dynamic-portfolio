import nextConnect from 'next-connect'
import https from 'https'
import middleware from '../../../middleware/database'
import {config} from '../../../middleware/config'

const handler = nextConnect()

handler
.use(middleware)
.get( (req, res) => {
    res.end("Operation not allowed!")
})
.delete( (req, res) => {
    res.end("Operation not allowed!")
})
.post(async (req, res) => {

    const {
        query: { profile_id },
    } = req

    const options = {
        "method": "GET",
        "hostname": config.rapid_api.host,
        "port": null,
        "path": config.rapid_api.path + profile_id,
        "headers": {
          "x-rapidapi-host": config.rapid_api.host,
          "x-rapidapi-key": config.rapid_api.key,
          "useQueryString": true
        }
    }

    let user = await req.db
    .collection('users')
    .findOne({profile_id: profile_id})

    if(user === null){
        https
        .request(options, (result) => {
            var chunks = [];
        
            result
            .on("data", (chunk) => {
            chunks.push(chunk);
            })
            .on("end", async() => {
            var body = Buffer.concat(chunks);

            var result_obj = JSON.parse(body.toString());
            result_obj = result_obj.data.data;
            result_obj.profile_id = profile_id
            
            let doc = await req.db
            .collection('users')
            .insertOne(result_obj)
            
            res.json(doc)
            
            })
            .on("error", (err) => {
                res.end(err.message);
            });

        })
        .on("error", (err) => {
            res.end(err.message);
        })
        .end();
    }else{
        res.end("User: "+ profile_id + " already exists")
    }    
})
.put(async (req, res) => {

    const {
        query: { profile_id },
    } = req

    const options = {
        "method": "GET",
        "hostname": config.rapid_api.host,
        "port": null,
        "path": config.rapid_api.path + profile_id,
        "headers": {
          "x-rapidapi-host": config.rapid_api.host,
          "x-rapidapi-key": config.rapid_api.key,
          "useQueryString": true
        }
    }

    https
    .request(options, (result) => {
        var chunks = [];
        
        result
        .on("data", (chunk) => {
        chunks.push(chunk);
        })
        .on("end", async() => {
        var body = Buffer.concat(chunks);

        var result_obj = JSON.parse(body.toString());
        result_obj = result_obj.data.data;
            
        let doc = await req.db
        .collection('users')
        .findOneAndUpdate({profile_id: profile_id},{$set: result_obj},{returnNewDocument:true})
            
        res.json(doc)
            
        })
        .on("error", (err) => {
            res.end(err.message);
        });

    })
    .on("error", (err) => {
        res.end(err.message);
    })
    .end();
});

export default handler