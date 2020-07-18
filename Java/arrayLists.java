// we need to import that module first
import java.util.ArrayList;

public class arrayLists {
    public static void main(String[] args){
        // creating a mutable array
        ArrayList<String> inventory = new ArrayList<>();

        // adding items to it
        inventory.add("Knife");
        inventory.add("Bread");
        inventory.add("Butter");

        // retrieving items
        String knife = inventory.get(0);

        // resetting an item
        inventory.set(1, "Gloves");

        // printing stuff to evade warnings
        System.out.println(knife);
    }
    
}