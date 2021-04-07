import bcrypt, { hash } from "bcryptjs"

const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: hash.bcrypt("123456",10),
        isAdmin: true
    },
    {
        name: "Hamza Mughal",
        email: "hamzamughal@example.com",
        password: hash.bcrypt("123456",10)
    },
    {
        name: "Ham Mughal",
        email: "ham@example.com",
        password: hash.bcrypt("123456",10)
    }
]

export default users