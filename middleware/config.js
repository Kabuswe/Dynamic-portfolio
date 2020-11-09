
const mongo_cred = {
    username: 'Kayam3',
    password: 'Kayboy12',
    db_name: 'DynamicPortfolio'
}
export const config = {
    mongoUrl:'mongodb+srv://'+mongo_cred.username+':'+mongo_cred.password+
    '@cluster0.gvpq1.gcp.mongodb.net/'+mongo_cred.db_name+'?retryWrites=true&w=majority',
}