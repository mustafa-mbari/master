
import { useState } from "react";
import schemaData from "../data/schema-data";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Warehouse Schema Viewer</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul>
            {schemaData.categories.map((category) => (
              <li key={category.id} className={`cursor-pointer p-2 rounded-md hover:bg-gray-200 ${selectedCategory === category.id ? "bg-blue-500 text-white" : ""}`} onClick={() => setSelectedCategory(category.id)}>
                {category.name_en} ({category.name})
              </li>
            ))}
          </ul>
        </div>

        {selectedCategory && (
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Tables</h2>
            <ul>
              {schemaData.tables.filter((table) => table.category === selectedCategory).map((table) => (
                <li key={table.id} className={`cursor-pointer p-2 rounded-md hover:bg-gray-200 ${selectedTable === table.id ? "bg-green-500 text-white" : ""}`} onClick={() => setSelectedTable(table.id)}>
                  {table.name_en} ({table.name})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {selectedTable && (
        <div className="mt-6 p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Table Details</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Column</th>
                <th className="border border-gray-300 p-2">Type</th>
                <th className="border border-gray-300 p-2">Primary Key</th>
              </tr>
            </thead>
            <tbody>
              {schemaData.tables.find((table) => table.id === selectedTable).columns.map((column, index) => (
                <tr key={index} className="border border-gray-300">
                  <td className="p-2">{column.name_en} ({column.name})</td>
                  <td className="p-2">{column.type}</td>
                  <td className="p-2 text-center">{column.primaryKey ? "✔️" : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}