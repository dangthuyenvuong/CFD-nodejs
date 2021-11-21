const UserController = {
    login(req, res){
        
        res.json({
            login: true
        })
    },
    register(req, res){
        res.json({
            register: true
        })
    },
    update(req, res){
        res.json({
            update: true
        })
    }
}

export default UserController