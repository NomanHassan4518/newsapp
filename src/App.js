import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
// import News from './Components/News';

// In React.js, there are two main approaches for creating components: function components and class components. While both can achieve the same functionality, there are differences in how they are defined and how state and lifecycle methods are handled.

// Function Components:

// Definition: Function components are defined as JavaScript functions that receive props as input and return JSX (JavaScript XML) as output. They are typically stateless, meaning they don't manage their own state or have lifecycle methods.
// Syntax: Function components are written as regular JavaScript functions, making them simpler and easier to read and write.
// State Management: Until the introduction of React Hooks, function components didn't have a built-in way to manage state. They could receive props from their parent component and use them to render UI, but they couldn't store or update their own state.
// Lifecycle: Function components can use lifecycle hooks (e.g., useEffect) provided by React Hooks to handle side effects and lifecycle-related operations.
// Recommended Use: With the introduction of React Hooks, function components became the preferred way of writing components in React due to their simplicity and reusability.
// Class Components:

// Definition: Class components are defined as ES6 classes that extend the React.Component class. They have a render method that returns JSX. Class components can have their own state and lifecycle methods.
// Syntax: Class components use the ES6 class syntax, which includes a constructor and various lifecycle methods.
// State Management: Class components have built-in state management. They can define and update their own state using this.setState(). This makes them suitable for components that require internal state management.
// Lifecycle: Class components have access to a range of lifecycle methods, such as componentDidMount, componentDidUpdate, and componentWillUnmount. These methods allow developers to handle different stages of the component's lifecycle, such as initialization, updates, and cleanup.
// Recommended Use: With the introduction of React Hooks, class components have become less commonly used. However, they are still necessary in certain scenarios, such as when working with legacy codebases or when using third-party libraries that rely on class components.
// It's important to note that since the release of React 16.8, which introduced React Hooks, function components gained more capabilities and can now handle state and lifecycle operations more effectively. As a result, many developers now prefer using function components with React Hooks over class components.

export default class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
     <News pageSize={5}/>
      </div>
    )
  }
}
