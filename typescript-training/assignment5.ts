interface Employee {
  name: string;
  baseSalary: number;
  experience: number;
  rating: number;
}

const employees: Employee[] = [
  { name: "Alice Johnson", baseSalary: 75000.0, experience: 5.1, rating: 4.2 },
  { name: "Bob Smith", baseSalary: 68000.0, experience: 3.2, rating: 3.8 },
  { name: "Carol Davis", baseSalary: 82000.0, experience: 7.1, rating: 4.5 },
  { name: "David Brown", baseSalary: 90000.0, experience: 10.2, rating: 2.5 },
  { name: "Eva Green", baseSalary: 60000.0, experience: 2.4, rating: 3.5 }
];
function calculateHikePercentage(emp: Employee): number {
  let variablePayPercent: number = 0;
  let bonus: number = 0;

  if (emp.rating >= 4.0) {
    variablePayPercent = 15.0;
    bonus = 1500;
  } else if (emp.rating >= 3.0 && emp.rating < 4.0) {
    variablePayPercent = 10.0;
    bonus = 1200;
  } else {
    variablePayPercent = 3.0;
    bonus = 300;
  }

  // Extra reward for experience >= 5 years
  let reward: number = emp.experience >= 5 ? 5000 : 0;

  // Hike calculation
  const hike: number = (emp.baseSalary * (variablePayPercent / 100)) + bonus + reward;

  // Hike percentage relative to base salary
  return (hike / emp.baseSalary) * 100;
}

// Store results in a Map
const hikeMap: Map<string, number> = new Map();

for (const emp of employees) {
  const hikePercent = calculateHikePercentage(emp);
  hikeMap.set(emp.name, hikePercent);
}

// Print

hikeMap.forEach((hikePercent, name) => {
 console.log(`${name}: Hike Percentage = ${hikePercent}%`);
}
);
