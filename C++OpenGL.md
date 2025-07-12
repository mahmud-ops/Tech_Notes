# OpenGL 2D with GLAD & GLFW

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

- `GLFWwindow *mywindow`: This declares a pointer named `mywindow` that will hold the reference to your new GLFW window.
- `glfwCreateWindow`: This is the function that actually creates a window.
- `800, 800`: These are the **width** and **height** of the window in pixels — so it’s an 800x800 window.
- `"Mahmud-ops"`: This is the **title** of the window — what you’ll see on the window’s title bar.
- `NULL` (4th argument): This is for the **monitor** parameter, used if you want fullscreen mode. `NULL` means windowed mode.
- `NULL` (5th argument): This is for sharing resources like OpenGL contexts with another window. `NULL` means no sharing.

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

- `glfwMakeContextCurrent(mywindow);` - **Links the OpenGL context to the current thread.** You can’t start drawing stuff until this is done. This tells OpenGL, “This is the window we’re working with.”

- `glfwDestroyWindow(mywindow);` - **Closes and cleans up the window after you’re done**. It’s like calling `delete` but for the window.

The loop runs until the window is flagged to close — typical for any game/render loop.

```cpp
if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress)) {
    cout << "Failed to initialize GLAD" << endl;
    return -1;
}
```

**What’s going on:**

- `gladLoadGLLoader((GLADloadproc)glfwGetProcAddress)`
  This function _loads all the OpenGL function pointers_ your system’s GPU driver supports, by asking GLFW for the addresses.

- If it **returns false**, it means GLAD **couldn’t find or load those functions**, so OpenGL calls won’t work, which basically bricks your app’s rendering.

- The code then prints a clear error message and bails with `return -1;` so you know exactly what went wrong.

```cpp
// Main game loop
while (!glfwWindowShouldClose(mywindow))
{
    glfwPollEvents();
}
```

`glfwPollEvents();` - It checks for input/events like **keyboard presses, mouse moves, window resizing, etc**., and updates GLFW’s internal state.

```cpp
// Rendering stuff
glClearColor(0.2f, 0.3f, 0.3f, 1.0f);
glClear(GL_COLOR_BUFFER_BIT);
glfwSwapBuffers(mywindow);

while (!glfwWindowShouldClose(mywindow))
{
    glfwPollEvents();
}
```

`glClearColor(0.2f, 0.3f, 0.3f, 1.0f);` - Set Background color
`glClear(GL_COLOR_BUFFER_BIT);` - It clears the screen before drawing the next frame — basically resets it to the color you set with glClearColor(...).

If you skip this line, each new frame will draw on top of the old one, which can cause weird visual junk (aka “artifact soup”).

**Viewport**

`glViewport(x, y, width, height);` tells OpenGL:

> “Hey, draw everything in this rectangle starting from `(x, y)` with this `width` and `height` inside the window.”

- `(x, y)` is usually `(0, 0)` — bottom-left corner of the window.
- `width` and `height` are in pixels.

---

**Why care about it?**

If you resize your window and don’t update the viewport, your rendered scene will look squished or only show part of it.

---

**Where to set it?**

Usually inside a **framebuffer size callback** or right after window creation:

```cpp
// Outside (Before) main()
void framebuffer_size_callback(GLFWwindow* myWindow, int width, int height) {
    glViewport(0, 0, width, height);
}
```

Then tell GLFW to call it when window resizes:
(After gladGLLoader)

```cpp
glfwSetFramebufferSizeCallback(myWindow, framebuffer_size_callback);
```

And set viewport initially:

```cpp
glViewport(0, 0, 800, 800);
```

**Quick recap:**

- Always update viewport when window size changes.
- Default is `glViewport(0, 0, windowWidth, windowHeight);`

**All done. Now run the code and you'll see a 800 x 800 teal window**
![Image](Images/cpp/openGLwindow.png)

**Full code**

```cpp
#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include <iostream>

using namespace std;

void framebuffer_size_callback(GLFWwindow *mywindow,int width , int height){
    glViewport(0,0,width,height);
}

int main(){

    if (!glfwInit()) {
        cout << "Failed to initialize GLFW" << endl;
        return -1;
    }

    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);


    GLFWwindow *mywindow = glfwCreateWindow(800,800,"Mahmud-ops",NULL,NULL);


    if(mywindow == NULL){
        cout << "Failed to create window.\n";
        glfwTerminate();
        return -1;
    }

    glfwMakeContextCurrent(mywindow);

    if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress)) {
        cout << "Failed to initialize GLAD" << endl;
        return -1;
    }

    glViewport(0,0,800,800);
    glfwSetFramebufferSizeCallback(mywindow, framebuffer_size_callback);

    // Rendering stuff
    glClearColor(0.2f, 0.3f, 0.3f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT);
    glfwSwapBuffers(mywindow);

    // Main game loop
    while (!glfwWindowShouldClose(mywindow))
    {
        glfwPollEvents();
    }

    glfwDestroyWindow(mywindow);

    glfwTerminate();
    return 0;
}
```

## Buffer

Sure thing, here’s your clean Markdown note on **buffer** without any `#` headings, just bold ones:

---

**What is a Buffer?**

In computer graphics and programming, a **buffer** is a reserved block of memory used to store data temporarily while it is being transferred or processed.

---

**Types of Buffers in OpenGL**

- **Frame Buffer:**
  Stores the final image that will be displayed on the screen. It holds color, depth, and stencil information.

- **Color Buffer:**
  Part of the framebuffer that stores pixel colors.

- **Depth Buffer:**
  Keeps track of the distance of pixels from the camera to handle overlapping objects correctly (so closer objects cover farther ones).

- **Stencil Buffer:**
  Used for masking certain parts of the rendering, allowing complex image effects.

- **Vertex Buffer:**
  Stores vertex data (positions, colors, normals) used by the GPU for drawing shapes.

- **Pixel Buffer:**
  Holds pixel data temporarily for tasks like asynchronous image uploads or downloads.

---

**Why Buffers Matter**

- Buffers help manage data flow efficiently between CPU and GPU.
- They allow smooth rendering by keeping data ready for the graphics pipeline.
- Updating buffers properly is key for animations, real-time graphics, and avoiding flickering.

---

**In short:**
A buffer = memory space to hold data temporarily while your program or GPU processes it.

## Drawing triangle

OpenGL’s whole rendering game is built around triangles because they’re the simplest shape that can represent any surface in 3D space. By breaking down complex models into a bunch of tiny triangles (called tessellation), OpenGL can easily calculate how light hits them, how to shade them, and where to draw them on screen. Triangles always stay flat and never warp like quads or other polygons might, which keeps the math clean and the graphics glitch-free. So basically, no matter how wild your 3D model is, under the hood it’s just a squad of triangles getting painted pixel by pixel. That’s the magic sauce behind smooth, realistic graphics in OpenGL.

**Vertex & Index Data in OpenGL – The Simple Breakdown**

![vertex data image](https://i.imgur.com/LbwPwEf.png)

**Vertex Data – The DNA of Graphics**

_Vertex_ means _point_. Every shape in 3D/2D is built from triangles, and triangles are made of points (vertices).

Each vertex usually has:

- **Position** (where it is in space)
- **Color** (what color it has)
- **Normal** (which way it’s “facing” for lighting)
- **Texture Coords** (if you’re wrapping an image on it)

So you make a big list like:

```
[vertex1, vertex2, vertex3, vertex4, ...]
```

This list is what we call **Vertex Data**. It’s stored in a thing called a _Vertex Buffer Object (VBO)_. OpenGL uses this data to draw shapes.

---

**Index Data – The Reuse King**

Let’s say you want to draw a square. It’s made of 2 triangles:

- Triangle 1 = vertices 0, 1, 2
- Triangle 2 = vertices 2, 3, 0

Notice how vertex 2 is reused?

Instead of repeating vertex data, you create an **Index Buffer Object (IBO)** or **Element Buffer Object (EBO)**. It holds the _order_ of vertices to use.

It’s like saying:

```
Draw triangle using vertex 0, 1, 2
Draw triangle using vertex 2, 3, 0
```

This saves space and boosts performance.

---

**Shader – The Graphics Brain**

Shaders are tiny programs that run on the GPU. They handle how things _look_.

Two main types:

- **Vertex Shader**
  It takes each vertex and decides where to put it on the screen. You can also mess with size, movement, etc.

- **Fragment Shader**
  Handles coloring of _pixels_ (called fragments here). Controls lighting, textures, and final appearance.

You write shaders in GLSL (OpenGL Shading Language), and the GPU compiles and runs them crazy fast.

---

**Shape Assembly – Connect the Dots**

Once the vertex shader finishes placing all the points, OpenGL connects them into shapes based on the index data.

This step is called **Primitive Assembly**.

Some common primitives:

- GL_POINTS (just dots)
- GL_LINES (lines between 2 points)
- GL_TRIANGLES (default go-to, 3 points per shape)

So OpenGL goes:
“Yo, here’s 3 vertices, I’ll make a triangle. Got 3 more? Cool, another triangle.”

---

**Rasterization – Breaking It into Pixels**

After the triangle is formed, it’s still in _vector_ form (math and coordinates). Now OpenGL rasterizes it — meaning, it turns it into pixels on your screen.

This is where shading, lighting, and depth stuff kicks in.

---

**Fragment Shader – The Paintbrush**

Each of those pixels gets run through the **Fragment Shader**, which paints them with color, texture, lighting, etc.

You can do wild stuff here: glow effects, toon shading, transparency, and more.

---

**Depth Testing – Who’s in Front**

In 3D scenes, shapes can overlap. So OpenGL uses a **Depth Buffer** to keep track of how close things are.

That way, the stuff in front covers the stuff behind. Without this, your scene would look like a glitchy mess.

---

**Summary Flow**

1. You give OpenGL your **vertex data** and **index data**.
2. It runs each vertex through the **vertex shader**.
3. It connects them into triangles (primitive assembly).
4. Shapes get **rasterized** into fragments.
5. Each fragment goes through the **fragment shader** to get colored.
6. OpenGL decides which pixels to actually draw using **depth test** and **blending**.

---

**Bonus Mentions (Gotta learn em later)**

- **VAO (Vertex Array Object)** = The manager that binds everything together (VBO, EBO, attributes).
- **Uniforms** = Constant variables you pass to shaders (like camera position or light direction).
- **GLSL** = Language used for writing shaders.

---

OpenGL doesn't have default shaders so , we have to write our own shader.

We're gonna learn it in another repo : _Link will be provided here_

**Writing the shaders before main function**

```cpp
const char* vertexShaderSource = "#version 330 core\n"
"layout (location = 0) in vec3 aPos;\n"
"void main()\n"
"{\n"
"    gl_Position = vec4(aPos.x, aPos.y, aPos.z, 1.0);\n"
"}\0";

const char* fragmentShaderSource = "#version 330 core\n"
"out vec4 FragColor;\n"
"void main()\n"
"{\n"
"    FragColor = vec4(0.8f, 0.3f, 0.02f, 1.0f);\n"
"}\n\0";
```

Now I'm gonna take a datatype `GLfloat` , Because openGL datatypes have different size than the normal datatypes;
Say less 😎 Here's the **Markdown-style** note, triangle edition — same vibe as the square one, just sharper and simpler:

---

**Triangle Vertices – In OpenGL**

You're defining **3 points** (vertices) in 3D space to make a triangle. This is like the "Hello World" shape in OpenGL.

```cpp
GLfloat vertices[] = {
    0.0f,  0.5f,  0.0f,  // top
    0.5f, -0.5f,  0.0f,  // bottom-right
   -0.5f, -0.5f,  0.0f   // bottom-left
};
```

**How it looks (if you plotted it):**

```
            (0.0, 0.5)
                 ●
                / \
               /   \
              /     \
             /       \
(-0.5,-0.5) ●---------● (0.5,-0.5)
```

**Each group of 3 values = 1 vertex:**

- `x`, `y`, and `z` (z is 0 here for 2D)

---

**Used with:**

```cpp
glDrawArrays(GL_TRIANGLES, 0, 3);
```

This tells OpenGL:

- **Draw triangles**
- **Start at index 0**
- **Use 3 vertices**

Boom — one triangle drawn.

Not really , We might have the source code of the shaders but we don't have access of the actual shaders from the memory. We can access them with the help of **references** which are some `GLuint`(gl unsigned integer) value/id.

We have to compile the shader source code.

```cpp
glfwSetFramebufferSizeCallback(mywindow, framebuffer_size_callback);

// Compiling shaders
GLuint vertexShader = glCreateShader(GL_VERTEX_SHADER);
glShaderSource(vertexShader,1,&vertexShaderSource,NULL);
glCompileShader(vertexShader);

GLuint fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);
glShaderSource(fragmentShader,1,&fragmentShaderSource,NULL);
glCompileShader(fragmentShader);

// Rendering stuff
glClearColor(0.2f, 0.3f, 0.3f, 1.0f);
```

Alright Mahmud, here's your **Markdown-style breakdown** of the **shader compilation** part — no fluff, just clean and clear:

---

**Shader Compilation – OpenGL**

Shaders are small programs that run on the GPU. You usually need two:

- **Vertex Shader** – Handles vertex processing (position, transformations)
- **Fragment Shader** – Handles pixel color

Here's the breakdown:

```cpp
// 1. Create a vertex shader object
GLuint vertexShader = glCreateShader(GL_VERTEX_SHADER);

// 2. Attach the source code to the shader
glShaderSource(vertexShader, 1, &vertexShaderSource, NULL);

// 3. Compile the shader
glCompileShader(vertexShader);
```

Then same for the **fragment shader**:

```cpp
GLuint fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);
glShaderSource(fragmentShader, 1, &fragmentShaderSource, NULL);
glCompileShader(fragmentShader);
```

---

**What's happening under the hood:**

- `glCreateShader(type)` → makes a shader object (`GL_VERTEX_SHADER` or `GL_FRAGMENT_SHADER`)
- `glShaderSource(shader, count, &source, NULL)` → links your shader code (as a `const char*`)
- `glCompileShader(shader)` → compiles it into GPU-ready instructions

---

**Next steps after this usually are:**

1. Link both shaders into a shader program using `glCreateProgram()`
2. Attach shaders to it with `glAttachShader()`
3. Link the program with `glLinkProgram()`
4. Use it in render loop with `glUseProgram()`

```cpp
  glCompileShader(fragmentShader);


    // Make a box
    GLuint shaderProgram = glCreateProgram();

    // put the shaders in the box
    glAttachShader(shaderProgram,vertexShader);
    glAttachShader(shaderProgram,fragmentShader);

    // Mix it up with the program
    glLinkProgram(shaderProgram);

    // Throw the wrappers
    glDeleteShader(vertexShader);
    glDeleteShader(fragmentShader);

```

**Linking Shaders – Making the Shader Program**

After compiling your shaders, you need to **link** them into a shader program — a full package the GPU can use.

```cpp
// Make a box
GLuint shaderProgram = glCreateProgram();
```

You’ve created a **shader program object** — think of it as a container where you’ll combine both vertex and fragment shaders.

```cpp
// Put the shaders in the box
glAttachShader(shaderProgram, vertexShader);
glAttachShader(shaderProgram, fragmentShader);
```

Now you’ve attached your compiled shaders to the program. They’re still individuals at this point — not linked yet.

```cpp
// Mix it up with the program
glLinkProgram(shaderProgram);
```

Boom. Now they’re linked together into a working GPU-ready program. You can `glUseProgram(shaderProgram)` to activate it.

```cpp
// Throw the wrappers
glDeleteShader(vertexShader);
glDeleteShader(fragmentShader);
```

Once they’re linked into the program, the raw shaders are no longer needed. Yeet them to save memory.

---

**Summary Flow:**

1. **Compile shaders** → `vertexShader`, `fragmentShader`
2. **Create program** → `shaderProgram`
3. **Attach + link** → unified GPU program
4. **Delete shader objects** → cleanup time 🧹

**Now**

openGL we have the shaders in our gpu , we have to send the shader data to the cpu to process them. Trans