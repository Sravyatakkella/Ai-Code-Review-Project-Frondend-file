# AI Code Review
AI Code Review is a smart web application that analyzes source code using AI and provides security insights, performance improvements, best-practice suggestions, and code quality recommendations. It helps developers quickly identify vulnerabilities and improve maintainability.
# 🛠 Tech Stack
Frontend:
- HTML5
- CSS3
- JavaScript
Backend:
- Node.js
- Express.js
AI Integration:
- OpenAI API
Tools:
- VS Code
- Git
- GitHub
# ✨ Key Features
- AI-powered code analysis
- Detects security vulnerabilities
- Performance optimization suggestions
- Best practice recommendations
- Code quality scoring system
- Multiple programming language support
- Modern dark UI design
- Responsive layout
- Real-time analysis results
- Interactive code editor
# 📸 Screenshots
<img width="1917" height="934" alt="image" src="https://github.com/user-attachments/assets/48018e9f-401b-46a7-985f-ceb9c43b60ae" />
## Home Screen
- Modern AI dashboard interface
- Code editor with language selection
- Interactive analysis panel

## AI Analysis
- Security warnings
- Performance insights
- Code quality suggestions
- Final AI score

# ⚙️ How to Run the Project

## 1. Clone the repository
this is frontend part completion only there more need to be covered

```bash
https://github.com/Sravyatakkella/Ai-Code-Review-Project-Frondend-file/blob/main/ai1.html

#code:
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>AI Code Review</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <style>
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      font-family:'Inter',sans-serif;
    }

    body{
      min-height:100vh;
      background:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
        radial-gradient(circle at top left,#2c234d 0%, #071020 45%, #030712 100%);
      background-size:40px 40px,40px 40px,cover;
      color:white;
      padding:30px;
    }

    .container{
      max-width:1300px;
      margin:auto;
    }

    .hero{
      text-align:center;
      margin-bottom:40px;
    }

    .hero h1{
      font-size:72px;
      font-weight:800;
      background:linear-gradient(to right,#4ea1ff,#d946ef);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      margin-bottom:10px;
    }

    .hero p{
      color:#b8c1d9;
      font-size:20px;
    }

    .main{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:35px;
    }

    .card{
      background:rgba(25,35,60,0.85);
      border:1px solid rgba(255,255,255,0.08);
      border-radius:28px;
      padding:28px;
      box-shadow:
        0 10px 40px rgba(0,0,0,0.35),
        inset 0 1px 0 rgba(255,255,255,0.05);
      backdrop-filter:blur(10px);
    }

    .card h2{
      font-size:38px;
      margin-bottom:25px;
      font-weight:700;
      color:#eaf2ff;
    }

    select{
      width:220px;
      padding:14px 16px;
      border-radius:14px;
      border:none;
      background:#081224;
      color:white;
      font-size:16px;
      outline:none;
      margin-bottom:20px;
      border:1px solid rgba(255,255,255,0.1);
    }

    .editor{
      width:100%;
      height:390px;
      border-radius:22px;
      background:#020817;
      border:1px solid rgba(255,255,255,0.06);
      color:#9fe0ff;
      padding:25px;
      font-size:16px;
      resize:none;
      outline:none;
      line-height:1.8;
    }

    .btn{
      width:100%;
      margin-top:24px;
      padding:18px;
      border:none;
      border-radius:18px;
      font-size:22px;
      font-weight:700;
      color:white;
      cursor:pointer;
      background:linear-gradient(to right,#14b8ff,#d946ef);
      box-shadow:0 0 30px rgba(168,85,247,0.35);
      transition:0.3s ease;
    }

    .btn:hover{
      transform:translateY(-2px);
    }

    /* EMPTY STATE */
    .empty-analysis{
      width:100%;
      height:520px;
      border-radius:24px;
      border:1px solid rgba(255,255,255,0.08);
      background:rgba(255,255,255,0.03);
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      color:#a7a7a7;
      transition:0.4s;
    }

    .empty-analysis svg{
      width:42px;
      height:42px;
      margin-bottom:15px;
      opacity:0.8;
    }

    .empty-analysis p{
      font-size:18px;
      letter-spacing:1px;
    }

    /* RESULT BOX */
    .analysis-result{
      display:none;
    }

    .analysis-top{
      display:flex;
      justify-content:center;
      margin:10px 0 25px;
    }

    .score-circle{
      width:180px;
      height:180px;
      border-radius:50%;
      background:
        conic-gradient(#38bdf8 0% 45%, #8b5cf6 45% 78%, #131c31 78% 100%);
      display:flex;
      justify-content:center;
      align-items:center;
      position:relative;
    }

    .score-circle::before{
      content:"";
      position:absolute;
      width:125px;
      height:125px;
      background:#071120;
      border-radius:50%;
    }

    .score{
      position:relative;
      font-size:52px;
      font-weight:800;
    }

    .analysis-text{
      text-align:center;
      color:#b8c1d9;
      margin-bottom:25px;
      font-size:18px;
    }

    .issue{
      background:rgba(255,255,255,0.04);
      border:1px solid rgba(255,255,255,0.06);
      padding:22px;
      border-radius:22px;
      margin-bottom:20px;
    }

    .tag{
      display:inline-block;
      padding:7px 14px;
      border-radius:999px;
      font-size:13px;
      font-weight:700;
      margin-bottom:16px;
    }

    .critical{
      background:rgba(255,80,80,0.18);
      color:#ff6b6b;
    }

    .warning{
      background:rgba(255,221,87,0.15);
      color:#ffd43b;
    }

    .good{
      background:rgba(40,220,120,0.14);
      color:#4ade80;
    }

    .issue h3{
      font-size:26px;
      margin-bottom:10px;
    }

    .issue p{
      color:#b7c1d5;
      line-height:1.6;
      font-size:16px;
    }

    @media(max-width:1000px){
      .main{
        grid-template-columns:1fr;
      }

      .hero h1{
        font-size:50px;
      }
    }
  </style>
</head>
<body>

  <div class="container">

    <div class="hero">
      <h1>AI Code Review</h1>
      <p>Smart AI-powered security & performance analyzer</p>
    </div>

    <div class="main">

      <!-- LEFT -->
      <div class="card">

        <h2>Code Editor</h2>

       <select>
  <option>JavaScript</option>
  <option>TypeScript</option>
  <option>Python</option>
  <option>Java</option>
  <option>C</option>
  <option>C++</option>
  <option>C#</option>
  <option>Go</option>
  <option>Rust</option>
  <option>PHP</option>
  <option>Ruby</option>
  <option>Swift</option>
  <option>Kotlin</option>
  <option>Scala</option>
  <option>R</option>
  <option>MATLAB</option>
  <option>Perl</option>
  <option>Dart</option>
  <option>Lua</option>
  <option>Haskell</option>
  <option>Shell Script</option>
  <option>Bash</option>
  <option>PowerShell</option>
  <option>SQL</option>
  <option>HTML</option>
  <option>CSS</option>
  <option>XML</option>
  <option>JSON</option>
  <option>YAML</option>
  <option>Markdown</option>
  <option>React JSX</option>
  <option>Vue</option>
  <option>Angular</option>
  <option>Node.js</option>
  <option>Express.js</option>
  <option>Next.js</option>
  <option>Django</option>
  <option>Flask</option>
  <option>Spring Boot</option>
  <option>Laravel</option>
  <option>ASP.NET</option>
  <option>Dockerfile</option>
  <option>Kubernetes</option>
  <option>GraphQL</option>
  <option>Firebase Rules</option>
  <option>Solidity</option>
  <option>Assembly</option>
</select>

        <textarea 
          id="codeInput"
          class="editor"
          placeholder="// Paste your code here..."
        ></textarea>

        <button class="btn" onclick="analyzeCode()">
          Analyze Code
        </button>

      </div>

      <!-- RIGHT -->
      <div class="card">

        <h2>AI Analysis</h2>

        <!-- EMPTY -->
        <div class="empty-analysis" id="emptyBox">

          <svg fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z">
            </path>
            <path stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
            </path>
          </svg>

          <p>paste code & click Analyze Code for viewing Results</p>

        </div>

        <!-- RESULT -->
        <div class="analysis-result" id="resultBox">

          <div class="analysis-top">
            <div class="score-circle">
              <div class="score">82</div>
            </div>
          </div>

          <div class="analysis-text">
            AI detected security and performance improvements.
          </div>

          <div class="issue">
            <span class="tag critical">CRITICAL</span>
            <h3>SQL Injection Risk</h3>
            <p>
              User input is concatenated directly into the SQL query.
              Use parameterized queries instead.
            </p>
          </div>

          <div class="issue">
            <span class="tag warning">WARNING</span>
            <h3>Missing Input Validation</h3>
            <p>
              Validate the incoming user ID before querying the database.
            </p>
          </div>

          <div class="issue">
            <span class="tag good">GOOD PRACTICE</span>
            <h3>Clean Function Structure</h3>
            <p>
              The function is small and readable which improves maintainability.
            </p>
          </div>

        </div>

      </div>

    </div>
  </div>

  <script>
    function analyzeCode() {

      const code = document.getElementById("codeInput").value;

      if(code.trim() === ""){
        alert("Please paste some code first.");
        return;
      }

      document.getElementById("emptyBox").style.display = "none";
      document.getElementById("resultBox").style.display = "block";
    }
  </script>

</body>
</html>
