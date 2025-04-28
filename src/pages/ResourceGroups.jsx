const resourceGroups = [
    { name: "frontend-rg", location: "West Europe", status: "Running" },
    { name: "backend-rg", location: "East US", status: "Stopped" },
    { name: "data-rg", location: "North Europe", status: "Running" }
  ]
  
  function ResourceGroups() {
    return (
      <div className="space-y-4">
        {resourceGroups.map((rg, index) => (
          <div key={index} className="p-4 rounded-lg bg-[#2d2d2d] shadow hover:bg-[#3a3a3a] transition">
            <h3 className="text-lg font-bold">{rg.name}</h3>
            <p className="text-sm text-gray-400">{rg.location}</p>
            <span className={`text-xs mt-2 inline-block ${rg.status === 'Running' ? 'text-green-400' : 'text-red-400'}`}>
              {rg.status}
            </span>
          </div>
        ))}
      </div>
    )
  }
  
  export default ResourceGroups
  