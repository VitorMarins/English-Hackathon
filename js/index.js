const quiz = [
    {
      pergunta: 'What does the acronym "CRUD" stand for?',
      escolhas: ["Compute, Render, Upload, Debug", "Create, Read, Update, Delete", "Create, Run, Undo, Drop", "Connect, Retrieve, Update, Define"],
      resposta: "Create, Read, Update, Delete"
    },
    {
      pergunta: 'What is the main purpose of an "IDE"?',
      escolhas: ["It is a framework for building web applications.", "It is a hardware device for running software.", "It is a tool to help developers write, debug, and manage code.", "It is a tool to compile and deploy software automatically."],
      resposta: "It is a tool to help developers write, debug, and manage code."
    },
    {
      pergunta: 'What does the term "front-end" refer to in web development?',
      escolhas: ["The hardware components required for hosting websites.", "The server-side logic that manages databases.", "The part of a website or application that users interact with directly.", "A programming language specifically for UI design."],
      resposta: "The part of a website or application that users interact with directly."
    },
    {
      pergunta: 'What is a "query" in the context of databases?',
      escolhas: ["A request for data or information from a database.", "A script to automate data backups.", "A tool for managing database schemas.", "A command to reset database configurations."],
      resposta: "A request for data or information from a database."
    },
    {
      pergunta: 'What does "API" stand for, and what is its purpose?',
      escolhas: ["Application Processing Instance; it executes server commands.", "Automated Process Integration; it handles task scheduling.", "Application Programming Interface; it allows communication between software systems.", "Advanced Programming Index; it organizes code libraries."],
      resposta: "Application Programming Interface; it allows communication between software systems."
    },
    {
      pergunta: 'What is the meaning of "deployment" in software development?',
      escolhas: ["The removal of outdated software from a system.", "Writing code to develop an application.", "Configuring network firewalls for application security.", "The process of making an application available for use."],
      resposta: "The process of making an application available for use."
    },
    {
      pergunta: 'What is the purpose of a "version control system" like Git?',
      escolhas: ["To track changes in code and enable collaboration among developers.", "To debug applications in real-time.", "To generate automated backups of databases.", "To manage software deployment pipelines."],
      resposta: "To track changes in code and enable collaboration among developers."
    },
    {
      pergunta: 'What does the term "back-end" mean in web development?',
      escolhas: ["The server-side of an application where the logic, database, and server are managed.", "The visual design of a website's user interface.", "A system for managing client-side interactions.", "A software package for mobile application development."],
      resposta: "The server-side of an application where the logic, database, and server are managed."
    },
    {
      pergunta: 'What is the function of a "framework" in software development?',
      escolhas: ["A pre-written codebase that helps developers build applications more efficiently.", "A server used to host web applications.", "A database management tool for large-scale projects.", "A coding style guide for writing consistent code."],
      resposta: "A pre-written codebase that helps developers build applications more efficiently."
    },
    {
      pergunta: 'What does "debugging" mean in programming?',
      escolhas: ["Writing test cases to prevent errors in software.", "The process of identifying and fixing errors in code.", "Automating software updates and maintenance.", "Configuring network settings for application servers"],
      resposta: "The process of identifying and fixing errors in code."
    },
  ];
  
  let perguntaAtual = 0;
  let pontuacao = 0;
  
  function loadPergunta() {
    const perguntaElement = document.getElementById("pergunta");
    const optionsElement = document.getElementById("escolhas");
    optionsElement.innerHTML = "";
    const pergunta = quiz[perguntaAtual];
    perguntaElement.textContent = pergunta.pergunta;
    pergunta.escolhas.forEach(escolha => {
      const button = document.createElement("button");
      button.textContent = escolha;
      button.onclick = () => conferirRespostas(escolha);
      optionsElement.appendChild(button);
    });
  }
  
  function conferirRespostas(respostaPergunta) {
    const pergunta = quiz[perguntaAtual];
    if (respostaPergunta === pergunta.resposta) {
      pontuacao++;
    }
    document.getElementById("pontuacao").textContent = `Pontuação: ${pontuacao}`;
    proximaPergunta();
  }
  
  function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < quiz.length) {
      loadPergunta();
    } else {
      document.getElementById("pergunta").textContent = "Quiz Concluído!";
      document.getElementById("escolhas").innerHTML = "";
    }
  }
  
  loadPergunta();