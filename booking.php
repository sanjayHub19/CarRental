<?php
	// connect to the database
	$conn = mysqli_connect('localhost', 'username', 'password', 'database_name');

	// get the car selected by the agency
	$car = $_GET['car'];

	// query to get the list of customers who have booked the selected car
	$sql = "SELECT customers.name, customers.email, bookings.start_date, bookings.num_days FROM bookings INNER JOIN customers ON bookings.customer_id = customers.id WHERE bookings.vehicle_number = '".$car."'";

	// execute the query
	$result = mysqli_query($conn, $sql);

	// generate the HTML table
	echo '<table>';
	echo '<tr><th>Name</th><th>Email</th><th>Start Date</th><th>Number of Days</th></tr>';
	while ($row = mysqli_fetch_assoc($result)) {
		echo '<tr>';
		echo '<td>'.$row['name'].'</td>';
	
