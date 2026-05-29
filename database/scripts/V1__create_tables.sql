CREATE TABLE Products (
    ProductId INT PRIMARY KEY IDENTITY(1,1),
    ProductName NVARCHAR(200) NOT NULL,
    Category NVARCHAR(100),
    Quantity INT,
    UnitPrice DECIMAL(18,2),
    SupplierName NVARCHAR(200),
    CreatedAt DATETIME DEFAULT GETDATE()
);