/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type TemperatureReading = {
	time: string;
	temperature: number;
};

const temperatureReadings: TemperatureReading[] = [
	{ time: "08:00", temperature: 24.5 },
	{ time: "09:00", temperature: 25.1 },
	{ time: "10:00", temperature: 26.8 },
	{ time: "11:00", temperature: 28.4 },
	{ time: "12:00", temperature: 30.2 },
	{ time: "13:00", temperature: 31.1 },
	{ time: "14:00", temperature: 30.7 },
	{ time: "15:00", temperature: 29.3 },
];

console.log(temperatureReadings);