import { app } from "./server";
import config from "./config/config"
import { PrismaClient } from '@prisma/client';



const PORT = config.app.PORT;
const prisma = new PrismaClient();

prisma.$connect().then(()=>{

    app.listen(PORT, () => console.log("Server is running jeje juas "));
})
