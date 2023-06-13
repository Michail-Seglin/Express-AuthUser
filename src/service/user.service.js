const bcrypt = require('bcrypt');

const { createUserDB, getUserByEmailDB } = require('../repository/user.repository');

const salt = 1;

async function createUser(name, surname, email, pwd) {
    const findUser = await getUserByEmailDB(email);

    if (findUser.length) throw new Error('user alredy exist');

    const hashPwd = await bcrypt.hash(pwd, salt)
    const data = await createUserDB(name, surname, email, hashPwd);

    return data
}

async function authUserEmail(email, pwd) {
    const findUser = await getUserByEmailDB(email);
    console.log(email);
    if (!findUser.length) throw new Error('user not found');
    console.log(findUser);
    const hashPwd = findUser[0].pwd;
    const isMatch = await bcrypt.compare(pwd, hashPwd);

    if (!isMatch) throw new Error('password error');

    return findUser
}

module.exports = { createUser, authUserEmail }