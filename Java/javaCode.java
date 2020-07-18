class VariableSandbox {
    public static void main(String[] args){
        // assigning new variables
        
        // an integer position variable could be written as
        int position = 1;

        // which is as equally valid as
        int pos;
        pos = 5;

        // floats here are known as doubles
        double accountBalance = 100.25;

        // booleans are declared as such
        boolean isGameOver = false;

        // strings must be declared in capital S
        String name = "John";

        // constants are declared with keyword final in front
        final int maxHealth = 100;

        // printing variables so ES Lint will stop being annoying
        System.out.println(position + pos + accountBalance);
        System.out.println(isGameOver);
        System.out.println(name);
        System.out.println(maxHealth);
    }
}