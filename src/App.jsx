import { useState } from 'react'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Blade from './components/Blade'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import ResourceGroups from './pages/ResourceGroups'
import Settings from './pages/Settings'
import FileExplorer from './pages/FileExplorer'

function App() {
  const [openBlades, setOpenBlades] = useState([])
  const [darkMode, setDarkMode] = useState(true)

  const openBlade = (title) => {
    const pages = {
      Projects: Projects,
      About: About,
      "Resource Groups": ResourceGroups,
      Settings: Settings,
      Explorer: FileExplorer
    }
    setOpenBlades([...openBlades, { title, Component: pages[title] }])
  }

  const closeBlade = (index) => {
    setOpenBlades(openBlades.slice(0, index))
  }

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`${darkMode ? "bg-[#1b1b1b]" : "bg-gray-100"} text-white flex flex-col h-screen`}>
      <Topbar toggleTheme={toggleTheme} />
      <div className="flex flex-1 overflow-x-auto">
        <Sidebar openBlade={openBlade} />
        <div className="flex flex-1">
          <Blade title="Home" closeBlade={null}>
            <Home />
          </Blade>
          {openBlades.map((blade, index) => (
            <Blade key={index} title={blade.title} closeBlade={() => closeBlade(index)} >
              <blade.Component />
            </Blade>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

