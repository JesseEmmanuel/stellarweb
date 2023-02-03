// import { useDispatch } from "react-redux";
// import { useAuth } from "../../contexts/Auth";


const User = ({ user }) => {
    // const dispatch = useDispatch()
    // const { token } = useAuth()
return (
    <div className="col">
        <div className="card h-100">
            <img className="card-img-top" src={process.env.PUBLIC_URL+ "/assets/img/activestar-v2.png" }
                alt="Card image cap" />
            <div className="card-body">
                <div className="d-flex justify-content-center mb-2">
                    <img src={process.env.PUBLIC_URL+ "/assets/img/profile.png" } alt
                        className="w-px-40 h-auto rounded-circle" />
                </div>
                <a href="#">
                    <div className="d-flex justify-content-center">
                        <span className="badge bg-warning">
                            { user.firstName } <br />
                        </span>
                    </div>
                </a>
            </div>
        </div>
    </div>
);

}

export default User