import java.io.*;

public class ReadCharacter {
    public static void main(String[] args) {
        try {
            // Step 1: Create InputStreamReader to read bytes and convert to characters
            InputStreamReader isr = new InputStreamReader(System.in);

            // Step 2: Read a single character
            System.out.print("Enter a character: ");
            char ch = (char) isr.read();

            // Step 3: Display the character
            System.out.println("You entered: " + ch);

            // Step 4: Close the InputStreamReader
            isr.close();

        } catch (IOException e) {
            System.out.println("Error reading character: " + e.getMessage());
        }
    }
}