
const mongo_cred = {
    username: 'Kayam3',
    password: 'Kayboy12',
    db_name: 'DynamicPortfolio'
}
export const config = {
    mongoUrl:'mongodb+srv://'+mongo_cred.username+':'+mongo_cred.password+
    '@cluster0.gvpq1.gcp.mongodb.net/'+mongo_cred.db_name+'?retryWrites=true&w=majority',
    profile_id: 'kabuswe-mulenga-8b976416b',
    rapid_api:{
        url: "https://linkedin-public-profiles.p.rapidapi.com/rapidapi/",
        host: "linkedin-public-profiles.p.rapidapi.com",
        key: "QdUVvvrZXCmsh63bAe26N5W7xJ7kp1clh8MjsnBiJAxLOai4Q1",
        path: "/rapidapi/?profileId="
    }
}