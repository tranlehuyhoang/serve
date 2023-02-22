import User from "../models/UserModels.js";

export const getUsers = async(req,res)=>{
    try {
        const respone =  await User.findAll();
        res.status(200).json(respone)
    } catch (error) {
        console.log(error.message)
    }
}
export const getUsersById = async (req, res) => {
    try {
        const response = await User.findOne(
            {
                where:
                {
                    id: req.params.id
                }
            }
        );
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message)
    }
}
export const createUser = async (req, res) => {
    try {
             await User.create(req.body)
        res.status(200).json({msg:'created'});
    } catch (error) {
        console.log(error.message)
    }
}
export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg:'Update'});
    } catch (error) {
        console.log(error.message)
    }
}
    ;
export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg:'delete'});
    } catch (error) {
        console.log(error.message)
    }
}