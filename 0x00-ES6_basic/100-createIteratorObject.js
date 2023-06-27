export default function createIteratorObject(report) {
    const employees = [];
    
    for (const emplys of Object.values(report.allEmployees)) {
        employees.push(...emplys);
    }
    
    return employees;
}
  