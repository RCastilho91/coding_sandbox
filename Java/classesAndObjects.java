class GameCharacter {
    
    // Setting up relevant variables
    String name;
    int position;
    int health;

    // setting up constructor
    GameCharacter(String name, int position, int health){
        this.name = name;
        this.position = position;
        this.health = health;
    }

    // function to handle state
    void move(int amount){
        this.position += amount;
    }
}

public class classesAndObjects {
    public static void main(String[] args) {
        GameCharacter gc = new GameCharacter("Fred", 1, 100);
        gc.health = 120;
        System.out.println(gc.health);
        gc.move(10);
        System.out.println(gc.position);
    }
}