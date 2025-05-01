const allTools = [
  { name: 'Nmap', type: 'legal', link: 'https://nmap.org/', desc: `Network mapper untuk scanning jaringan dan host discovery.` },
  { name: 'Netcat', type: 'legal', link: 'https://nc110.sourceforge.net/', desc: `Utility untuk membaca dan menulis data melalui koneksi jaringan TCP/UDP.` },
  { name: 'Wireshark', type: 'legal', link: 'https://www.wireshark.org/', desc: `Network protocol analyzer untuk memantau lalu lintas jaringan.` },
  { name: 'Termux', type: 'legal', link: 'https://f-droid.org/en/packages/com.termux/', desc: `Terminal emulator Android dengan lingkungan Linux.` },
  { name: 'Hydra', type: 'legal', link: 'https://github.com/vanhauser-thc/thc-hydra', desc: `Cracker login bruteforce untuk berbagai protokol.` },
  { name: 'Sqlmap', type: 'legal', link: 'https://github.com/sqlmapproject/sqlmap', desc: `Tool open-source untuk deteksi dan eksploitasi SQL Injection.` },
  { name: 'Metasploit', type: 'legal', link: 'https://www.metasploit.com/', desc: `Framework eksploitasi keamanan yang powerful untuk pentesting.` },
  { name: 'Nikto', type: 'legal', link: 'https://github.com/sullo/nikto', desc: `Pemindai web server untuk mendeteksi kelemahan keamanan.` },
  { name: 'John the Ripper', type: 'legal', link: 'https://www.openwall.com/john/', desc: `Tool pemecah password untuk uji kekuatan kata sandi.` },
  { name: 'Aircrack-ng', type: 'legal', link: 'https://www.aircrack-ng.org/', desc: `Tool audit WiFi untuk cracking WEP dan WPA-PSK.` },
  { name: 'Nmap #1', type: 'legal', link: 'https://nmap.org/', desc: `Network mapper untuk scanning jaringan dan host discovery.` },
  { name: 'Netcat #2', type: 'legal', link: 'https://nc110.sourceforge.net/', desc: `Utility untuk membaca dan menulis data melalui koneksi jaringan TCP/UDP.` },
  { name: 'Wireshark #3', type: 'legal', link: 'https://www.wireshark.org/', desc: `Network protocol analyzer untuk memantau lalu lintas jaringan.` },
  { name: 'Termux #4', type: 'legal', link: 'https://f-droid.org/en/packages/com.termux/', desc: `Terminal emulator Android dengan lingkungan Linux.` },
  { name: 'Hydra #5', type: 'legal', link: 'https://github.com/vanhauser-thc/thc-hydra', desc: `Cracker login bruteforce untuk berbagai protokol.` },
  { name: 'Sqlmap #6', type: 'legal', link: 'https://github.com/sqlmapproject/sqlmap', desc: `Tool open-source untuk deteksi dan eksploitasi SQL Injection.` },
  { name: 'Metasploit #7', type: 'legal', link: 'https://www.metasploit.com/', desc: `Framework eksploitasi keamanan yang powerful untuk pentesting.` },
  { name: 'Nikto #8', type: 'legal', link: 'https://github.com/sullo/nikto', desc: `Pemindai web server untuk mendeteksi kelemahan keamanan.` },
  { name: 'John the Ripper #9', type: 'legal', link: 'https://www.openwall.com/john/', desc: `Tool pemecah password untuk uji kekuatan kata sandi.` },
  { name: 'Aircrack-ng #10', type: 'legal', link: 'https://www.aircrack-ng.org/', desc: `Tool audit WiFi untuk cracking WEP dan WPA-PSK.` },
  { name: 'Nmap #1 #11', type: 'legal', link: 'https://nmap.org/', desc: `Network mapper untuk scanning jaringan dan host discovery.` },
  { name: 'Netcat #2 #12', type: 'legal', link: 'https://nc110.sourceforge.net/', desc: `Utility untuk membaca dan menulis data melalui koneksi jaringan TCP/UDP.` },
  { name: 'Wireshark #3 #13', type: 'legal', link: 'https://www.wireshark.org/', desc: `Network protocol analyzer untuk memantau lalu lintas jaringan.` },
  { name: 'Termux #4 #14', type: 'legal', link: 'https://f-droid.org/en/packages/com.termux/', desc: `Terminal emulator Android dengan lingkungan Linux.` },
  { name: 'Hydra #5 #15', type: 'legal', link: 'https://github.com/vanhauser-thc/thc-hydra', desc: `Cracker login bruteforce untuk berbagai protokol.` },
  { name: 'Sqlmap #6 #16', type: 'legal', link: 'https://github.com/sqlmapproject/sqlmap', desc: `Tool open-source untuk deteksi dan eksploitasi SQL Injection.` },
  { name: 'Metasploit #7 #17', type: 'legal', link: 'https://www.metasploit.com/', desc: `Framework eksploitasi keamanan yang powerful untuk pentesting.` },
  { name: 'Nikto #8 #18', type: 'legal', link: 'https://github.com/sullo/nikto', desc: `Pemindai web server untuk mendeteksi kelemahan keamanan.` },
  { name: 'John the Ripper #9 #19', type: 'legal', link: 'https://www.openwall.com/john/', desc: `Tool pemecah password untuk uji kekuatan kata sandi.` },
  { name: 'Aircrack-ng #10 #20', type: 'legal', link: 'https://www.aircrack-ng.org/', desc: `Tool audit WiFi untuk cracking WEP dan WPA-PSK.` },
  { name: 'Nmap #1 #11 #21', type: 'legal', link: 'https://nmap.org/', desc: `Network mapper untuk scanning jaringan dan host discovery.` },
  { name: 'Netcat #2 #12 #22', type: 'legal', link: 'https://nc110.sourceforge.net/', desc: `Utility untuk membaca dan menulis data melalui koneksi jaringan TCP/UDP.` },
  { name: 'Wireshark #3 #13 #23', type: 'legal', link: 'https://www.wireshark.org/', desc: `Network protocol analyzer untuk memantau lalu lintas jaringan.` },
  { name: 'Termux #4 #14 #24', type: 'legal', link: 'https://f-droid.org/en/packages/com.termux/', desc: `Terminal emulator Android dengan lingkungan Linux.` },
  { name: 'Hydra #5 #15 #25', type: 'legal', link: 'https://github.com/vanhauser-thc/thc-hydra', desc: `Cracker login bruteforce untuk berbagai protokol.` },
  { name: 'Sqlmap #6 #16 #26', type: 'legal', link: 'https://github.com/sqlmapproject/sqlmap', desc: `Tool open-source untuk deteksi dan eksploitasi SQL Injection.` },
  { name: 'Metasploit #7 #17 #27', type: 'legal', link: 'https://www.metasploit.com/', desc: `Framework eksploitasi keamanan yang powerful untuk pentesting.` },
  { name: 'Nikto #8 #18 #28', type: 'legal', link: 'https://github.com/sullo/nikto', desc: `Pemindai web server untuk mendeteksi kelemahan keamanan.` },
  { name: 'John the Ripper #9 #19 #29', type: 'legal', link: 'https://www.openwall.com/john/', desc: `Tool pemecah password untuk uji kekuatan kata sandi.` },
  { name: 'Aircrack-ng #10 #20 #30', type: 'legal', link: 'https://www.aircrack-ng.org/', desc: `Tool audit WiFi untuk cracking WEP dan WPA-PSK.` },
  { name: 'Nmap #1 #11 #21 #31', type: 'legal', link: 'https://nmap.org/', desc: `Network mapper untuk scanning jaringan dan host discovery.` },
  { name: 'Netcat #2 #12 #22 #32', type: 'legal', link: 'https://nc110.sourceforge.net/', desc: `Utility untuk membaca dan menulis data melalui koneksi jaringan TCP/UDP.` },
  { name: 'Wireshark #3 #13 #23 #33', type: 'legal', link: 'https://www.wireshark.org/', desc: `Network protocol analyzer untuk memantau lalu lintas jaringan.` },
  { name: 'Termux #4 #14 #24 #34', type: 'legal', link: 'https://f-droid.org/en/packages/com.termux/', desc: `Terminal emulator Android dengan lingkungan Linux.` },
  { name: 'Hydra #5 #15 #25 #35', type: 'legal', link: 'https://github.com/vanhauser-thc/thc-hydra', desc: `Cracker login bruteforce untuk berbagai protokol.` },
  { name: 'Sqlmap #6 #16 #26 #36', type: 'legal', link: 'https://github.com/sqlmapproject/sqlmap', desc: `Tool open-source untuk deteksi dan eksploitasi SQL Injection.` },
  { name: 'Metasploit #7 #17 #27 #37', type: 'legal', link: 'https://www.metasploit.com/', desc: `Framework eksploitasi keamanan yang powerful untuk pentesting.` },
  { name: 'Nikto #8 #18 #28 #38', type: 'legal', link: 'https://github.com/sullo/nikto', desc: `Pemindai web server untuk mendeteksi kelemahan keamanan.` },
  { name: 'John the Ripper #9 #19 #29 #39', type: 'legal', link: 'https://www.openwall.com/john/', desc: `Tool pemecah password untuk uji kekuatan kata sandi.` },
  { name: 'Aircrack-ng #10 #20 #30 #40', type: 'legal', link: 'https://www.aircrack-ng.org/', desc: `Tool audit WiFi untuk cracking WEP dan WPA-PSK.` },
  { name: 'Zphisher', type: 'ilegal', link: 'https://github.com/htr-tech/zphisher', desc: `Tool phishing otomatis dengan banyak template login media sosial.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'BlackEye', type: 'ilegal', link: 'https://github.com/An0nUD4Y/blackeye', desc: `Phishing tool berbasis bash dengan berbagai tampilan situs palsu.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'SocialFish', type: 'ilegal', link: 'https://github.com/UndeadSec/SocialFish', desc: `Framework phishing interaktif yang mendukung social engineering.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'HiddenEye', type: 'ilegal', link: 'https://github.com/DarkSecDevelopers/HiddenEye', desc: `Phishing tool populer untuk Instagram, Facebook, Gmail, dll.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'CamPhish', type: 'ilegal', link: 'https://github.com/techchipnet/CamPhish', desc: `Mengambil foto dari kamera target melalui link phishing.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'SayCheese', type: 'ilegal', link: 'https://github.com/hangetzzu/saycheese', desc: `Memotret wajah pengguna melalui browser.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'Shellphish', type: 'ilegal', link: 'https://github.com/thelinuxchoice/shellphish', desc: `Phishing tool untuk berbagai platform sosial media.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'BruteX', type: 'ilegal', link: 'https://github.com/1N3/BruteX', desc: `Tool bruteforce SSH, FTP dan banyak lagi.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'Hammer', type: 'ilegal', link: 'https://github.com/cyweb/hammer', desc: `Tool DoS attack menggunakan HTTP flood.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'XerXes', type: 'ilegal', link: 'https://github.com/zanyarjamal/xerxes', desc: `Tool DoS berbasis C yang digunakan untuk menyerang website.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'Zphisher #1', type: 'ilegal', link: 'https://github.com/htr-tech/zphisher', desc: `Tool phishing otomatis dengan banyak template login media sosial.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'BlackEye #2', type: 'ilegal', link: 'https://github.com/An0nUD4Y/blackeye', desc: `Phishing tool berbasis bash dengan berbagai tampilan situs palsu.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'SocialFish #3', type: 'ilegal', link: 'https://github.com/UndeadSec/SocialFish', desc: `Framework phishing interaktif yang mendukung social engineering.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'HiddenEye #4', type: 'ilegal', link: 'https://github.com/DarkSecDevelopers/HiddenEye', desc: `Phishing tool populer untuk Instagram, Facebook, Gmail, dll.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'CamPhish #5', type: 'ilegal', link: 'https://github.com/techchipnet/CamPhish', desc: `Mengambil foto dari kamera target melalui link phishing.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'SayCheese #6', type: 'ilegal', link: 'https://github.com/hangetzzu/saycheese', desc: `Memotret wajah pengguna melalui browser.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'Shellphish #7', type: 'ilegal', link: 'https://github.com/thelinuxchoice/shellphish', desc: `Phishing tool untuk berbagai platform sosial media.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'BruteX #8', type: 'ilegal', link: 'https://github.com/1N3/BruteX', desc: `Tool bruteforce SSH, FTP dan banyak lagi.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'Hammer #9', type: 'ilegal', link: 'https://github.com/cyweb/hammer', desc: `Tool DoS attack menggunakan HTTP flood.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'XerXes #10', type: 'ilegal', link: 'https://github.com/zanyarjamal/xerxes', desc: `Tool DoS berbasis C yang digunakan untuk menyerang website.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'Zphisher #1 #11', type: 'ilegal', link: 'https://github.com/htr-tech/zphisher', desc: `Tool phishing otomatis dengan banyak template login media sosial.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'BlackEye #2 #12', type: 'ilegal', link: 'https://github.com/An0nUD4Y/blackeye', desc: `Phishing tool berbasis bash dengan berbagai tampilan situs palsu.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'SocialFish #3 #13', type: 'ilegal', link: 'https://github.com/UndeadSec/SocialFish', desc: `Framework phishing interaktif yang mendukung social engineering.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'HiddenEye #4 #14', type: 'ilegal', link: 'https://github.com/DarkSecDevelopers/HiddenEye', desc: `Phishing tool populer untuk Instagram, Facebook, Gmail, dll.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'CamPhish #5 #15', type: 'ilegal', link: 'https://github.com/techchipnet/CamPhish', desc: `Mengambil foto dari kamera target melalui link phishing.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'SayCheese #6 #16', type: 'ilegal', link: 'https://github.com/hangetzzu/saycheese', desc: `Memotret wajah pengguna melalui browser.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'Shellphish #7 #17', type: 'ilegal', link: 'https://github.com/thelinuxchoice/shellphish', desc: `Phishing tool untuk berbagai platform sosial media.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'BruteX #8 #18', type: 'ilegal', link: 'https://github.com/1N3/BruteX', desc: `Tool bruteforce SSH, FTP dan banyak lagi.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'Hammer #9 #19', type: 'ilegal', link: 'https://github.com/cyweb/hammer', desc: `Tool DoS attack menggunakan HTTP flood.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'XerXes #10 #20', type: 'ilegal', link: 'https://github.com/zanyarjamal/xerxes', desc: `Tool DoS berbasis C yang digunakan untuk menyerang website.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'Zphisher #1 #11 #21', type: 'ilegal', link: 'https://github.com/htr-tech/zphisher', desc: `Tool phishing otomatis dengan banyak template login media sosial.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'BlackEye #2 #12 #22', type: 'ilegal', link: 'https://github.com/An0nUD4Y/blackeye', desc: `Phishing tool berbasis bash dengan berbagai tampilan situs palsu.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'SocialFish #3 #13 #23', type: 'ilegal', link: 'https://github.com/UndeadSec/SocialFish', desc: `Framework phishing interaktif yang mendukung social engineering.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'HiddenEye #4 #14 #24', type: 'ilegal', link: 'https://github.com/DarkSecDevelopers/HiddenEye', desc: `Phishing tool populer untuk Instagram, Facebook, Gmail, dll.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'CamPhish #5 #15 #25', type: 'ilegal', link: 'https://github.com/techchipnet/CamPhish', desc: `Mengambil foto dari kamera target melalui link phishing.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'SayCheese #6 #16 #26', type: 'ilegal', link: 'https://github.com/hangetzzu/saycheese', desc: `Memotret wajah pengguna melalui browser.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'Shellphish #7 #17 #27', type: 'ilegal', link: 'https://github.com/thelinuxchoice/shellphish', desc: `Phishing tool untuk berbagai platform sosial media.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'BruteX #8 #18 #28', type: 'ilegal', link: 'https://github.com/1N3/BruteX', desc: `Tool bruteforce SSH, FTP dan banyak lagi.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'Hammer #9 #19 #29', type: 'ilegal', link: 'https://github.com/cyweb/hammer', desc: `Tool DoS attack menggunakan HTTP flood.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'XerXes #10 #20 #30', type: 'ilegal', link: 'https://github.com/zanyarjamal/xerxes', desc: `Tool DoS berbasis C yang digunakan untuk menyerang website.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'Zphisher #1 #11 #21 #31', type: 'ilegal', link: 'https://github.com/htr-tech/zphisher', desc: `Tool phishing otomatis dengan banyak template login media sosial.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'BlackEye #2 #12 #22 #32', type: 'ilegal', link: 'https://github.com/An0nUD4Y/blackeye', desc: `Phishing tool berbasis bash dengan berbagai tampilan situs palsu.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'SocialFish #3 #13 #23 #33', type: 'ilegal', link: 'https://github.com/UndeadSec/SocialFish', desc: `Framework phishing interaktif yang mendukung social engineering.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'HiddenEye #4 #14 #24 #34', type: 'ilegal', link: 'https://github.com/DarkSecDevelopers/HiddenEye', desc: `Phishing tool populer untuk Instagram, Facebook, Gmail, dll.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'CamPhish #5 #15 #25 #35', type: 'ilegal', link: 'https://github.com/techchipnet/CamPhish', desc: `Mengambil foto dari kamera target melalui link phishing.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'SayCheese #6 #16 #26 #36', type: 'ilegal', link: 'https://github.com/hangetzzu/saycheese', desc: `Memotret wajah pengguna melalui browser.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'Shellphish #7 #17 #27 #37', type: 'ilegal', link: 'https://github.com/thelinuxchoice/shellphish', desc: `Phishing tool untuk berbagai platform sosial media.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'BruteX #8 #18 #28 #38', type: 'ilegal', link: 'https://github.com/1N3/BruteX', desc: `Tool bruteforce SSH, FTP dan banyak lagi.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'Hammer #9 #19 #29 #39', type: 'ilegal', link: 'https://github.com/cyweb/hammer', desc: `Tool DoS attack menggunakan HTTP flood.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
  { name: 'XerXes #10 #20 #30 #40', type: 'ilegal', link: 'https://github.com/zanyarjamal/xerxes', desc: `Tool DoS berbasis C yang digunakan untuk menyerang website.

PERINGATAN: Penggunaan tool ini dapat melanggar hukum jika digunakan tanpa izin. Penggunaan sepenuhnya tanggung jawab pengguna.` },
];


function saveUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}
function getUser() {
  return JSON.parse(localStorage.getItem('user'));
}
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (!username || !password) {
    document.getElementById('message').innerText = 'Username dan password wajib diisi!';
    return;
  }
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  if (users[username] && users[username] === password) {
    saveUser({ username });
    showMain();
  } else {
    document.getElementById('message').innerText = 'Login gagal!';
  }
}
function register() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (!username || !password) {
    document.getElementById('message').innerText = 'Username dan password wajib diisi!';
    return;
  }
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  if (users[username]) {
    document.getElementById('message').innerText = 'Username sudah terdaftar!';
    return;
  }
  users[username] = password;
  localStorage.setItem('users', JSON.stringify(users));
  saveUser({ username });
  showMain();
}
function logout() {
  localStorage.removeItem('user');
  location.reload();
}
function showMain() {
  document.getElementById('loginPage').classList.add('hidden');
  document.getElementById('mainPage').classList.remove('hidden');
  renderTools(allTools);
}
function filterTools(type) {
  const filtered = allTools.filter(tool => tool.type === type);
  renderTools(filtered);
}
function showAll() {
  renderTools(allTools);
}
function renderTools(tools) {
  const container = document.getElementById('toolList');
  container.innerHTML = '';
  tools.forEach(tool => {
    const div = document.createElement('div');
    div.className = 'bg-gray-900 text-white p-4 rounded shadow hover:bg-gray-800 transition';
    div.innerHTML = `
      <h3 class="text-xl font-bold mb-2">${tool.name}</h3>
      <p class="text-sm mb-2 whitespace-pre-wrap">${tool.desc}</p>
      <a href="${tool.link}" target="_blank" class="inline-block mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded">Kunjungi</a>
    `;
    container.appendChild(div);
  });
}
window.onload = () => {
  const user = getUser();
  if (user) showMain();
};
