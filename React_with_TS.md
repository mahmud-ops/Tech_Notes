I’ll be skipping certain topics along the way, mainly the ones I’m already familiar with or have already documented in my previous notes, so I can focus more on the areas that are new to me or require deeper understanding.

I skipped the styling part , because Iam gonna use tailwind ot other ui libraries.

Here are some famous ui libraries

BTW Ima use `Chakra UI` for the final project. 

- **[Material-UI (MUI)](https://mui.com/)** – React components following Google Material Design.  
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework for rapid UI development.  
- **[Bootstrap](https://getbootstrap.com/)** – Classic CSS framework with components and grid system.  
- **[Chakra UI](https://chakra-ui.com/)** – Modular, accessible, and themeable React components.  
- **[Ant Design (AntD)](https://ant.design/)** – Enterprise-grade React UI library with a large component set.  
- **[Styled-Components](https://styled-components.com/)** – Popular CSS-in-JS library for React.  
- **[Framer Motion](https://www.framer.com/motion/)** – React animation library for smooth interactions.  
- **[React Icons](https://react-icons.github.io/react-icons/)** – Collection of popular icon packs as React components.  

> **Suggestion:**  
> **[Shadcn/UI](https://ui.shadcn.com/)** – Prebuilt, accessible React components using Tailwind + Radix primitives; great for rapid UI building in Tailwind projects.

**Shadcn/UI** is an excellent choice for modern React projects, especially when combined with Tailwind CSS. Unlike traditional component libraries, it provides **prebuilt, accessible components based on Radix primitives**, giving developers full control over styling while maintaining best practices for accessibility. It’s lightweight, fully responsive, and highly customizable, allowing rapid UI development without the overhead of heavy theming systems like MUI or AntD. For anyone building Tailwind-based projects, Shadcn/UI acts as a **powerful toolkit** that accelerates development while keeping the design system clean and consistent.

# Using icons in react
1. we gotta install react icons first 

```
npm i react-icons@latest
```

It'll be installed in the `node_modules` folder

2. Go to the website **[https://www.react-icons.com/](https://www.react-icons.com/)**

3. Copy the icon you need

![icon](Images/JS/React/card_icon.png)

4. Go to `App.tsx` and import the icon
```tsx
import { FaAddressCard } from 'react-icons/fa'; // this is gonna be copied if you copy the icon from the website.

function App() {
  return (
    <FaAddressCard/>
  );
}

export default App;
```
![icon2](Images/JS/React/card_icon_2.png)

