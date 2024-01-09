
import User from '../models/User.js';

export const createUser = async(req,res) => {
    console.log('create user called');
    const newUser = new User(req.body);
    try{
        const saveUser = await newUser.save();
        res.status(200).json({success:true,message:'Successfully created',data:saveUser});
    }
    catch(err){
        res.status(500).json({success:false,message:'Failed To Create.Try Again'})
    }
}

// update User
export const updateUser = async(req,res) => {
    const id = req.params.id
    try{
        const updatedUser = await User.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})

        res.status(200).json({success:true,message:'Successfully created',data:updatedUser});
    }
    catch(err){
        res.status(500).json({success:false,Userage:'Failed To Update',});
    }
}
// delete User
export const deleteUser = async(req,res) => {
    const id = req.params.id
    try{
        await User.findByIdAndDelete(id);

        res.status(200).json({success:true,message:'Successfully deleted',});
    }
    catch(err){
        res.status(500).json({success:false,message:'Failed To Delete',});
    }
}
// getSingle User
export const getSingleUser = async(req,res) => {
    const id = req.params.id
    try{
        const user = await User.findById(id);

        res.status(200).json({success:true,message:'Successfully Found',data:user});
    }
    catch(err){
        res.status(404).json({success:false,message:'Not Found',});
    }
}
// getAll User
export const getAllUser = async(req,res) => {
    try{
        const users = await User.find({}).skip(page * 8).limit(8);
        res.status(200).json({success:true,message:'Successfully Found',data:users})
    }
    catch(err){
        res.status(404).json({success:false,message:'Not Found',}); 
    }
}