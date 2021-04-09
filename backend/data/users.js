import bcrypt from 'bcryptjs'


const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Hamza Mughal",
        email: "hamzamughal@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false
    },
    {
        name: "Ham Mughal",
        email: "ham@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false
    }
]

export default users