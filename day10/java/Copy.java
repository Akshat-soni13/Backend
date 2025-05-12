import java.io.*;

public class Copy {
    public static void main(String[] args) {
        try {
            // Step 1: Open input and output streams
            FileInputStream inputFile = new FileInputStream("file1.txt");
            FileOutputStream outputFile = new FileOutputStream("file2.txt");

            // Step 2: Read and write byte by byte
            int data;
            while ((data = inputFile.read()) != -1) {
                outputFile.write(data);
            }

            // Step 3: Close both streams
            inputFile.close();
            outputFile.close();

            System.out.println("File copied successfully!");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}