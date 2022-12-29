const userList = [
        {
          id: 1,
          username: 'user1',
          name: 'User1',
          email: 'user1@test.com',
          phone: '9812345678',
          website: 'user1.com',
          address: {
            street: 'address line 1', // Address line 1
            suite: 'address line 2', // Address line 2
            city: 'mumbai',
            zipcode: 400001
          },
          company: {
            name: 'company1', // The name of company where the user works
          }
        },
        {
            id: 2,
            username: 'user2',
            name: 'User2',
            email: 'user2@test.com',
            phone: '9812345678',
            website: 'user2.com',
            address: {
                street: 'address line 1', // Address line 1
                suite: 'address line 2', // Address line 2
                city: 'mumbai',
                zipcode: 400001
            },
            company: {
              name: 'company2', // The name of company where the user works
            }
        }
    ];

export const testData = {userList};