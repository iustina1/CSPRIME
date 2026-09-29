# CSPRIME

CSPRIME is a full-stack web application developed as a final-year project to help computer science students navigate their degree. It demonstrates how foundational first-year modules (such as data structures, algorithms, and core programming) form the building blocks for advanced topics, complex software engineering, and real-world industry applications.

##  Project Overview & Motivation

Throughout a computer science curriculum, students often view early modules as isolated subjects rather than essential foundations. CSPRIME bridges this gap by providing an interactive, structured platform that maps out how first-year concepts connect to later-year coursework and career paths. 

##  Tech Stack

* **Frontend:** React.js, React Router, CSS
* **Backend:** Node.js, Express.js (MVC Architecture)
* **Database & Authentication:** Firebase Firestore, Firebase Authentication, Firebase Admin SDK
* **Testing & Quality Assurance:** Jest, Supertest

##  Frontend Implementation

Built with a clean, modern design system, the React frontend features:
* **Dynamic Routing:** Seamless single-page application (SPA) navigation using React Router across Home, Modules, Topics, Analytics, FAQs, and Authentication views.
* **User Authentication:** Client-side integration with Firebase Auth supporting secure user registration, login flows, and error state handling.
* **Modular UI Components:** Organized directory structure (`src/`) separating components, styles, and assets for high code maintainability and reusability[cite: 9].

##  Backend Architecture & Services

The backend follows a strict Model-View-Controller (MVC) and service-repository pattern to ensure high scalability and separation of concerns:
* **RESTful Routes & Controllers:** Exposes clean API endpoints (`/api/v1/...`) for modules, topics, analytics, FAQs, and testimonials, backed by robust validation middleware[cite: 9].
* **Flexible Data Repositories:** Abstracts data retrieval to seamlessly switch between live **Firebase Firestore** collections and local development datasets.
* **Security & Resilience:** Implements industry-standard security layers using Helmet headers, rate limiting, dynamic CORS whitelisting, and secure token verification middleware.
* **Database Seeding:** Includes automated batch-seeding scripts (`seed.js`) to prepopulate Firestore with sample curriculum data while guarding against accidental production overwrites.

##  Evaluation & Future Scope

Evaluated through user testing feedback from students and peers, CSPRIME successfully met its usability and layout goals. Future enhancements include implementing user-specific progress tracking dashboards and interactive support features.

To start program in terminal type in npm start, npm i, Cd csprime1

Login/SignUp Page:

<img width="450" height="227" alt="login" src="https://github.com/user-attachments/assets/de09878f-531c-4af7-9207-94d3ef6fc445" />



HomePage:

<img width="449" height="193" alt="homepage" src="https://github.com/user-attachments/assets/9665ac27-2ce7-4014-9cff-bb926fcf9742" />


Modules Page:

<img width="423" height="192" alt="modules" src="https://github.com/user-attachments/assets/7f6ef6f7-5a19-4fb2-bbda-030d7e2672f7" />

Related Modules Page: 

<img width="325" height="170" alt="related modules page" src="https://github.com/user-attachments/assets/3db2f83a-4774-471c-9185-e8979069a9f5" />

Module Information Page:

<img width="444" height="214" alt="Modue info" src="https://github.com/user-attachments/assets/6cc7c97d-3cf9-4bc6-84a6-2b8fe6702bb9" />

FAQ Page:

<img width="329" height="166" alt="FAQ" src="https://github.com/user-attachments/assets/6a5b9cd9-ec7d-48cd-a392-47e51235e572" />











