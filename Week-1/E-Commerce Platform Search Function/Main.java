public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Smartphone", "Electronics"),
            new Product(3, "Tablet", "Electronics"),
            new Product(4, "Headphones", "Accessories")
        };


      
        String searchName = "Smartphone";
        Product product = LinearSearch.searchProduct(products, searchName);
        if (product != null) {
            System.out.println("Found using Linear Search:");
        } else {
            System.out.println("Product not found using Linear Search.");
        }

        product = BinarySearch.searchProduct(products, searchName);
        if (product != null) {
            System.out.println("Found using Binary Search:");
           
        } else {
            System.out.println("Product not found using Binary Search.");
        }
    }
}
