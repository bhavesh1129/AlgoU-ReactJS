import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Table from "./components/Table"

function App() {
  const items = ["A", "B", "C", "D", "E", "F"];

  // const name = "Everyone"
  return (
    <div>
      <Navbar />
      <Table items={items} heading="Dynamic Lists" />
      <Footer />
      {/* <h2>Hello {world}</h2> */}
      {/* <h1 className="text-2xl font-bold text-yellow-300">Hello world</h1> */}

    </div>
  )
}

export default App
