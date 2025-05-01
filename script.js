const legalTools = [
  {
    "name": "Nmap",
    "link": "https://nmap.org",
    "desc": "Network discovery dan security auditing tool."
  },
  {
    "name": "Metasploit Framework",
    "link": "https://metasploit.help.rapid7.com/docs/installing-the-metasploit-framework",
    "desc": "Platform penetration testing untuk eksploitasi sistem."
  }
];
const illegalTools = [
  {
    "name": "AndroRat",
    "link": "https://github.com/DesignativeDave/androrat",
    "desc": "Remote Access Tool (RAT) untuk Android yang memungkinkan pengambilalihan penuh perangkat target.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "AhMyth",
    "link": "https://github.com/AhMyth/AhMyth-Android-RAT",
    "desc": "Android RAT open-source yang memungkinkan pemantauan aktivitas perangkat secara rahasia.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "ZPhisher",
    "link": "https://github.com/htr-tech/zphisher",
    "desc": "Toolkit phishing otomatis dengan dukungan untuk ratusan template situs populer.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "HiddenEye",
    "link": "https://github.com/DarkSecDevelopers/HiddenEye",
    "desc": "Phishing tool dengan berbagai metode social engineering dan keylogger.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "Lazagne",
    "link": "https://github.com/AlessandroZ/LaZagne",
    "desc": "Tool untuk ekstraksi password dari aplikasi dan sistem Windows/Linux.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "Ghost Phisher",
    "link": "https://tools.kali.org/information-gathering/ghost-phisher",
    "desc": "Fake AP tool yang menyimulasikan access point palsu untuk sniffing data.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "CamPhish",
    "link": "https://github.com/techchipnet/CamPhish",
    "desc": "Phishing tool untuk mengakses kamera korban melalui link jebakan.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "Keylogger-Linux",
    "link": "https://github.com/D3vil0p3r/Linux-Keylogger",
    "desc": "Keylogger tersembunyi untuk sistem Linux berbasis kernel input.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "Brutus",
    "link": "https://packetstormsecurity.com/files/10739/brutus-aet2.zip.html",
    "desc": "Password cracker lama untuk protokol HTTP, POP3, FTP dan lainnya.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "Hydra Enhanced Fork",
    "link": "https://github.com/vanhauser-thc/thc-hydra",
    "desc": "Versi forked dari Hydra dengan dukungan brute force untuk login situs umum.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "SocialFish",
    "link": "https://github.com/UndeadSec/SocialFish",
    "desc": "Phishing framework dengan antarmuka web dan support untuk berbagai situs populer.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "Weeman",
    "link": "https://github.com/evait-security/weeman",
    "desc": "Phishing HTTP server untuk membuat klon halaman login dan menangkap kredensial.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "BlackEye",
    "link": "https://github.com/An0nUD4Y/blackeye",
    "desc": "Toolkit phishing yang mendukung lebih dari 30 situs target termasuk Facebook, Gmail, dan lainnya.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "SET (Social-Engineer Toolkit)",
    "link": "https://github.com/trustedsec/social-engineer-toolkit",
    "desc": "Toolkit untuk social engineering dan rekayasa sosial, banyak digunakan untuk serangan spear phishing.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "Xerosploit",
    "link": "https://github.com/LionSec/xerosploit",
    "desc": "Toolkit MITM (Man-In-The-Middle) berbasis Python dengan fitur inject script, DNS spoofing, dan lainnya.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "Routersploit",
    "link": "https://github.com/threat9/routersploit",
    "desc": "Exploitation framework untuk mengeksploitasi router dan perangkat IoT yang rentan.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "Shellphish",
    "link": "https://github.com/thelinuxchoice/shellphish",
    "desc": "Toolkit phishing otomatis dengan berbagai template halaman login palsu.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "InSpy",
    "link": "https://github.com/leapsecurity/InSpy",
    "desc": "Alat enumerasi pegawai dan email perusahaan dari LinkedIn secara otomatis.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "WiFi-Pumpkin",
    "link": "https://github.com/P0cL4bs/WiFi-Pumpkin",
    "desc": "Framework rogue Wi-Fi access point untuk serangan MITM.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "KidLogger",
    "link": "https://kidlogger.net/",
    "desc": "Software pelacakan aktivitas anak yang bisa disalahgunakan sebagai keylogger tersembunyi.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "Evilginx2",
    "link": "https://github.com/kgretzky/evilginx2",
    "desc": "Framework phishing dengan teknik man-in-the-middle untuk mendapatkan token otentikasi 2FA.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "Easysploit",
    "link": "https://github.com/vanhauser-thc/easysploit",
    "desc": "Metasploit wrapper untuk pemula yang membuat eksploitasi sistem menjadi sangat mudah.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "DroidJack",
    "link": "https://droidjack.net/",
    "desc": "Android RAT berbayar yang memungkinkan pemantauan dan kontrol jarak jauh perangkat Android.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "Spaghetti",
    "link": "https://github.com/m4ll0k/Spaghetti",
    "desc": "Scanner kerentanan web yang mendukung banyak teknik injeksi dan fingerprinting.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "Wifite",
    "link": "https://github.com/derv82/wifite2",
    "desc": "Automated Wi-Fi cracking tool yang mendukung serangan WEP, WPA, dan WPS.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "FaceNiff",
    "link": "https://alternativeto.net/software/faceniff/about/",
    "desc": "Android tool untuk mencuri sesi login pengguna lain di jaringan Wi-Fi terbuka.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "USB Rubber Ducky",
    "link": "https://shop.hak5.org/products/usb-rubber-ducky-deluxe",
    "desc": "Perangkat USB yang menyamar sebagai keyboard dan menyuntikkan perintah otomatis.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "EvilUSB",
    "link": "https://github.com/maldevel/EvilUSB",
    "desc": "Toolkit pembuatan firmware USB jahat menggunakan Duckyscript atau HID.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "Keylogger C++",
    "link": "https://github.com/D4Vinci/PyKeylogger",
    "desc": "Keylogger cross-platform berbasis C++ yang berjalan diam-diam.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "OvernightRAT",
    "link": "https://github.com/NYAN-x-CAT/OvernightRAT",
    "desc": "Remote Access Tool serbaguna untuk kontrol penuh sistem Windows target.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "Pupy",
    "link": "https://github.com/n1nj4sec/pupy",
    "desc": "RAT multi-platform yang mendukung Windows, Linux, macOS dan Android.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "Beelogger",
    "link": "https://github.com/4w4k3/BeeLogger",
    "desc": "Keylogger Windows dengan fitur email reporting dan stealth mode.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "BlackNurse",
    "link": "https://github.com/jonathansamuel/BlackNurse",
    "desc": "ICMP attack tool yang mengeksploitasi kelemahan CPU dengan traffic ICMP low-bandwidth.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "Slowloris",
    "link": "https://github.com/gkbrk/slowloris",
    "desc": "Tool DDoS untuk mempertahankan koneksi HTTP terbuka dan menjatuhkan server.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "HOIC (High Orbit Ion Cannon)",
    "link": "https://sourceforge.net/projects/high-orbit-ion-cannon/",
    "desc": "DDoS tool GUI yang bisa menyerang hingga ratusan target secara simultan.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "LOIC (Low Orbit Ion Cannon)",
    "link": "https://github.com/NewEraCracker/LOIC",
    "desc": "Tool serangan DDoS yang terkenal digunakan dalam operasi Anonymous.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "RATBlaster",
    "link": "https://github.com/DarkSpiritz/RATBlaster",
    "desc": "Framework scanning dan serangan otomatis terhadap RAT dan botnet.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "Ghost Phisher",
    "link": "https://tools.kali.org/information-gathering/ghost-phisher",
    "desc": "Toolkit rogue AP untuk phishing login credentials dan inject script.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "DNSSpoof",
    "link": "https://linux.die.net/man/8/dnsspoof",
    "desc": "Alat untuk spoofing DNS dan mengarahkan trafik ke server palsu.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
  {
    "name": "Reptile",
    "link": "https://github.com/f0rb1dd3n/Reptile",
    "desc": "Rootkit Linux LKM untuk akses belakang tersembunyi dan persistence.",
    "warning": "Penggunaan alat ini adalah ilegal. Tidak boleh digunakan untuk edukasi maupun penetration testing."
  },
];

// Simpan user data sementara
let users = JSON.parse(localStorage.getItem("users") || "{}");
let currentUser = localStorage.getItem("currentUser");

function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  if (users[u] && users[u] === p) {
    currentUser = u;
    localStorage.setItem("currentUser", u);
    showMain();
  } else {
    document.getElementById("message").innerText = "Login gagal.";
  }
}

function register() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  if (users[u]) {
    document.getElementById("message").innerText = "Username sudah terdaftar.";
  } else {
    users[u] = p;
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("message").innerText = "Registrasi berhasil. Silakan login.";
  }
}

function logout() {
  localStorage.removeItem("currentUser");
  location.reload();
}

function showMain() {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("mainPage").classList.remove("hidden");
  showAll();
}

function createCard(tool, legal) {
  return `
    <div class="border p-3 rounded bg-gray-800">
      <h2 class="text-xl font-bold">${tool.name}</h2>
      <p class="text-sm">${tool.desc}</p>
      <a href="${tool.link}" class="text-blue-400 underline text-sm block mt-1" target="_blank">Link</a>
      ${!legal ? `<p class="text-xs text-red-400 mt-1 italic">${tool.warning}</p>` : ""}
    </div>
  `;
}

function filterTools(type) {
  const list = type === 'legal' ? legalTools : illegalTools;
  document.getElementById("toolList").innerHTML = list.map(t => createCard(t, type === 'legal')).join("");
}

function showAll() {
  const all = legalTools.map(t => createCard(t, true)).concat(illegalTools.map(t => createCard(t, false)));
  document.getElementById("toolList").innerHTML = all.join("");
}

if (currentUser) showMain();
