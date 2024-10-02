import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    (<div className="max-w-5xl mx-auto px-8">
    
      <HoverEffect items={projects} />
      
    </div>)
  );
}
export const projects = [
    {
      "title": "JavaScript Essentials",
      "description": "Learn the fundamentals of JavaScript, the most popular programming language for web development, with hands-on exercises and real-world examples.",
      "link": "https://example.com/courses/javascript-essentials"
    },
    {
      "title": "Python for Data Science",
      "description": "Master the core concepts of Python and explore how it’s applied in data science, including libraries like NumPy, pandas, and Matplotlib.",
      "link": "https://example.com/courses/python-data-science"
    },
    {
      "title": "React: Building Interactive UIs",
      "description": "Discover how to build dynamic, user-friendly interfaces using React, the popular JavaScript library. Learn components, state management, and hooks.",
      "link": "https://example.com/courses/react-ui"
    },
    {
      "title": "Machine Learning Foundations",
      "description": "Get an introduction to machine learning concepts, algorithms, and tools, and see how data can be used to make predictions and drive decisions.",
      "link": "https://example.com/courses/machine-learning"
    },
    {
      "title": "HTML & CSS: Web Design Basics",
      "description": "Understand the fundamentals of HTML and CSS to create well-structured, visually appealing websites from scratch.",
      "link": "https://example.com/courses/html-css"
    },
    {
      "title": "Django for Web Development",
      "description": "Learn how to build robust, scalable web applications using the Django framework, from setting up your environment to deploying your project.",
      "link": "https://example.com/courses/django-web-development"
    }
  ]
  