/* ══════════════════════════════════════════
   LearnFlow — app.js
   ══════════════════════════════════════════ */

// ═══════════ COURSE DATA (20 courses) ═══════════
const COURSES = [
  {
    id:'uiux',emoji:'🎨',title:'The Complete UI/UX Design Bootcamp',
    author:'James Wright',cat:'design',catLabel:'UI/UX',catColor:'#1a6b5a',catDot:'#1a6b5a',
    bg:'linear-gradient(135deg,#e0f5ee,#c8e8df)',badge:'hot',
    rating:4.9,ratingCount:'4.8k',price:1999,level:'beginner',new:false,free:false,
    desc:'Master UI/UX design from scratch using Figma, design thinking, and modern methodologies.',
    sections:[
      {title:'Design Foundations',lessons:[
        {num:1,name:'Intro to Design Thinking',dur:'12:30',done:true,yt:'dKL6K_8GJao'},
        {num:2,name:'The Design Process',dur:'18:45',done:true,yt:'wOrmr5kT-48'},
        {num:3,name:'User Research Methods',dur:'22:10',done:true,yt:'7_sFVYfatXY'},
      ]},
      {title:'Figma Fundamentals',lessons:[
        {num:4,name:'Figma Interface Tour',dur:'15:20',done:true,yt:'FTFaQWZBqQ8'},
        {num:5,name:'Frames and Components',dur:'28:00',done:true,yt:'9Z8aSRo1hNk'},
      ]},
      {title:'Visual Design',lessons:[
        {num:14,name:'Color Theory in Practice',dur:'23:40',done:false,current:true,yt:'c9Wg6Cb_YlU'},
        {num:15,name:'Typography Hierarchy',dur:'19:55',done:false,yt:'QrNi9FmdlxY'},
        {num:16,name:'Spacing & Layout Grids',dur:'21:30',done:false,yt:'ckQkuqN_ZK0'},
      ]},
      {title:'Advanced Topics',lessons:[
        {num:17,name:'Motion & Microinteractions',dur:'31:00',done:false,locked:true,yt:'7HMl8cYFcWU'},
        {num:18,name:'Design Systems at Scale',dur:'40:15',done:false,locked:true,yt:'YLo6g58vUm0'},
      ]}
    ],progress:62,total:24,watched:'4.2h'
  },
  {
    id:'python',emoji:'⚙️',title:'Python for Data Science & Machine Learning',
    author:'Dr. Anika Patel',cat:'development',catLabel:'Python',catColor:'#185fa5',catDot:'#185fa5',
    bg:'linear-gradient(135deg,#e6f1fb,#b5d4f4)',badge:null,
    rating:4.9,ratingCount:'9.2k',price:2499,level:'intermediate',new:false,free:false,
    desc:'Complete guide to Python, NumPy, Pandas, Matplotlib, Scikit-Learn and Machine Learning.',
    sections:[
      {title:'Python Basics',lessons:[
        {num:1,name:'Python Installation & Setup',dur:'10:00',done:true,yt:'YYXdXT2l-Gg'},
        {num:2,name:'Variables & Data Types',dur:'14:20',done:true,yt:'khKv-8q7YmY'},
        {num:3,name:'Control Flow',dur:'18:00',done:true,yt:'DZwmZ8Usvnk'},
        {num:4,name:'Functions & Modules',dur:'20:30',done:true,yt:'9Os0o3wzS_I'},
      ]},
      {title:'Data Libraries',lessons:[
        {num:5,name:'Introduction to NumPy',dur:'22:00',done:true,yt:'QUT1VHiLmmI'},
        {num:6,name:'NumPy Operations',dur:'19:45',done:true,yt:'xECXZ3tyONo'},
        {num:7,name:'NumPy Arrays',dur:'21:00',done:false,current:true,yt:'8Mpc9ukltVA'},
        {num:8,name:'Pandas DataFrames',dur:'25:00',done:false,yt:'vmEHCJofslg'},
        {num:9,name:'Data Cleaning',dur:'28:00',done:false,yt:'bDhvCp6ep1Q'},
      ]},
      {title:'Machine Learning',lessons:[
        {num:10,name:'Intro to Scikit-Learn',dur:'30:00',done:false,locked:true,yt:'pqNCD_5r0IU'},
        {num:11,name:'Linear Regression',dur:'35:00',done:false,locked:true,yt:'owI7zxCqNY0'},
      ]}
    ],progress:28,total:32,watched:'2.1h'
  },
  {
    id:'tableau',emoji:'📊',title:'Tableau Masterclass 2025',
    author:'Priya Sharma',cat:'data',catLabel:'Analytics',catColor:'#ba7517',catDot:'#854f0b',
    bg:'linear-gradient(135deg,#faeeda,#fac775)',badge:'new',
    rating:4.7,ratingCount:'879',price:2199,level:'beginner',new:true,free:false,
    desc:'Build stunning data visualizations and dashboards with Tableau from beginner to expert.',
    sections:[
      {title:'Getting Started',lessons:[
        {num:1,name:'Tableau Installation & Interface',dur:'12:00',done:true,yt:'jEgVto5QFE8'},
        {num:2,name:'Connecting to Data Sources',dur:'15:30',done:true,yt:'6xv1KvCMF1Q'},
        {num:3,name:'Your First Dashboard',dur:'20:00',done:false,current:true,yt:'Pnl2AHmlgoQ'},
        {num:4,name:'Charts & Visualizations',dur:'25:00',done:false,yt:'PJ8vRN7PZBI'},
      ]},
      {title:'Advanced Dashboards',lessons:[
        {num:5,name:'Filters & Parameters',dur:'22:00',done:false,locked:true,yt:'5T2L4X0K5Wc'},
        {num:6,name:'Calculated Fields',dur:'28:00',done:false,locked:true,yt:'uJeHWQ-VwGM'},
      ]}
    ],progress:11,total:18,watched:'0.8h'
  },
  {
    id:'prompt',emoji:'🤖',title:'Intro to Prompt Engineering',
    author:'Dr. Anika Patel',cat:'data',catLabel:'AI / ML',catColor:'#534ab7',catDot:'#534ab7',
    bg:'linear-gradient(135deg,#eeedfe,#d4cff8)',badge:'free',
    rating:4.9,ratingCount:'5.4k',price:0,level:'beginner',new:false,free:true,
    desc:'Learn prompt engineering techniques, chain-of-thought, few-shot learning, and AI app development.',
    sections:[
      {title:'Prompt Basics',lessons:[
        {num:1,name:'What is Prompt Engineering?',dur:'10:00',done:true,yt:'_ZvnD73m40o'},
        {num:2,name:'Zero-Shot Prompting',dur:'14:00',done:true,yt:'v_gXKQlqs7s'},
        {num:3,name:'Few-Shot Prompting',dur:'16:00',done:true,yt:'1XkJyBOXeIo'},
        {num:4,name:'Chain-of-Thought',dur:'18:00',done:false,current:true,yt:'BO_jU1NsBzU'},
      ]},
      {title:'Advanced Techniques',lessons:[
        {num:5,name:'Prompt Chaining',dur:'20:00',done:false,yt:'v6AJOX3wd_E'},
        {num:6,name:'RAG & Context Windows',dur:'25:00',done:false,locked:true,yt:'T-D1OfcDW1M'},
      ]}
    ],progress:25,total:12,watched:'1.0h'
  },
  {
    id:'react',emoji:'🌐',title:'Full-Stack React & Node.js',
    author:'Samira Okonkwo',cat:'development',catLabel:'Web Dev',catColor:'#a32d2d',catDot:'#a32d2d',
    bg:'linear-gradient(135deg,#fcebeb,#f7c1c1)',badge:'new',
    rating:4.5,ratingCount:'1.3k',price:2999,level:'advanced',new:true,free:false,
    desc:'Build complete full-stack web applications with React 18, Node.js, Express, and MongoDB.',
    sections:[
      {title:'React Fundamentals',lessons:[
        {num:1,name:'React Setup & JSX',dur:'15:00',done:false,current:true,yt:'Ke90Tje7VS0'},
        {num:2,name:'Components & Props',dur:'18:00',done:false,yt:'DLX62G4lc44'},
        {num:3,name:'State & Hooks',dur:'22:00',done:false,yt:'O6P86uwfdR0'},
      ]},
      {title:'Node.js Backend',lessons:[
        {num:4,name:'Express Setup',dur:'20:00',done:false,locked:true,yt:'L72fhGm1tfE'},
        {num:5,name:'REST APIs',dur:'25:00',done:false,locked:true,yt:'fgTGADljAeg'},
      ]}
    ],progress:0,total:28,watched:'0h'
  },
  {
    id:'ios',emoji:'📱',title:'iOS 17 SwiftUI Development',
    author:'Tom Bergström',cat:'development',catLabel:'Mobile',catColor:'#ba7517',catDot:'#ba7517',
    bg:'linear-gradient(135deg,#faeeda,#fac775)',badge:null,
    rating:4.8,ratingCount:'3.1k',price:3499,level:'intermediate',new:false,free:false,
    desc:'Build real iOS apps with SwiftUI, Swift, and Xcode from scratch to App Store publication.',
    sections:[
      {title:'Swift Basics',lessons:[
        {num:1,name:'Swift Variables & Types',dur:'12:00',done:false,current:true,yt:'comQ1-x2a1Q'},
        {num:2,name:'Functions & Closures',dur:'16:00',done:false,yt:'AHO43Hh8C2A'},
      ]},
      {title:'SwiftUI',lessons:[
        {num:3,name:'Your First SwiftUI View',dur:'20:00',done:false,locked:true,yt:'bqu6BquVi2M'},
      ]}
    ],progress:0,total:22,watched:'0h'
  },
  {
    id:'ga4',emoji:'📈',title:'Google Analytics 4 Mastery',
    author:'Riya Mehta',cat:'marketing',catLabel:'Analytics',catColor:'#3b6d11',catDot:'#3b6d11',
    bg:'linear-gradient(135deg,#eaf3de,#c0dd97)',badge:null,
    rating:4.4,ratingCount:'2.7k',price:1499,level:'beginner',new:false,free:false,
    desc:'Set up GA4, configure events, build reports and gain deep insights into your website traffic.',
    sections:[
      {title:'GA4 Basics',lessons:[
        {num:1,name:'GA4 Setup & Configuration',dur:'14:00',done:false,current:true,yt:'JKVFNFFdXNA'},
        {num:2,name:'Events & Conversions',dur:'18:00',done:false,yt:'Sj_U85q0YBg'},
      ]}
    ],progress:0,total:15,watched:'0h'
  },
  {
    id:'premiere',emoji:'🎬',title:'Premiere Pro for Beginners',
    author:'Marcus Chen',cat:'design',catLabel:'Video Editing',catColor:'#1a6b5a',catDot:'#1a6b5a',
    bg:'linear-gradient(135deg,#e0f5ee,#c8e8df)',badge:'hot',
    rating:4.8,ratingCount:'2.1k',price:1299,level:'beginner',new:false,free:false,
    desc:'Edit professional videos in Adobe Premiere Pro from zero to advanced techniques.',
    sections:[
      {title:'Premiere Basics',lessons:[
        {num:1,name:'Premiere Interface',dur:'13:00',done:false,current:true,yt:'3LKR0PMDnb8'},
        {num:2,name:'Importing & Organizing',dur:'15:00',done:false,yt:'MlMqTZoqeTA'},
        {num:3,name:'Basic Editing',dur:'20:00',done:false,yt:'guvjygqGeoQ'},
      ]},
      {title:'Advanced Editing',lessons:[
        {num:4,name:'Color Grading',dur:'25:00',done:false,locked:true,yt:'EulR5Z-7GY8'},
        {num:5,name:'Audio Mixing',dur:'22:00',done:false,locked:true,yt:'kWwHrBxp1a4'},
      ]}
    ],progress:0,total:20,watched:'0h'
  },
  {
    id:'excel',emoji:'🗂️',title:'Excel for Business Analytics',
    author:'Neha Gupta',cat:'business',catLabel:'Business',catColor:'#0f6e56',catDot:'#0f6e56',
    bg:'linear-gradient(135deg,#e0f5ee,#9fe1cb)',badge:null,
    rating:4.6,ratingCount:'6.1k',price:999,level:'beginner',new:false,free:false,
    desc:'Master Excel from basics to Power Query, pivot tables, dashboards and VBA automation.',
    sections:[
      {title:'Excel Basics',lessons:[
        {num:1,name:'Excel Interface & Formulas',dur:'15:00',done:false,current:true,yt:'Vl0H-qTclOg'},
        {num:2,name:'Pivot Tables',dur:'20:00',done:false,yt:'m0wI61ahfLc'},
      ]}
    ],progress:0,total:18,watched:'0h'
  },
  {
    id:'photo',emoji:'📷',title:'Photography Masterclass',
    author:'Aryan Kapoor',cat:'photography',catLabel:'Photography',catColor:'#534ab7',catDot:'#534ab7',
    bg:'linear-gradient(135deg,#eeedfe,#afa9ec)',badge:null,
    rating:4.7,ratingCount:'3.9k',price:1799,level:'beginner',new:false,free:false,
    desc:'Learn photography from camera basics through composition, lighting, and post-processing.',
    sections:[
      {title:'Camera Basics',lessons:[
        {num:1,name:'Understanding Your Camera',dur:'18:00',done:false,current:true,yt:'V7z7BAZdt2M'},
        {num:2,name:'Exposure Triangle',dur:'22:00',done:false,yt:'YcZ5yFl9bYE'},
      ]}
    ],progress:0,total:16,watched:'0h'
  },
  {
    id:'stock',emoji:'📉',title:'Stock Market Investing 101',
    author:'Vikram Singh',cat:'finance',catLabel:'Finance',catColor:'#185fa5',catDot:'#185fa5',
    bg:'linear-gradient(135deg,#e6f1fb,#85b7eb)',badge:null,
    rating:4.5,ratingCount:'4.2k',price:1599,level:'beginner',new:false,free:false,
    desc:'Understand stocks, ETFs, mutual funds, and how to build a long-term investment portfolio.',
    sections:[
      {title:'Investing Basics',lessons:[
        {num:1,name:'How Stock Markets Work',dur:'16:00',done:false,current:true,yt:'F3QpgXBtDeo'},
        {num:2,name:'Reading Financial Statements',dur:'20:00',done:false,yt:'WEDIj9JBTC8'},
      ]}
    ],progress:0,total:14,watched:'0h'
  },
  {
    id:'seo',emoji:'🔍',title:'SEO & Content Marketing',
    author:'Maya Rodriguez',cat:'marketing',catLabel:'Marketing',catColor:'#3b6d11',catDot:'#3b6d11',
    bg:'linear-gradient(135deg,#eaf3de,#97c459)',badge:null,
    rating:4.3,ratingCount:'1.8k',price:1299,level:'beginner',new:false,free:false,
    desc:'Rank higher on Google, build backlinks, and create content strategies that drive organic traffic.',
    sections:[
      {title:'SEO Fundamentals',lessons:[
        {num:1,name:'How Search Engines Work',dur:'14:00',done:false,current:true,yt:'DvwS7cV9GmQ'},
        {num:2,name:'Keyword Research',dur:'18:00',done:false,yt:'OM_CObqDVCY'},
      ]}
    ],progress:0,total:20,watched:'0h'
  },
  /* ── 8 NEW COURSES ── */
  {
    id:'flutter',emoji:'🦋',title:'Flutter & Dart — Mobile Dev Bootcamp',
    author:'Karan Mehta',cat:'development',catLabel:'Mobile',catColor:'#185fa5',catDot:'#185fa5',
    bg:'linear-gradient(135deg,#ddeeff,#99ccff)',badge:'new',
    rating:4.7,ratingCount:'2.3k',price:2799,level:'intermediate',new:true,free:false,
    desc:'Build beautiful cross-platform apps for iOS and Android using Flutter and Dart.',
    sections:[
      {title:'Dart Basics',lessons:[
        {num:1,name:'Dart Language Fundamentals',dur:'16:00',done:false,current:true,yt:'5xlEDM_ojfQ'},
        {num:2,name:'OOP in Dart',dur:'20:00',done:false,yt:'_HyMdWMfSoA'},
      ]},
      {title:'Flutter UI',lessons:[
        {num:3,name:'Widgets Deep Dive',dur:'24:00',done:false,locked:true,yt:'TSIhiZ5jRB0'},
      ]}
    ],progress:0,total:26,watched:'0h'
  },
  {
    id:'copywriting',emoji:'✍️',title:'Copywriting for Conversion',
    author:'Sara Mendes',cat:'marketing',catLabel:'Marketing',catColor:'#3b6d11',catDot:'#3b6d11',
    bg:'linear-gradient(135deg,#fff3dc,#ffd27a)',badge:'hot',
    rating:4.8,ratingCount:'3.4k',price:1199,level:'beginner',new:false,free:false,
    desc:'Write persuasive copy for ads, emails, landing pages, and social media that converts.',
    sections:[
      {title:'Copy Foundations',lessons:[
        {num:1,name:'The AIDA Formula',dur:'13:00',done:false,current:true,yt:'lyMBhXNkJGg'},
        {num:2,name:'Headlines That Hook',dur:'16:00',done:false,yt:'4Y4BdRPc_kk'},
      ]}
    ],progress:0,total:16,watched:'0h'
  },
  {
    id:'sql',emoji:'🗄️',title:'SQL & Database Mastery',
    author:'Raj Patel',cat:'data',catLabel:'Data',catColor:'#ba7517',catDot:'#854f0b',
    bg:'linear-gradient(135deg,#f5e8c0,#f0c050)',badge:null,
    rating:4.6,ratingCount:'5.5k',price:1499,level:'beginner',new:false,free:false,
    desc:'From SELECT statements to complex JOINs, subqueries, and database design.',
    sections:[
      {title:'SQL Basics',lessons:[
        {num:1,name:'SELECT Statements',dur:'14:00',done:false,current:true,yt:'HXV3zeQKqGY'},
        {num:2,name:'Filtering & Sorting',dur:'16:00',done:false,yt:'p3qvj9hO_Bo'},
      ]}
    ],progress:0,total:22,watched:'0h'
  },
  {
    id:'kubernetes',emoji:'☸️',title:'Kubernetes & Docker for DevOps',
    author:'Divya Rajan',cat:'development',catLabel:'DevOps',catColor:'#a32d2d',catDot:'#a32d2d',
    bg:'linear-gradient(135deg,#fce8e8,#f4aaaa)',badge:'new',
    rating:4.5,ratingCount:'1.1k',price:3199,level:'advanced',new:true,free:false,
    desc:'Deploy, scale, and manage containerized applications with Kubernetes and Docker.',
    sections:[
      {title:'Docker Fundamentals',lessons:[
        {num:1,name:'Containers & Images',dur:'18:00',done:false,current:true,yt:'fqMOX6JJhGo'},
        {num:2,name:'Dockerfiles & Builds',dur:'22:00',done:false,yt:'LQjaJINkQXY'},
      ]}
    ],progress:0,total:30,watched:'0h'
  },
  {
    id:'personal-finance',emoji:'💰',title:'Personal Finance & Budgeting',
    author:'Ananya Sharma',cat:'finance',catLabel:'Finance',catColor:'#185fa5',catDot:'#185fa5',
    bg:'linear-gradient(135deg,#e6f1fb,#aed4f8)',badge:'free',
    rating:4.7,ratingCount:'8.1k',price:0,level:'beginner',new:false,free:true,
    desc:'Budget smarter, eliminate debt, build an emergency fund, and start investing early.',
    sections:[
      {title:'Money Basics',lessons:[
        {num:1,name:'50/30/20 Budget Rule',dur:'12:00',done:false,current:true,yt:'HQzoZfc3GwQ'},
        {num:2,name:'Emergency Fund Strategy',dur:'14:00',done:false,yt:'vTiIwBo5b4Y'},
      ]}
    ],progress:0,total:14,watched:'0h'
  },
  {
    id:'powerbi',emoji:'📐',title:'Power BI for Business Intelligence',
    author:'Priya Sharma',cat:'data',catLabel:'Analytics',catColor:'#ba7517',catDot:'#854f0b',
    bg:'linear-gradient(135deg,#fff0dd,#ffcf7a)',badge:null,
    rating:4.6,ratingCount:'2.9k',price:1799,level:'intermediate',new:false,free:false,
    desc:'Create interactive dashboards, reports, and data models using Microsoft Power BI.',
    sections:[
      {title:'Power BI Basics',lessons:[
        {num:1,name:'Power BI Interface',dur:'13:00',done:false,current:true,yt:'AGrl-H87pRU'},
        {num:2,name:'Importing Data',dur:'16:00',done:false,yt:'20iEEBDXQhI'},
      ]}
    ],progress:0,total:20,watched:'0h'
  },
  {
    id:'brand-design',emoji:'🎯',title:'Brand Design & Identity',
    author:'James Wright',cat:'design',catLabel:'Branding',catColor:'#1a6b5a',catDot:'#1a6b5a',
    bg:'linear-gradient(135deg,#e0f5ee,#6dcfad)',badge:null,
    rating:4.8,ratingCount:'2.2k',price:2199,level:'intermediate',new:false,free:false,
    desc:'Build cohesive visual identities: logos, color systems, typography, and brand guidelines.',
    sections:[
      {title:'Brand Strategy',lessons:[
        {num:1,name:'Brand Positioning',dur:'15:00',done:false,current:true,yt:'2iEA-yBVBP8'},
        {num:2,name:'Logo Design Principles',dur:'20:00',done:false,yt:'7YpOBKzMxhU'},
      ]}
    ],progress:0,total:18,watched:'0h'
  },
  {
    id:'cybersecurity',emoji:'🛡️',title:'Cybersecurity Fundamentals',
    author:'Ali Hassan',cat:'development',catLabel:'Security',catColor:'#534ab7',catDot:'#534ab7',
    bg:'linear-gradient(135deg,#eeedfe,#c3bef5)',badge:'new',
    rating:4.7,ratingCount:'3.7k',price:2499,level:'beginner',new:true,free:false,
    desc:'Understand threats, encryption, network security, ethical hacking, and security best practices.',
    sections:[
      {title:'Security Basics',lessons:[
        {num:1,name:'Intro to Cybersecurity',dur:'16:00',done:false,current:true,yt:'inWWhr5tnEA'},
        {num:2,name:'Types of Attacks',dur:'20:00',done:false,yt:'sdpxddDzXfE'},
      ]}
    ],progress:0,total:24,watched:'0h'
  }
];

let currentFilter = 'all';
let currentCourseId = 'uiux';
let currentUser = { name:'Arjun Kumar', email:'demo@learnflow.com', initials:'AK' };
let isDark = false;
let videoPlaying = false;

// ═══════════ AUTH ═══════════
function switchAuthTab(tab, btn) {
  document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('auth-login').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('auth-register').style.display = tab === 'register' ? 'block' : 'none';
}

function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-pass').value;
  const err = document.getElementById('login-error');
  if ((email === 'demo@learnflow.com' && pass === 'demo123') || (email !== '' && pass.length >= 3)) {
    const name = email.split('@')[0].replace(/[._]/g,' ').replace(/\b\w/g,c => c.toUpperCase());
    loginUser(name, email);
  } else {
    err.style.display = 'block';
    setTimeout(() => err.style.display = 'none', 3000);
  }
}

function doGuestLogin() { loginUser('Guest User','guest@learnflow.com'); }

function doRegister() {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass = document.getElementById('reg-pass').value;
  if (name && email && pass.length >= 6) { loginUser(name, email); }
  else { showToast('Please fill all fields correctly.'); }
}

function loginUser(name, email) {
  currentUser = {
    name, email,
    initials: (name.split(' ').map(w => w[0]).join('').toUpperCase()).slice(0,2)
  };
  document.getElementById('accName').textContent = name;
  document.getElementById('accEmail').textContent = email;
  document.getElementById('accAvatarBig').textContent = currentUser.initials;
  document.getElementById('avatarBtn').textContent = currentUser.initials;
  // greet
  const hr = new Date().getHours();
  const greet = hr < 12 ? 'Good morning' : hr < 17 ? 'Good afternoon' : 'Good evening';
  document.getElementById('heroGreet').textContent = greet + ',';
  document.getElementById('heroName').textContent = name.split(' ')[0];
  document.getElementById('login-page').style.display = 'none';
  document.getElementById('app').style.display = 'block';
  initCourseGrid();
  buildHeatmap();
}

function doLogout() {
  document.getElementById('accountDropdown').classList.remove('open');
  document.getElementById('app').style.display = 'none';
  document.getElementById('login-page').style.display = 'flex';
  document.getElementById('login-email').value = '';
  document.getElementById('login-pass').value = '';
  // reset video
  stopVideo();
}

// ═══════════ DARK MODE ═══════════
function toggleDark() {
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);
  document.getElementById('darkModeLabel').textContent = isDark ? '☀️  Light Mode' : '🌙  Dark Mode';
  showToast(isDark ? '🌙 Dark mode on' : '☀️ Light mode on');
}

// ═══════════ NAVIGATION ═══════════
function showPage(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.getElementById('accountDropdown').classList.remove('open');
  // pause video when navigating away
  if (id !== 'video') stopVideo();
}

// ═══════════ VIDEO PLAYBACK ═══════════
function stopVideo() {
  const frame = document.getElementById('videoFrame');
  const placeholder = document.getElementById('videoPlaceholder');
  frame.src = '';
  frame.classList.remove('loaded');
  if (placeholder) placeholder.style.display = 'flex';
  videoPlaying = false;
}

function playVideo(ytId) {
  const frame = document.getElementById('videoFrame');
  const placeholder = document.getElementById('videoPlaceholder');
  const loader = document.getElementById('videoLoader');

  // Show loader, hide placeholder
  if (placeholder) placeholder.style.display = 'none';
  if (loader) loader.classList.add('show');

  const url = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`;
  frame.src = url;

  frame.onload = () => {
    if (!frame.src || frame.src === window.location.href) return;
    if (loader) loader.classList.remove('show');
    frame.classList.add('loaded');
  };
  videoPlaying = true;
}

function openCourse(courseId) {
  currentCourseId = courseId;
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return;

  let targetLesson = null, targetSecIdx = 0, targetLesIdx = 0;
  course.sections.forEach((sec, si) => {
    sec.lessons.forEach((les, li) => {
      if (les.current && !targetLesson) {
        targetLesson = les; targetSecIdx = si; targetLesIdx = li;
      }
    });
  });
  if (!targetLesson) { targetLesson = course.sections[0].lessons[0]; }

  // Reset video to placeholder first
  stopVideo();

  loadLesson(courseId, targetSecIdx, targetLesIdx);
  showPage('video', document.getElementById('nav-video'));
}

function loadLesson(courseId, secIdx, lesIdx) {
  currentCourseId = courseId;
  const course = COURSES.find(c => c.id === courseId);
  const sec = course.sections[secIdx];
  const les = sec.lessons[lesIdx];

  // Stop current video
  stopVideo();

  // Update placeholder info
  const ph = document.getElementById('videoPlaceholder');
  if (ph) {
    const titleEl = ph.querySelector('.play-label');
    const subEl = ph.querySelector('.play-sub');
    if (titleEl) titleEl.textContent = les.name;
    if (subEl) subEl.textContent = `▶ ${les.dur}`;
    // Set click handler
    ph.onclick = () => playVideo(les.yt);
  }

  // Update page info
  document.getElementById('vidTitle').textContent = `Lesson ${les.num}: ${les.name}`;
  document.getElementById('vidDuration').textContent = les.dur;
  document.getElementById('vidInstructor').textContent = course.author;
  document.getElementById('vBreadCourse').textContent = course.title;
  document.getElementById('vBreadSection').textContent = sec.title;
  document.getElementById('vidDesc').textContent = course.desc;
  document.getElementById('vidProgFill').style.width = course.progress + '%';
  document.getElementById('vidTime').textContent = course.progress + '% complete';

  // Playlist
  document.getElementById('playlistCourseTitle').textContent = course.title;
  document.getElementById('playlistProgress').textContent = `${course.progress}% complete · Lesson ${les.num}`;
  document.getElementById('playlistProgFill').style.width = course.progress + '%';
  buildPlaylist(course, secIdx, lesIdx);
}

function buildPlaylist(course, activeSec, activeLes) {
  const container = document.getElementById('playlistContainer');
  container.innerHTML = '';
  course.sections.forEach((sec, si) => {
    const label = document.createElement('div');
    label.className = 'playlist-section-label';
    label.textContent = `Section ${si+1} — ${sec.title}`;
    container.appendChild(label);
    sec.lessons.forEach((les, li) => {
      const item = document.createElement('div');
      item.className = 'lesson-item' + (les.done?' done':'') + (si===activeSec&&li===activeLes?' playing':'');
      item.onclick = () => {
        if (!les.locked) loadLesson(course.id, si, li);
        else showToast('🔒 Complete previous lessons to unlock.');
      };
      const num = document.createElement('div');
      num.className = 'lesson-num';
      num.textContent = les.done ? '✓' : les.num;
      const info = document.createElement('div');
      info.className = 'lesson-info';
      info.innerHTML = `<div class="lesson-name">${les.name}</div><div class="lesson-dur">▶ ${les.dur}</div>`;
      item.appendChild(num);
      item.appendChild(info);
      if (les.locked) {
        const lk = document.createElement('div');
        lk.className = 'lock-icon'; lk.textContent = '🔒';
        item.appendChild(lk);
      }
      container.appendChild(item);
    });
  });
}

function nextLesson() {
  const course = COURSES.find(c => c.id === currentCourseId);
  let found = false, ns = 0, nl = 0;
  outer:for (let si = 0; si < course.sections.length; si++) {
    for (let li = 0; li < course.sections[si].lessons.length; li++) {
      if (found && !course.sections[si].lessons[li].locked) { ns=si; nl=li; found=false; break outer; }
      if (course.sections[si].lessons[li].current) found = true;
    }
  }
  loadLesson(currentCourseId, ns, nl);
  showToast('Next lesson loaded!');
}
function prevLesson() { showToast('At beginning of course.'); }

// ═══════════ COURSE GRID ═══════════
function initCourseGrid() { filterCourses(); }

function setFilter(cat, btn) {
  currentFilter = cat;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  filterCourses();
}

function filterCourses() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const sortVal = document.getElementById('sortSelect').value;
  const freeOnly = document.getElementById('chk-free').checked;
  const minRating = parseFloat(document.querySelector('input[name="rating"]:checked')?.value || 0);
  let filtered = COURSES.filter(c => {
    if (currentFilter !== 'all' && c.cat !== currentFilter) return false;
    if (freeOnly && !c.free) return false;
    if (c.rating < minRating) return false;
    if (query) return c.title.toLowerCase().includes(query) || c.author.toLowerCase().includes(query) || c.catLabel.toLowerCase().includes(query);
    return true;
  });
  if (sortVal === 'rating') filtered.sort((a,b) => b.rating - a.rating);
  else if (sortVal === 'newest') filtered.sort((a,b) => b.new - a.new);
  else if (sortVal === 'price-asc') filtered.sort((a,b) => a.price - b.price);
  else if (sortVal === 'price-desc') filtered.sort((a,b) => b.price - a.price);
  renderCourseGrid(filtered);
}

function renderCourseGrid(list) {
  const grid = document.getElementById('courseGrid');
  const noRes = document.getElementById('noResults');
  const count = document.getElementById('resultsCount');
  grid.innerHTML = '';
  if (list.length === 0) {
    noRes.style.display = 'block';
    count.textContent = '0 courses found';
    return;
  }
  noRes.style.display = 'none';
  count.textContent = `Showing ${list.length} course${list.length !== 1 ? 's' : ''}`;
  list.forEach(c => {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.onclick = () => openCourse(c.id);
    const badgeHtml = c.badge ? `<span class="card-badge badge-${c.badge}">${c.badge.toUpperCase()}</span>` : '';
    const priceHtml = c.free ? `<span class="card-price free">Free</span>` : `<span class="card-price">₹${c.price.toLocaleString()}</span>`;
    card.innerHTML = `
      <div class="card-cover" style="background:${c.bg}">${c.emoji}${badgeHtml}</div>
      <div class="card-body">
        <div class="card-meta"><div class="cat-dot" style="background:${c.catDot}"></div><span class="card-cat" style="color:${c.catColor}">${c.catLabel}</span></div>
        <div class="card-title">${c.title}</div>
        <div class="card-author">by ${c.author}</div>
        <div class="card-footer"><span class="stars">★★★★${c.rating >= 4.8 ? '★' : '☆'}<span class="rating-count">(${c.ratingCount})</span></span>${priceHtml}</div>
      </div>`;
    grid.appendChild(card);
  });
}

// ═══════════ VIDEO TABS ═══════════
function switchVTab(tabEl, panelId) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  tabEl.classList.add('active');
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.getElementById(panelId).classList.add('active');
}

// ═══════════ ACCOUNT DROPDOWN ═══════════
function toggleAccountDropdown() {
  document.getElementById('accountDropdown').classList.toggle('open');
}
document.addEventListener('click', e => {
  if (!e.target.closest('.nav-right')) {
    document.getElementById('accountDropdown').classList.remove('open');
  }
});

// ═══════════ HEATMAP ═══════════
function buildHeatmap() {
  const grid = document.getElementById('heatmap');
  grid.innerHTML = '';
  const cls = ['', 'heat-1', 'heat-2', 'heat-3', 'heat-4'];
  for (let i = 0; i < 364; i++) {
    const cell = document.createElement('div');
    cell.className = 'heat-cell';
    const r = Math.random();
    if (r > 0.55) cell.classList.add(cls[Math.floor(Math.random()*4)+1]);
    grid.appendChild(cell);
  }
}

// ═══════════ MODALS ═══════════
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.getElementById('accountDropdown').classList.remove('open');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}
// Close modal on overlay click
document.addEventListener('click', e => {
  document.querySelectorAll('.modal-overlay.open').forEach(overlay => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});
// Esc key closes modals
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(o => o.classList.remove('open'));
  }
});

// ═══════════ HELP & SUPPORT ═══════════
function switchHelpTab(tab, btn) {
  document.querySelectorAll('.help-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.help-panel').forEach(p => p.style.display = 'none');
  document.getElementById('help-' + tab).style.display = 'block';
}

function toggleFAQ(el) {
  const item = el.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ═══════════ TOAST ═══════════
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// Init on load
window.onload = () => {
  document.getElementById('app').style.display = 'none';
};
