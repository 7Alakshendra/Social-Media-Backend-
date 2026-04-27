const User=require('../models/user');
const Follow=require('../models/follow');
const bcrypt = require('bcryptjs');

class UserService{
    async getAllUsers(){
        console.log("user name alpha beta gamma!");
        return await User.find({});
    }

    async getUserByUsername(username){
        const user= await User.findOne({username});
        if(!user){
            throw new Error('User Not FOund');
        }
        return user;
    }

    async createUser(userData){
        const hashedPassword = await bcrypt.hash(userData.password, 10);
    //                                                           ↑
    //                                                  salt rounds 

    const user = new User({ ...userData, password: hashedPassword });
        await user.save();

        return user;
    }
    async loginUser(email,password){
     const user=await User.findOne({email:email});
     if(!user){
        throw new Error('User Not Found');
     }
     const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {
    throw new Error("Invalid password");
}
     return user;


    }
    async followUser(followerId,followingId){
        const user=await User.findOne({followingId});

     if(!user){
        throw new Error('User Not Found');
     }
     const follow=new Follow({following:followingId, follower:followerId});
     await follow.save();

     return follow;

    }
    
    async unfollowUser(req,res){
       
    }

    async getFollowers(username){
          
    }
    async getFollowwing(req,res){
       
    }
}

module.exports = new UserService();