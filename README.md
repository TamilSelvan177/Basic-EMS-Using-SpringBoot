# EMS Backend using Spring Boot

Backend application for the Employee Management System (EMS) built using Spring Boot.

## Features

- REST API for Employee Management
- Add Employee
- Update Employee
- Delete Employee
- Get Employee Details
- MySQL Database Integration
- Spring Data JPA

## Technologies Used

- Java
- Spring Boot
- Spring Data JPA
- MySQL
- Maven

## Project Structure

```text
src/main/java
 ├── controller
 ├── service
 ├── repository
 ├── entity
 └── EMSApplication.java
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/employees | Get all employees |
| GET | /api/employees/{id} | Get employee by ID |
| POST | /api/employees | Add employee |
| PUT | /api/employees/{id} | Update employee |
| DELETE | /api/employees/{id} | Delete employee |

## Database Configuration

Configure MySQL details in:

```text
src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ems
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```

## Run the Project

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/EMS-Backend-SpringBoot.git
```

### Run using Maven

```bash
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

## Tested Using

- Postman
- React Frontend

## Author

TamilSelvan