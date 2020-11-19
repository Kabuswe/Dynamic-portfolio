
//Mongo DB credentials object
const mongo_cred = {
    username: 'your_mongodb_username',
    password: 'your_mongodb_password',
    db_name: 'your_mongodb_database_name'
}
//Config object containing configuration strings and objects for MongoDB, LinkedIn and RapidApi
export const config = {
    mongoUrl:'mongodb+srv://'+mongo_cred.username+':'+mongo_cred.password+
    '@cluster0.gvpq1.gcp.mongodb.net/'+mongo_cred.db_name+'?retryWrites=true&w=majority',
    profile_id: 'linkedIn_profile_id',
    rapid_api:{
        url: "https://linkedin-public-profiles.p.rapidapi.com/rapidapi/",
        host: "linkedin-public-profiles.p.rapidapi.com",
        key: "your_rapid_api_linkedin-public-profiles_api_key",
        path: "/rapidapi/?profileId="
    }
}