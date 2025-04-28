import { useState } from 'react'

const fileSystem = {
  'Documents': ['Resume.pdf', 'CoverLetter.docx'],
  'Pictures': ['Vacation.jpg', 'Logo.png'],
  'Projects': ['AzurePortalClone', 'LandingPage']
}

function FileExplorer() {
  const [selectedFolder, setSelectedFolder] = useState(null)

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Explorer</h3>
      <div className="flex gap-8">
        <div className="w-1/3">
          {Object.keys(fileSystem).map(folder => (
            <div key={folder} className="p-2 cursor-pointer hover:bg-[#333]" onClick={() => setSelectedFolder(folder)}>
              📁 {folder}
            </div>
          ))}
        </div>
        <div className="flex-1">
          {selectedFolder ? (
            <div>
              <h4 className="font-semibold mb-2">{selectedFolder}</h4>
              <ul className="space-y-2">
                {fileSystem[selectedFolder].map((file, index) => (
                  <li key={index} className="pl-4">📄 {file}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-gray-500">Select a folder to view contents</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default FileExplorer
