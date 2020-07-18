// hashmaps work as lists, but they work with keys rather than element position

import java.util.HashMap;

public class hashmaps {
    public static void main(String[] args){
        // creating the hashmap
        HashMap<String,Integer> inventory = new HashMap<>();
        
        // adding items to it, with corresponding quantities
        inventory.put("Knife", 2);
        inventory.put("Boots", 3);
        inventory.put("Axe", 1);

        // retrieving items from it
        int numberOfKnifes = inventory.get("Knife");

        // Put can either add a new key or replace the quantity of an existing one
        inventory.put("Axe", 2);

        // To make sure no mistakes are made in this, should you want to alter a value
        // the replace method should be used.
        inventory.replace("Axe", 2);

        // printing stuff to evade warnings
        System.out.println(numberOfKnifes);
    }
}