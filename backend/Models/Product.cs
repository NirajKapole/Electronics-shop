namespace ElectricalSupplies.API.Models
{
    public class Product
    {
        public int ProductId { get; set; }

        public string ProductName { get; set; } = string.Empty;

        public string? Category { get; set; }

        public int Quantity { get; set; }

        public decimal UnitPrice { get; set; }

        public string? SupplierName { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}