const User = require('../models/user');
const Blog = require('../models/Blog');
const mongoose = require('mongoose')

const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
        blogs = await Blog.find();
       

    } catch (error) {
        return console.log(error);
    }
    if (!blogs || blogs.length === 0) {
        return { success:false, message: "Blogs are not found" }
    }
   // console.log('blogs: ', blogs);

    return {success:true , blogs };    
}

const createBlog = async (req, res, next) => {
    const { title, description, image, user } = req.body
    let existingUser;
    try {
        existingUser = await User.findById(user)
        //console.log('existingUser: ', existingUser);

    } catch (error) {
        return console.log(error);
    }
    if (!existingUser) {
        return {success:false , message:"Unable to find User using this Id "};
    }
    const blog = new Blog({
        title, description, image, user,
    })
    try {
        const session = await mongoose.startSession()
        session.startTransaction();
        await blog.save({ session })
        existingUser.blogs.push(blog)
        await existingUser.save({ session })
        session.commitTransaction()
    } catch (error) {
        console.log(error);
        return {success: false , messgae: error }
    }
    return {success:true ,blog};
}

const updateBlog = async (req, res, next) => {
    const { title, description } = req.body

    const Blog_id = req.params.id
    let blog

    try {
        blog = await Blog.findByIdAndUpdate(Blog_id, {
            title, description
        })
    } catch (error) {
        return console.log(error);
    }
    if (!blog) {
        return { success : false ,message: "blog is not present which you are looking for..." }
    }
    return {success:true ,blog};
}

const deleteBlog = async (req, res, next) => {
    const id = req.params.id;
    let blog;

    try {

        blog = await Blog.findById(id).populate("user");

        if (!blog) {
            return { success : false ,message: "Blog is not present in the DB" }
        }
        const user = blog.user;
        user.blogs.pull(blog);
        await user.save();
        await Blog.deleteOne({ _id: id });

    } catch (error) {
        console.log(error);
        return {success : false , message: "Internal Server Error" };
    }
    return {success:true ,blog};
}
 
const getById = async (req, res, next) => {
    const id = req.params.id
    let blog;
    try {
        blog = await Blog.findById(id)

    } catch (error) {
         console.log(error);
    }
    if (!blog) {
       return { success : false , message: "Blog is not present " }
    }
    return {success:true ,blog};
}
const getByUserId = async (req, res, next) => {
    const userId = req.params.id
    let userBlog;
    try {
        userBlog = await User.findById(userId).populate("blogs")
    } catch (error) {
         console.log(error);
    }
    if (!userBlog) {
        return {success:false ,  message: "the blog is not found" }
    }
    return {success:true ,userBlog};
}

module.exports = {
    getAllBlogs,
    createBlog,
    updateBlog,
    getById,
    deleteBlog,
    getByUserId
}
