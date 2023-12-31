import './App.css'
import ThaiForm from './components/ThaiForm'
import DataList from './components/ThaiData'

function App() {

  return (
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Upload Your Image</h1>
                    <div className="mb-4">
                        <ThaiForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        <DataList/>
                    </div>
                </div>
            </div>
  )
}

export default App
