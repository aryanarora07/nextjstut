import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;
        
        connection.on('connected', () => {
            console.log("MONGO DB CONNECTED SUCCESSFULLY");
        })

        connection.on('error', (err) => {
            console.log("CONNECTION ERROR" + err);
            process.exit();
        })

        } catch (error) {
        console.log("Something is wrong");
        console.log(error);
        
    }
}
