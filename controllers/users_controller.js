const User = require('../models/user')

// render signUp page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Placement Cell | Sign Up"
    })
}

// render signIn page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in',{
        title: "Placement Cell | Sing IN"
    })
}

// get the sing up data
module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email})
    .then( user=>{
        if(!user){
            User.create(req.body)
            .then((user)=>{
                return res.redirect('/users/sign-in');
            })
            .catch(err =>{
                if(err){console.log('error in creating user while singning up'); return}
                return res.redirect('back');

            })
        }else{
            console.log('User is alredy present please sing IN');
            return res.redirect('back');
        }  
    })
    .catch(err =>{
        console.log('error in finding user in singing up', err);
        return res.redirect('back');
    })
}


// sing in and create session for the user
module.exports.createSession = function(req, res){
    // todo later
}