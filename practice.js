const products = [
  { id: 1, name: "Laptop", category: "electronics", price: 1000, stock: 5 },
  { id: 2, name: "Mouse", category: "electronics", price: 50, stock: 20 },
  { id: 3, name: "Desk", category: "furniture", price: 300, stock: 8 },
  { id: 4, name: "Chair", category: "furniture", price: 150, stock: 0 },
  { id: 5, name: "Monitor", category: "electronics", price: 400, stock: 3 }
];

const sales = [
  { productId: 1, quantity: 2, date: "2024-01-01" },
  { productId: 2, quantity: 5, date: "2024-01-01" },
  { productId: 1, quantity: 1, date: "2024-01-02" },
  { productId: 3, quantity: 1, date: "2024-01-02" }
];

let totalRevenue = 0;
for (const sale of sales) {
    const product = products.find(p => p.id === sale.productId);

    if (product){
        totalRevenue += product.price * sale.quantity;
    }
}

console.log('Total Revenue : ' + totalRevenue);