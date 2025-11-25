Since I already have prior experience with C, C++, and JavaScript, I’m not starting Java from zero. Many core programming concepts like variables, loops, functions, memory basics, and OOP fundamentals are already familiar to me. So while learning Java, I’ll focus mainly on the syntax differences, Java-specific rules, and the unique ecosystem (JVM, packages, exceptions, collections, etc.). I’ll skip overly basic topics in my notes and only document what’s new, important, or different from what I already know.

**Skipped these**
* Basic datatype and variables
* Printf
* if-else
* string methods (Chatgpt em when needed)
* Ternery operation
* Switch
* Loops 
* Array

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

# Random number

To generate a random number from 1 to 6..

```java
import java.util.Random; // must import

public class App {
    public static void main( String[] args ) throws Exception {

        Random random = new Random();

        int number = random.nextInt(1,7); // this can be any datatype (e.g. float, boolean, char etc)

        System.out.println(number);
    }
}
```
# Math class

**1. Basic**

* `Math.abs(x)` – absolute value
* `Math.max(a, b)` – bigger number
* `Math.min(a, b)` – smaller number

**2. Power & Roots**
* `Math.pow(a, b)` – a^b
* `Math.sqrt(x)` – square root

**3. Rounding**

* `Math.round(x)` – round to nearest int/long
* `Math.ceil(x)` – round up
* `Math.floor(x)` – round down

**4. Trigonometry**

* `Math.sin(x)` – sine (radians)
* `Math.cos(x)` – cosine (radians)
* `Math.tan(x)` – tangent (radians)
* `Math.toRadians(deg)` – degrees → radians
* `Math.toDegrees(rad)` – radians → degrees

**5. Random**

* `Math.random()` – double between 0.0–1.0

**6. Sign**

* `Math.signum(x)` – -1, 0, or 1

Basically, **abs, max/min, pow, sqrt, round/ceil/floor, sin/cos/tan, random** cover like 90% of practical uses.

# Enhanced switch

This is a regular switch..

```java
public class App{
    public static void main(String[] args) throws Exception {

        String day = "Monday";
        switch (day) {
            case "Saturday":
                    System.out.println("It's a weekday");
                break;
            case "Sunday":
                    System.out.println("It's a weekday");
                break;
            case "Monday":
                    System.out.println("It's a weekday");
                break;
            case "Tuesday":
                    System.out.println("It's a weekday");
                break;
            case "Wednesday":
                    System.out.println("It's a weekday");
                break;
            case "Thursday":
                    System.out.println("It's a weekend");
                break;
            case "Friday":
                    System.out.println("It's a weekend");
                break;
        }
    }
}
```

**Enhanced switches**
```java
public class App {
    public static void main(String[] args) {

        String day = "Monday";

        switch (day) {
            case "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday" -> System.out.println("It's a weekday");
            case "Thursday", "Friday" -> System.out.println("It's a weekend");
            default -> System.out.println("Invalid day");
        }
    }
}
```

# Method

known as function in some languages...

```java
import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in); 

        int x = scanner.nextInt();
        int y = scanner.nextInt();
        
        scanner.close();

        System.out.println("Sum = " + add(x,y) /*Method call*/ );
    }

    int add (int a, int b){ // Method definition
        return a+b;
    }
}
```

**Error**
```
Cannot make a static reference to the non-static method add(int, int) from the type App
```

```java
static int add (int a, int b){ // Method definition
    return a+b;
}
```
Other languages (like C/C++) don’t force everything inside a strict class/object structure. In Java, main lives in a static world. Objects don’t exist yet, so Java won’t let you call a normal (instance) method without actually creating an object. Java is obsessed with OOP rules — if a method belongs to an object, you must make the object first.

