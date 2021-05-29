const { User } = require('../models');

const UserData = [
  
    {
        "name": "Jo-Anne J",
        "email": "jo-anne.jav@gmail.com",
        "password": "123456789"
    }

];

const seedUser = async () => {


  for (let index = 0; index < UserData.length; index++) {
    const data = UserData[index];
    await User.create(data);
    
  }
  
  return;
  
};

module.exports = seedUser;