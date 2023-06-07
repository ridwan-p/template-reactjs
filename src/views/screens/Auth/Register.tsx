import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg'

export const Login = () => {
    return (
        <section className="section">
            <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ background: "url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')" }}>
                <div className="col-xl-3 col-lg-4 col-md-6 col-12 rounded" style={{ background: "linear-gradient(49deg, rgb(44 163 214 / 7%) 0%, rgb(105 25 226 / 12%) 100%)", boxShadow: "10px 10px 80px -17px rgba(0,0,0,0.25)" }}>
                    <div className="p-4 m-3">
                        <div className="text-center">
                            <img src={logo} alt="logo" width="80" className="my-2" />
                            <h4 className="text-dark font-weight-normal">Register to <span className="font-weight-bold">Yentric</span></h4>
                            <p className="text-muted">Before you get started, you must login or register if you don't already have an account.</p>
                        </div>
                        <form method="POST" action="#" className="needs-validation" noValidate>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input id="name" type="text" className="form-control" name="name" required autoFocus />
                                <div className="invalid-feedback">
                                    Please fill in your name
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" className="form-control" name="email" required autoFocus />
                                <div className="invalid-feedback">
                                    Please fill in your email
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="d-block">
                                    <label htmlFor="password" className="control-label">Password</label>
                                </div>
                                <input id="password" type="password" className="form-control" name="password" required />
                                <div className="invalid-feedback">
                                    please fill in your password
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="d-block">
                                    <label htmlFor="passwordConfirm" className="control-label">Password Confirmation</label>
                                </div>
                                <input id="passwordConfirm" type="password" className="form-control" name="passwordConfirm" required />
                                <div className="invalid-feedback">
                                    please fill in your password confirmation
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" name="agree" type="checkbox" id="agree" />
                                    <label className="form-check-label" htmlFor="agree">I agree with the terms and conditions</label>
                                </div>
                            </div>

                            <div className="form-group text-end">
                                <button type="submit" className="btn btn-primary">
                                    Register
                                </button>
                            </div>

                            <div className="mt-5 text-center">
                                Do have an account? <Link to="/login">Login</Link>
                            </div>
                        </form>

                        <div className="text-center mt-5 text-small">
                            Copyright &copy; Your Company. Made with 💙 by Yentric
                            <div className="mt-2">
                                <a href="#">Privacy Policy</a>
                                <div className="bullet"></div>
                                <a href="#">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login