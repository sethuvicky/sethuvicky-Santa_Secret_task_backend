function generateAssignmentsLogic(employees, lastYearAssignments) {
  const previousAssignments = new Map(
    lastYearAssignments.map((assignment) => [
      assignment.Employee_EmailID,
      assignment.Secret_Child_EmailID,
    ])
  );

  const availableRecipients = employees.map((e) => e.Employee_EmailID);
  const assignments = [];

  for (const employee of employees) {
    const possibleRecipients = availableRecipients.filter(
      (email) =>
        email !== employee.Employee_EmailID &&
        previousAssignments.get(employee.Employee_EmailID) !== email
    );

    if (possibleRecipients.length === 0) {
      throw new Error("No valid assignments possible due to constraints.");
    }

    const recipient =
      possibleRecipients[Math.floor(Math.random() * possibleRecipients.length)];
    assignments.push({
      Employee_Name: employee.Employee_Name,
      Employee_EmailID: employee.Employee_EmailID,
      Secret_Child_Name: employees.find((e) => e.Employee_EmailID === recipient)
        .Employee_Name,
      Secret_Child_EmailID: recipient,
    });

    // Remove the assigned recipient from available list
    availableRecipients.splice(availableRecipients.indexOf(recipient), 1);
  }

  return assignments;
}

module.exports = { generateAssignmentsLogic };
