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