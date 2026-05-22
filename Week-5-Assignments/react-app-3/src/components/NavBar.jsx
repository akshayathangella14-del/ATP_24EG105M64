function NavBar() {
  return (
    <div className="flex justify-between gap-6 px-7 py-4 bg-gray-800  text-white">
      <h1 className="text-2xl font-bold">LOGO</h1>
      <ul className="flex gap-5">
        <li>Home</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul>
    </div>
  )
}

export default NavBar;