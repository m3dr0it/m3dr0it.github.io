import mongoose , {Connection} from 'mongoose'

let cachedCon : Connection | null = null

export async function connect(){
    if(cachedCon){
        console.log(cachedCon)
        return cachedCon
    }

    try{
        const con = await mongoose.connect(process.env.MONGODB_URI!)
        cachedCon = con.connection
        return cachedCon
    }catch(err){
        console.log(err)
        throw err
    }
}