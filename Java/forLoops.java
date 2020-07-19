public class forLoops {
    public static void main(String[] args){
        String[] inventory = {"Knife", "Bread", "Butter"};
        
        for(int i = 0; i < inventory.length; i+= 1) {
            System.out.println(inventory[i]);
        }
    }
}