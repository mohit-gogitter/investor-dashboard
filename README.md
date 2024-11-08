# Prequin Takehome Assessment - Mohit Singh
## <ins>Instructions</ins>

### InvestorDashboard App
InvestorDashboard is a full-stack application designed to manage investor information and commitments, built using a microservices architecture. This app uses a **PostgreSQL** database for data storage, **.NET Core Web API** for backend services, and **React with Tailwind CSS** for the frontend.

### Table of Contents
- [Prerequisites](doc:Prerequisites)
- Project Structure
- Database Setup
- Backend Services Setup
- Front End Setup
- Running the Application

### 1. Prerequisites
Ensure you have following installed on your system:
- [PostgresSQL](https://www.postgresql.org/download/)
- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download)
- [Node.js(v14 or above)](https://nodejs.org/en/download/prebuilt-installer)
- [npm] -- *this will be downlaoded along with Node.js installation*

### 2. Project Strucutre
This code base contains two main folder viz. **Prequin.Microservices/** (contains all the backend microservices) and a **Client/** folder (contains the front end application *investor-dashboard*).
Inside the Preqin.Micrservices folder, there are 2 indepenedent services build using .NET Core Web API i.e. **InvsestorService** and **CommitmentService**.

### 3. Database Setup
1. Inititalize Postgres SQL Database
      - Open Postgres using PgAdmin tool and create a databse with name '**prequin**'
      - Execute the provided SQL queries to set up the necessary tables and insert data
          *Note: a detailed document with table creation and insert queries can be found [here]
        
2. Update the connection string in the **appsettings.json** file for both services (InvestorService and CommitmentService) to connect to your PostgreSQL instance: 
![Connection String Image](https://drive.google.com/file/d/1L6TGR2Bn_OaiJ2AP4uUKZ4ZFlCePxdfn/view?usp=sharing)
        
### 4. Backend Services Setup
The backend consists of two microservices: InvestorService and CommitmentService.
Steps to Build and Run the Services:
- Clone the Repository:
      git clone https://github.com/mohit-gogitter/prequin-assessment-mohit.git

  Once cloning in complete, navaigate to Microservices folder -
               cd Prequin.Microservices
- Navigate to each Service Directory and Restore Packages and build:
        For InvestorService:
                 cd InvestorService
                 dotnet restore
                 dotnet build
        For CommitmentService:
                 cd CommitmentService
                 dotnet restore
                 dotnet build
  - Run the Services: Run each service on <ins>separate terminals</ins>
        In Investor Service
                  dotnet run
        In CommitmentService
                  dotnet run
Both services should start successfully on their configured ports, accessible via endpoints defined in each service.
     
### 5. Front End Setup
1. Navigate to fontend directory from root:
     cd Client/investor-dashboard

2. Install Dependencies
     npm intall
   
3. Start the Application
     npm start
   
The frontend will start on http://localhost:3000.

### 6. Running the Application
- Start PostgreSQL Database.
- Start InvestorService and CommitmentService (see Backend Services Setup).
- Start the Frontend Application (see Frontend Setup).
Now you should have a fully functional InvestorDashboard application running locally. Open your browser and go to http://localhost:3000 to interact with the application.


### Additional Notes
API Documentation for the backend services is available using Swagger at:
InvestorService: [here](http://localhost:5020/swagger)
CommitmentService: [here](http://localhost:5021/swagger/index.html)
