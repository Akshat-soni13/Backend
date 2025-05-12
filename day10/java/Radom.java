// Order Of reading and WritinG aLSO MATER A LOT
import java.io.RandomAccessFile;

public class Radom
{
    public static void main(String[] args) {
        try{
        RandomAccessFile raf = new RandomAccessFile("Fileer","rw");
        raf.write('d');
        raf.writeUTF("aku");
        raf.writeInt(12);
        System.out.println("Data Writen Succesfully");
        raf.seek(0);
        System.out.println("Character: " + (char)raf.read());
        System.out.println("String: " + raf.readUTF());
        System.out.println("Integer: " + raf.readInt());
        raf.close();
        }catch(Exception e)
        {
            System.out.println("Exception Occured");
        }
    }    
}