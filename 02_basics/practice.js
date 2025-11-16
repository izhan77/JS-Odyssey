const users = [
  { id: 1, name: "John", age: 25, active: true },
  { id: 2, name: "Jane", age: 17, active: true },
  { id: 3, name: "Bob", age: 30, active: false },
  { id: 4, name: "Alice", age: 22, active: true },
];

// Get: Array of names of active users who are 18 or older

const userNames = users.filter(
  (user) => user.active === true && user.age >= 18
);

console.log(userNames);

/*--------------------------------------*/

const transactions = [
  { id: 1, amount: 150, type: "debit" },
  { id: 2, amount: 200, type: "credit" },
  { id: 3, amount: 50, type: "debit" },
  { id: 4, amount: 300, type: "credit" },
];

// Calculate: Total credit, total debit, and net balance

const totalCredit = transactions.reduce((acc, transaction) => {
  if (transaction.type === "credit") {
    acc += transaction.amount;
  }
  return acc;
}, 0);

console.log(`Total Credit: ${totalCredit}`);

const totalDebit = transactions.reduce((acc, transaction) => {
  if (transaction.type === "debit") {
    acc += transaction.amount;
  }
  return acc;
}, 0);

console.log(`Total Debit: ${totalDebit}`);
console.log(`Net Balance: ${totalCredit - totalDebit}`);

/*--------------------------------------*/

const departments = [
  {
    name: "Engineering",
    employees: [
      { name: "John", salary: 50000 },
      { name: "Jane", salary: 60000 },
    ],
  },
  {
    name: "Marketing",
    employees: [
      { name: "Bob", salary: 45000 },
      { name: "Alice", salary: 55000 },
    ],
  },
];

// Get: Array of all employee names with their department

const departmentData = departments.map((department) => {
    return {
    'Department Name': department.name,
    'Employees': department.employees.map((employee) => employee.name)
    }
})

console.log(departmentData)

/*--------------------------------------*/

const orders = [
  { customer: "John", items: ["book", "pen"], total: 25 },
  { customer: "Jane", items: ["notebook"], total: 15 },
  { customer: "John", items: ["pencil", "eraser"], total: 10 },
  { customer: "Bob", items: ["book", "ruler"], total: 30 }
];

// Create: Object with customer names as keys and their total spending as values

const customers = orders.reduce((acc,order) => {
    acc[order.customer] = (acc[order.customer] || 0) + order.total;
    return acc;
}, {})

console.log(customers)

/*--------------------------------------*/

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Tasks:
// - Transpose the matrix (rows become columns)
// - Calculate sum of each row
// - Calculate sum of each column

/*--------------------------------------*/

const students = [
  { name: "John", grades: [85, 90, 78], attendance: 0.9 },
  { name: "Jane", grades: [92, 88, 95], attendance: 0.8 },
  { name: "Bob", grades: [70, 75, 80], attendance: 0.95 }
];

// Calculate for each student:
// - Average grade
// - Final score (average grade * attendance)
// - Pass/Fail (pass if final score >= 80)

const averageGrade = students.map((student) => {
    const length = student.grades.length;
    const totalGrades = student.grades.reduce((sum,grade) => {
        sum += grade;
        return sum;
    }, 0)

    const avg = totalGrades/length;
    const finalScore = avg * student.attendance

    return {
        [student.name]: `Average Grade: ${avg.toFixed(1)}`,
        Final_Score: finalScore.toFixed(1),
        'Status': finalScore >= 80 ? 'Pass' : 'Fail'
    }
})

console.log(averageGrade)

// Also find:
// - Class average
// - Top performing student
// - Students who need improvement