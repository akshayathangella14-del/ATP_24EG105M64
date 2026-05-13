import {useState,useEffect} from 'react';
function Users(props) {
    const {onAddUser}=props
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let usersList = await res.json();
        setUsers(usersList);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) 
    return <p>Loading...</p>;
  if (error) 
    return <p>{error.message}</p>;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
      {users.map(userObj => (
        <div
          className="text-center p-4 shadow-2xl rounded-3xl bg-gradient-to-r from-purple-200 to-indigo-100"
          key={userObj.id}
        >
          <h2 className="text-xl font-bold text-purple-900 font-serif">{userObj.name}</h2>
          <p><b>Email:</b> {userObj.email}</p>
          <p><b>Phone:</b> {userObj.phone}</p>
          <p><b>Website:</b> {userObj.website}</p>
          <button
            onClick={onAddUser}
            className="p-2 mt-2 bg-purple-600 rounded text-white"
          >
            Add User
          </button>
        </div>
      ))}
    </div>
  );
}

export default Users;
