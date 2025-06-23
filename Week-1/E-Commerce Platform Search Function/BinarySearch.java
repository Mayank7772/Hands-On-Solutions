import java.util.Arrays;
import java.util.Comparator;

public class BinarySearch {

    public static Product searchProduct(Product[] products, String productName) {
         Arrays.sort(products, Comparator.comparing(p -> p.productName));
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            Product midProduct = products[mid];

            if (midProduct.productName.equals(productName)) {
                return midProduct;
            } else if (midProduct.productName.compareTo(productName) < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null; 
    }
}