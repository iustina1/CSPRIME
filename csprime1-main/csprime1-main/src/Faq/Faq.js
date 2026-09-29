import React, { useEffect, useState } from "react";
import "./Faq.css"; // Import your CSS file
import apiClient from "../api/apiClient";

const faqs = [
  {
    question: "How do I transfer into the CSSE course?",
    answer: "To transfer into the CSSE course, you need to have completed specific modules, which are the following CS161, CS162, CS171, CS172 and Maths(MT101SC, MT102SC, MT113SC)."
  },
  {
    question: "Which topics will set my foundation in programming during the CS course?",
    answer: "To build a strong foundation in programming during your CS course, focus on fundamentals like data types, variables, loops, conditionals, and functions. Understanding data structures (arrays, linked lists, stacks, queues) and algorithms (sorting, searching, recursion) is essential. You'll also learn object-oriented programming (OOP), databases, and basic software development concepts. As you progress, topics like computer architecture, operating systems, networking, and web development will strengthen your understanding."
  },
  {
    question: "How can I prepare for coding interviews?",
    answer: "Practice data structures and algorithms, solve coding problems on platforms like LeetCode, and revise system design concepts."
  },
  {
    question: "How do introductory computer science topics contribute to my learning in advanced modules?",
    answer: "Introductory topics lay the foundation for programming. Courses like CS161, CS162, CS171, and CS172 cover fundamental concepts that are essential for more advanced studies. These modules help students build a strong understanding of programming basics."
  },
  {
    question: "How does mathematics relate to computer science?",
    answer: "Mathematics is essential in computer science for problem-solving, algorithms, and logical thinking. Topics like discrete math, algebra, and probability help in areas such as cryptography, machine learning, and data structures. Strong math skills improve coding efficiency and computational logic."
  },
  {
    question: "What are the key differences between software engineering and multimedia web and mobile development?",
    answer: "Software Engineering focuses on designing, developing, and maintaining complex software systems. It involves algorithms, data structures, software architecture, and engineering principles to build scalable and efficient applications. Software engineers work on a wide range of projects, from system software to enterprise applications. Multimedia Web and Mobile Development is more specialized, focusing on creating interactive and visually engaging web and mobile applications. It combines UI/UX design, front-end and back-end development, multimedia content integration, and mobile responsiveness. This field emphasizes user experience, animations, and multimedia elements in apps and websites. While both involve coding, software engineering is broader and more technical, while multimedia web and mobile development is more focused on design, usability, and digital experiences."
  },
  {
    question: "What does the CS Prime application offer to computer science students?",
    answer: "CS Prime demonstrates how first-year computer science topics form the foundation for the entire CS degree. It highlights the progression from basic concepts to advanced knowledge, emphasizing their importance in both academics and industry."
  }
];

const studyTips = [
  "Break down complex problems into smaller, manageable tasks.",
  "Practice coding regularly to improve problem-solving skills.",
  "Take regular breaks to prevent burnout.",
  "Collaborate with peers on coding projects or study groups.",
  "Master the fundamentals before diving into advanced topics.",
  "Always review and refactor your code after completing assignments."
];

// Array of testimonials from students
const testimonials = [
  {
    name: "John Doe",
    course: "CS Major, Class of 2023",
    text: "Studying Computer Science at Maynooth University has been a challenging yet rewarding experience. The professors are always ready to help, and the resources provided through the university made it easier to succeed. My coding skills have improved significantly!"
  },
  {
    name: "Jane Smith",
    course: "CS Minor, Class of 2022",
    text: "I absolutely loved my time at Maynooth University! The Computer Science program is well-structured, and the opportunities to work on real-world projects were incredible. The support from my peers and professors helped me tackle even the most difficult problems."
  },
  {
    name: "Robert Lee",
    course: "Alumnus, Class of 2020",
    text: "As a graduate of Maynooth University, I can say the CS program truly prepared me for the challenges of the tech industry. The coursework is demanding, but it's all worth it when you land your first job. The learning environment was dynamic and supportive!"
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqItems, setFaqItems] = useState([]);
  const [testimonialItems, setTestimonialItems] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    Promise.all([apiClient.getFaqs(), apiClient.getTestimonials()])
      .then(([faqData, testimonialData]) => {
        setFaqItems(faqData);
        setTestimonialItems(testimonialData);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (status === "loading") {
    return <div className="faq-container"><p>Loading FAQs...</p></div>;
  }

  if (status === "error") {
    return <div className="faq-container"><p>Unable to load FAQs. Please try again.</p></div>;
  }

  return (
    <div className="faq-container">
      <div className="faq-study-container">
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqItems.map((faq, index) => (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
                </button>
                <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="study-tips-section">
          <h3>Common Study Tips for Computer Science Students</h3>
          <div className="study-tips">
            <ul>
              {studyTips.map((tip, index) => (
                <li key={index} className="study-tip">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <h3>Student Testimonials</h3>
      <div className="testimonials">
        {testimonialItems.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <blockquote className="testimonial-quote">"{testimonial.quote}"</blockquote>
            <p className="testimonial-author">
              — {testimonial.name}, <span>Class of {testimonial.graduationYear}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
