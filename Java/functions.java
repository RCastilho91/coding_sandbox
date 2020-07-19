public class functions {
    
    static int move(int position, int amount) {
        int finalPosition = position + amount;
        System.out.println(finalPosition);
        return finalPosition; 
    }

    public static void main(String[] args) {
        move(5, 2);
    }
}