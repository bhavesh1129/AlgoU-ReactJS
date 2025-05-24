import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Table from "./components/Table"

/**
 * App Component
 * The main component that renders the entire application
 * It combines the Navbar, Table, and Footer components
 */
function App() {
  // Sample data array (not currently used by Table component)
  // The Table component fetches its own data from an API
  const items = ["A", "B", "C", "D", "E", "F"];

  // const name = "Everyone"
  return (
    <div>
      {/* Navigation bar at the top */}
      <Navbar />
      
      {/* Main content area with table of posts */}
      <Table items={items} heading="Dynamic Lists" />
      
      {/* Footer at the bottom */}
      <Footer />
      {/* <h2>Hello {world}</h2> */}
      {/* <h1 className="text-2xl font-bold text-yellow-300">Hello world</h1> */}

    </div>
  )
}

export default App
