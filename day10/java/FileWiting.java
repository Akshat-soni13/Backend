import java.io.*;
public class FileWiting {
    public static void main(String[] ars)
    {
        FileOutputStream fo = null;
        byte by []={'a','b'};
        String Str= "Akshat Soni";
        try{
            fo =  new FileOutputStream("File2.txt");
            // fo.write(str.getBytes());
            fo.write(by);
            fo.write(Str.getBytes());
            fo.close();
        }
        catch(Exception e)
        {
            System.out.println("Exception Occur ");
        }
    }
}
