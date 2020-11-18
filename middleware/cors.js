import Cors from 'cors'
import nextConnect from 'next-connect'

const cors = Cors({
    methods: ['GET', 'POST', 'PUT', 'HEAD', 'OPTIONS'],
})

function runMiddleware(req, res, next) {
    return new Promise((resolve, reject) => {
      cors(req, res, (result) => {
        if (result instanceof Error) {
            reject(result)
            return next()
        }
  
        resolve(result)
        return next()
      })
    })
}

const corsMiddleware = nextConnect()

corsMiddleware.use(runMiddleware)

export default corsMiddleware