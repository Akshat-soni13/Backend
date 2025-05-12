import java.io.*;

public class FileOpenAndRead {
    public static void main(String[] args) {
        try {
            FileInputStream Fis = new FileInputStream("File1.txt");
            int data;
            while ((data = Fis.read()) != -1) {
                System.out.print((char) data);
            }
            Fis.close();
            System.out.println("\nFile read successfully.");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
