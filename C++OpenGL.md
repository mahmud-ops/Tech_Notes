# OpenGL with GLAD & GLFW

**🔗 Setup Repo: [https://github.com/mahmud-ops/OpenGL_setup](https://github.com/mahmud-ops/OpenGL_setup)**

✅ Just clone → open in VSCode → run → you're ready to build 2D projects.

## Start

```cpp
#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include <iostream>

int main(){

    return 0;
}
```

## Create a window

### Intialise and terminate

```cpp
#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include <iostream>

int main(){

    // This sets up everything GLFW needs — before creating windows or handling input, this call kicks things off under the hood. + Error check
    if (!glfwInit()) {
        cout << "Failed to initialize GLFW" << endl;
        return -1;
    }


    // Main code

    glfwTerminate(); // Cleans up and frees all GLFW resources before your program ends. Always call this when you're done — it's the graceful exit.

    return 0;
}
```

### Specify the version

Here, we're using glfw 3.3 , Core profile.

```cpp
if (!glfwInit()) {...}

glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

glfwTerminate();
```
In GLFW, setting the OpenGL context to **Core Profile** means you use only the modern features of OpenGL. It removes all the old, outdated functions and forces you to work with the newer, more efficient way of programming graphics using shaders and buffers. This helps make your code cleaner, faster, and easier to maintain. GLFW lets you choose this profile to ensure your program uses the latest OpenGL standards.
### Window setup

**Now we’re going to set the window width, height, and other properties.**
```cpp
glfwWindowHint(GLFW_OPENGL_PROFILE,GLFW_OPENGL_CORE_PROFILE);

GLFWwindow *mywindow = glfwCreateWindow(800,800,"Mahmud-ops",NULL,NULL);

glfwTerminate();
```
* `GLFWwindow *mywindow`: This declares a pointer named `mywindow` that will hold the reference to your new GLFW window.
* `glfwCreateWindow`: This is the function that actually creates a window.
* `800, 800`: These are the **width** and **height** of the window in pixels — so it’s an 800x800 window.
* `"Mahmud-ops"`: This is the **title** of the window — what you’ll see on the window’s title bar.
* `NULL` (4th argument): This is for the **monitor** parameter, used if you want fullscreen mode. `NULL` means windowed mode.
* `NULL` (5th argument): This is for sharing resources like OpenGL contexts with another window. `NULL` means no sharing.

So, in short: You’re making a window that’s 800 by 800 pixels, titled “Mahmud-ops,” in windowed mode with no shared context.

**Error handling (window)**
```cpp
GLFWwindow *mywindow = glfwCreateWindow(800,800,"Mahmud-ops",NULL,NULL);

if(mywindow == NULL){
    cout << "Failed to create window.\n";
    glfwTerminate();
    return -1;
}

glfwTerminate();
```
**Window Creation, Context Setup, and Cleanup**
```cpp
if(mywindow == NULL){...}

glfwMakeContextCurrent(mywindow);

if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress)) {
    cout << "Failed to initialize GLAD" << endl;
    return -1;
}

// Main game loop

glfwDestroyWindow(mywindow);

glfwTerminate();
```
* `glfwMakeContextCurrent(mywindow);` -  **Links the OpenGL context to the current thread.** You can’t start drawing stuff until this is done. This tells OpenGL, “This is the window we’re working with.”

* `glfwDestroyWindow(mywindow);` -  **Closes and cleans up the window after you’re done**. It’s like calling `delete` but for the window.

The loop runs until the window is flagged to close — typical for any game/render loop.

```cpp
if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress)) {
    cout << "Failed to initialize GLAD" << endl;
    return -1;
}
```
**What’s going on:**

* `gladLoadGLLoader((GLADloadproc)glfwGetProcAddress)`
  This function *loads all the OpenGL function pointers* your system’s GPU driver supports, by asking GLFW for the addresses.

* If it **returns false**, it means GLAD **couldn’t find or load those functions**, so OpenGL calls won’t work, which basically bricks your app’s rendering.

* The code then prints a clear error message and bails with `return -1;` so you know exactly what went wrong.

```cpp
// Main game loop
while (!glfwWindowShouldClose(mywindow))
{
    glfwPollEvents();
}
```
`glfwPollEvents();` - It checks for input/events like **keyboard presses, mouse moves, window resizing, etc**., and updates GLFW’s internal state.

```cpp
while (!glfwWindowShouldClose(mywindow))
{
    glfwPollEvents();

    // Rendering stuff
    glClearColor(0.2f, 0.3f, 0.3f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT);

    glfwSwapBuffers(mywindow);
}
```
`glClearColor(0.2f, 0.3f, 0.3f, 1.0f);` - Set Background color
`glClear(GL_COLOR_BUFFER_BIT);` - It clears the screen before drawing the next frame — basically resets it to the color you set with glClearColor(...).

If you skip this line, each new frame will draw on top of the old one, which can cause weird visual junk (aka “artifact soup”).

**All done. Now run the code and you'll see a 800 x 800 teal window**
![Image](Images/cpp/openGLwindow.png)