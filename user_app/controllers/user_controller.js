const userService = require ('../services/user_service');

class UserController{
    async getAllUsers(req,res){
    try{
        const users=await userService.getAllUsers();
        res.status(200).json(users);
        
    }
    catch (error){
        res.status(500).json({error:error.message});
    }
    }
    async getUserByUsername(req,res){
           try {
            const{username}=req.params;//object destructuring
            const user=await userService.getUserByUsername(username);
            res.status(200).json(user);
           }
           catch (error){
            res.status(404).json({error:error.message});
           }
    }
//differentiate between the body and the parameters of a request
    async createUser(req,res){
         try{
            const userData=req.body;
            const user= await userService.createUser(userData);
            res.status(201).json(user);
         }
         catch(error){
            res.status(400).json({error: error.message});
         }
    }

    async loginUser(req,res){
         try{
            const { email, password } = req.body;
            const user= await userService.loginUser(email,password);
            res.status(200).json(user);
         }
         catch(error){
            res.status(400).json({error: error.message});
         }
    }

    async followUser(req,res){
    try{
      const {followerId}=req.body;
      const {followingId}=req.params;

     const follow = await userService.followUser(followerId,followingId);
     res.status(201).json(follow); 
}
catch(error){
    res.status(400).json({ error: error.message });
}

    }
    async unfollowUser(req,res){

    }
    async getFollowers(req,res){

    }
    async getFollowing(req,res){

    }
}
module.exports = new UserController();
