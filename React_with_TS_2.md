# React with typescript part 2 ( Intermediate topics )

> Precaution: Iam using chakra ui here

**This part of the course shifts from learning React to using React the way it’s used in real production apps.** Instead of isolated concepts, you’ll focus on how different pieces—data fetching, caching, state, and routing—work together to build something scalable and performant. The GameHub project is expanded step by step, turning it from a basic app into a polished, real-world application that reflects professional development practices.

- **Intermediate React + TypeScript workflows** focused on real app architecture
- **Data management & caching** to reduce unnecessary network calls and improve performance
- **Global state handling** for sharing data cleanly across components
- **Infinite scrolling** for loading content efficiently as users interact
- **Routing with React Router** to support multiple pages and deep linking
- **Game details page** to demonstrate structured navigation and data reuse
- **Portfolio-ready outcome** that showcases practical React skills, not just theory

# Fetching and updating data using `react query`

- React Query is used to manage **server state** in React applications
- It simplifies **data fetching, caching, syncing, and updating** from APIs
- Queries handle loading, error, and success states automatically
- Built-in caching and background refetching improve performance
- Supports **pagination and infinite scrolling** with cached pages
- Mutations handle **CRUD operations** and can use **optimistic updates**
- Custom hooks and services keep components clean and reusable
- Applied to the GameHub project to add caching, infinite scroll, and refactor the codebase
- Final outcome is a **faster, cleaner, and more scalable React application**

**Here we're fetching a list from an API ... but, there's some problem here**

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

- **Definition:** Caching is the process of storing data in a place where it can be accessed quickly in the future instead of fetching it from the original source every time.

- **Purpose:**

  - Reduces server requests
  - Speeds up data retrieval
  - Improves application performance
  - Enhances user experience

- **In React Applications:**

  - Frequently used data can be stored **on the client side**, inside the user's browser.
  - Example: User profile info, recent search results, or product listings can be cached so they don’t need to be fetched from the server every time the page loads.

- **How it works (example scenario):**

  1. User opens a dashboard. React fetches user data from the server.
  2. Data is stored in the browser cache (e.g., `localStorage`, `sessionStorage`, or in-memory cache).
  3. Next time the user visits, React checks the cache first.
  4. If data exists in the cache, it’s loaded instantly without calling the server.

- **Benefits:**

  - Faster page loads
  - Less network traffic
  - Reduced server load
  - Smooth and responsive user experience

- **Things to keep in mind:**

  - Cached data can get outdated (stale), so sometimes it needs to be refreshed.
  - Not all data should be cached, especially sensitive or frequently changing data.

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

## Fetching data

**Problems (without React Query)**

- **No request cancellation**
  If a component unmounts or the user navigates away, the API request may still run in the background, wasting resources and possibly causing errors.

- **No separation of concerns**
  Data fetching logic, loading states, error handling, and UI code get mixed together, making components messy and harder to maintain.

- **No retries**
  If a request fails due to a temporary network issue, it fails immediately with no automatic retry mechanism.

- **No automatic refresh / refetch**
  Data does not update automatically when the user revisits a page, switches tabs, or when data becomes stale. You have to manually handle refetching.

- **No caching**
  The same data is fetched again and again, even if it hasn’t changed, leading to unnecessary API calls and slower performance.

➡️ **All of these problems can be solved by React Query**, which handles data fetching, caching, retries, background refetching, and request management out of the box.

```js
const TodoList = () => {
  // You don’t have to memorize anything - everything comes from the React Query documentation.
  // converted to async function

  const fetchTodos = async () => {
    const res = await axios.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return res.data;
  };

  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
```

**New version (with React Query)**

- **No request cancellation issues**
  React Query automatically cancels in-flight requests when components unmount or when a new request replaces the old one.

- **Clear separation of concerns**
  Data fetching, caching, loading, and error states are handled by React Query, keeping the component focused only on rendering UI.

- **Automatic retries**
  Failed requests are retried automatically (configurable), so temporary network issues don’t instantly break the UI.

- **Automatic refresh / refetch**
  Data can refetch on window focus, reconnect, or after a certain time without manual `useEffect` logic.

- **Built-in caching**
  Fetched data is cached and reused, preventing unnecessary API calls and making the app faster.

➡️ **Result:** No `useEffect`, no manual `useState`, less boilerplate, cleaner code, and better performance out of the box.

## Error handling

```js
const { data: todos, error } = useQuery({
  queryKey: ["todos"],
  queryFn: fetchTodos,
});

if (error) return <Text>{error}</Text>; // error
```

**Error**

> Type '{}' is not assignable to type 'ReactNode'.

- error from `useQuery` is typed as unknown by default in v4.

- You can’t just render unknown in JSX. TypeScript doesn’t know it’s a string.

**Fix**

```js
const { data: todos, error } = useQuery({
  queryKey: ["todos"],
  queryFn: fetchTodos,
});

if (error instanceof Error) return <Text>{error.message}</Text>; // fix
```

**Or, declare type while calling `useQuery`**

```js
  const { data: todos, error } = useQuery<Todo[],Error>({ // fix
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (error) return <Text>{error.message}</Text>;
```

## Showing a loading indicator

```js
const { data: todos, error, isLoading } = useQuery<Todo[],Error>({
  queryKey: ["todos"],
  queryFn: fetchTodos,
});

if (isLoading) return <Text>Loading...</Text>
```

**There's still a problem left : Seperation of concerns**

our quering logic is still being handled in the `TodoList` component.. It should be handled seperately in hook (ex: `useTodos.ts`)

`Hooks/useTodos.ts`

**Cut-pasted and made some minimal changes from `TodoList.tsx`**

```js
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const useTodos = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
};

export default useTodos;
```

`TodoList.tsx`

```js
import { Badge, Flex, ListItem, OrderedList, Text } from "@chakra-ui/react";
import useTodos from "../Hooks/useTodos";

const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos();
  // ....
};
```

## React query devtools

**Doc:** [https://tanstack.com/query/v4/docs/framework/react/devtools](https://tanstack.com/query/v4/docs/framework/react/devtools)

1. Install

```bash
npm i @tanstack/react-query-devtools@4
```

2. `main.tsx`

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools' // New

import "./index.css";
import App from "./App.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools /> // New
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);
```

**Done**

![rqdev](Images/JS/React/RQ_devTools.png)

## Customising query settings

**Doc:** [Stackoverflow](https://stackoverflow.com/questions/74203305/how-to-change-the-default-options-for-usequery-in-react-query)

`main.tsx`

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import "./index.css";
import App from "./App.tsx";

// customisation

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,              // Retries a failed request 3 times before throwing an error
      staleTime: 10 * 1000,  // Data stays fresh for 10 seconds (no refetch during this time)
      cacheTime: 300_0000,   // Cached data stays in memory for 50 minutes after becoming unused
    },
  },
});


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);
```

Here are the **common React Query `defaultOptions.queries`** with **one-line explanations** (note-style, clean):

- **staleTime**: How long data is considered fresh before it becomes stale and eligible for refetching.

- **cacheTime**: How long inactive (unused) cached data stays in memory before being garbage-collected.

- **retry**: Number of times a failed query is retried before throwing an error.

- **retryDelay**: Time to wait between retry attempts.

- **refetchOnWindowFocus**: Automatically refetches data when the browser window/tab regains focus.

- **refetchOnReconnect**: Refetches data when the network reconnects after being offline.

- **refetchOnMount**: Refetches data when a component mounts if the data is stale.

- **enabled**: Controls whether the query runs automatically or waits for a condition.

- **keepPreviousData**: Keeps old data while fetching new data to avoid UI flicker.

- **select**: Transforms or filters the fetched data before it reaches the component.

- **onSuccess**: Callback that runs when the query succeeds.

- **onError**: Callback that runs when the query fails.

- **onSettled**: Callback that runs when the query either succeeds or fails.

### React Query refetches data by default under **3 conditions**

* **On component mount**
  When a component using a query mounts and the cached data is **stale**, React Query refetches it.

* **On window focus**
  When the user switches back to the browser tab/window, React Query refetches stale data.

* **On network reconnect**
  When the device goes offline and then comes back online, React Query refetches stale data.

These defaults are what keep data **fresh without manual `useEffect` logic**.

We can also customize these behaviors in `queryOptions.queries` using options like `refetchOnMount`, `refetchOnWindowFocus`, and `refetchOnReconnect`.

--- 

We can customize these behaviors **per query**, instead of applying them globally from `main.tsx`.

Like this

`useTodos.ts`
```js
const useTodos = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data); 

  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 10_000 // custom stale time
  });
};
```

## **Exercise Problem**

There is a component that fetches posts from the backend (**JSONPlaceholder**) using **`useState`** and **`useEffect`**.

👉 Your task is to replace that logic by creating a **custom hook that fetches posts using React Query**, eliminating the need for manual state and effect hooks.
