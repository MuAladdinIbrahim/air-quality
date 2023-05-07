import { MongoClient } from 'mongodb'

const dbClient = new MongoClient(process.env.MONGODB_URL || "mongodb://127.0.0.1:27017")

export default dbClient
