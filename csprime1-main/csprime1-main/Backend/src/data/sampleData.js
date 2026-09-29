const modules = [
  { id: 'CS161', code: 'CS161', name: 'Introduction to Computer Science I', lecturer: 'Aiden Mooney', credits: 7.5, semester: 1, year: 1, overview: 'This module introduces students to fundamental programming concepts, problem-solving techniques, and the basics of algorithm design using a high-level programming language such as Java.', topicIds: ['programming', 'algorithms', 'problem-solving'] },
  { id: 'CS171', code: 'CS171', name: 'Computer Systems I', lecturer: 'Stephen Brown / Joe Timoney', credits: 7.5, semester: 1, year: 1, overview: 'Use visual programming tools to create computer systems, understand the breadth of topics in computer science, and solve problems by designing algorithms.', topicIds: ['systems', 'programming', 'algorithms'] },
  { id: 'MT101SC', code: 'MT101SC', name: 'Differential Calculus', lecturer: 'Detta Dickinson / Ollie Mason', credits: 5, semester: 1, year: 1, overview: 'Differential calculus introduces rates of change, derivatives, optimization, and modeling through real-variable functions.', topicIds: ['calculus', 'mathematics'] },
  { id: 'CS162', code: 'CS162', name: 'Introduction to Computer Science II', lecturer: 'BD', credits: 7.5, semester: 2, year: 1, overview: 'This module introduces automata, formal languages, regular expressions, grammars, and theoretical models of computation.', topicIds: ['theory', 'languages', 'automata'] },
  { id: 'CS172', code: 'CS172', name: 'Computer Systems II', lecturer: 'Kevin Casey', credits: 7.5, semester: 2, year: 1, overview: 'Students explore logic, proof techniques, algorithms, recursion, and formal reasoning about programs using declarative programming.', topicIds: ['logic', 'proofs', 'programming'] },
  { id: 'MT102SC', code: 'MT102SC', name: 'Integral Calculus', lecturer: 'Stephen McGuire', credits: 5, semester: 2, year: 1, overview: 'Integral calculus develops anti-derivatives, area, volume, and numerical integration methods with applications across science and engineering.', topicIds: ['calculus', 'mathematics'] },
  { id: 'MT113SC', code: 'MT113SC', name: 'Linear Algebra', lecturer: 'Mark Walsh', credits: 5, semester: 1, year: 1, overview: 'This module develops matrix methods, systems of linear equations, determinants, vector spaces, and linear transformations.', topicIds: ['linear-algebra', 'mathematics'] },
  { id: 'CS130', code: 'CS130', name: 'Databases', lecturer: 'LK', credits: 5, semester: 1, year: 2, overview: 'Students learn conceptual modeling, relational databases, SQL, data integrity, and data analytics.', topicIds: ['databases', 'sql', 'data'] },
  { id: 'CS210', code: 'CS210', name: 'Algorithms & Data Structures 1', lecturer: 'Phil Maguire', credits: 5, semester: 1, year: 2, overview: 'This module covers searching, sorting, recursion, abstract data types, and algorithmic efficiency.', topicIds: ['algorithms', 'data-structures', 'java'] },
  { id: 'CS220', code: 'CS220', name: 'Computer Architecture', lecturer: 'Dermot Kelly', credits: 5, semester: 2, year: 2, overview: 'Students explore numeric representation, logic design, memory systems, and sequential circuits in computer architecture.', topicIds: ['architecture', 'hardware'] },
  { id: 'CS265', code: 'CS265', name: 'Software Testing', lecturer: 'RB', credits: 5, semester: 1, year: 2, overview: 'Software testing covers testing principles, techniques, automation, and quality assurance in software development.', topicIds: ['software-testing', 'quality-assurance'] },
  { id: 'MT201A', code: 'MT201A', name: 'Calculus 3', lecturer: 'Dr. Isaac Burke', credits: 5, semester: 1, year: 2, overview: 'This module focuses on multidimensional calculus, partial derivatives, gradients, optimization, and series.', topicIds: ['calculus', 'mathematics'] },
  { id: 'ST221', code: 'ST221', name: 'Introduction to Statistics', lecturer: 'Galatia Cleanthous', credits: 5, semester: 1, year: 2, overview: 'Students cover probability, probability distributions, inferential statistics, and regression.', topicIds: ['statistics', 'data'] },
  { id: 'CS230', code: 'CS230', name: 'Web Information Processing', lecturer: 'John Keating', credits: 7.5, semester: 2, year: 2, overview: 'Students learn web architecture, client and server technologies, and modern web development techniques.', topicIds: ['web', 'javascript', 'backend'] },
  { id: 'CS240', code: 'CS240', name: 'Operating Systems, Communications & Concurrency', lecturer: 'Dermot Kelly', credits: 5, semester: 2, year: 2, overview: 'This module studies operating systems, scheduling, memory, protection, concurrency, and IPC.', topicIds: ['operating-systems', 'concurrency', 'networks'] },
  { id: 'CS211', code: 'CS211', name: 'Algorithms & Data Structures 2', lecturer: 'Phil Maguire', credits: 5, semester: 2, year: 2, overview: 'Advanced algorithm strategies, tree structures, graphs, hashing, and efficiency analysis are explored.', topicIds: ['algorithms', 'data-structures'] },
  { id: 'CS280', code: 'CS280', name: 'Introduction to UI, UX & Interaction Design', lecturer: 'Ralf Bierig', credits: 5, semester: 2, year: 2, overview: 'This module covers user experience, user interfaces, prototyping, and usability evaluations.', topicIds: ['ui-ux', 'interaction-design'] },
  { id: 'CS335', code: 'CS335', name: 'Software Engineering & Software Process', lecturer: 'Ralf Bierig', credits: 5, semester: 2, year: 2, overview: 'The module covers software process, testing, project planning, and software architecture.', topicIds: ['software-engineering', 'project-management'] },
  { id: 'CS355', code: 'CS355', name: 'Theory of Computation', lecturer: 'Peter Mooney', credits: 5, semester: 2, year: 2, overview: 'This module introduces regular languages, context-free grammars, automata, and limits of computation.', topicIds: ['theory', 'computation'] },
  { id: 'CS264', code: 'CS264', name: 'Software Design', lecturer: 'EG', credits: 5, semester: 1, year: 3, overview: 'Object-oriented analysis and design using C++ with emphasis on reusable and extensible software.', topicIds: ['software-design', 'c-plus-plus', 'object-oriented-programming'] },
  { id: 'CS310', code: 'CS310', name: 'Programming Languages & Compilers', lecturer: 'EG', credits: 5, semester: 2, year: 3, overview: 'Students study languages, formal grammars, parsing, code generation, optimization, and compilers.', topicIds: ['compilers', 'languages'] },
  { id: 'CS320', code: 'CS320', name: 'Computer Networks', lecturer: 'Bryan Hennelly', credits: 5, semester: 1, year: 3, overview: 'This module explores packet switching, routing, transport protocols, and network performance.', topicIds: ['networks', 'protocols'] },
  { id: 'CS353', code: 'CS353', name: 'Team Project', lecturer: 'Kevin Casey', credits: 5, semester: 1, year: 3, overview: 'Students work in teams to design, build, test, and deploy a mobile or web application.', topicIds: ['software-engineering', 'teamwork', 'projects'] },
  { id: 'CS357', code: 'CS357', name: 'Software Verification', lecturer: 'Hao Wu', credits: 5, semester: 1, year: 3, overview: 'Formal methods, model checking, and program correctness are covered in this module.', topicIds: ['verification', 'software-engineering'] },
  { id: 'CS370', code: 'CS370', name: 'Computation & Complexity', lecturer: 'Joseph Duffin / Joe Timoney', credits: 5, semester: 1, year: 3, overview: 'The module covers Turing machines, undecidability, complexity classes, and computational difficulty.', topicIds: ['complexity', 'theory'] },
  { id: 'CS362', code: 'CS362', name: 'Work Placement Documentation', lecturer: 'N/A', credits: 5, semester: 2, year: 3, overview: 'This module helps students prepare a professional CV, placement report, and reflective workplace documentation.', topicIds: ['professional-development'] },
  { id: 'CS363', code: 'CS363', name: 'Industrial Work Placement', lecturer: 'N/A', credits: 25, semester: 2, year: 3, overview: 'Students complete a six-month industrial placement and reflect on their workplace contribution.', topicIds: ['work-placement'] },
  { id: 'CS322', code: 'CS322', name: 'Music Programming 2', lecturer: 'Joe Timoney / Behnam Faghih', credits: 5, semester: 1, year: 4, overview: 'Students build software synthesizers and learn signal manipulation, real-time audio processing, and MIDI.', topicIds: ['audio', 'programming'] },
  { id: 'CS356', code: 'CS356', name: 'Image & Optical Processing', lecturer: 'Thomas Naughton', credits: 5, semester: 1, year: 4, overview: 'Students study image processing, Fourier transforms, convolution, filtering, and optical signal processing.', topicIds: ['image-processing', 'signals'] },
  { id: 'CS401', code: 'CS401', name: 'Machine Learning & Neural Networks', lecturer: 'Barak Pearlmutter', credits: 5, semester: 1, year: 4, overview: 'This module introduces supervised, unsupervised, and reinforcement learning with neural network architectures.', topicIds: ['machine-learning', 'ai', 'neural-networks'] },
  { id: 'CS404', code: 'CS404', name: 'AI & Language Processing', lecturer: 'Diarmuid O’Donoghue', credits: 5, semester: 1, year: 4, overview: 'Students explore natural language processing, text understanding, and language-based AI systems.', topicIds: ['ai', 'nlp'] },
  { id: 'CS410', code: 'CS410', name: 'Computer Vision', lecturer: 'Paul Kelly', credits: 5, semester: 1, year: 4, overview: 'The module develops understanding of feature extraction, image recognition, segmentation, and vision systems.', topicIds: ['computer-vision', 'ai'] },
  { id: 'CS416', code: 'CS416', name: 'Cryptography', lecturer: 'Marie Farrell', credits: 5, semester: 1, year: 4, overview: 'Students learn encryption, cryptanalysis, hashing, security protocols, and modern security principles.', topicIds: ['cryptography', 'security'] },
  { id: 'CS422', code: 'CS422', name: 'Robotics & Automation', lecturer: 'TBD', credits: 5, semester: 1, year: 4, overview: 'This module explores robot architectures, control systems, sensing, and automation design.', topicIds: ['robotics', 'automation'] },
  { id: 'CS424', code: 'CS424', name: 'Programming Language Design & Semantics', lecturer: 'TBD', credits: 5, semester: 1, year: 4, overview: 'The course covers language semantics, runtime behavior, programming paradigms, and language design principles.', topicIds: ['programming-languages', 'semantics'] },
  { id: 'CS430', code: 'CS430', name: 'Advanced Concepts & Issues in Computer Science 1', lecturer: 'TBD', credits: 5, semester: 1, year: 4, overview: 'Students investigate current issues in AI, data science, cybersecurity, and emerging research topics.', topicIds: ['research', 'ai', 'cybersecurity'] },
  { id: 'CS433', code: 'CS433', name: 'Advanced Computer Architecture', lecturer: 'TBD', credits: 5, semester: 1, year: 4, overview: 'Advanced topics in computer architecture include high-performance design, memory hierarchy, and parallelism.', topicIds: ['architecture', 'hardware'] },
  { id: 'CS402', code: 'CS402', name: 'Parallel & Distributed Systems', lecturer: 'TBD', credits: 5, semester: 2, year: 4, overview: 'Students learn parallelism, distributed coordination, resource management, and system scalability.', topicIds: ['distributed-systems', 'parallel-computing'] },
  { id: 'CS423', code: 'CS423', name: 'Designing for Virtual Environments', lecturer: 'TBD', credits: 5, semester: 2, year: 4, overview: 'The module focuses on immersive design, virtual environments, and interactive systems.', topicIds: ['virtual-reality', 'ui-ux'] },
  { id: 'CS425', code: 'CS425', name: 'Audio & Speech Processing', lecturer: 'TBD', credits: 5, semester: 2, year: 4, overview: 'The module covers signal processing, speech recognition, and multimedia audio techniques.', topicIds: ['audio', 'speech-processing'] },
  { id: 'CS426', code: 'CS426', name: 'Computer Graphics', lecturer: 'TBD', credits: 5, semester: 2, year: 4, overview: 'Students explore rendering, graphics pipelines, geometric modeling, and visualization techniques.', topicIds: ['graphics', 'visualization'] },
  { id: 'CS427', code: 'CS427', name: 'Autonomous Mobile Robotics', lecturer: 'TBD', credits: 5, semester: 2, year: 4, overview: 'The module studies perception, control, planning, and autonomy in robotic systems.', topicIds: ['robotics', 'automation'] },
  { id: 'CS431', code: 'CS431', name: 'Advanced Concepts & Issues in Computer Science 2', lecturer: 'TBD', credits: 5, semester: 2, year: 4, overview: 'Students explore emerging technologies, advanced research topics, and ethical concerns in computing.', topicIds: ['research', 'ethics', 'ai'] },
  { id: 'CS434', code: 'CS434', name: 'Reading in the Foundations of Computer Science', lecturer: 'TBD', credits: 5, semester: 2, year: 4, overview: 'Students read research literature and synthesize key ideas from foundational computer science topics.', topicIds: ['research', 'theory'] },
  { id: 'MP472', code: 'MP472', name: 'Quantum Information Processing', lecturer: 'TBD', credits: 5, semester: 2, year: 4, overview: 'This module introduces quantum computing principles and information processing models.', topicIds: ['quantum-computing', 'math'] },
  { id: 'CS440', code: 'CS440', name: 'Final Year Project CSSE', lecturer: 'TBD', credits: 5, semester: 1, year: 4, overview: 'Students complete an extensive project that integrates research, design, implementation, and evaluation.', topicIds: ['project-work', 'research'] }
];

const topics = [
  { id: 'programming', name: 'Programming' },
  { id: 'algorithms', name: 'Algorithms' },
  { id: 'mathematics', name: 'Mathematics' },
  { id: 'calculus', name: 'Calculus' },
  { id: 'databases', name: 'Databases' },
  { id: 'software-engineering', name: 'Software Engineering' },
  { id: 'software-testing', name: 'Software Testing' },
  { id: 'ui-ux', name: 'UI/UX' },
  { id: 'networks', name: 'Networks' },
  { id: 'robotics', name: 'Robotics' },
  { id: 'ai', name: 'AI' },
  { id: 'computer-vision', name: 'Computer Vision' },
  { id: 'cryptography', name: 'Cryptography' },
  { id: 'research', name: 'Research' }
];

const applications = [
  { id: 'application_1', name: 'Software Developer', description: 'Use foundational algorithms and programming techniques to build production systems.' },
  { id: 'application_2', name: 'Data Analyst', description: 'Apply databases, statistics, and modeling skills to interpret large datasets.' },
  { id: 'application_3', name: 'Security Engineer', description: 'Use cryptography and systems understanding to secure software and networks.' },
  { id: 'application_4', name: 'Robotics Engineer', description: 'Translate control theory, perception, and automation into physical systems.' },
  { id: 'application_5', name: 'Machine Learning Engineer', description: 'Build predictive systems using statistics, optimization and neural networks.' }
];

const skills = [
  { id: 'skill_1', name: 'Problem Solving', description: 'Ability to decompose problems and design solutions.' },
  { id: 'skill_2', name: 'Algorithm Design', description: 'Ability to reason about efficiency and correctness.' },
  { id: 'skill_3', name: 'Systems Thinking', description: 'Understanding hardware, software, and operating constraints.' },
  { id: 'skill_4', name: 'Data Analysis', description: 'Working with structured and unstructured data to infer insights.' },
  { id: 'skill_5', name: 'Security Awareness', description: 'Understanding secure design, threats, and protection methods.' }
];

const analytics = [
  {
    id: 'analytics_CS161',
    foundationModuleId: 'CS161',
    relatedModuleIds: ['CS210', 'CS264', 'CS401'],
    applicationIds: ['application_1', 'application_2'],
    skillIds: ['skill_1', 'skill_2']
  },
  {
    id: 'analytics_CS162',
    foundationModuleId: 'CS162',
    relatedModuleIds: ['CS355', 'CS370', 'CS416'],
    applicationIds: ['application_1', 'application_3'],
    skillIds: ['skill_1', 'skill_2', 'skill_5']
  },
  {
    id: 'analytics_CS171',
    foundationModuleId: 'CS171',
    relatedModuleIds: ['CS401', 'CS410', 'CS422', 'CS425', 'CS416', 'CS423'],
    applicationIds: ['application_4', 'application_5', 'application_3'],
    skillIds: ['skill_3', 'skill_1', 'skill_4']
  },
  {
    id: 'analytics_MT101SC',
    foundationModuleId: 'MT101SC',
    relatedModuleIds: ['CS210', 'CS310', 'CS401'],
    applicationIds: ['application_5', 'application_2'],
    skillIds: ['skill_1', 'skill_4']
  },
  {
    id: 'analytics_MT102SC',
    foundationModuleId: 'MT102SC',
    relatedModuleIds: ['CS370', 'CS401'],
    applicationIds: ['application_2', 'application_5'],
    skillIds: ['skill_1', 'skill_4']
  },
  {
    id: 'analytics_MT113SC',
    foundationModuleId: 'MT113SC',
    relatedModuleIds: ['CS422', 'CS426'],
    applicationIds: ['application_4', 'application_5'],
    skillIds: ['skill_1', 'skill_3']
  },
  {
    id: 'analytics_CS172',
    foundationModuleId: 'CS172',
    relatedModuleIds: ['CS130', 'CS370', 'CS416'],
    applicationIds: ['application_2', 'application_3'],
    skillIds: ['skill_1', 'skill_2', 'skill_5']
  }
];

const faqs = [
  { id: 'faq_1', question: 'How do I transfer into the CSSE course?', answer: 'To transfer into the CSSE course, you need to have completed specific modules, including CS161, CS162, CS171, CS172 and mathematics modules such as MT101SC, MT102SC, and MT113SC.', order: 1 },
  { id: 'faq_2', question: 'Which topics will set my foundation in programming?', answer: 'Focus on data types, variables, loops, conditionals, functions, data structures, algorithms, and object-oriented principles.', order: 2 },
  { id: 'faq_3', question: 'How can I prepare for coding interviews?', answer: 'Practice data structures and algorithms, solve coding problems, and review systems design fundamentals.', order: 3 },
  { id: 'faq_4', question: 'How do introductory computer science topics contribute to advanced modules?', answer: 'Introductory modules build the conceptual and practical foundations for later topics in software engineering, AI, distributed systems, and security.', order: 4 },
  { id: 'faq_5', question: 'How does mathematics relate to computer science?', answer: 'Mathematics underpins algorithms, machine learning, complexity theory, cryptography, and systems analysis.', order: 5 }
];

const testimonials = [
  { id: 'testimonial_1', quote: 'The course challenged me to think critically and gave me the practical skills needed for real software projects.', name: 'John Doe', graduationYear: 2023, order: 1 },
  { id: 'testimonial_2', quote: 'The structure of the program helped me build confidence in coding, research, and teamwork.', name: 'Jane Smith', graduationYear: 2022, order: 2 },
  { id: 'testimonial_3', quote: 'The blend of theory and application made the degree relevant to both industry and academic research.', name: 'Robert Lee', graduationYear: 2020, order: 3 }
];

module.exports = {
  modules,
  topics,
  analytics,
  applications,
  skills,
  faqs,
  testimonials
};
