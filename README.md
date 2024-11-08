# Prequin Takehome Assessment - Mohit Singh
## <ins>Instructions</ins>

### InvestorDashboard App
InvestorDashboard is a full-stack application designed to manage investor information and commitments, built using a microservices architecture. This app uses a **PostgreSQL** database for data storage, **.NET Core Web API** for backend services, and **React with Tailwind CSS** for the frontend.

### Table of Contents
1. Prerequisites
2. Project Structure
3. Database Setup
4. Backend Services Setup
5. Front End Setup
6. Running the Application

### 1. Prerequisites
Ensure you have following installed on your system:
- [PostgresSQL](https://www.postgresql.org/download/)
- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download)
- [Node.js(v14 or above)](https://nodejs.org/en/download/prebuilt-installer)
- npm -- *this will be downlaoded along with Node.js installation*

### 2. Project Strucutre
This code base contains two main folder viz. **Prequin.Microservices/** (contains all the backend microservices) and a **Client/** folder (contains the front end application *investor-dashboard*).<br/>
Inside the Preqin.Micrservices folder, there are 2 indepenedent services build using .NET Core Web API i.e. **InvsestorService** and **CommitmentService**.

### 3. Database Setup
1. Inititalize Postgres SQL Database
      - Open Postgres using **PgAdmin** tool and create a databse with name '**prequin**'
      - Execute the provided SQL queries to set up the necessary tables and insert data<br/>
          _**Note**: A detailed document with table creation and insert queries can be found [here](https://docs.google.com/document/d/1FoQgkdzTB00caN_REpJYy9i4JpH2i49S/edit?usp=drive_link&ouid=105944540482385202029&rtpof=true&sd=true)._
The DB Structure should look like this:<br/>

![db_image](https://drive.google.com/uc?export=view&id=1KpmkAMBKiX1WI24ofz4ixar4tZVfRyIa)
        
2. Update the connection string in the **appsettings.json** file for both services (InvestorService and CommitmentService) to connect to your PostgreSQL instance:<br/> 
![connection_string_image](https://drive.google.com/uc?export=view&id=1L6TGR2Bn_OaiJ2AP4uUKZ4ZFlCePxdfn)
        
### 4. Backend Services Setup
The backend consists of two microservices: InvestorService and CommitmentService.
Steps to Build and Run the Services:
- Clone the Repository:<br/>
```git clone https://github.com/mohit-gogitter/prequin-assessment-mohit.git```

  Once cloning in complete, navaigate to **Prequin.Microservices/** folder - <br/>
  ```cd Prequin.Microservices```
  
- Navigate to each Service Directory and Restore Packages and build:
  - For InvestorService:<br/>
                 ```cd InvestorService```<br/>
                 ```dotnet restore```<br/>
                 ```dotnet build```
  - For CommitmentService:<br/>
                 ```cd CommitmentService```<br/>
                 ```dotnet restore```<br/>
                 ```dotnet build```
- Run the Services: Run each service on <ins>**separate terminals**</ins>
  - In Investor Service<br/>
                  ```dotnet run```
  - In CommitmentService<br/>
                  ```dotnet run```<br/>
_Both services should start successfully on their configured ports, accessible via endpoints defined in each service._
     
### 5. Front End Setup
- Navigate to fontend directory from root:<br/>
     ```cd Client/investor-dashboard```
- Install Dependencies:<br/>
     ```npm intall```
- Start the Application:<br/>
     ```npm start```<br/>
_**The frontend will start on http://localhost:3000.**_

### 6. Running the Application
- Start PostgreSQL Database.
- Start InvestorService and CommitmentService (see Backend Services Setup).
- Start the Frontend Application (see Frontend Setup).
Now you should have a fully functional InvestorDashboard application running locally. Open your browser and go to http://localhost:3000 to interact with the application.


### Additional Notes
API Documentation for the backend services is available using Swagger at:
**InvestorService**: [here](http://localhost:5020/swagger)
**CommitmentService**: [here](http://localhost:5021/swagger/index.html)
