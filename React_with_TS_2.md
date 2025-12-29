# React with typescript part 2 ( Intermediate topics )

**This part of the course shifts from learning React to using React the way it’s used in real production apps.** Instead of isolated concepts, you’ll focus on how different pieces—data fetching, caching, state, and routing—work together to build something scalable and performant. The GameHub project is expanded step by step, turning it from a basic app into a polished, real-world application that reflects professional development practices.

* **Intermediate React + TypeScript workflows** focused on real app architecture
* **Data management & caching** to reduce unnecessary network calls and improve performance
* **Global state handling** for sharing data cleanly across components
* **Infinite scrolling** for loading content efficiently as users interact
* **Routing with React Router** to support multiple pages and deep linking
* **Game details page** to demonstrate structured navigation and data reuse
* **Portfolio-ready outcome** that showcases practical React skills, not just theory

# Fetching and updating data using `react query`

* React Query is used to manage **server state** in React applications
* It simplifies **data fetching, caching, syncing, and updating** from APIs
* Queries handle loading, error, and success states automatically
* Built-in caching and background refetching improve performance
* Supports **pagination and infinite scrolling** with cached pages
* Mutations handle **CRUD operations** and can use **optimistic updates**
* Custom hooks and services keep components clean and reusable
* Applied to the GameHub project to add caching, infinite scroll, and refactor the codebase
* Final outcome is a **faster, cleaner, and more scalable React application**

**Here we're fetching a list from an API  ... but, there's some problem here**

```js
const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => setError(err.message));
  }, []);

```

**Problems**

1. No request cancellation
2. No seperation of concerns
3. No retries
4. No automatic refresh / refetch
5. No `caching`

### Caching

* **Definition:** Caching is the process of storing data in a place where it can be accessed quickly in the future instead of fetching it from the original source every time.

* **Purpose:**

  * Reduces server requests
  * Speeds up data retrieval
  * Improves application performance
  * Enhances user experience

* **In React Applications:**

  * Frequently used data can be stored **on the client side**, inside the user's browser.
  * Example: User profile info, recent search results, or product listings can be cached so they don’t need to be fetched from the server every time the page loads.

* **How it works (example scenario):**

  1. User opens a dashboard. React fetches user data from the server.
  2. Data is stored in the browser cache (e.g., `localStorage`, `sessionStorage`, or in-memory cache).
  3. Next time the user visits, React checks the cache first.
  4. If data exists in the cache, it’s loaded instantly without calling the server.

* **Benefits:**

  * Faster page loads
  * Less network traffic
  * Reduced server load
  * Smooth and responsive user experience

* **Things to keep in mind:**

  * Cached data can get outdated (stale), so sometimes it needs to be refreshed.
  * Not all data should be cached, especially sensitive or frequently changing data.

## Setting up react query

**Doc:** [https://tanstack.com/query/v4/docs/framework/react/installation](https://tanstack.com/query/v4/docs/framework/react/installation)

1. Install react-query
2. `main.tsx`

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; /* New import */

const queryClient = new QueryClient(); /* New */

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}> /* New */
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);
```

