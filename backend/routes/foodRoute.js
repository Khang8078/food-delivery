import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from "multer"

const foodRouter = express.Router();


//image storage engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload  = multer({storage: storage})

foodRouter.post("/add", upload.single("image"), addFood);

//When using thunder client, if get error
//Error: write EPROTO 34557064:error:100000f7:SSL routines:OPENSSL_internal:WRONG_VERSION_NUMBER
//solution: https://stackoverflow.com/questions/62658941/error-write-eproto-34557064error100000f7ssl-routinesopenssl-internalwrong

foodRouter.get("/list", listFood)
foodRouter.post("/remove", removeFood)


export default foodRouter;