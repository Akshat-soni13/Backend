import java.io.*;

public class ReadLinesUsingIO {
    public static void main(String[] args) {
        try {
            // Step 1: Create BufferedReader to read input
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

            System.out.println("Enter multiple lines (Type 'stop' to exit):");

            // Step 2: Read lines from console until 'stop' is entered
            String line;
            while (!(line = br.readLine()).equalsIgnoreCase("stop")) {
                System.out.println("You entered: " + line);
                
            }

            // Step 3: Close the BufferedReader
            br.close();
            System.out.println("Program terminated successfully.");

        } catch (IOException e) {
            System.out.println("Error reading input: " + e.getMessage());
        }
    }
}