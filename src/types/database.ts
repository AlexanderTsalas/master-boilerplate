import { type User, type NewUser } from '@/db/schema'

export type { User, NewUser }

// Add any other shared types or database-related interfaces here
export type DatabaseResponse<T> = {
    data: T | null
    error: Error | null
}
