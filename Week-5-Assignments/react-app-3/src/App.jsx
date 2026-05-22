import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import UsersList from "./components/UsersList"

function App() {
  console.log("App rendered")
  return (
    <div>
      <NavBar />
      <div className="m-16 min-h-screen">
        <UsersList />
      </div>
      <Footer />
    </div>
  )
}

export default App;