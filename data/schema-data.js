const schemaData = {
  categories: [
    {
      id: "inventory_management",
      name: "إدارة المخزون",
      name_en: "Inventory Management",
      description: "إدارة المخزون والمواقع والحركات",
      description_en: "Managing inventory, locations and movements",
      tables: ["inventory", "locations", "inventory_movements"]
    }
  ],
  tables: [
    {
      id: "inventory",
      name: "المخزون",
      name_en: "Inventory",
      category: "inventory_management",
      description: "سجلات المخزون الحالي",
      description_en: "Current inventory records",
      columns: [
        { name: "رقم المخزون", name_en: "inventory_id", type: "رقم", primaryKey: true },
        { name: "رقم المنتج", name_en: "product_id", type: "رقم", foreignKey: "products" },
        { name: "رقم الموقع", name_en: "location_id", type: "رقم", foreignKey: "locations" },
        { name: "الكمية", name_en: "quantity", type: "عدد" },
        { name: "وحدة القياس", name_en: "uom", type: "نص" },
        { name: "تاريخ آخر تحديث", name_en: "last_updated", type: "تاريخ ووقت" }
      ]
    }
  ]
};

export default schemaData;