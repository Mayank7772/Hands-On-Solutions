public class FinancialForecasting {

     public static double forecastValue(int months, double initialAmount, double growthRate) {
        if(months == 0) return initialAmount;
        return forecastValue(months - 1, initialAmount, growthRate) * (1 + growthRate);
    }
    public static void main(String[] args) {
        
        double initialAmount = 1000.0;
        double growthRate = 0.05;
        int months = 6;

        double futureValue = forecastValue(months , initialAmount  ,growthRate);
        System.out.printf("The future value after %d months is: %.2f%n", months, futureValue);
    }

   
}