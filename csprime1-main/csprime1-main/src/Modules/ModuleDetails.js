import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ModuleDetails.css";
import apiClient from "../api/apiClient";

  const moduleDetails = {
    CS161: {
      lecturer: "Aiden Mooney",
      credits: 7.5,
      year: 1,
      overview:
        "This module introduces students to fundamental programming concepts, problem-solving techniques, and the basics of algorithm design using a high-level programming language such as Java."
        
    },
    CS171: {
        lecturer: "Stephen Brown/Joe Timoney",
        credits: 7.5,
        year: 1,
        overview:
          "Use visual programming tools to create computer systems, Understand the breadth of topics in computer science, Solve problems by designing algorithms."
      },
      MT101SC: {
        lecturer: "Detta Dickinson/Ollie Mason",
        credits: 5,
        year: 1,
        overview:
          "Differential Calculus shows how functions change using limits and derivatives. Key rules like the product, quotient, and chain rules help differentiate complex functions. Concepts such as Newton’s method, maxima and minima, Taylor’s theorem, and curve sketching provide deeper insights into function behavior and optimization."
      },
      CS162: {
        lecturer: "BD",
        credits: 7.5,
        year: 1,
        overview:
          "In Introduction to Computer Science II, you'll learn the basics of Theoretical Computer Science, including how computers recognize and process languages. You'll explore regular expressions, grammars, and automata—the building blocks of programming languages. The course covers finite automata (both deterministic and non-deterministic) and how they help model computation. You'll also see how grammars convert into automata and get introduced to push-down automata. Along the way, you'll develop problem-solving skills and learn to think logically when designing algorithms."
      },
      CS172: {
        lecturer: "Kevin Casey",
        credits: 7.5,
        year: 1,
        overview:
          "In Computer Systems II, you'll explore how mathematical logic and proof strategies help in reasoning about programs. You'll learn First-Order Logic, which is used to analyze and verify code, and different proof techniques to solve computer science problems. The module also covers functions and recursion, helping you break down complex problems into smaller, manageable parts. Finally, you'll get hands-on experience writing programs in a declarative programming language, which focuses on what the program should accomplish rather than how to do it."
      },
      MT102SC: {
        lecturer: "Stephen Mc Guire",
        credits: 5,
        year: 1,
        overview:
          "In this module, Integral Calculus, you'll explore key concepts like anti-derivatives, definite and indefinite integrals, and the Fundamental Theorem of Calculus. You'll learn techniques such as substitution, integration by parts, and trigonometric integration, along with how to apply integration to find areas between curves, volumes, and surface areas of revolution. Additionally, you'll study inverse functions, including inverse trigonometric functions, and numerical methods like the Trapezoidal Rule and Simpson’s Rule for approximating integrals. This module will help you develop problem-solving skills essential for advanced mathematics and applications in science and engineering."
      },
      MT113SC: {
        lecturer: "Mark Walsh",
        credits: 5,
        year: 1,
        overview:
          "In this Linear Algebra module, you'll learn how to solve systems of linear equations using methods like Gaussian Elimination. You'll also compute the determinants of 2x2 and 3x3 matrices and perform various matrix operations, including finding the inverse of a 2x2 matrix. The module covers vector operations, such as dot products, calculating distance, norms, angles, and projections. You'll learn to represent lines and planes in 2D and 3D, and understand how to coordinate them in space. Additionally, you'll explore eigenvalues of 2x2 matrices and become familiar with key definitions and theorems related to these topics."
      },
      CS130: {
        lecturer: "LK",
        credits: 5,
        year: 2,
        overview:
          " In this module, you will learn about various aspects of databases. You will understand conceptual data modeling to design databases effectively. We’ll dive into the relational database model, which organizes data into tables, and explore data structures used to store and organize this data. You will learn how to use Structured Query Language (SQL) to interact with databases, ensuring data integrity to keep your data accurate and consistent. We will also cover data manipulation techniques to modify data, understand relational algebra for performing queries, and explore methods for data analytics and data science"
      },
      CS210: {
        lecturer: "Phil Maguire",
        credits: 5,
        year: 2,
        overview:
          "In the Algorithms & Data Structures 1 module, you will learn the fundamental concepts of algorithms and data structures, which are essential for solving problems in computer science. The module starts by reviewing basic programming concepts, such as operators, control flow, recursion, and input/output, to help you understand how to implement abstract data types. You'll learn key algorithms for searching, including linear, bounded linear, and binary searches, as well as sorting algorithms like selection, insertion, bubble, and quick sorts. The module also covers essential linear data structures, such as stacks, queues, and linked lists. Additionally, you'll explore object-oriented programming concepts like encapsulation, inheritance, polymorphism, and basic exception handling. Finally, you'll gain skills in analyzing the performance of algorithms to understand their efficiency."
      },
      CS220: {
        lecturer: "Dermot Kelly",
        credits: 5,
        year: 2,
        overview:
          "In the Computer Architecture module, you will learn the basics of how computers process and store data. You'll study number systems and how data is represented in binary, including integer and floating-point formats. You'll explore functional logic design, including Boolean algebra and how to create logic circuits using transistors. You'll also learn how to optimize designs for performance, simplify circuits, and use different logic gate combinations. In sequential logic design, you'll work with flip-flops and create circuits that handle sequences of operations. Memory technology is another key area, where you’ll learn about the evolution of memory, how SRAM, DRAM, and non-volatile memories work, and how to implement error detection and correction systems. The module also includes practical lab work where you will simulate and construct computing circuits."
      },
      CS265: {
        lecturer: "RB",
        credits: 5,
        year: 2,
        overview:
          "In the Software Testing module, you will learn the basics of testing software to make sure it works well and is free from problems. You’ll understand why testing is important, the different types of tests, and how testing fits into the software development process. The module will also cover automation in testing and how to check if software is easy to test. You will learn about software quality, why faults and failures happen, and the different stages of testing. The course will cover various testing methods, such as unit testing, integration testing, and system testing. You’ll also learn techniques like boundary value analysis, cause-effect graphing, and how to test object-oriented software. This module will give you the tools and knowledge needed to test software effectively."
      },
      MT201A: {
        lecturer: "DR.Isaac Burke",
        credits: 5,
        year: 2,
        overview:
          "In the Calculus 3 module, you'll learn about multivariable calculus, focusing on functions of two or more variables. This includes understanding graphs, limits, and continuity for these functions. You'll study partial derivatives, gradients, and how to find tangents and normals to surfaces. The course will also cover optimization techniques like max-min problems and using Lagrange multipliers. Additionally, you'll be introduced to sequences and series, and you'll use mathematical software to perform calculations. Overall, this module will help you understand how calculus applies to more than just one variable, especially in two and three-dimensional spaces."
      },
      ST221: {
        lecturer: "Galatia Cleanthous",
        credits: 5,
        year: 2,
        overview:
          "In this module, you'll learn the basics of statistics, starting with how to summarize data using both numerical and graphical methods. You'll explore probability concepts like sample spaces, events, conditional probability, and learn about Bayes' theorem. The course covers discrete random variables, their mean and variance, and introduces key distributions like Binomial and Poisson. You'll also dive into continuous random variables and the Normal distribution. As you progress, you'll study the sampling distribution of the mean, and learn how to calculate and interpret confidence intervals and perform hypothesis testing for both means and proportions. The module also covers correlation and regression analysis, as well as inference for slope. Finally, you'll gain hands-on experience using statistical software to perform computations and analyses."
      },
      CS230: {
        lecturer: "John Keating",
        credits: 7.5,
        year: 2,
        overview:
          "In this module on Web Information Processing, you'll learn the fundamentals of how information is processed on the web, starting with the components and architecture of the WWW and the Internet. The course covers both client-side and server-side technologies, including HTML5, CSS, JavaScript, JQuery, AJAX, and server-side languages like ASP.NET, JSP, and PHP. You'll also explore web services such as SOAP and REST with real-world examples. The focus will be on using best practices for web development, like separating structure, presentation, and behavior. Additionally, the course introduces mobile web development and how to use web technologies to create hybrid mobile apps."
      },
      CS240: {
        lecturer: "Dermot kelly",
        credits: 5,
        year: 2,
        overview:
          "In this module, you'll learn about the core functions and design of operating systems, including how they manage processes, memory, and resources efficiently. You'll explore key concepts like processor and disk scheduling, memory management, and file system design. The module covers topics such as protection and security, interprocess communication, and concurrency control, including issues like deadlock and mutual exclusion. You'll also get hands-on experience with Unix-based systems, working with operating system functions, interprocess communication, and solving concurrent programming challenges through practical coding exercises."
      },
      CS211: {
        lecturer: "Phil Maguire",
        credits: 5,
        year: 2,
        overview:
          "In the Algorithms & Data Structures 2 module, you will learn key concepts in data structures and algorithms. You'll study Binary Search Trees (BST), focusing on their fundamentals, implementation, and how to balance them for better performance. The module covers different tree traversals (depth-first and breadth-first) and introduces graph representations to understand how networks and relationships can be modeled. You will also explore hash tables for efficient data storage and retrieval. The course includes an understanding of algorithm analysis, helping you evaluate the efficiency of algorithms in terms of time and space. Different algorithm strategies, such as brute force, greedy, divide and conquer, and backtracking, will be examined, along with some advanced topics in algorithms and data structures."
      },
      CS280: {
        lecturer: "Ralf Bierig",
        credits: 5,
        year: 2,
        overview:
          "In this module, you'll get an introduction to User Experience (UX), User Interface (UI), and Interaction Design. You'll learn how to design, develop, and evaluate interactive websites and apps, focusing on users rather than just the system. Key topics include understanding how people interact with technology, the connection between UX and UI, and the importance of user testing. You'll also explore how to create and refine interactive prototypes, from simple sketches to detailed designs. The goal is to bridge the gap between what users need and what technology can do, using an iterative design process."
      },
      CS335: {
        lecturer: "Ralf Bierig",
        credits: 5,
        year: 2,
        overview:
          "In this module, Software Engineering & Software Process, you'll learn the key principles and techniques used in software development. We'll explore how to choose the right software process, plan and manage projects effectively, and use modern design techniques like UML. You'll also gain hands-on experience in software testing to ensure quality. By the end, you'll have a solid understanding of how to develop, analyze, and improve software systems efficiently."
      },
      CS355: {
        lecturer: "Peter Mooney",
        credits: 5,
        year: 2,
        overview:
          "In this Theory of Computation module, you will learn how machines recognize languages. You'll start with regular languages, finite automata, and regular expressions, exploring determinism, nondeterminism, and minimization. Then, you'll move on to context-free languages, grammars, and pushdown automata, understanding their properties and limits. You'll also study multi-stack machines, Turing machines, and the Church-Turing thesis, leading to concepts of decidable, recognizable, and undecidable languages. This module will give you a strong foundation in computational theory and the limits of computation."
      },
      CS264: {
        lecturer: "EG",
        credits: 5,
        year: 3,
        overview:
          "In this Software Design module, you will learn the principles and practices of object-oriented software analysis, design, and programming using C++. The first half of the course will take you from the basics of C++ to more advanced topics like object-oriented and generic programming. You will cover C++ syntax, data types, arrays, pointers, dynamic memory management, and key OOP concepts such as encapsulation, inheritance, and polymorphism. You will also explore generic programming and the Standard Template Library (STL). The second half will focus on object-oriented analysis and design (OOA/D), where you will learn how to apply design patterns to build well-structured, reusable, and extensible software systems. This course assumes you already have programming experience but are new to C++."
      },
      CS310: {
        lecturer: "EG",
        credits: 5,
        year: 3,
        overview:
          "In this module, Programming Languages & Compilers, you will explore how programming languages work and how code gets translated into machine instructions. You'll learn about compilers, interpreters, and assemblers, understanding how they convert high-level code into something computers can execute. You'll study formal grammars, which define the structure of programming languages, and dive into lexical and syntax analysis, including techniques like predictive parsing. You'll also work with symbol tables and semantic analysis, ensuring code follows logical rules. Finally, you'll explore code generation, optimization, and run-time environments, learning how programs are made efficient and executed on different systems. "
      },
      CS320: {
        lecturer: "Bryan Hennelly",
        credits: 5,
        year: 3,
        overview:
          "In the Computer Networks module, you will learn about network architectures, packet-switching, and delays in packet-switched networks. You'll explore internet applications like the Web and email, and understand transport layer concepts such as reliable data transfer and flow control. You'll write simple Python socket applications, study IP addressing and routing algorithms, and explore data link layer services and security methods. Finally, you'll use tools like Wireshark to analyze network protocols."
      },
      CS353: {
        lecturer: "kevin Casey",
        credits: 5,
        year: 3,
        overview:
          "In the Team Project module, you will learn how to work effectively in a team to develop a mobile or web application. You'll start by gathering software requirements and using consensus estimation to estimate tasks and timelines. As a team, you'll focus on the design, testing, and implementation of the project. You will also develop skills in project management, including organizing meetings and managing tasks. You’ll use SCRUM methodology to combine new knowledge with what you’ve learned from previous modules, helping you manage development processes. Additionally, you will gain experience using DevOps practices in a group setting to streamline development and deployment."
      },
      CS357: {
        lecturer: "Hao Wu",
        credits: 5,
        year: 3,
        overview:
          "In this module on Software Verification, you will learn about the importance of ensuring software correctness through formal methods. You will explore the motivation behind software verification, which aims to identify and prevent errors in software systems. You will dive into the basics of syntax, semantics, and formal proofs in first-order logic, which are fundamental for reasoning about programs. The concept of Design by Contract will be introduced, focusing on creating software with clear preconditions and postconditions. You will also study Hoare logic, which helps in verifying the correctness of programs, and how to use SMT solvers for automated reasoning. Temporal logic and model checking will be covered to analyze how systems behave over time."
      },
      CS370: {
        lecturer: "Joseph Duffin/ Joe Timoney",
        credits: 5,
        year: 3,
        overview:
          "In the Computation & Complexity module, you will explore the fundamentals of computability theory, starting with Turing machines and the Church-Turing thesis, which define the limits of what can be computed. You will learn about decidable and recognizable languages, proofs of undecidability, and key concepts like Turing reducibility and Rice's theorem. The module will also introduce you to computational complexity, teaching you how to measure and analyze the efficiency of algorithms through asymptotic analysis. You will dive into complexity classes like P and NP, and understand intra-class reductions. Further, you will explore advanced complexity classes, nondeterminism, and concepts like NP-hardness and NP-completeness. This module will provide you with a solid understanding of how to assess the difficulty of computational problems and algorithms."
      },
      CS362: {
        lecturer: "N/A",
        credits: 5,
        year: 3,
        overview:
          "In the Work Placement Documentation module, you will learn how to create a professional CV and write a strong job application for a work position. You will also evaluate the knowledge you gain during your work placement and reflect on how the experience connects to the practice of Computer Science and your degree program. Additionally, you will keep a diary or log to document your placement experience and, at the end, write a report detailing your main contributions to the workplace. This module helps you prepare for real-world work environments and enhances your professional skills."
      },
      CS363: {
        lecturer: "N/A",
        credits: 25,
        year: 3,
        overview:
          "In the Industrial Work Placement module, you will learn how to apply for work placements by following the guidance of work placement officers, ensuring you meet all deadlines set by them and potential employers. You will be responsible for finding a suitable placement by participating in application and interview processes. During the placement, you will work for at least six months (unless interrupted by circumstances beyond your control) and contribute effectively in the workplace. Additionally, you will develop teamwork skills by collaborating with others in a software development team, adapting to the work environment and working towards common goals."
      },
      CS322: {
        lecturer: "Joe Timoney/Behnam Faghih",
        credits: 5,
        year: 4,
        overview:
          "In the Music Programming 2 module, you will explore the fundamental principles behind sound generation and processing in software synthesizers. You will learn how different synthesizer elements work together to create sound, including understanding the causes of aliasing distortion and how to solve it. You'll gain hands-on experience in implementing various synthesizer components and sound effect processing in software. Additionally, you will learn how to build a program that can interpret and respond to MIDI protocol messages, enabling interaction with MIDI devices"
      },
      CS356: {
        lecturer: "Thomas Naughton",
        credits: 5,
        year: 4,
        overview:
          "In the Image and Optical Processing module, you will learn key techniques for processing images and signals, including one- and two-dimensional signal processing, Fourier transforms, and sampling theory. You’ll explore concepts like aliasing, convolution, and filtering, as well as image restoration and object recognition. The module also covers encoding images in optical wavefronts, optical image processing, and three-dimensional processing with digital holograms."
      },
      CS401: {
        lecturer: "Barak Pearlmutter",
        credits: 5,
        year: 4,
        overview:
          "In this module on Machine Learning & Neural Networks, you will learn key techniques used for teaching computers. You'll explore supervised, unsupervised, and reinforcement learning. You'll study biological neurons and their role in artificial neural networks. In supervised learning, you'll cover linear regression, perceptron, backpropagation, deep learning, and SVM. For unsupervised learning, you'll learn about k-means clustering, Gaussian mixtures, and Hidden Markov Models. Lastly, you'll dive into reinforcement learning with methods like Q-learning and deep reinforcement learning, gaining a solid understanding of how machines learn from data and experience."
      },
      CS404: {
        lecturer: "Diarmuid O'Donoghue",
        credits: 5,
        year: 4,
        overview:
          "In the Artificial Intelligence & Language Processing module, you will explore the fundamental concepts of AI and how it interacts with language. You’ll start by defining intelligence and learning about Turing's imitation game, which tests a machine's ability to mimic human behavior. You will then dive into problem-solving techniques, such as state-spaces and the generate-and-test method, and explore how game-playing strategies work. The module also covers graph-searching algorithms, optimization strategies, and two-player games. Additionally, you will learn about biologically inspired computation, parsing, and how to represent knowledge semantically. The course will also introduce you to information retrieval systems, focusing on how documents are ranked. Throughout the module, you'll gain a solid understanding of how AI processes and interprets language."
      },
      CS410: {
        lecturer: "John McDonald",
        credits: 5,
        year: 4,
        overview:
          "In this Computer Vision module, you will learn about how human visual perception works and how it relates to machines interpreting images. You will explore industrial machine vision systems and understand how images are formed through cameras and sensors. The module will cover basic image processing techniques, such as binary image processing and image filtering to enhance or manipulate images. You will also dive into gradient-based edge detection to identify boundaries in images. Additionally, you will study more advanced topics in image analysis, such as template matching, pattern recognition, shape detection, and interest point detection and matching, all of which are essential for building smart systems that can see and interpret visual information."
      },
      CS416: {
        lecturer: "Tom Dowling",
        credits: 5,
        year: 4,
        overview:
          "In this Cryptography module, you will learn about different encryption techniques like Classical ciphers, Symmetric ciphers, and Asymmetric ciphers. You will explore Hash functions for data integrity, Authentication for secure access, and concepts like Factorization and DLP for breaking encryption. The module also covers Security protocols and Emerging concepts, including topics like Biometrics, Elliptic Curve Cryptography, and Smart Card Security. Lastly, you'll gain practical experience with competitive cryptanalysis."
      },
      CS422: {
        lecturer: "Charles Markham / John McDonald",
        credits: 5,
        year: 4,
        overview:
          "In the Robotics & Automation module, you will explore various aspects of robotics, starting with robots in popular culture and the basic anatomy and features of a typical robot. You will learn about the mobility of a simple machine using number synthesis, and how to use DH matrix parameters to describe robot configurations. The module will also teach you how to select appropriate actuators and controllers for specific tasks. You will understand the ODE (Ordinary Differential Equation) description of robots and how they move and operate. Additionally, you will study closed-loop control systems, including PID control, and gain knowledge in mobile robot localization and mapping. This will equip you with both theoretical and practical skills in robotics."
      },
      CS424: {
        lecturer: "Barak Pearlmutter",
        credits: 5,
        year: 4,
        overview:
          "In the Programming Language Design & Semantics module, you will learn to write simple programs in languages like Scheme, Haskell, and Prolog. You'll explore key concepts like lambda calculus, focusing on reductions, renaming, variable capture, and confluence. You will also study the erasure theorem and the termination properties of both typed and untyped lambda calculus, along with typing rules. Additionally, you will gain an understanding of the syntax and semantics of Scheme, Haskell, Prolog, and lambda calculus, helping you develop a deeper insight into how programming languages are designed and function."
      },
      CS430: {
        lecturer: "Diarmuid O'Donoghue/Barak Pearlmutter/Edgar Galvan/Gourav Misra",
        credits: 5,
        year: 4,
        overview:
          "In the Advanced Concepts & Issues in Computer Science 1 module, you will explore current topics like AI, machine learning, cybersecurity, and data science through weekly seminars. You will gain a deeper understanding of these advanced concepts and their real-world applications."
      },
      CS433: {
        lecturer: "Charles Markham/Stephen Brown",
        credits: 5,
        year: 4,
        overview:
          "In the Advanced Computer Architecture module, you will learn about the architecture of computers, specifically in the context of the Internet of Things (IoT). You'll explore traditional machine cycles and assembly language to understand how computers execute tasks. The module covers interfacing between hardware components, as well as memory and storage systems that are essential for computer performance. You'll also dive into modern machine cycles and how they differ from older models. You'll study various processing architectures and modern computer system designs."
      },
      CS402: {
        lecturer: "Dermot Kelly",
        credits: 5,
        year: 4,
        overview:
          "In the Parallel & Distributed Systems module, you will learn about key concepts in distributed computing, including Distributed Systems and Applications, System Architectures, and Interprocess Communication. You’ll explore technologies like Remote Procedure Call (RPC), Remote Method Invocation (RMI), and Web Services for system interaction. The module covers Group Communication, Event Ordering, Synchronization, and managing Processes and Threads. You’ll also study Virtualization, Transaction Systems, Distributed File Systems, and Security. Finally, you’ll understand Fault Tolerance, Consistency, and Replication for building reliable, resilient systems."
      },
      CS417: {
        lecturer: "Tom Dowling",
        credits: 5,
        year: 4,
        overview:
          "In the Numerical Computation  module, you will learn key techniques used in solving complex mathematical problems through computation. You'll explore topics like error explosion and floating-point arithmetic, which deal with the challenges of precision in calculations. You'll work with systems of linear and non-linear equations, interpolation, and numerical differentiation. Additionally, you'll learn methods for solving ordinary differential equations, boundary value problems, and partial differential equations. The module also covers non-linear equations and non-standard computations. Emphasis is placed on applying these techniques in real-world scenarios, adapting algorithms, controlling errors, and programming solutions using languages like Matlab, Java, and Perl."
      },
      CS423: {
        lecturer: "N/A",
        credits: 5,
        year: 4,
        overview:
          "In this module, Designing for Virtual Environments, you will learn how to create user interfaces and interactions for Augmented, Mixed, and Virtual Reality (XR). You will start by exploring the software and hardware used in XR, such as Web VR and native VR headsets. Then, you will practice processing data and creating content using tools like Blender and Unity3D. A key part of the course is developing an XR application with a strong focus on Human-Computer Interaction (HCI) and User Experience (UX) design. You will also learn UX and usability guidelines for Virtual Environments and compare them with traditional applications like websites and desktop software. This module builds on concepts from CS230 and CS280, helping you deepen your understanding of designing for immersive digital experiences."
      },
      CS425: {
        lecturer: "Joseph Timoney",
        credits: 5,
        year: 4,
        overview:
          "In this module, Audio & Speech Processing, you will explore how to analyze, modify, and synthesize sound. You will start with time-domain speech processing, learning how raw audio signals behave over time. Then, you'll move to the frequency domain, where you'll break down sounds into their frequency components. You'll also study time-frequency representations, which combine both approaches for a deeper understanding of audio signals. Additionally, you'll learn to implement digital audio effects and work with algorithms for analyzing, synthesizing, and modifying instrumental sounds. By the end of the module, you'll have the skills to manipulate and process audio for various applications, from speech recognition to music production."
      },
      CS426: {
        lecturer: "Charles Markham",
        credits: 5,
        year: 4,
        overview:
          "In this Computer Graphics module, you will learn how to create and manipulate visuals using 2D and 3D graphics. You’ll explore primitives, transformations, rendering, animation, and how color, lighting, and shading enhance realism. You'll also study graphics hardware like GPUs and display tech, along with software such as OpenGL, DirectX, and Blender. By the end, you'll have a solid foundation in graphics, from basic shapes to advanced rendering."
      },
      CS427: {
        lecturer: "N/A",
        credits: 5,
        year: 4,
        overview:
          "In this module, Autonomous Mobile Robotics, you will learn how to model and analyze the motion of different wheeled robot platforms. You will explore the importance of probabilistic methods in robotics and how they help in dealing with uncertainty. The module will cover sensing and perception systems, including the algorithms that allow robots to understand their surroundings. You will also learn about state estimation techniques, which help a robot determine its position using sensor data. Key concepts like robot localization and SLAM (Simultaneous Localization and Mapping) will be introduced within the framework of recursive state estimation. Finally, you will see how all these methods come together to enable robot planning and navigation, allowing robots to move autonomously and efficiently."
      },
      CS431: {
        lecturer: "Ralf Bierig/ Tim McCarthy / VC/ Hao Wu",
        credits: 5,
        year: 4,
        overview:
          "In Advanced Concepts & Issues in Computer Science 2, you will explore a range of cutting-edge and complex topics in computer science through weekly seminars. These may include emerging technologies, advanced algorithms, cybersecurity challenges, artificial intelligence developments, and ethical issues in computing. The module will help you deepen your understanding of current trends and critical problems in the field, preparing you to tackle real-world challenges with a more advanced perspective."
      },
      CS434: {
        lecturer: "Peter Mooney",
        credits: 5,
        year: 4,
        overview:
          "In this module, Readings in the Foundations of Computer Science, you will explore the key ideas that shaped computer science, starting from the 1930s. You will learn about the historical background and scientific context of major breakthroughs in computation. By comparing different formal approaches to modeling computation, you will gain a deeper understanding of how computers process information. You will also study important results in the field, analyze key sections of foundational texts, and critically assess their significance. This module will help you appreciate the core principles that continue to influence modern computing."
      },
      MP472: {
        lecturer: "N/A",
        credits: 5,
        year: 4,
        overview:
          "In this module, Quantum Information Processing, you will explore how quantum information differs from classical information. You'll learn about quantum communication, cryptography, and teleportation, as well as key quantum algorithms and computational complexity. The course covers quantum error correction, fault tolerance, and topological quantum computing, ensuring reliability in quantum systems. Finally, you will examine the physical realization of quantum computing, understanding the technologies behind it."
      },
      CS440: {
        lecturer: "N/A",
        credits: 15,
        year: 4,
        overview:
          "In the Final Year Project (CSSE) module, you will carry out an in-depth investigation into a topic of your choice related to computer science or its applications. You will work independently to develop an implementation or another useful model based on your research, with minimal supervision. This module will help you refine your problem-solving, research, and project management skills. By the end, you will complete a detailed project report that documents your work, findings, and conclusions."
      },
      
      
    // Add more modules here as needed
  };

  // Get the current module details (or fallback)
  function ModuleDetails() {
    const { moduleId } = useParams(); // Get module ID from the URL
    const navigate = useNavigate();
    const [module, setModule] = useState(null);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
      apiClient.getModuleById(moduleId)
        .then((data) => {
          setModule(data);
          setStatus("success");
        })
        .catch((error) => {
          setStatus(error.message === "Module not found" ? "not-found" : "error");
        });
    }, [moduleId]);

    if (status === "loading") {
      return <h2>Loading module...</h2>;
    }

    if (status === "not-found") {
      return <h2>Module not found</h2>;
    }

    if (status === "error") {
      return <h2>Unable to load module. Please try again.</h2>;
    }
  
    return (
      <div className="module-details-container">
        <button onClick={() => navigate(-1)} className="back-button">Back</button>
  
        <div className="module-card">
          <h1 className="module-title">{module.code} - {module.name}</h1>
          <div className="details-grid">
            <div className="detail-box">
              <strong>Lecturer:</strong> {module.lecturer}
            </div>
            <div className="detail-box">
              <strong>Credits:</strong> {module.credits}
            </div>
            <div className="detail-box">
              <strong>Year:</strong> {module.year}
            </div>
            <div className="detail-box">
              <strong>Semester:</strong> {module.semester}
            </div>
          </div>
  
          <div className="overview-box">
            <h2>Overview</h2>
            <p>{module.overview}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default ModuleDetails;