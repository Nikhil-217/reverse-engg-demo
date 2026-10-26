// The GATE Grind - Frontend Prototype
// Real-time reverse-engineered interactive logic

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // Data: Branches & Sample Questions
  // --------------------------------------------------------------------------
  const branches = [
    { code: "AE", name: "Aerospace Engineering", papers: "8 PAPERS · 2019–2026", letter: "A", subject: "Aerodynamics, Propulsion, Flight Mechanics" },
    { code: "AG", name: "Agricultural Engineering", papers: "7 PAPERS · 2020–2026", letter: "A", subject: "Farm Machinery, Soil and Water Conservation" },
    { code: "AR", name: "Architecture and Planning", papers: "11 PAPERS · 2021–2026", letter: "A", subject: "Architecture, Urban Planning, Building Construction" },
    { code: "BM", name: "Biomedical Engineering", papers: "7 PAPERS · 2020–2026", letter: "B", subject: "Bioinstrumentation, Biomechanics, Medical Imaging" },
    { code: "BT", name: "Biotechnology", papers: "8 PAPERS · 2019–2026", letter: "B", subject: "Biochemistry, Microbiology, Molecular Biology" },
    { code: "CE", name: "Civil Engineering", papers: "22 PAPERS · 2016–2026", letter: "C", subject: "Structural, Geotechnical, Water Resources, Transportation" },
    { code: "CH", name: "Chemical Engineering", papers: "7 PAPERS · 2020–2026", letter: "C", subject: "Process Calculations, Thermodynamics, Fluid Flow" },
    { code: "CS-IT", name: "Computer Science and IT", papers: "27 PAPERS · 2010–2026", letter: "C", subject: "Algorithms, OS, DBMS, Networks, Theory of Computation" },
    { code: "CY", name: "Chemistry", papers: "8 PAPERS · 2019–2026", letter: "C", subject: "Physical, Inorganic, Organic Chemistry & Spectroscopy" },
    { code: "DA", name: "Data Science and Artificial Intelligence", papers: "3 PAPERS · 2024–2026", letter: "D", subject: "Probability, Statistics, Machine Learning, Python, AI" },
    { code: "EC", name: "Electronics and Communication Engineering", papers: "19 PAPERS · 2014–2026", letter: "E", subject: "Signals & Systems, Analog/Digital Circuits, Communications" },
    { code: "EE", name: "Electrical Engineering", papers: "17 PAPERS · 2014–2026", letter: "E", subject: "Electrical Machines, Power Systems, Control Systems" },
    { code: "ES", name: "Environmental Science and Engineering", papers: "6 PAPERS · 2021–2026", letter: "E", subject: "Environmental Chemistry, Microbiology, Water Supply" },
    { code: "IN", name: "Instrumentation Engineering", papers: "7 PAPERS · 2020–2026", letter: "I", subject: "Electrical Circuits, Sensors & Industrial Instrumentation" },
    { code: "MA", name: "Mathematics", papers: "7 PAPERS · 2020–2026", letter: "M", subject: "Linear Algebra, Real & Complex Analysis, ODE/PDE" },
    { code: "ME", name: "Mechanical Engineering", papers: "19 PAPERS · 2016–2026", letter: "M", subject: "Applied Mechanics, Design, Fluid Mechanics, Thermal Sciences" },
    { code: "MN", name: "Mining Engineering", papers: "6 PAPERS · 2021–2026", letter: "M", subject: "Mine Development, Geomechanics, Mine Ventilation" },
    { code: "MT", name: "Metallurgical Engineering", papers: "8 PAPERS · 2019–2026", letter: "M", subject: "Thermodynamics & Kinetics, Extractive Metallurgy" },
    { code: "PH", name: "Physics", papers: "7 PAPERS · 2020–2026", letter: "P", subject: "Mathematical Physics, Quantum Mechanics, Solid State Physics" },
    { code: "PI", name: "Production and Industrial Engineering", papers: "7 PAPERS · 2020–2026", letter: "P", subject: "Metal Casting & Forming, Machining, Industrial Management" },
    { code: "ST", name: "Statistics", papers: "7 PAPERS · 2020–2026", letter: "S", subject: "Probability, Stochastic Processes, Inference, Regression" },
    { code: "XH", name: "Humanities and Social Sciences", papers: "6 PAPERS · 2021–2026", letter: "X", subject: "Economics, English, Linguistics, Philosophy, Psychology" }
  ];

  const questions = [
    {
      id: "gate-2024-cs-q1",
      paper: "GATE 2024 CS (CS1)",
      branch: "CS-IT",
      year: "2024",
      qNum: 1,
      title: "GATE 2024 CS (CS1) – Question 1",
      subject: "General Aptitude",
      topic: "Analytical Aptitude: Logical Reasoning, Deduction and Analogy",
      marks: "1 mark",
      type: "Multiple choice",
      text: "If '→' denotes increasing order of intensity, then the meaning of the words [dry → arid → parched] is analogous to [diet → fast → _________]. Which one of the given options is appropriate to fill the blank?",
      options: [
        { id: "A", label: "A. starve" },
        { id: "B", label: "B. reject" },
        { id: "C", label: "C. feast" },
        { id: "D", label: "D. deny" }
      ],
      correct: "A",
      explanation: "The first sequence increases the severity of dryness:\n• Normal lack of water (\"dry\")\n• Extreme geographical dryness (\"arid\")\n• Severe desiccation and cracking (\"parched\")\n\nThe corresponding food sequence should progress from voluntarily restricting food (\"diet\"), to completely abstaining from eating for a period (\"fast\"), to severe deprivation and life-threatening hunger (\"starve\").\n\nThus (A) starve is the correct answer."
    },
    {
      id: "gate-2024-cs-q2",
      paper: "GATE 2024 CS (CS1)",
      branch: "CS-IT",
      year: "2024",
      qNum: 2,
      title: "GATE 2024 CS (CS1) – Question 2",
      subject: "Data Structures & Algorithms",
      topic: "Binary Search Trees & Traversals",
      marks: "2 marks",
      type: "Multiple choice",
      text: "Consider a Binary Search Tree (BST) constructed by inserting the following distinct integers one by one into an initially empty BST: 45, 23, 78, 12, 34, 67, 89, 56. Which of the following is the post-order traversal sequence of the resulting tree?",
      options: [
        { id: "A", label: "A. 12, 34, 23, 56, 67, 89, 78, 45" },
        { id: "B", label: "B. 12, 23, 34, 45, 56, 67, 78, 89" },
        { id: "C", label: "C. 45, 23, 12, 34, 78, 67, 56, 89" },
        { id: "D", label: "D. 34, 12, 23, 56, 89, 67, 78, 45" }
      ],
      correct: "A",
      explanation: "Constructing the BST step-by-step:\n• Root = 45\n• Left subtree of 45: 23, with left child 12 and right child 34\n• Right subtree of 45: 78, with left child 67 (having left child 56) and right child 89\n\nPost-order traversal visits Left Subtree, Right Subtree, then Root node:\n• Left subtree (rooted at 23): Left=12, Right=34, Node=23  => [12, 34, 23]\n• Right subtree (rooted at 78): Left=(56, 67), Right=89, Node=78 => [56, 67, 89, 78]\n• Finally Root=45\nResult sequence: 12, 34, 23, 56, 67, 89, 78, 45."
    },
    {
      id: "gate-2023-cs-q3",
      paper: "GATE 2023 CS",
      branch: "CS-IT",
      year: "2023",
      qNum: 3,
      title: "GATE 2023 CS – Question 3",
      subject: "Operating Systems",
      topic: "Process Synchronization & Semaphores",
      marks: "1 mark",
      type: "Multiple choice",
      text: "A counting semaphore S is initialized to 10. Then, 12 P (wait) operations and 7 V (signal) operations are completed on S in an arbitrary order. What is the current value of the semaphore S?",
      options: [
        { id: "A", label: "A. 5" },
        { id: "B", label: "B. 3" },
        { id: "C", label: "C. 2" },
        { id: "D", label: "D. 0" }
      ],
      correct: "A",
      explanation: "Definition of Semaphore operations:\n• Initial value S = 10\n• Each P(S) operation decrements S by 1\n• Each V(S) operation increments S by 1\n\nCurrent value = Initial + (# of V signals) - (# of P waits)\nCurrent value = 10 + 7 - 12 = 17 - 12 = 5.\n\nHence, Option (A) is correct."
    }
  ];

  // --------------------------------------------------------------------------
  // State
  // --------------------------------------------------------------------------
  let currentLetter = "ALL";
  let searchKeyword = "";
  let activeTabMode = "paper"; // "paper" or "subject"
  let currentQuestionIdx = 0;
  let userAnswers = {}; // { [questionIdx]: selectedOptionId }
  let currentBranchIdx = 7; // Computer Science by default

  // --------------------------------------------------------------------------
  // Feature 1: Theme Switcher (Light / Dark Mode with LocalStorage)
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('pyq-gate-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('pyq-gate-theme', 'light');
    }
  }

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    applyTheme(isDark ? 'light' : 'dark');
  });

  // --------------------------------------------------------------------------
  // Feature 2: Branch Directory Rendering, Live Search & Alphabet Filter
  // --------------------------------------------------------------------------
  const branchGridEl = document.getElementById('branchCardsGrid');
  const branchSearchInput = document.getElementById('branchSearchInput');
  const branchSearchBtn = document.getElementById('branchSearchBtn');
  const alphabetBar = document.getElementById('alphabetBar');
  const tabByPaper = document.getElementById('tabByPaper');
  const tabBySubject = document.getElementById('tabBySubject');

  function renderBranchCards() {
    branchGridEl.innerHTML = '';

    const filtered = branches.filter(b => {
      // Letter filter
      const matchesLetter = (currentLetter === "ALL") || (b.letter === currentLetter);
      
      // Keyword filter
      const q = searchKeyword.toLowerCase().trim();
      const matchesKeyword = !q || 
        b.name.toLowerCase().includes(q) || 
        b.code.toLowerCase().includes(q) || 
        b.subject.toLowerCase().includes(q);

      return matchesLetter && matchesKeyword;
    });

    if (filtered.length === 0) {
      branchGridEl.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 32px; text-align: center; border: 1.5px dashed var(--border-strong); border-radius: 4px;">
          <p style="font-weight: 700; margin-bottom: 6px;">No branch papers matching "${searchKeyword}"</p>
          <p style="font-size: 0.8rem; color: var(--text-muted);">Try searching for "CS", "Data", "Mechanical", or reset the filter.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(b => {
      const card = document.createElement('div');
      card.className = 'branch-card';
      
      const subtext = (activeTabMode === 'subject') ? b.subject : b.papers;

      card.innerHTML = `
        <div class="branch-card-left">
          <div class="branch-badge">[ ${b.code} ]</div>
          <div class="branch-info">
            <span class="branch-name">${b.name}</span>
            <span class="branch-papers-count">${subtext}</span>
          </div>
        </div>
        <div class="branch-arrow">&rarr;</div>
      `;

      card.addEventListener('click', () => {
        selectBranch(b.name);
        document.getElementById('solverSection').scrollIntoView({ behavior: 'smooth' });
      });

      branchGridEl.appendChild(card);
    });
  }

  // Alphabet chip handlers
  alphabetBar.addEventListener('click', (e) => {
    const chip = e.target.closest('.alpha-chip');
    if (!chip) return;

    alphabetBar.querySelectorAll('.alpha-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    currentLetter = chip.dataset.letter;
    renderBranchCards();
  });

  // Search handlers
  branchSearchInput.addEventListener('input', (e) => {
    searchKeyword = e.target.value;
    renderBranchCards();
  });

  branchSearchBtn.addEventListener('click', () => {
    searchKeyword = branchSearchInput.value;
    renderBranchCards();
  });

  // Tab switchers (By Paper vs By Subject)
  tabByPaper.addEventListener('click', () => {
    activeTabMode = 'paper';
    tabByPaper.classList.add('active');
    tabBySubject.classList.remove('active');
    renderBranchCards();
  });

  tabBySubject.addEventListener('click', () => {
    activeTabMode = 'subject';
    tabBySubject.classList.add('active');
    tabByPaper.classList.remove('active');
    renderBranchCards();
  });

  // --------------------------------------------------------------------------
  // Feature 3: Hero Branch Rotator, Ticker & Sticky Note Jumps
  // --------------------------------------------------------------------------
  const heroBranchNameEl = document.getElementById('heroBranchName');
  const branchTickerEl = document.getElementById('branchTicker');

  function selectBranch(name) {
    heroBranchNameEl.textContent = name;
  }

  // Populate branch ticker in hero
  branches.forEach((b, idx) => {
    const span = document.createElement('span');
    span.className = 'branch-ticker-item';
    span.textContent = b.code + (idx < branches.length - 1 ? ' /' : '');
    span.addEventListener('click', () => {
      selectBranch(b.name);
      searchKeyword = b.code;
      branchSearchInput.value = b.code;
      renderBranchCards();
      document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' });
    });
    branchTickerEl.appendChild(span);
  });

  // Clicking on hero branch cycles it
  heroBranchNameEl.addEventListener('click', () => {
    currentBranchIdx = (currentBranchIdx + 1) % branches.length;
    selectBranch(branches[currentBranchIdx].name);
  });

  // Sticky Notes Click Handler (Tap a note to jump in)
  document.querySelectorAll('.sticky-note').forEach(note => {
    note.addEventListener('click', () => {
      const target = note.dataset.target;
      if (target === 'pyq' || target === 'checkpoints' || target === 'tests') {
        document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' });
      } else if (target === 'aptitude' || target === 'weakpoints') {
        currentQuestionIdx = 0;
        loadQuestion(0);
        document.getElementById('solverSection').scrollIntoView({ behavior: 'smooth' });
      } else {
        openModal("Your Study Plan", "<p>Plan your GATE preparation week by week. Pick your branch and hours a day to generate your personalized timeline.</p>");
      }
    });
  });

  // Hero Buttons
  document.getElementById('heroStartBtn').addEventListener('click', () => {
    document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('heroScrollCue').addEventListener('click', () => {
    document.getElementById('solverSection').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('manifestoStartBtn').addEventListener('click', () => {
    document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('manifestoSyllabusBtn').addEventListener('click', () => {
    openModal("GATE Syllabus", "<p>Complete official GATE syllabus breakdown by marks weightage and topics across all 20 papers.</p>");
  });

  document.getElementById('heroWatchDemoBtn').addEventListener('click', () => {
    openModal("Watch The Demo (85 Seconds)", `
      <div style="background:#000; border-radius:6px; padding:30px 20px; text-align:center; color:#fff; margin-bottom:12px;">
        <div style="font-size:2.5rem; margin-bottom:8px;">&#9654;</div>
        <p style="font-weight:700;">The GATE Grind Demo</p>
        <p style="font-size:0.75rem; color:#94a3b8;">15,130 Solved PYQs, Checkpoints, and Mock Exam Series</p>
      </div>
      <p>Features walkthrough: instant question lookup, worked explanations, timed branch mock exams, and zero signup friction.</p>
    `);
  });

  document.getElementById('calloutTryBtn').addEventListener('click', () => {
    currentQuestionIdx = 0;
    loadQuestion(0);
    document.getElementById('solverSection').scrollIntoView({ behavior: 'smooth' });
  });

  // Top Nav Pills switching
  document.querySelectorAll('.nav-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const view = pill.dataset.view;
      if (view === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (view === 'pyq' || view === 'syllabus') {
        document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' });
      } else if (view === 'tests' || view === 'aptitude') {
        document.getElementById('solverSection').scrollIntoView({ behavior: 'smooth' });
      } else {
        openModal(pill.textContent, `<p>Navigating to ${pill.textContent} module. Explore solved past questions and branch tests.</p>`);
      }
    });
  });

  // --------------------------------------------------------------------------
  // Feature 4: Interactive GATE Question Solver & Practice Engine
  // --------------------------------------------------------------------------
  const qTitleEl = document.getElementById('qTitle');
  const qSubjectEl = document.getElementById('qSubject');
  const qTopicEl = document.getElementById('qTopic');
  const qMarksEl = document.getElementById('qMarks');
  const qTypeEl = document.getElementById('qType');
  const qStemEl = document.getElementById('qStem');
  const optionsGroupEl = document.getElementById('optionsGroup');
  const accordionToggleBtn = document.getElementById('accordionToggleBtn');
  const accordionArrow = document.getElementById('accordionArrow');
  const accordionBody = document.getElementById('accordionBody');
  const correctKeyTagEl = document.getElementById('correctKeyTag');
  const explanationTextEl = document.getElementById('explanationText');
  const qCounterEl = document.getElementById('qCounter');
  const btnPrevQ = document.getElementById('btnPrevQ');
  const btnNextQ = document.getElementById('btnNextQ');
  const crumbPaper = document.getElementById('crumbPaper');
  const crumbQNum = document.getElementById('crumbQNum');

  function loadQuestion(idx) {
    const q = questions[idx];
    if (!q) return;

    qTitleEl.textContent = q.title;
    qSubjectEl.textContent = q.subject;
    qTopicEl.textContent = q.topic;
    qMarksEl.textContent = q.marks;
    qTypeEl.textContent = q.type;
    qStemEl.textContent = q.text;
    crumbPaper.textContent = q.paper;
    crumbQNum.textContent = `Question ${q.qNum}`;
    qCounterEl.textContent = `${idx + 1} of ${questions.length}`;

    // Load explanation
    correctKeyTagEl.textContent = `Correct answer: (${q.correct})`;
    explanationTextEl.textContent = q.explanation;

    // Reset accordion closed
    accordionBody.classList.remove('open');
    accordionArrow.innerHTML = '&#9658;';

    // Render options
    optionsGroupEl.innerHTML = '';
    const selectedOption = userAnswers[idx];

    q.options.forEach(opt => {
      const optEl = document.createElement('div');
      optEl.className = 'option-item';
      
      if (selectedOption === opt.id) {
        optEl.classList.add('selected');
        if (opt.id === q.correct) {
          optEl.classList.add('correct');
        } else {
          optEl.classList.add('incorrect');
        }
      }

      optEl.innerHTML = `
        <span style="font-weight:700; margin-right:12px;">[ ${opt.id} ]</span>
        <span>${opt.label}</span>
      `;

      optEl.addEventListener('click', () => {
        userAnswers[idx] = opt.id;
        loadQuestion(idx); // re-render to show selection & highlight

        // Auto open explanation on answer submission
        accordionBody.classList.add('open');
        accordionArrow.innerHTML = '&#9660;';
      });

      optionsGroupEl.appendChild(optEl);
    });

    btnPrevQ.disabled = (idx === 0);
    btnNextQ.disabled = (idx === questions.length - 1);
    btnPrevQ.style.opacity = (idx === 0) ? '0.4' : '1';
    btnNextQ.style.opacity = (idx === questions.length - 1) ? '0.4' : '1';
  }

  // Accordion toggle
  accordionToggleBtn.addEventListener('click', () => {
    const isOpen = accordionBody.classList.contains('open');
    if (isOpen) {
      accordionBody.classList.remove('open');
      accordionArrow.innerHTML = '&#9658;';
    } else {
      accordionBody.classList.add('open');
      accordionArrow.innerHTML = '&#9660;';
    }
  });

  btnPrevQ.addEventListener('click', () => {
    if (currentQuestionIdx > 0) {
      currentQuestionIdx--;
      loadQuestion(currentQuestionIdx);
    }
  });

  btnNextQ.addEventListener('click', () => {
    if (currentQuestionIdx < questions.length - 1) {
      currentQuestionIdx++;
      loadQuestion(currentQuestionIdx);
    }
  });

  document.getElementById('btnPractiseGate').addEventListener('click', () => {
    openModal("Practice Mode Active", `
      <p style="margin-bottom:8px;">You are now in timed practice mode for <strong>${questions[currentQuestionIdx].paper}</strong>.</p>
      <p>Select your answer choice above. Your streak and performance analytics will be tracked.</p>
    `);
  });

  // --------------------------------------------------------------------------
  // Feature 5: Interactive Mascot Tour ("Gritty, the Crab Guide")
  // --------------------------------------------------------------------------
  const grittyBubble = document.getElementById('grittyBubble');
  const grittyTitle = document.getElementById('grittyTitle');
  const grittyMessage = document.getElementById('grittyMessage');
  const grittyStep = document.getElementById('grittyStep');
  const grittyNextBtn = document.getElementById('grittyNextBtn');
  const grittySkipBtn = document.getElementById('grittySkipBtn');
  const grittyHideBtn = document.getElementById('grittyHideBtn');
  const grittyAvatar = document.getElementById('grittyAvatar');
  const footerToggleGritty = document.getElementById('footerToggleGritty');

  const tourSteps = [
    {
      title: "Hi! I'm Gritty.",
      message: "Welcome to The GATE Grind demo! I'll show you around in under a minute.",
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    {
      title: "All Past Papers Organized",
      message: "Search 20+ GATE engineering branches or filter by branch letter (CS, DA, EC, EE, etc.).",
      action: () => document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' })
    },
    {
      title: "Solve Authentic Questions",
      message: "Pick an answer on real solved questions, then expand the step-by-step worked explanation!",
      action: () => document.getElementById('solverSection').scrollIntoView({ behavior: 'smooth' })
    },
    {
      title: "Dark Mode & Philosophy",
      message: "Toggle light & dark themes anytime with the top-right switch. Free, no sign-up needed!",
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  ];

  let currentTourStep = 0;

  function updateGrittyUI() {
    const step = tourSteps[currentTourStep];
    grittyTitle.textContent = step.title;
    grittyMessage.textContent = step.message;
    grittyStep.textContent = `${currentTourStep + 1}/${tourSteps.length}`;
    if (currentTourStep === tourSteps.length - 1) {
      grittyNextBtn.textContent = "Done";
    } else {
      grittyNextBtn.textContent = "Next";
    }
  }

  grittyNextBtn.addEventListener('click', () => {
    if (currentTourStep < tourSteps.length - 1) {
      currentTourStep++;
      updateGrittyUI();
      tourSteps[currentTourStep].action();
    } else {
      grittyBubble.style.display = 'none';
    }
  });

  grittySkipBtn.addEventListener('click', () => {
    grittyBubble.style.display = 'none';
  });

  grittyHideBtn.addEventListener('click', () => {
    document.getElementById('grittyWidget').style.display = 'none';
    footerToggleGritty.textContent = "SHOW GRITTY, THE CRAB GUIDE";
  });

  grittyAvatar.addEventListener('click', () => {
    grittyBubble.style.display = (grittyBubble.style.display === 'none') ? 'block' : 'none';
  });

  footerToggleGritty.addEventListener('click', () => {
    const widget = document.getElementById('grittyWidget');
    if (widget.style.display === 'none') {
      widget.style.display = 'flex';
      grittyBubble.style.display = 'block';
      footerToggleGritty.textContent = "HIDE GRITTY, THE CRAB GUIDE";
    } else {
      widget.style.display = 'none';
      footerToggleGritty.textContent = "SHOW GRITTY, THE CRAB GUIDE";
    }
  });

  // --------------------------------------------------------------------------
  // Modals (Sign In, Account, Info)
  // --------------------------------------------------------------------------
  const appModalOverlay = document.getElementById('appModalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  function openModal(title, html) {
    modalTitle.textContent = title;
    modalContent.innerHTML = html;
    appModalOverlay.classList.add('open');
  }

  function closeModal() {
    appModalOverlay.classList.remove('open');
  }

  modalCloseBtn.addEventListener('click', closeModal);
  appModalOverlay.addEventListener('click', (e) => {
    if (e.target === appModalOverlay) closeModal();
  });

  document.getElementById('openSignInBtn').addEventListener('click', () => {
    openModal("Sign In to The GATE Grind", `
      <p style="margin-bottom:12px;">An account syncs your branch preferences, test scores, and bookmark lists across all your devices.</p>
      <input type="email" placeholder="aspirant@gate.edu" style="width:100%; padding:8px 12px; margin-bottom:12px; font-family:var(--font-mono); border:1.5px solid var(--border-strong); background:var(--bg-surface); color:var(--text-main);">
      <button class="btn-search" style="width:100%; border-radius:4px;" onclick="alert('Demo prototype: Account session active locally!')">CONTINUE &rarr;</button>
    `);
  });

  document.getElementById('bannerSignIn').addEventListener('click', () => {
    document.getElementById('openSignInBtn').click();
  });

  document.getElementById('bannerCreateAccount').addEventListener('click', () => {
    document.getElementById('openSignInBtn').click();
  });

  // Initial Load
  renderBranchCards();
  loadQuestion(0);
  updateGrittyUI();
});
