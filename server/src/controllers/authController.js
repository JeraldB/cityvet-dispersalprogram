const db = require("../models/connection")
const User = db.users
const Admin = db.admins

const bcrypt = require("bcrypt");
const { AccessToken, RefreshToken, verifyAccessToken,
    verifyRefreshToken}= require("../global/utils/jwt")


const authControllers = {
    registerUser : async (req, res) => {
        try {
          const { fullname, address, contact, birthDate, userName, email, password } = req.body;
          const existingUser = await User.findOne({ where: { email } });
      
          if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
          }
      
          // Hash the pw
          const hashedPassword = await bcrypt.hash(password, 10);
      
          // Create a new user in the User 
          const newUser = await User.create({
            fullname,
            address,
            contact,
            birthDate,
            userName,
            email,
            password: hashedPassword,
          });
      
          res.status(201).json({ message: 'User registered successfully' });
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Internal server error' });
        }
      },
      
      registerAdmin : async (req, res) => {
        try {
          const { userName, email, password } = req.body;
      
          // Check if the admin already exists
          const existingAdmin = await Admin.findOne({ where: { email } });
      
          if (existingAdmin) {
            return res.status(409).json({ message: 'Admin already exists' });
          }
      
          // Hash the pw
          const hashedPassword = await bcrypt.hash(password, 10);
      
          const newAdmin = await Admin.create({
            userName,
            email,
            password: hashedPassword,
          });
      
          res.status(201).json({ message: 'Admin registered successfully' });
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Internal server error' });
        }
      },
    loginUser : async (req, res) => {
        try {
          const { email, password } = req.body;
      
          // Check if the user exists in the User model
          const user = await User.findOne({ where: { email } });
      
          if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
          }
      
          // Compare the provided password with the stored hashed password in the User model
          const passwordMatch = await bcrypt.compare(password, user.password);
      
          if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
          }
      
          // User authentication successful
          //  an access token and a refresh token
          const accessToken = AccessToken({ id: user.id });
          const refreshToken = RefreshToken({ id: user.id });
      
          res.json({ accessToken, refreshToken });
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Internal server error' });
        }
      },
      loginAdmin : async (req, res) => {
        try {
          const { email, password } = req.body;
      
          // Check if the admin exists in the Admin model
          const admin = await Admin.findOne({ where: { email } });
      
          if (!admin) {
            return res.status(401).json({ message: 'Invalid email or password' });
          }
      
          // Compare the provided password with the stored hashed password in the Admin model
          const passwordMatch = await bcrypt.compare(password, admin.password);
      
          if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
          }
      
          // Admin authentication successful
          //  an access token and a refresh token
          const accessToken = AccessToken({ id: admin.id });
          const refreshToken = RefreshToken({ id: admin.id });
      
          res.json({ accessToken, refreshToken });
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Internal server error' });
        }
      },
      
       refreshAccessToken : async (req, res) => {
        try {
          const { refreshToken } = req.body;
      
          // Verify the refresh token
          const decoded = verifyRefreshToken(refreshToken);
      
          if (!decoded) {
            return res.status(401).json({ message: 'Invalid refresh token' });
          }
      
          //  a new access token
          const accessToken = AccessToken({ id: decoded.id });
      
          res.json({ accessToken });
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Internal server error' });
        }
      },
resetPassword : async (req, res)=>{
    try{
        const {userName,newPassword}= req.body;

        const user = await User.findOne({where:{userName}})


        if(!user){
return res.status(404).json({message:"user not found"})
        }

        //  salt and hash pw
        const salt= await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(newPassword, salt)

        // updte pw
        user.password = hashedPassword;
        await user.save()

        res.json({message:"password reset successful"})
        }catch(err){
        console.error(err)
            res.status(500).json({message: "internal server err"})
        
    }
},

}

module.exports = authControllers

