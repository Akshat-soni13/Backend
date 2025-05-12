import java.io.*;

public class BufferedReadWrite {
    public static void main(String[] args) {
        try {
            // Step 1: Write to a file using BufferedWriter
            BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"));
            bw.write("Hello, Java!\n");
            bw.write("Buffered I/O is fast.");
            bw.newLine(); // Add a new line
            bw.write("File handling is easy!");
            bw.close(); // Close the writer
            System.out.println("Data written successfully.");

            // Step 2: Read from the file using BufferedReader
            BufferedReader br = new BufferedReader(new FileReader("output.txt"));
            String line;
            System.out.println("Reading from the file:");
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
            br.close(); // Close the reader

        } catch (IOException e) {
            System.out.println("Error occurred: " + e.getMessage());
        }
    }
}
 
