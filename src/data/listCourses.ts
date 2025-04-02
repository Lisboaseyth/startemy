import { Course } from "@/interfaces/Course";

export const listCourse: Array<Course> = [
  {
    name: "Desenvolvimento Web Full Stack com React e Node.js",
    description:
      "Aprenda a desenvolver aplicações web modernas utilizando React no frontend e Node.js no backend.",
    image: "https://img-c.udemycdn.com/course/750x422/4505104_8592_8.jpg",
    type: "Javascript",
    content: [
      {
        name: "Módulo 1: Introdução ao Desenvolvimento Web",
        steps: [
          "O que é desenvolvimento web?",
          "Como funciona a internet?",
          "HTML e CSS básicos",
          "Primeiros passos com JavaScript",
        ],
      },
      {
        name: "Módulo 2: Fundamentos do React",
        steps: [
          "Criando seu primeiro projeto com Create React App",
          "Componentes e Props",
          "Estado e Hooks",
          "Gerenciamento de estado com Context API",
        ],
      },
    ],
    value: 499.0,
    warranty_time: 30,
    total_hours: 50,
    total_classes: 500,
    students: 1500,
    amount_students: 5000,
    author: {
      name: "João Silva",
      image:
        "https://cdn3.pixelcut.app/7/18/profile_photo_maker_hero_100866f715.jpg",
      description:
        "Desenvolvedor Full Stack com mais de 10 anos de experiência.",
    },
    reviews: [
      {
        evaluation_note: 5,
        review_text:
          "Curso excelente! Aprendi muito e consegui meu primeiro emprego como desenvolvedor.",
        date_review: "2024-06-15",
        evaluator_name: "Ana Souza",
      },
    ],
  },
  {
    name: "Inteligência Artificial com Python",
    description:
      "Aprenda a desenvolver aplicações de IA utilizando Python e frameworks como TensorFlow e PyTorch.",
    image:
      "https://www.unite.ai/wp-content/uploads/2022/04/AI-Python-Libraries.png",
    type: "Python",
    content: [
      {
        name: "Módulo 1: Introdução à IA",
        steps: [
          "História da Inteligência Artificial",
          "Aprendizado de Máquina vs. Aprendizado Profundo",
          "Instalação e Configuração do Ambiente",
        ],
      },
    ],
    value: 599.0,
    warranty_time: 30,
    total_hours: 60,
    total_classes: 400,
    students: 1200,
    amount_students: 3000,
    author: {
      name: "Carlos Mendes",
      image:
        "https://marketplace.canva.com/EAF5bhGQnwI/1/0/1600w/canva-foto-de-perfil-para-redes-sociais-gradiente-simples-clA8fVXSXyI.jpg",
      description:
        "Especialista em IA com experiência no desenvolvimento de modelos de aprendizado profundo.",
    },
    reviews: [
      {
        evaluation_note: 4,
        review_text:
          "Conteúdo muito rico, mas poderia ter mais exemplos práticos.",
        date_review: "2024-05-20",
        evaluator_name: "Roberto Lima",
      },
    ],
  },
  {
    name: "UX/UI Design para Web e Mobile",
    description:
      "Domine os princípios do design de experiência do usuário e crie interfaces incríveis para web e mobile.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MeUW8ACldQjLSl6KS_A6XkvBzl45R9IrAw&s",
    type: "Design",
    content: [
      {
        name: "Módulo 1: Fundamentos do Design UX/UI",
        steps: [
          "O que é UX e UI?",
          "Princípios de Design Centrado no Usuário",
          "Ferramentas de Design (Figma, Adobe XD)",
        ],
      },
    ],
    value: 399.0,
    warranty_time: 30,
    total_hours: 40,
    total_classes: 300,
    students: 900,
    amount_students: 2000,
    author: {
      name: "Mariana Ribeiro",
      image:
        "https://marketplace.canva.com/EAFaM2XhwLI/1/0/800w/canva-foto-de-perfil-para-instagram-gradiente-colorido-AmXrd-VLkfk.jpg",
      description:
        "Designer UX/UI com mais de 8 anos de experiência na criação de interfaces digitais.",
    },
    reviews: [
      {
        evaluation_note: 5,
        review_text:
          "Curso incrível! Aprendi muito sobre prototipagem e usabilidade.",
        date_review: "2024-08-10",
        evaluator_name: "Fernanda Alves",
      },
    ],
  },
];
