
import { useState } from "react";
import schemaData from "../data/schema-data";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Warehouse Schema Viewer</h1>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">📂 Categories</h2>
          <ul>
            {schemaData.categories.map((category) => (
              <li key={category.id} className={`cursor-pointer p-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200 ${selectedCategory === category.id ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`} onClick={() => setSelectedCategory(category.id)}>
                {category.name_en} ({category.name})
              </li>
            ))}
          </ul>
        </div>

        {selectedCategory && (
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">📋 Tables</h2>
            <ul>
              {schemaData.tables.filter((table) => table.category === selectedCategory).map((table) => (
                <li key={table.id} className={`cursor-pointer p-3 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200 ${selectedTable === table.id ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"}`} onClick={() => setSelectedTable(table.id)}>
                  {table.name_en} ({table.name})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {selectedTable && (
        <div className="mt-6 p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">📑 Table Details</h2>
          <table className="w-full border-collapse border border-gray-300 text-center">
            <thead>
              <tr className="bg-blue-200">
                <th className="border border-gray-300 p-3">Column</th>
                <th className="border border-gray-300 p-3">Type</th>
                <th className="border border-gray-300 p-3">Primary Key</th>
              </tr>
            </thead>
            <tbody>
              {schemaData.tables.find((table) => table.id === selectedTable).columns.map((column, index) => (
                <tr key={index} className="border border-gray-300 hover:bg-gray-100">
                  <td className="p-3">{column.name_en} ({column.name})</td>
                  <td className="p-3">{column.type}</td>
                  <td className="p-3">{column.primaryKey ? "✅" : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}