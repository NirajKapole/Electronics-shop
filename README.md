# Electronics Shop - Full Stack Enterprise Learning Project

## Project Overview

This project is a full-stack Electronics Shop application built for learning:

* Angular frontend development
* ASP.NET Core Web API
* Entity Framework Core
* SQLite database integration
* Azure App Service deployment
* Dev/UAT/Prod environment deployments
* CI/CD and DevOps practices

The project is being developed on KodeKloud Playground using VS Code terminal.

---

# Tech Stack

| Layer           | Technology             |
| --------------- | ---------------------- |
| Frontend        | Angular                |
| Backend         | ASP.NET Core 8 Web API |
| ORM             | Entity Framework Core  |
| Database        | SQLite                 |
| Runtime         | Node.js 20             |
| Package Manager | npm                    |
| Hosting Goal    | Azure App Service      |

---

# Current Architecture

```text
Angular Frontend
      ↓
ASP.NET Core API
      ↓
Entity Framework Core
      ↓
SQLite Database
```

---

# Important Environment Setup

## Node Version

Angular was crashing with Node 24.

Stable working version:

```bash
node -v
v20.x.x
```

Use `nvm`:

```bash
nvm install 20
nvm use 20
```

---

# Project Structure

## Frontend

```text
frontend/electrical-supplies-ui
```

### Important Frontend Structure

```text
src/app/
 ├── features/
 │    └── products/
 │         ├── components/
 │         ├── pages/
 │         ├── models/
 │         └── services/
```

---

## Backend

```text
backend/ElectricalSupplies.API
```

### Backend Structure

```text
Controllers/
Data/
Models/
Migrations/
Program.cs
```

---

# Backend Setup

## Install EF Core Tool

```bash
dotnet tool install --global dotnet-ef
```

Add to PATH:

```bash
export PATH="$PATH:$HOME/.dotnet/tools"
```

Persist:

```bash
echo 'export PATH="$PATH:$HOME/.dotnet/tools"' >> ~/.bashrc
source ~/.bashrc
```

---

# Database Setup

## Remove Old Database

```bash
rm ElectricalSupplies.db
rm -rf Migrations
```

## Create Migration

```bash
dotnet ef migrations add InitialCreate
```

## Apply Migration

```bash
dotnet ef database update
```

---

# Run Backend

```bash
dotnet run --urls="http://127.0.0.1:5300"
```

API Base URL:

```text
http://127.0.0.1:5300/api/products
```

Test API:

```bash
curl http://127.0.0.1:5300/api/products
```

---

# Frontend Setup

## Install Dependencies

```bash
npm install
```

## Build Angular App

```bash
npm run build
```

## Run Static Server

```bash
npx http-server dist/electrical-supplies-ui/browser -p 4300
```

Frontend URL:

```text
http://127.0.0.1:4300
```

---

# CORS Configuration

CORS is configured in ASP.NET Core backend.

Example in `Program.cs`:

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy =>
        {
            policy.WithOrigins("http://localhost:4300")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

app.UseCors("AllowAngular");
```

---

# Product Model

## Backend Product Entity

```csharp
public class Product
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Category { get; set; } = string.Empty;

    public decimal Price { get; set; }

    public int StockQuantity { get; set; }

    public string Description { get; set; } = string.Empty;

    public string ImageUrl { get; set; } = string.Empty;
}
```

---

# Database Seeding

Seed data added in `Program.cs`.

Sample products:

* Gaming Laptop
* Mechanical Keyboard
* 4K Monitor

---

# Angular Product Model

File:

```text
src/app/features/products/models/product.ts
```

```typescript
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stockQuantity: number;
  description: string;
  imageUrl: string;
}
```

---

# Angular Product Service

File:

```text
src/app/features/products/services/product.service.ts
```

```typescript
private apiUrl = 'http://localhost:5300/api/products';
```

---

# Current Completed Features

## Backend

* ASP.NET Core API
* Products Controller
* SQLite Integration
* EF Core Migrations
* Product CRUD foundation
* Database Seeding

## Frontend

* Angular setup
* Product service
* Product listing UI
* Product card component
* Product list page
* API integration

---

# Common Issues & Fixes

## Angular Segmentation Fault

Cause:

* Node 24 incompatibility

Fix:

```bash
nvm use 20
```

---

## Port Already In Use

Kill process:

```bash
fuser -k 4300/tcp
fuser -k 5300/tcp
```

---

## dotnet ef Not Found

Install:

```bash
dotnet tool install --global dotnet-ef
```

---

## SQLite Schema Mismatch

Reset DB:

```bash
rm ElectricalSupplies.db
rm -rf Migrations
dotnet ef migrations add InitialCreate
dotnet ef database update
```

---

# Next Planned Features

## Frontend

* Angular Routing
* Product Details Page
* Add Product Form
* Cart System
* Checkout Flow
* Navbar
* Environment Configurations

## Backend

* DTOs
* Repository Pattern
* Service Layer
* Validation
* Logging
* Global Exception Handling

## DevOps

* Dockerfiles
* docker-compose
* Azure App Service Deployment
* Deployment Slots
* CI/CD Pipelines
* Dev/UAT/Prod Environments
* Blue-Green Deployment

---

# Recommended Stable Stack

| Component    | Version |
| ------------ | ------- |
| Node.js      | 20 LTS  |
| Angular      | 18/19   |
| ASP.NET Core | 8       |
| SQLite       | Latest  |

---

# Useful Commands

## Backend

```bash
dotnet run --urls="http://127.0.0.1:5300"
```

## Frontend Build

```bash
npm run build
```

## Frontend Serve

```bash
npx http-server dist/electrical-supplies-ui/browser -p 4300
```

## API Test

```bash
curl http://127.0.0.1:5300/api/products
```

---

# Learning Goals

This project is intended to teach:

* Full-stack development
* Enterprise Angular architecture
* ASP.NET Core APIs
* Database migrations
* Environment management
* Azure deployments
* DevOps workflows
* CI/CD pipelines
* Cloud-native architecture

---
