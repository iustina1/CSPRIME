# CSPRIME

CSPRIME is a full-stack web application developed as a final-year project to help computer science students navigate their degree[cite: 9]. It demonstrates how foundational first-year modules (such as data structures, algorithms, and core programming) form the building blocks for advanced topics, complex software engineering, and real-world industry applications[cite: 9].

##  Project Overview & Motivation

Throughout a computer science curriculum, students often view early modules as isolated subjects rather than essential foundations[cite: 9]. CSPRIME bridges this gap by providing an interactive, structured platform that maps out how first-year concepts connect to later-year coursework and career paths[cite: 9]. 

##  Tech Stack

* **Frontend:** React.js, React Router, CSS
* **Backend:** Node.js, Express.js (MVC Architecture)
* **Database & Authentication:** Firebase Firestore, Firebase Authentication, Firebase Admin SDK
* **Testing & Quality Assurance:** Jest, Supertest

##  Frontend Implementation

Built with a clean, modern design system, the React frontend features:
* **Dynamic Routing:** Seamless single-page application (SPA) navigation using React Router across Home, Modules, Topics, Analytics, FAQs, and Authentication views[cite: 9].
* **User Authentication:** Client-side integration with Firebase Auth supporting secure user registration, login flows, and error state handling.
* **Modular UI Components:** Organized directory structure (`src/`) separating components, styles, and assets for high code maintainability and reusability[cite: 9].

##  Backend Architecture & Services

The backend follows a strict Model-View-Controller (MVC) and service-repository pattern to ensure high scalability and separation of concerns:
* **RESTful Routes & Controllers:** Exposes clean API endpoints (`/api/v1/...`) for modules, topics, analytics, FAQs, and testimonials, backed by robust validation middleware[cite: 9].
* **Flexible Data Repositories:** Abstracts data retrieval to seamlessly switch between live **Firebase Firestore** collections and local development datasets.
* **Security & Resilience:** Implements industry-standard security layers using Helmet headers, rate limiting, dynamic CORS whitelisting, and secure token verification middleware.
* **Database Seeding:** Includes automated batch-seeding scripts (`seed.js`) to prepopulate Firestore with sample curriculum data while guarding against accidental production overwrites.

##  Evaluation & Future Scope

Evaluated through user testing feedback from students and peers, CSPRIME successfully met its usability and layout goals[cite: 9]. Future enhancements include implementing user-specific progress tracking dashboards and interactive support features.

To start program in terminal type in npm start, npm i, Cd csprime1
