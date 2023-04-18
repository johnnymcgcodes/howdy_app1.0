
// const mongoose = require("mongoose");
// const User = require("../models/UserItems");

// // mongoose.connect(
// //   console.log("here 2"),
// //   "mongodb+srv://johnnymark:qZs4mo7Q@cluster0.vovbw7a.mongodb.net/?retryWrites=true&w=majority",
// //   // "mongodb+srv://johnnymark:DUAE6zNWjjscpzVj@Cluster0.vovbw7a.mongodb.net/my-app?retryWrites=true&w=majority",
// //   {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   }
// // );

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("Connected to MongoDB Atlas");
// });

// module.exports = {
//   loginUser: async (req, res) => {
//     const { username, password } = req.body;
//     try {
//       console.log("starting...");
//       const user = await User.findOne({ username }).exec();
//       if (!user) {
//         return res
//           .status(401)
//           .json({ message: "Invalid username or password" });
//       }
//       const isValidPassword = user.password === password;
//       if (!isValidPassword) {
//         return res
//           .status(401)
//           .json({ message: "Invalid username or password" });
//       }
//       req.session.user = user;
//       res.json(user);
//     } catch (error) {
//       console.log("oops...");
//       console.error(error);
//       res.status(500).json({ message: "Something went wrong" });
//     }
//   },
// };
