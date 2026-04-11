const Post = require('../models/post');

class PostService {

    async getPostsByUsername(username) {
        console.log("Posts by User");
        const posts = await Post.find({ author: username });
        return posts;
    }

    async createPost(userID,postData){
              const post=new Post({author:userID,...postData});
              await post.save();

        return post;
    }

}

module.exports = new PostService();