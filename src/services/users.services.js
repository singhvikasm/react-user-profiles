//import { testData } from '../dummyData';

export const usersService = {
    getUsers
};

//async is not required as await isn't currently used
async function getUsers() {
    // return await getFromServer('/api/');
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .catch(err => {console.log(err); return});
    return users;
    //return testData.users
}
