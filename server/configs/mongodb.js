import mongoose from "mongoose";


const connentDB = async()=>{

    mongoose.connection.on('connected',()=>{
        console.log('Database Connected')
    })

    await mongoose.connect(`${process.env.URL}/lms`)

}

export default connentDB