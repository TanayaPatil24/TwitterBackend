import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
// dotenv.config({ path: "../config/.env" });
dotenv.config({ path: "./.env" });

// Check if MONGO_URI is loaded correctly
console.log('MONGO_URI:', process.env.MONGO_URI);

const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => {
            console.log(error);
        });
}

export default databaseConnection;
















// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config({
//     path:"../config/.env"
// })
// const databaseConnection = () => {
//     mongoose.connect(process.env.MONGO_URI).then(()=>{
//         console.log("Connected to mongoDB");
//     }).catch((error)=>{
//         console.log(error);
//     })
// }
// export default databaseConnection;