USB HID Attack Framework

A WebUSB-based HID Attack Framework with 67+ Real Payloads for Cybersecurity Research

---

📋 Table of Contents

· Overview
· Features
· Payload Categories
· Complete Payload List
· How It Works
· Deployment Guide
· Requirements
· Usage Guide
· Technical Architecture
· Security & Disclaimer
· Contributing
· License

---

🔍 Overview

The USB HID Attack Framework v3.0 is a full-stack web application that leverages the WebUSB API to perform real Human Interface Device (HID) attacks through a browser interface. By connecting a physical USB HID device (keyboard) via an OTG cable to your Android phone, you can inject keystrokes into any target machine — no additional hardware required.

⚠️ Important: This tool is designed exclusively for educational purposes, cybersecurity research, and authorized penetration testing. Always obtain explicit written permission before testing on any device you do not own.

---

✨ Features

🔌 WebUSB HID Connection

· Connect physical USB HID devices via OTG cable
· Request and manage WebUSB permissions through browser
· Real-time device status monitoring
· Support for keyboards, mice, and HID gadgets

⌨️ Complete DuckyScript Engine

· Full DuckyScript support (STRING, DELAY, ENTER, GUI, CTRL, ALT, SHIFT)
· Custom script editor with syntax highlighting
· Upload and execute .txt or .duck files
· Real-time execution logging

⚡ 67+ Pre-built Payloads

· 10 categories of attack vectors
· One-click execution from web interface
· Cross-platform support (Windows, Linux, macOS, Android, iOS)
· Custom payload generator available

📊 Live Console

· Real-time execution logs
· Timestamped events
· Export logs to text file
· Clear console option

🌐 Web-based Control

· No installation required (browser-based)
· Vercel deployment ready
· Mobile-responsive design
· Dark theme UI

---

📦 Payload Categories

Category Count Description
Remote Access 7 Reverse shells, bind shells, MSF stagers for Windows/Linux
Credential Harvesting 6 Keyloggers, WiFi password exfiltration, browser credential theft
Data Exfiltration 6 Screenshots, file backups, location tracking, FTP/USB exfil
Defense Evasion 9 AMSI bypass (4 techniques), Windows Defender killer, UAC bypass
Persistence 5 WMI, CIM, Cron, Registry, Startup folder persistence
Exploitation 5 CVE-2026-20817, CVE-2023-45866, admin user creation
System Control 8 Shutdown, restart, WiFi disable/reconfigure, iOS shutdown
DoS Attacks 4 CPU burner, Explorer killer, memory exhaustion
Pranks 9 Screen rotation, RickRoll, WhatsApp spam, popups
Advanced & C2 7 AES-256 C2 beacon, VNC viewer, cross-platform agents

Total: 67+ Real Payloads

---

📝 Complete Payload List

Remote Access (7)

1. Reverse TCP Shell – PowerShell TCP backconnect
2. Reverse HTTPS Shell – Encrypted HTTPS reverse shell
3. Bind TCP Shell – Local listener on target
4. MSF Stager – Metasploit stager injection
5. Linux Reverse Shell – Bash TCP reverse shell
6. Linux Bind Shell – Netcat bind shell
7. Python Reverse Shell – Python-based reverse shell

Credential Harvesting (6)

8. Keylogger Inject – PowerShell keylogger with exfiltration
9. WiFi Passwords Exfil – Extract saved WiFi credentials
10. Browser Passwords Steal – Mimikatz credential dump
11. MAC Address to Webhook – Send MAC via Discord webhook
12. IP Logger to Webhook – Send public IP to webhook
13. System Profile to Webhook – Send system info via webhook

Data Exfiltration (6)

14. Screenshot Capture – Full screen capture and upload
15. Backup Files to Discord – Archive desktop and send to Discord
16. Screen Capture to Discord – Screenshot via Discord webhook
17. Current Location Exfil – IP geolocation extraction
18. FTP Exfiltration – FTP upload of sensitive files
19. USB Storage Exfil – Copy data from connected USB drives

Defense Evasion (9)

20. AMSI Bypass (Reflection) – Reflection-based AMSI patch
21. AMSI Bypass (Memory Patch) – Memory patching technique
22. AMSI Bypass (VEH HWBP) – Vectored Exception Handler bypass
23. AMSI Bypass (Write Raid) – Write-raid bypass technique
24. Windows Defender Killer – Disable Defender real-time monitoring
25. UAC Bypass – Fodhelper UAC bypass
26. Event Log Clearing – Clear System, Security, Application logs
27. Timestomping – Change file timestamps
28. Self-Destruct – Delete user data and shutdown

Persistence (5)

29. WMI Persistence – WMI event filter persistence
30. CIM Persistence – CIM scheduled job persistence
31. Cron Persistence – Linux cron job persistence
32. Registry Persistence – Windows registry run key
33. Startup Folder Persistence – Windows startup folder shortcut

Exploitation (5)

34. CVE-2026-20817 (WER LPE) – Windows Error Reporting LPE
35. CVE-2023-45866 (Bluetooth HID) – Bluetooth HID injection
36. Create Admin User – Create hidden admin user
37. Hide Admin User – Hide user from login screen
38. TrustedInstaller LPE – Takeown + icacls privilege escalation

System Control (8)

39. System Shutdown – shutdown /s /t 5
40. System Restart – shutdown /r /t 5
41. Disable WiFi – Disable WiFi adapter
42. WiFi Reconfig – Create Evil AP with hosted network
43. Shutdown iOS – AppleScript system shutdown
44. Disable Sleep (Mac) – Disable macOS sleep
45. Set Volume Maximum – Set system volume to 100%
46. Enable Charging Sound (Mac) – Enable macOS charging sounds

DoS Attacks (4)

47. CPU Burner – 100% CPU load loop
48. Explorer Killer – Kill Windows Explorer process
49. Memory Exhaustion (Mac) – Fill RAM with useless data
50. Stress Test (Mac) – Combined stress test

Pranks (9)

51. Screen Rotation Prank – Rotate display orientation
52. Blink Prank – Blink CAPSLOCK LED
53. Sing RickRoll (iOS) – Play Never Gonna Give You Up
54. Pop Up (iOS) – Display dialog box
55. WhatsApp Message Spam – Send messages via WhatsApp
56. WhatsApp Status Change – Change WhatsApp status
57. Open Malicious Website – Open configured URL
58. RickRoll (Linux) – Play RickRoll in terminal
59. Change Screenshot Format (iOS) – Change screenshot format

Advanced & C2 (7)

60. C2 Beacon – AES-256-GCM encrypted beacon
61. VNC Viewer – Remote VNC server start
62. Cross-Platform Agent – OS detection and payload execution
63. USB Storage Spoofing – Create autorun.inf payload
64. Network Device Impersonation – Spoof network device
65. WiFi/Bluetooth Exploits – Marauder framework integration
66. Custom Payload Generator – Generate reverse shells on-demand

---

⚙️ How It Works

Step-by-Step Flow

```mermaid
graph TD
    A[User opens Web App] --> B[Connects USB Keyboard via OTG]
    B --> C[Clicks "Device Connect" in browser]
    C --> D[WebUSB Permission Request]
    D --> E[Device Connected Successfully]
    E --> F[Selects Payload from Grid]
    F --> G[JS Parses DuckyScript]
    G --> H[Sends HID Reports via WebUSB]
    H --> I[Target Device receives keystrokes]
    I --> J[Payload Executes on Target]
```

Technical Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Vercel (Cloud Hosting)                    │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                  Flask API Server                     │   │
│  │  - Serves HTML/CSS/JS files                          │   │
│  │  - Provides payload list via /api/payloads           │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                      Browser (Client)                       │
│  ┌──────────────────────────────────────────────────────┐   │
│  │             JavaScript (script.js)                    │   │
│  │  - WebUSB API communication                          │   │
│  │  - DuckyScript parsing engine                        │   │
│  │  - HID report generation                             │   │
│  │  - UI rendering & console logging                   │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                   Android Phone (Host)                      │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              OTG Cable Connection                     │   │
│  │  - USB Host mode enabled                             │   │
│  │  - WebUSB passes HID reports                         │   │
│  └──────────────────────────────────────────────────────┘   │
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│               Physical USB HID Device (Keyboard)            │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  - Receives HID reports from browser                 │   │
│  │  - Simulates keystrokes on target                    │   │
│  └──────────────────────────────────────────────────────┘   │
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                     Target System                           │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  - Recognizes keyboard input                         │   │
│  │  - Executes injected commands                        │   │
│  │  - Payload runs with user privileges                 │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

🚀 Deployment Guide

Option 1: Deploy on Vercel (Recommended)

1. Fork/Clone this repository
   ```bash
   git clone https://github.com/yourusername/usb-hid-web.git
   cd usb-hid-web
   ```
2. Push to GitHub
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
3. Deploy on Vercel
   · Go to Vercel and sign in with GitHub
   · Click "Add New Project"
   · Select your repository
   · Click "Deploy" (Vercel auto-detects the configuration)
   · Wait for deployment (takes ~2 minutes)
4. Access your app
   · Your app will be available at: https://your-project-name.vercel.app

Option 2: Local Development

Backend Setup:

```bash
cd backend
pip install -r requirements.txt
python main.py
# Server runs at http://localhost:8000
```

Frontend Setup:

```bash
# Open static/index.html in browser
# Or use Live Server extension in VS Code
```

Option 3: Run on Android (Termux)

```bash
pkg update && pkg upgrade
pkg install python git
git clone https://github.com/yourusername/usb-hid-web
cd usb-hid-web/backend
pip install flask flask-cors
python main.py
```

---

📋 Requirements

Hardware Requirements

· Android Phone (Root not required for WebUSB)
· OTG Cable (USB-C to USB-A or Micro-USB to USB-A)
· USB Keyboard or HID-compatible device

Software Requirements

· Browser: Google Chrome 71+ or Microsoft Edge 79+ (WebUSB support)
· Backend: Python 3.8+ (for local server)
· Network: Internet connection for Vercel hosting

Permissions Required

· WebUSB: Browser permission for USB device access
· USB Host: Enable USB debugging and OTG support
· File Access: Chrome file system permission (if uploading files)

---

🎯 Usage Guide

Step 1: Set Up Hardware

1. Connect the OTG cable to your Android phone
2. Plug the USB keyboard into the OTG cable
3. Ensure the keyboard is recognized (LEDs may blink)

Step 2: Open Web App

1. Open Chrome/Edge on your Android phone
2. Navigate to your Vercel deployment URL
3. Wait for the app to load completely

Step 3: Connect Device

1. Click "Device Connect" button
2. Browser will prompt for USB permission
3. Select your HID device from the list
4. Confirm the connection
5. Status indicator turns green with "HID Device Active"

Step 4: Run Payloads

· Quick Payload: Click any card in the payload grid
· Custom Script: Write your DuckyScript in the editor and click "Run"
· Upload File: Drag & drop .txt or .duck files

Step 5: Monitor Execution

· Real-time logs appear in the console
· Watch keystrokes being injected on target system
· Export logs for documentation

---

🏗️ Technical Architecture

File Structure

```
usb-hid-web/
├── api/
│   └── index.py              # Flask serverless API
├── static/
│   ├── style.css             # UI styling (dark theme)
│   └── script.js             # Core application logic
├── templates/
│   └── index.html            # Main HTML structure
├── requirements.txt          # Python dependencies
├── vercel.json               # Vercel deployment config
└── README.md                 # Documentation
```

Key Components

1. script.js – Core Engine

· WebUSB Handler: navigator.usb.requestDevice(), connection management
· HID Report Generator: 8-byte keyboard reports with modifiers
· DuckyScript Parser: Parses STRING, DELAY, ENTER, GUI, CTRL, ALT, SHIFT
· Payload Database: 67+ pre-built payloads with categories
· Console Logger: Real-time logging with timestamps

2. index.py – Flask Backend

· / – Serves the main HTML template
· /api/payloads – Returns payload list as JSON
· /api/health – Health check endpoint
· CORS enabled for cross-origin requests

3. vercel.json – Deployment Configuration

· Static file serving for frontend
· Python serverless function for API routes
· Route mapping for SPA support

---

🔒 Security & Disclaimer

🛑 Important Legal Notice

This software is provided for educational and research purposes only. By using this software, you agree to the following terms:

1. Authorization Required: You must have explicit written permission from the device owner before performing any security testing.
2. Liability: The authors assume no responsibility for any misuse or damage caused by this software.
3. Compliance: You are solely responsible for complying with all applicable laws and regulations.
4. Ethical Use: This tool should only be used in controlled environments for cybersecurity research.
5. No Warranty: This software is provided "AS IS" without any warranty of any kind.

⚠️ Operational Warnings

· Physical Proximity Required: This tool requires physical access to the target machine via OTG cable.
· No Remote Attacks: Cannot be used over the internet or network.
· Detection Risks: Antivirus and EDR solutions may detect and block malicious payloads.
· Device Damage: Incorrect usage may cause system instability or data loss.

---

🤝 Contributing

We welcome contributions to improve this framework! Here's how you can help:

Areas for Contribution

· New Payloads: Add more attack vectors from GitHub repos
· DuckyScript Enhancements: Support for more commands
· UI Improvements: Better mobile responsiveness, dark theme variants
· Bug Fixes: Report and fix any issues
· Documentation: Improve README, add examples

Contribution Guidelines

1. Fork the repository
2. Create a feature branch (git checkout -b feature/amazing-payload)
3. Commit changes (git commit -m 'Add amazing payload')
4. Push to branch (git push origin feature/amazing-payload)
5. Open a Pull Request

---

📄 License

This project is licensed under the MIT License – see the LICENSE file for details.

```
MIT License

Copyright (c) 2024 USB HID Attack Framework Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

📚 References & Resources

GitHub Repositories Analyzed

· RDTUTORIAL/GhostUSB – ESP32 HID + C2 framework
· cipher-attack/Chimera – Android HID emulator
· rubberpirate/usbkiller – USB Killer hardware
· hak5/usbrubberducky-payloads – Official DuckyScript payloads
· mqz0211/oh-my-usb – Payload generator
· urbanadventurer/Android-PIN-Bruteforce – PIN brute force
· bst04/payloads_flipperZero – Flipper Zero payloads
· hooker01/FlipperZero-Payloads – Additional payloads

Technical Documentation

· WebUSB API
· HID Usage Tables
· DuckyScript Documentation

---

📬 Contact & Support

· GitHub Issues: Report bugs or suggest features via Issues
· Pull Requests: Contributions welcome via Pull Requests
· Security Concerns: For security vulnerabilities, please email privately.

---

🙏 Acknowledgments

· Thanks to all open-source contributors whose work made this project possible
· WebUSB API team at Google for providing the browser interface
· Hak5 for the DuckyScript standard
· The cybersecurity community for continuous research and education

---

⚠️ Remember: With great power comes great responsibility. Use this knowledge ethically and legally.
