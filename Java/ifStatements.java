public class ifStatements {
    public static void main(String[] args){
        int position = 1;
        String keyStroke = "r";

        if(keyStroke.equals("r")) {
            position += 1;
            System.out.println(position);
        } else if (keyStroke.equals("l")) {
            position -= 1;
            System.out.println(position);
        } else {
            System.out.println("Invalid command");
        }
    }
}