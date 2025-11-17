Since I already have prior experience with C, C++, and JavaScript, I’m not starting Java from zero. Many core programming concepts like variables, loops, functions, memory basics, and OOP fundamentals are already familiar to me. So while learning Java, I’ll focus mainly on the syntax differences, Java-specific rules, and the unique ecosystem (JVM, packages, exceptions, collections, etc.). I’ll skip overly basic topics in my notes and only document what’s new, important, or different from what I already know.

**Skipped these**


# Basic I/O

Type `sout` and IntelliSense will auto-expand it to `System.out.print();`.

```java
public class App {
    public static void main(String[] args) throws Exception {

        String name = "Mahmud";
        int age = 21;

        System.out.println("Hello, World!");
        System.out.println("My name is " + name);
        System.out.println("Iam " + age + " years old."); // like js concatination
    }
}

```

or, like this

```java
public class App {
    public static void main(String[] args) throws Exception {
        System.out.print("Hello, world!\n"); // \n
    }
}
```
Java has two types of data types: **Primitive** (int, char, boolean, etc.) and **Reference** (objects, arrays, strings).

**Taking input from user**

* Import the Scanner class: `import java.util.Scanner;`
* Create a Scanner object: `Scanner sc = new Scanner(System.in);`
* Read input using methods like:

  * `sc.nextInt()` → for integers
  * `sc.nextDouble()` → for decimals
  * `sc.nextLine()` → for strings
* Close the scanner after use: `sc.close();`

```java
import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        String name = "Mahmud";
        int age = 21;

        System.out.println("Hello, World!");
        System.out.println("My name is " + name);
        System.out.println("Iam " + age + " years old."); // like js concatination


        Scanner scanner = new Scanner(System.in);

        scanner.close();
    }
}
```

`Scanner` is a **class** in Java, and `scanner` is an **object** of that class used to read input from the user.

Fixed note version:

```java
Scanner scanner = new Scanner(System.in); // 'Scanner' is a class, 'scanner' is an object to take user input
scanner.close(); // closes the scanner
```

```java
import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("What's your name ?");
        String name = scanner.nextLine();

        System.out.println("How old are you ?");
        int age = scanner.nextInt();

        System.out.println("Are you a student (true/false) ?");
        boolean isStudent = scanner.nextBoolean();

        double gpa = 0;
        if(isStudent){
            System.out.println("What is you GPA ?");
            gpa = scanner.nextDouble();
        }

        scanner.close();

        System.out.println("-------------------------------------------");
        System.out.println("Iam " + name);
        System.out.println("Iam " + age + " years old");
        if(gpa != 0){
            System.out.println("My GPA is " + gpa);
        }
    }
}
```

**Output**
```
What's your name ?
Mahmud
How old are you ?
21
Are you a student (true/false) ?
true
What is you GPA ?
3.44
-------------------------------------------
Iam Mahmud
Iam 21 years old
My GPA is 3.44

mahmud@mahmud-Inspiron-5521:~/Desktop/Java/src$ cd "/home/mahmud/Desktop/Java/src/" && javac App.java && java App

What's your name ?
Mahmud
How old are you ?
21
Are you a student (true/false) ?
false
-------------------------------------------
Iam Mahmud
Iam 21 years old
```

