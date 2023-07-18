import React from 'react';



function Login({ handlelogin }) {
  return (
    <div className=" justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="mb-5">Giriş Yapınız..</h1>
        <button className="btn btn-danger btn-lg"  onClick={handlelogin}>Giriş Yap</button>
      </div>
    </div>
  );
}

export default Login;
