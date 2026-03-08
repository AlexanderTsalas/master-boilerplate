import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

const connectionString = process.env.DATABASE_URL!

// For edge environments (like Vercel Edge), use a different driver if needed.
// This is the standard postgres.js driver for Node.js environments.
const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client, { schema })
