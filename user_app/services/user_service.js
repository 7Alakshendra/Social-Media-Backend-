const User=require('../models/user');
const Follow=require('../models/follow');

class UserServuce{
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
        const user=new User(userData);
        await user.save();

        return user;
    }
    async loginUser(email,password){
   
    }
    async followUser(username){
        
    }
    async unfollowUser(req,res){

    }
    async getFollowers(username){
          
    }
    async getFollowwing(req,res){
       
    }
}