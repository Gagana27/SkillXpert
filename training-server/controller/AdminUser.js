const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AdminUser = require('../mongo_schema/AdminUser');
const JWT_SECRET = 'your_secret_key_here';

class AdminUserController {

  static createDetails = async (req, res) => {
    try {
      const { fname, lname, contact, addres, email, password, userType,date } = req.body;

      // Check if a user with the same email already exists
      const existingUser = await AdminUser.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ error: 'User with this email already exists' });
      }

      // Hash the user's password using bcrypt
      const encryptedPassword = await bcrypt.hash(password, 10);

      // Create a new user document
      const newUser = new AdminUser({
        fname,
        lname,
       contact,
        addres,
        email,
        password: encryptedPassword,
        userType,
        date,
      });

      // Save the user document to the database
      await newUser.save();

      const token = jwt.sign({ email: newUser.email }, JWT_SECRET, {
        expiresIn: '1h', // Token expires in 1 hour (adjust as needed)
      });

      res.status(201).json({ status: 'User created successfully', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'Error creating user' });
    }
  };


  static LoginData = async (req, res) => {
    const { email, password, userType } = req.body;

    try {
      // Find a user by email
      const user = await AdminUser.findOne({ email, userType });
  
      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }
  
      // Check if the provided password matches the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ email: user.email, userType: user.userType }, JWT_SECRET, {
        expiresIn: '1h', // Token expires in 1 hour (adjust as needed)
      });
  
      if (user.userType === 'Admin') {
        res.status(200).json({ message: 'Admin login successful', token, userType: 'Admin' });
      } else if (user.userType === 'User') {
        res.status(200).json({ message: 'User login successful', token, userType: 'User' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred during login' });
    }
  };
   
  static getAllUsers = async (req, res) => {
    try {
      // Define the userType you want to filter (e.g., 'User')
      const userTypeToRetrieve = 'User';
  
      // Query the database for users with the specified userType
      const users = await AdminUser.find({ userType: userTypeToRetrieve });
  
      if (users && users.length > 0) {
        // Users found, return them in the response
        return res.status(200).json(users);
      } else {
        // No users with the specified userType found, send an appropriate message or response
        return res.status(404).json({ message: `No ${userTypeToRetrieve} users found` });
      }
    } catch (error) {
      // Handle any errors that occur during the database query
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching users' });
    }
  }
  

}

module.exports = AdminUserController;
