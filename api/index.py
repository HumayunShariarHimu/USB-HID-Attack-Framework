from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='../static', template_folder='../templates')
CORS(app)

PAYLOADS = [
    "reverse_tcp", "reverse_https", "bind_tcp", "msf_stager",
    "linux_reverse", "linux_bind", "python_reverse",
    "keylogger", "wifi_exfil", "browser_passwords", "mac_exfil", "ip_logger", "sysprofile_exfil",
    "screenshot", "backup_discord", "screen_capture_discord", "location_exfil", "ftp_exfil", "usb_exfil",
    "amsi_reflection", "amsi_memory", "amsi_veh", "amsi_write_raid", "defender_killer", "uac_bypass",
    "event_log_clear", "timestomping", "self_destruct",
    "wmi_persistence", "cim_persistence", "cron_persistence", "registry_persistence", "startup_persistence",
    "cve_2026_20817", "cve_2023_45866", "admin_user_create", "admin_user_hide", "lpe_trusted_installer",
    "system_shutdown", "system_restart", "disable_wifi", "wifi_reconfig", "shutdown_ios",
    "disable_sleep_mac", "volume_max", "charging_sound",
    "cpu_burner", "explorer_killer", "memory_exhaustion", "stress_test_mac",
    "screen_rotate", "blink_prank", "rickroll_sing", "popup_prank", "whatsapp_spam",
    "whatsapp_status", "open_website", "rickroll_linux", "screenshot_format",
    "c2_beacon", "vnc_viewer", "cross_platform_agent", "usb_storage_spoof",
    "network_impersonation", "wifi_bluetooth_exploit", "payload_generator"
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/payloads', methods=['GET'])
def get_payloads():
    return jsonify({"payloads": PAYLOADS, "count": len(PAYLOADS)})

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({"status": "ok", "payloads": len(PAYLOADS)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
