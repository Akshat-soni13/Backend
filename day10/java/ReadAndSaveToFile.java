 import java.io.*;
public class ReadAndSaveToFile {
    public static void main(String[] args) {
        try {
            // Step 1: Create BufferedReader to read from the console
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

            // Step 2: Create FileWriter to write to a file
            FileWriter fw = new FileWriter("output.txt");

            System.out.println("Enter lines of text (Type 'stop' to save and exit):");

            // Step 3: Read lines and write to the file
            String line;
            while (!(line = br.readLine()).equalsIgnoreCase("stop")) {
                fw.write(line + "\n");  // Write each line to the file
            }

            // Step 4: Close the streams
            br.close();
            fw.close();

            System.out.println("Data successfully saved to 'output.txt'.");

        } catch (IOException e) {
            System.out.println("Error occurred: " + e.getMessage());
        }
    }
}

