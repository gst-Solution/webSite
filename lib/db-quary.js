import sql from "@/db";

export async function storeUser(user){
    const createUser = await sql`
    insert into users (f_name, l_name, phone, email, address, password)
    values (${user.firstName}, ${user.lastName}, ${user.phoneNumber}, ${user.email}, ${user.address}, ${user.hashedPassword})
    returning id`;
    return createUser;
} 

export async function getUserByEmail(email){
    const getUser = sql`
    select * from users
    where email = ${email}`
    return getUser;
}
export async function getUserById(userId){
    const foundUser = sql`
    select * from users
    where id = ${userId}`
    return foundUser;
}