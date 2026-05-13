function User(props){
    let {userObj}=props
    return(
        <div className="text-center p-1 shadow-2xl rounded-3xl - bg-gradient-to-r from-gray-400 to-gray-100">
            
            <img className="block mx-auto rounded-2xl my-4" src={userObj.image} alt="Image not found" />
            <h2 className="text-2xl font-semibold">{userObj.name}</h2>
            <p className="text-slate-700">{userObj.email}</p>
            <button className="bg-gray-900 m-3 px-3 py-1 rounded-2xl text-white">Profile</button>
        </div>
    )
}
export default User;