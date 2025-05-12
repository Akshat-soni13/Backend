// Serialize Convert Object To Byte Stream 

import java.io.*;

class Student implements Serializable
{
    String name;
    int age;
    Student(String name, int age)
    {
        this.name = name;
        this.age = age;
    }
    void display()
    {
        System.out.println("Age: "+age+"Name :"+name);

    }
}


public class ob
{
    
    public static void main(String[] args) {
        
            try{
            FileOutputStream  f1 = new FileOutputStream("Student_Data.txt");
            ObjectOutputStream oo1 = new ObjectOutputStream(f1);
                Student s1= new Student("Aki", 19);
            oo1.writeObject(s1);
            oo1.close();
            System.out.println("Object Wriiten in file Suucesfull");
            FileInputStream fs1 = new FileInputStream("Student_Data.txt");
            ObjectInputStream os1 = new ObjectInputStream(fs1);
            Student S2 = (Student) os1.readObject();
            os1.close();
            System.out.println("Object read from file:");
            S2.display();


            }catch(Exception e)
            {
                System.out.println("Exception Occured");
            }




    }
}
