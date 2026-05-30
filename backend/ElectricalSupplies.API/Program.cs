using ElectricalSupplies.API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite(
        "Data Source=ElectricalSupplies.db"));

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

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();

    app.UseSwaggerUI();
}

// app.UseHttpsRedirection();

app.UseCors("AllowAngular");

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

    if (!db.Products.Any())
    {
        db.Products.AddRange(
            new Product
            {
                Name = "Gaming Laptop",
                Category = "Computers",
                Price = 85000,
                StockQuantity = 5,
                Description = "High performance laptop"
            },
            new Product
            {
                Name = "Mechanical Keyboard",
                Category = "Accessories",
                Price = 4500,
                StockQuantity = 15,
                Description = "RGB mechanical keyboard"
            }
        );

        db.SaveChanges();
    }
}

app.UseAuthorization();

app.MapControllers();

app.Run();