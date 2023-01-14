const User = require("../../models/users.model")
const Contact = require("../../models/Contact.model")
const Question = require("../../models/Question.model")
const bcrypt = require("bcryptjs")
const nodemailer = require("nodemailer")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT, {
        expiresIn: '3d',
    })
}
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "harisharry232@gmail.com",
        pass: "vxsehcaeacrcopzh"
    },
    tls: {
        rejectUnauthorized: false
    }
})
const validateEmail = (Email) => {
    return String(Email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
exports.register = async(req, res, next) => {
    try {
        let payload = req.body;
        console.log("payload",payload);
        console.log("req.files",req.files[0]);
        console.log("req.file",req.file);
        console.log("req.filename",req.filename);
        if (req.files)
            for (const key in req.files) {
                let image = req.files[key][0];
                console.log("payload image",image);
                payload[`${key}`] = image.filename;
            }
        let Name = payload.Name;
        let Email = payload.Email;
        let Password = payload.Password;
        let image = payload.image;
        let base = path.parse(image).base;
        console.log("base...",base); //python.exe
        image = base;
        // console.log(image);
        if (!Name || !Email || !Password) {
            res.json("Please add all fields")
        }
        if (Password.length < 8) {
            return res.status(400).send({ status: false, message: "Password should be at least 8 characters!" })
        }
        if (!validateEmail(Email)) {
            return res.status(400).send({ status: false, message: "Please enter valid email" })
        }
        const userExists = await User.findOne({ Email })
        if (userExists) {
            res.json("Gmail already Exists")
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(Password, salt)
        console.log("hashPassword",hashPassword)
        const user = await User.create({
            Name,
            Email,
            image,
            Password: hashPassword,
            emailToken: crypto.randomBytes(64).toString('hex'),
            isVerified: false
        })
         console.log("user...", user)
        if (user) {
            res.status(201).json({
                _id: user.id,
                Name: user.Name,
                Email: user.Email,
                image:user.image,
                token: generateToken(user._id)
            })
        } else {
            res.json("Invalid Data")
        }
        var mailOption = {
            from: '"Verify your email" <harisharry232@gmail.com>',
            to: user.Email,
            subject: 'E-HELP Verify your email',
            html: `<h2>${user.Name}! Thank you for registering on E-HELP</h2>
            <h4>Please Verify your email to continue...</h4>
            <a href="http://${req.headers.host}/v1/front/auth/verify-email?token=${user.emailToken}">Verify Your Email</a>`
        }
        console.log(req.headers.host);
        transporter.sendMail(mailOption, function(error) {
            if (error) {
                console.log(error)
            } else {
                console.log('A Verification Link has been sent to your Respected email');
            }
        })
    } catch (error) {
        console.log(error);
        return next(error);
    }
};
exports.verify = async(req, res) => {
    try {
        const token = req.query.token;
        // const token = req.headers.token
        console.log("token",token)
        const user = await User.findOne({ emailToken: token })
        console.log("user",user)
        if (user) {
            user.emailToken = null;
            user.isVerified = true;
            await user.save();
            res.json("User is Verified")
        } else {
            res.json("User is not Verified Please verify First")
        }
    } catch (error) {
        console.log(error);
    }
}
exports.login = async(req, res) => {
    try {
        const { Email, Password } = req.body;
        const user = await User.findOne({ Email })
        if (user && (await bcrypt.compare(Password, user.Password)) && user.isVerified) {
            res.json({
                _id: user.id,
                Name: user.Name,
                Email: user.Email,
                token: generateToken(user._id)
            })
        }
        if (!user) {
            return res.status(400).json({ msg: 'Email or password incorrect' })
        } else {
            res.json("You are not verified")
        }
        const isMatch = await bcrypt.compare(Password, user.Password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Email or password incorrect' });
        }
    } catch (error) {
        console.log(error);
    }

}
exports.contact = async(req, res) => {
    try {
        const { Name, Email, Message } = req.body;
        if (!Message) {
            console.log("not message")
            return res.status(400).send({ status: false, message: "Message should be at least 20 characters!" })
        }
        if (Message.length < 20) {
            return res.status(400).send({ status: false, message: "Message should be at least 20 characters!" })
        }
         else {
            const contact = await Contact.create({
                Name,
                Email,
                Message,
            })    
        }
        
    } catch (error) {
        console.log(error);
    }
}
exports.question = async(req, res) => {
    try {
        const { createdBy, Title, Description } = req.body;
        const question = await Question.create({
            createdBy,
            Title,
            Description,
        })
        if (question) {
            res.status(201).json({
                _id: question.id,
                Title: question.Title,
                Description: question.Description,
            })
        } else {
            res.json("Invalid Data")
        }
    } catch (error) {
        console.log(error);
    }
}
exports.editProfile = async(req, res) => {
    try {
        const img = req.file.filename
        console.log(img);
    } catch (error) {
        console.log(error);

    }


}

// forgot password



// router.post("/sendpasswordlink",async(req,res)=>{
//     console.log(req.body)

//     const {email} = req.body;

//     if(!email){
//         res.status(401).json({status:401,message:"Enter Your Email"})
//     }

//     try {
//         const userfind = await userdb.findOne({email:email});

//         // token generate for reset password
//         const token = jwt.sign({_id:userfind._id},keysecret,{
//             expiresIn:"120s"
//         });
        
//         const setusertoken = await userdb.findByIdAndUpdate({_id:userfind._id},{verifytoken:token},{new:true});


//         if(setusertoken){
//             const mailOptions = {
//                 from:process.env.EMAIL,
//                 to:email,
//                 subject:"Sending Email For password Reset",
//                 text:`This Link Valid For 2 MINUTES http://localhost:3000/forgotpassword/${userfind.id}/${setusertoken.verifytoken}`
//             }

//             transporter.sendMail(mailOptions,(error,info)=>{
//                 if(error){
//                     console.log("error",error);
//                     res.status(401).json({status:401,message:"email not send"})
//                 }else{
//                     console.log("Email sent",info.response);
//                     res.status(201).json({status:201,message:"Email sent Succsfully"})
//                 }
//             })

//         }

//     } catch (error) {
//         res.status(401).json({status:401,message:"invalid user"})
//     }

// });


// // verify user for forgot password time
// router.get("/forgotpassword/:id/:token",async(req,res)=>{
//     const {id,token} = req.params;

//     try {
//         const validuser = await userdb.findOne({_id:id,verifytoken:token});
        
//         const verifyToken = jwt.verify(token,keysecret);

//         console.log(verifyToken)

//         if(validuser && verifyToken._id){
//             res.status(201).json({status:201,validuser})
//         }else{
//             res.status(401).json({status:401,message:"user not exist"})
//         }

//     } catch (error) {
//         res.status(401).json({status:401,error})
//     }
// });


// // change password

// router.post("/:id/:token",async(req,res)=>{
//     const {id,token} = req.params;

//     const {password} = req.body;

//     try {
//         const validuser = await userdb.findOne({_id:id,verifytoken:token});
        
//         const verifyToken = jwt.verify(token,keysecret);

//         if(validuser && verifyToken._id){
//             const newpassword = await bcrypt.hash(password,12);

//             const setnewuserpass = await userdb.findByIdAndUpdate({_id:id},{password:newpassword});

//             setnewuserpass.save();
//             res.status(201).json({status:201,setnewuserpass})

//         }else{
//             res.status(401).json({status:401,message:"user not exist"})
//         }
//     } catch (error) {
//         res.status(401).json({status:401,error})
//     }
// })

