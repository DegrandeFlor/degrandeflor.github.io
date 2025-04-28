import { useState } from 'react'

function SettingsBlade() {
  const [darkMode, setDarkMode] = useState(true)
  const [username, setUsername] = useState('John Doe')

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  return (
    <div className="bg-[#252525] p-6 rounded-lg shadow-lg w-72 text-white">
      <h2 className="text-xl mb-4">Settings</h2>

      {/* Dark Mode Toggle */}
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={handleDarkModeToggle}
          className="mr-2"
        />
        <label>Dark Mode</label>
      </div>

      {/* Username Input */}
      <div className="mb-4">
        <label className="block mb-2">Username</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="w-full p-2 bg-[#333] rounded-md"
        />
      </div>

      {/* Save Button */}
      <button
        onClick={() => alert('Settings saved!')}
        className="w-full p-2 bg-[#4CAF50] rounded-md mt-4"
      >
        Save Settings
      </button>
    </div>
  )
}

export default SettingsBlade
