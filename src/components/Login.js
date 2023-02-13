const Login = () => {
    return (
        <div className="container ">

            <div className="form-row">
                <div className="form-group col-md-8 " >
                    <label htmlFor="inputEmail4">Usuario</label>
                    <input type="text" className="form-control" id="inputUsuario" placeholder="Usuario" />
                </div>
            </div>

            <div className="form-row">
            <div className="form-group col-md-8">
                <label htmlFor="inputPassword4">Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-primary" >Login</button>
        </div>

        </div>


    )
}

export default Login