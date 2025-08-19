import User from '../modals/userModals.js';

export const creatUser = async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({email});
    if(findUser){
        return res.status(400).json({message: "User already exists"});
    }
    const newUser = await User.create(req.body);
    res.status(201).json({message: "User created successfully", newUser});
}
