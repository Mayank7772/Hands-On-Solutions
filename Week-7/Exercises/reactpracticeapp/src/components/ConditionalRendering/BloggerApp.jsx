// src/components/ConditionalRendering/BloggerApp.jsx
import React, { useState } from "react";

const BloggerApp = () => {
  const [view, setView] = useState("books");

  const books = ["Book A", "Book B", "Book C"];
  const blogs = ["Blog X", "Blog Y", "Blog Z"];
  const courses = ["Course 1", "Course 2", "Course 3"];

  const renderList = (items) => (
    <ul>
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );

  let content;
  if (view === "books") {
    content = renderList(books);
  } else if (view === "blogs") {
    content = renderList(blogs);
  } else {
    content = renderList(courses);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Blogger App</h2>
      <button onClick={() => setView("books")}>Show Books</button>
      <button onClick={() => setView("blogs")}>Show Blogs</button>
      <button onClick={() => setView("courses")}>Show Courses</button>
      <hr />
      {content}
      {/* Another way: ternary operator */}
      {view === "books" ? <p>Currently showing books.</p> : <p>Not showing books.</p>}
    </div>
  );
};

export default BloggerApp;
