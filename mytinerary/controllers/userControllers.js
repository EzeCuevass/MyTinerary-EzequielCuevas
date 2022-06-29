const User = require("../models/modelUser")
const bcryptjs = require("bcryptjs")


const userControllers = {
    signUpUsers: async (req, res) => {
        let { fullname, email, password, from } = req.body.userData
        const test = req.body.test
        try {
            const userExists = await User.findOne({emal})
            if (userExists){
                if (userExists.from.indexOf(from) !== -1) {
                res.json({
                    success: false,
                    from: "signup",
                    message: "You have done your sign up in this way, please sign in"
                })
                } else {
                    const hashedpass = bcryptjs.hashSync(password, 10)
                    
                    userExists.from.push(from)
                    userExists.password.push(hashedpass)
                    res.json({
                        success: true, 
                        from: "signup",
                        message: "We added " + from + "to your medias to sign in"
                    })
                }
            } else {
                const hashedpass = bcryptjs.hashSync(password, 10)
                const newUser = await new User({
                    fullname,
                    email,
                    password: [hashedpass],
                    uniqueString: crypto.randomBytes(15).toString("hex"),
                    emailverified: false,
                    from: [from],
                })
                if (from !== "form-signup") {
                    await newUser.save()
                    res.json({
                        success: true,
                        from: "signup",
                        message: "Congratulations! Your user has been created with " + from
                    })
                } else {
                    await newUser.save()
                    res.json({
                        success: true,
                        from: "signup",
                        message: "We sent you a validation email, please verify your email"
                    })
                }
            }
        } catch (error) {
            res.json({success: false, message: "Something went wrong, try again in few minutes"})
        }
    },
    signInUser: async (req, res) => {
        const {email, password, from} = req.body.logedUser
        try{
            const userExists = await User.findOne({email})
            const indexpass = userExists.from.indexOf(from)
            if(!userExists){
                res.json({success: false, message: "Your user has not signed up"})
            } else {
                if (from !== "form-signup") {
                    let passmatch = userExists.password.filter(pass => bcryptjs.compareSync(password, pass))
                    if (passmatch.length > 0) {
                        const userData = {
                            id: userExists._id,
                            fullname: userExists.fullname,
                            email: userExists.email,
                            from: from,
                        }
                        await userExists.save()
                        res.json({
                            success: true,
                            from: from,
                            response: {userData},
                            message: "Welcome again " + userData.fullname,
                        })
                    } else {
                        res.json({
                            success: false, 
                            from: from,
                            message: "You didn´t signed up with " + from + ", if you want sign in with this method you have to sign up with " + from 
                        })
                    }
                } else {
                    if (passmatch.length > 0) {
                        const userData = {
                            id: userExists._id,
                            fullname: userExists.fullname,
                            email: userExists.email,
                            from: from,
                        }
                        await userExists.save()
                        res.json({
                            success: true,
                            from: from,
                            response: ( token, userData ),
                            message: "Welcome again " + userData.fullname, 
                        })
                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: "User or pass doesn´t match"
                        })
                    }
                    
                }
            }
        } catch (error){
            res.json({success: false, message: "Something went wrong, try again in few minutes"})
        }
    }
}
module.exports = userControllers