import React from "react";
import ReactDom from "react-dom/client";

const rootDiv = document.getElementById("root");

ReactDom.createRoot(rootDiv).render(
  <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
    <div style={{ marginBottom: '20px' }}>
      <img 
        width={100} 
        src="/public/vite.svg" 
        alt="Vite logo" 
        style={{ borderRadius: '8px', margin: '10px' }} 
      />
      <img 
        width={100} 
        src="/public/react.png" 
        alt="React logo" 
        style={{ borderRadius: '8px', margin: '10px' }} 
      />
    </div>
    <h1 style={{ color: '#61dafb', fontSize: '3em', fontWeight: 'bold' }}>Welcome to the World of React!</h1>
    <p style={{ lineHeight: '1.6', fontSize: '1.1em', color: '#555', maxWidth: '800px', margin: '0 auto', textAlign: 'justify' }}>
    React is a powerful and flexible JavaScript library for building user interfaces. Developed and maintained by Facebook, React allows developers to create dynamic, high-performance web applications. Its core concept revolves around the idea of "components" — self-contained, reusable code blocks that manage their own state and rendering. This modular approach makes React ideal for creating complex applications by breaking them into smaller, manageable pieces. One of the key features of React is its Virtual DOM, which efficiently updates and renders only the parts of the interface that need to change, improving performance significantly. React also allows developers to build applications that are both client-side and server-side rendered, making it a versatile choice for modern web development. The React ecosystem is vast, with a variety of supporting libraries, tools, and resources that further enhance its capabilities. With widespread community support and a strong presence in the development world, React continues to be one of the most popular and widely used frameworks for creating interactive and responsive web applications.
    </p>
  </div>
);

