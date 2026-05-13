function UserCounter(props) {
    const {count}=props
    return (
    <div className="text-center p-10">
      <h1 className="text-5xl">UserCount: {count}</h1>
    </div>
  );
}
export default UserCounter;
