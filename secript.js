// Efek mengetik untuk header
const phrases = [
    "Menginisialisasi Metasploit Framework...",
    "Memuat exploit...",
    "Membuat koneksi...",
    "Akses diberikan.",
    "Siap untuk pengujian penetrasi."
];

let currentPhrase = 0;
let currentChar = 0;
let typingInterval;

function typeWriter() {
    const typedElement = document.getElementById('typed');
    
    if (currentChar < phrases[currentPhrase].length) {
        typedElement.textContent += phrases[currentPhrase].charAt(currentChar);
        currentChar++;
    } else {
        clearInterval(typingInterval);
        setTimeout(() => {
            typedElement.textContent = '';
            currentChar = 0;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            typingInterval = setInterval(typeWriter, 100);
        }, 2000);
    }
}

// Fungsi pencarian
function searchCommands() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const commands = document.querySelectorAll('.command code');
    
    commands.forEach(command => {
        const commandText = command.textContent || command.innerText;
        const commandElement = command.closest('.command');
        const categoryElement = command.closest('.tab-content');
        
        if (commandText.toUpperCase().indexOf(filter) > -1) {
            commandElement.style.display = '';
            
            // Sorot teks yang cocok
            if (filter.length > 0) {
                const regex = new RegExp(filter, 'gi');
                const highlightedText = commandText.replace(regex, match => `<span style="background-color: var(--accent-yellow); color: black;">${match}</span>`);
                command.innerHTML = highlightedText;
            } else {
                command.textContent = commandText;
            }
        } else {
            commandElement.style.display = 'none';
        }
    });
}

// Fungsi salin ke clipboard
function setupCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    const notification = document.getElementById('copyNotification');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const command = this.parentElement.querySelector('code').textContent;
            navigator.clipboard.writeText(command).then(() => {
                notification.style.display = 'block';
                setTimeout(() => {
                    notification.style.display = 'none';
                }, 2000);
            });
        });
    });
}

// Fungsi tab navigasi
function setupTabs() {
    const tabs = document.querySelectorAll('.nav-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Hapus kelas active dari semua tab dan konten
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Tambahkan kelas active ke tab yang diklik
            this.classList.add('active');
            
            // Tampilkan konten yang sesuai
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Efek latar belakang terminal
function createTerminalEffect() {
    const terminalEffect = document.getElementById('terminalEffect');
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$#%&@*()[]{};:<>/\\|";
    const lines = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < lines; i++) {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        
        // Buat teks acak untuk setiap baris
        let text = '';
        const length = Math.floor(Math.random() * 30) + 10;
        for (let j = 0; j < length; j++) {
            text += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        
        line.textContent = text;
        line.style.left = `${(i * (100 / lines))}%`;
        line.style.animationDuration = `${Math.random() * 10 + 10}s`;
        line.style.animationDelay = `${Math.random() * 5}s`;
        
        terminalEffect.appendChild(line);
    }
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Mulai efek mengetik
    typingInterval = setInterval(typeWriter, 100);
    
    // Setup event listener untuk pencarian
    document.getElementById('searchInput').addEventListener('keyup', searchCommands);
    
    // Setup tombol salin
    setupCopyButtons();
    
    // Setup tab navigasi
    setupTabs();
    
    // Buat efek terminal
    createTerminalEffect();
});
