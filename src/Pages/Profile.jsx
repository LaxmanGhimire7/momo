import { useAuth0 } from "@auth0/auth0-react";

function Profile() {

    const { user, logout , isAuthenticated} = useAuth0();
    return (
        <>
            <div>
                {isAuthenticated ?
                    <div className=" p-5 gap-6 mt-48 w-[450px] m-auto flex shadow-2xl shadow-gray-600 rounded-2xl">
                        <img className="h-24" src={user.picture} alt="" />
                        <div>
                            <h1>Name: {user.name}</h1>
                            <h1>Email: {user.email}</h1>

                            <button onClick={()=>{
                                logout();
                            }} className="mt-8 bg-red-700 rounded-3xl p-2 text-white text-center w-32">Logout</button>
                        </div>
                    </div> :
                    <div>
                        Loading.....
                    </div>}
            </div>
        </>
    )
}

export default Profile
