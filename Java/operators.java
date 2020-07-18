public class operators {
    // Assignment: =
    // Arithmetic: + - * / %
    // Comparison: == != >= > <= <
    // Logical: && || !

    public static void main(String[] args){
        /**  You can only compare and work arithmetical
         * signs with variables of the same type. You can't
         * compare an integer to a double or the result will
         * come out false, even if there are no decimals
        */

        double accountBalance = 100.25;
        double cost = 50.0;
        boolean canAfford = accountBalance >= cost;

        System.out.println(canAfford);

        /** Strings don't use == to compare,
         * but rather use a .equals
         */

        String firstName = "Rodrigo";
        System.out.println(firstName.equals("Rodrigo"));
    }
}