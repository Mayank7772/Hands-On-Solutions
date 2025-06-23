public class LinearSearch {
    public  static Product searchProduct(Product[] products, String productName) {
        for (Product product : products) {
            if (product.productName == productName) {
                return product;
            }
        }
        return null;
    }
}
