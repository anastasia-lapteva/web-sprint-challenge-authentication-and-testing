const db = require("../../data/dbConfig.js");

module.exports =
{
    findByName,
    add
};

function findByName(name)
{
    /*
    SELECT
        id,
        username,
        password
    FROM users;
    */
    return db("users")
        .select("id", "username", "password")
        .where("username", name)
        .first();
}

function findById(id)
{
    return db("users")
        .select("id", "username", "password")
        .where("id", id)
        .first();
}

async function add(user)
{
    /*
    INSERT INTO users
    (
        username,
        password
    )
    VALUES
    (
        'Anastasia',
        'password'
    )
    */
    const [id] = await db("users").insert(user);
    return findById(id);
}