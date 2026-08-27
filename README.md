USB HID Attack Framework 

A Complete WebUSB-Based HID Attack Framework with 67+ Real Payloads for Cybersecurity Research


⚠️ Educational Purpose Only: This tool is designed exclusively for educational research, authorized penetration testing, and cybersecurity learning. Always obtain explicit written permission before testing on any device you do not own.

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
· Credits

---

🔍 Overview

The USB HID Attack Framework – Neon Edition is a full-stack web application that leverages the WebUSB API to perform real Human Interface Device (HID) attacks through a browser interface. By connecting a physical USB HID device (keyboard) via an OTG cable to your Android phone, you can inject keystrokes into any target machine — no additional hardware required.

This framework was developed after deep research and analysis of 15+ GitHub repositories, compiling 67+ real-world hacking activities across 10 categories. All payloads are real and functional – no demos, no simulations.

Why This Framework?

· Complete: Every hackable activity identified from GitHub research is included.
· Real: All payloads execute actual keystrokes on target systems.
· Web-Based: No installation required – works directly from your browser.
· Neon Theme: Cyberpunk-inspired dark UI with neon cyan/pink accents.
· Vercel Ready: Deploy in minutes with zero configuration.

---

✨ Features

🔌 WebUSB HID Connection

· Connect physical USB HID devices via OTG cable
· Request and manage WebUSB permissions through browser
· Real-time device status monitoring
· Support for keyboards, mice, and HID gadgets

⌨️ Complete DuckyScript Engine

· Full DuckyScript support (STRING, DELAY, ENTER, GUI, CTRL, ALT, SHIFT, TAB, ESC)
· Custom script editor with syntax highlighting
· One-click execution from payload cards
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

🎨 Neon Dark Theme

· Cyberpunk-inspired design
· Neon cyan, pink, and purple accents
· Glowing effects and smooth animations
· Fully responsive for mobile devices

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

# Payload Target Description
1 Reverse TCP Shell Windows PowerShell TCP backconnect
2 Reverse HTTPS Shell Windows Encrypted HTTPS reverse shell
3 Bind TCP Shell Windows Local listener on target
4 MSF Stager Windows Metasploit stager injection
5 Linux Reverse Shell Linux Bash TCP reverse shell
6 Linux Bind Shell Linux Netcat bind shell
7 Python Reverse Shell Linux/macOS Python-based reverse shell

Credential Harvesting (6)

# Payload Target Description
8 Keylogger Inject Windows PowerShell keylogger with exfiltration
9 WiFi Passwords Exfil Windows Extract saved WiFi credentials
10 Browser Passwords Steal Windows Mimikatz credential dump
11 MAC Address to Webhook Windows Send MAC via Discord webhook
12 IP Logger to Webhook Windows Send public IP to webhook
13 System Profile to Webhook Windows Send system info via webhook

Data Exfiltration (6)

# Payload Target Description
14 Screenshot Capture Windows Full screen capture and upload
15 Backup Files to Discord Windows Archive desktop and send to Discord
16 Screen Capture to Discord Windows Screenshot via Discord webhook
17 Current Location Exfil Windows IP geolocation extraction
18 FTP Exfiltration Windows FTP upload of sensitive files
19 USB Storage Exfil Windows Copy data from connected USB drives

Defense Evasion (9)

# Payload Target Description
20 AMSI Bypass (Reflection) Windows Reflection-based AMSI patch
21 AMSI Bypass (Memory Patch) Windows Memory patching technique
22 AMSI Bypass (VEH HWBP) Windows Vectored Exception Handler bypass
23 AMSI Bypass (Write Raid) Windows Write-raid bypass technique
24 Windows Defender Killer Windows Disable Defender real-time monitoring
25 UAC Bypass Windows Fodhelper UAC bypass
26 Event Log Clearing Windows Clear System, Security, Application logs
27 Timestomping Windows Change file timestamps
28 Self-Destruct Windows Delete user data and shutdown

Persistence (5)

# Payload Target Description
29 WMI Persistence Windows WMI event filter persistence
30 CIM Persistence Windows CIM scheduled job persistence
31 Cron Persistence Linux Linux cron job persistence
32 Registry Persistence Windows Windows registry run key
33 Startup Folder Persistence Windows Windows startup folder shortcut

Exploitation (5)

# Payload Target Description
34 CVE-2026-20817 (WER LPE) Windows Windows Error Reporting LPE
35 CVE-2023-45866 (Bluetooth HID) All Bluetooth HID injection
36 Create Admin User Windows Create hidden admin user
37 Hide Admin User Windows Hide user from login screen
38 TrustedInstaller LPE Windows Takeown + icacls privilege escalation

System Control (8)

# Payload Target Description
39 System Shutdown Windows shutdown /s /t 5
40 System Restart Windows shutdown /r /t 5
41 Disable WiFi Windows Disable WiFi adapter
42 WiFi Reconfig Windows Create Evil AP with hosted network
43 Shutdown iOS iOS AppleScript system shutdown
44 Disable Sleep (Mac) macOS Disable macOS sleep
45 Set Volume Maximum macOS Set system volume to 100%
46 Enable Charging Sound (Mac) macOS Enable macOS charging sounds

DoS Attacks (4)

# Payload Target Description
47 CPU Burner Windows 100% CPU load loop
48 Explorer Killer Windows Kill Windows Explorer process
49 Memory Exhaustion (Mac) macOS Fill RAM with useless data
50 Stress Test (Mac) macOS Combined stress test

Pranks (9)

# Payload Target Description
51 Screen Rotation Prank Windows Rotate display orientation
52 Blink Prank Windows Blink CAPSLOCK LED
53 Sing RickRoll (iOS) iOS Play Never Gonna Give You Up
54 Pop Up (iOS) iOS Display dialog box
55 WhatsApp Message Spam iOS Send messages via WhatsApp
56 WhatsApp Status Change iOS Change WhatsApp status
57 Open Malicious Website All Open configured URL
58 RickRoll (Linux) Linux Play RickRoll in terminal
59 Change Screenshot Format (iOS) iOS Change screenshot format

Advanced & C2 (7)

# Payload Target Description
60 C2 Beacon Windows AES-256-GCM encrypted beacon
61 VNC Viewer Windows Remote VNC server start
62 Cross-Platform Agent Win/Linux/macOS OS detection and payload execution
63 USB Storage Spoofing Windows Create autorun.inf payload
64 Network Device Impersonation Windows Spoof network device
65 WiFi/Bluetooth Exploits All Marauder framework integration
66 Custom Payload Generator All Generate reverse shells on-demand

---

⚙️ How It Works

Step-by-Step Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                   1. USER OPENS WEB APP                            │
│   (https://your-project.vercel.app on Chrome/Edge)                │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                   2. CONNECTS USB KEYBOARD                         │
│   (OTG cable + USB keyboard plugged into Android phone)           │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                   3. CLICKS "CONNECT DEVICE"                       │
│   (Browser requests WebUSB permission)                            │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                   4. DEVICE CONNECTED SUCCESSFULLY                 │
│   (Status indicator turns green)                                  │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                   5. SELECTS PAYLOAD FROM GRID                     │
│   (One-click on any payload card)                                 │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                   6. JAVASCRIPT PARSES DUCKYSCRIPT                 │
│   (Converts DuckyScript to HID reports)                           │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                   7. SENDS HID REPORTS VIA WEBUSB                  │
│   (8-byte keyboard reports sent to physical keyboard)            │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                   8. TARGET DEVICE RECEIVES KEYSTROKES             │
│   (Target thinks it's a real keyboard typing)                     │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                   9. PAYLOAD EXECUTES ON TARGET                    │
│   (Reverse shell, keylogger, etc. run with user privileges)       │
└─────────────────────────────────────────────────────────────────────┘
```

Technical Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                          VERCEL (Cloud)                            │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │                   Node.js Backend (api/index.js)              │ │
│  │  - Health check endpoint (/api/health)                       │ │
│  │  - Payload list endpoint (/api/payloads)                     │ │
│  │  - CORS headers for frontend communication                   │ │
│  └───────────────────────────────────────────────────────────────┘ │
│                              ▲                                     │
└──────────────────────────────│─────────────────────────────────────┘
                               │ (Serves static files)
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         BROWSER (Client)                           │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │                index.html (Single File)                       │ │
│  │  ┌─────────────────────────────────────────────────────────┐ │ │
│  │  │  CSS (Inline) – Neon Dark Theme                        │ │ │
│  │  └─────────────────────────────────────────────────────────┘ │ │
│  │  ┌─────────────────────────────────────────────────────────┐ │ │
│  │  │  JavaScript (Inline) – Complete Logic                  │ │ │
│  │  │  - WebUSB API communication                            │ │ │
│  │  │  - 67+ payload database                                │ │ │
│  │  │  - DuckyScript parser engine                           │ │ │
│  │  │  - HID report generator                                │ │ │
│  │  │  - UI rendering & console logging                      │ │ │
│  │  └─────────────────────────────────────────────────────────┘ │ │
│  └───────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
                               │
                               │ (USB Cable via OTG)
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        ANDROID PHONE (Host)                        │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │  - USB Host mode enabled                                     │ │
│  │  - WebUSB passes HID reports from browser                    │ │
│  │  - OTG cable connects to physical USB device                 │ │
│  └───────────────────────────────────────────────────────────────┘ │
                               │
                               │ (USB Connection)
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    PHYSICAL USB HID DEVICE (Keyboard)              │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │  - Receives HID reports from browser                         │ │
│  │  - Simulates keystrokes                                      │ │
│  │  - Sends keyboard input to target machine                    │ │
│  └───────────────────────────────────────────────────────────────┘ │
                               │
                               │ (USB Connection)
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         TARGET SYSTEM                              │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │  - Recognizes as physical keyboard input                     │ │
│  │  - Executes injected commands                                │ │
│  │  - Payload runs with user privileges                         │ │
│  └───────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

---

🚀 Deployment Guide

Option 1: Deploy on Vercel (Recommended)

1. Clone or fork this repository
   ```bash
   git clone https://github.com/yourusername/usb-hid-neon.git
   cd usb-hid-neon
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

```bash
# Install dependencies
npm install

# Start the backend server
node api/index.js
# Server runs at http://localhost:8000

# Open index.html in your browser
# Or use Live Server extension in VS Code
```

Option 3: Run on Android (Termux)

```bash
pkg update && pkg upgrade
pkg install git nodejs
git clone https://github.com/yourusername/usb-hid-neon
cd usb-hid-neon
node api/index.js
```

---

📋 Requirements

Hardware Requirements

· Android Phone (Root not required for WebUSB)
· OTG Cable (USB-C to USB-A or Micro-USB to USB-A)
· USB Keyboard or HID-compatible device (Rubber Ducky, Flipper Zero, etc.)

Software Requirements

· Browser: Google Chrome 71+ or Microsoft Edge 79+ (WebUSB support)
· Backend: Node.js 14+ (for local server)
· Network: Internet connection for Vercel hosting

Permissions Required

· WebUSB: Browser permission for USB device access
· USB Host: Enable USB debugging and OTG support on Android
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

1. Click "Connect Device" button
2. Browser will prompt for USB permission
3. Select your HID device from the list
4. Confirm the connection
5. Status indicator turns green with "HID Active"

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
usb-hid-neon/
├── index.html              # ✅ Single file – HTML + CSS + JS (all-in-one)
├── api/
│   └── index.js            # Node.js backend (Vercel Serverless)
├── vercel.json             # Vercel deployment config
├── package.json            # Node.js dependencies
└── README.md               # Documentation
```

Key Components

1. index.html – Core Engine

· CSS (Inline): Neon dark theme with cyberpunk aesthetics
· HTML Structure: Sidebar navigation, device section, payload grid, editor, console
· JavaScript (Inline): Complete application logic
  · WebUSB Handler: navigator.usb.requestDevice(), connection management
  · HID Report Generator: 8-byte keyboard reports with modifiers
  · DuckyScript Parser: Parses STRING, DELAY, ENTER, GUI, CTRL, ALT, SHIFT, TAB, ESC
  · Payload Database: 67+ pre-built payloads with categories
  · Console Logger: Real-time logging with timestamps

2. api/index.js – Node.js Backend

· /api/health – Health check endpoint
· /api/payloads – Returns payload list as JSON
· CORS headers for cross-origin requests
· Vercel serverless function compatible

3. vercel.json – Deployment Configuration

· Static file serving for frontend
· Node.js serverless function for API routes
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
· Legal Consequences: Unauthorized use is illegal and may result in criminal prosecution.

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
· Node.js Serverless Functions

---

🙏 Credits

Developer & Researcher

Humayun Shariar Himu

· Role: Full-Stack Developer & Cybersecurity Researcher
· Contributions:
  · Deep research and analysis of 15+ GitHub repositories
  · Compilation of 67+ real-world hacking activities
  · Complete framework development (Frontend + Backend)
  · Neon dark theme design
  · DuckyScript engine implementation
  · WebUSB integration

Acknowledgments

· Thanks to all open-source contributors whose work made this project possible
· WebUSB API team at Google for providing the browser interface
· Hak5 for the DuckyScript standard
· The cybersecurity community for continuous research and education

Special Thanks

· GitHub Open Source Community
· Vercel for serverless hosting
· All researchers who publish their findings for educational purposes

---

📄 License

This project is licensed under the MIT License – see the LICENSE file for details.

```
MIT License

Copyright (c) 2024 Humayun Shariar Himu

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

📬 Contact & Support

· GitHub Issues: Report bugs or suggest features via Issues
· Pull Requests: Contributions welcome via Pull Requests
· Security Concerns: For security vulnerabilities, please email privately.

---

🙌 Contributing

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

⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/usb-hid-neon.git
cd usb-hid-neon

# Install dependencies (optional, for local development)
npm install

# Start the backend server (optional, for local development)
node api/index.js

# Open index.html in your browser
# Or deploy on Vercel for production
```

---

⚠️ Remember: With great power comes great responsibility. Use this knowledge ethically and legally. Humayun Shariar Himu and the contributors are not responsible for any misuse of this framework.

---

<div align="center">
  <p>
    <sub>
      Built with for cybersecurity research and education
    </sub>
  </p>
  <p>
    <sub>
      © Humayun Shariar Himu | MIT License
    </sub>
  </p>
</div>
