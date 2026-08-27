// ============================================================
// HIDNeon Backend – Node.js (Vercel Serverless)
// ============================================================

module.exports = (req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;

    // Health check
    if (path === '/api/health') {
        res.status(200).json({
            status: 'ok',
            message: 'HIDNeon Backend is running',
            payloads: 67,
            timestamp: new Date().toISOString()
        });
        return;
    }

    // Payload list (optional – frontend already has full list)
    if (path === '/api/payloads') {
        const payloadIds = [
            "reverse_tcp", "reverse_https", "bind_tcp", "msf_stager",
            "linux_reverse", "linux_bind", "python_reverse",
            "keylogger", "wifi_exfil", "browser_passwords", "mac_exfil",
            "ip_logger", "sysprofile_exfil",
            "screenshot", "backup_discord", "screen_capture_discord",
            "location_exfil", "ftp_exfil", "usb_exfil",
            "amsi_reflection", "amsi_memory", "amsi_veh", "amsi_write_raid",
            "defender_killer", "uac_bypass",
            "event_log_clear", "timestomping", "self_destruct",
            "wmi_persistence", "cim_persistence", "cron_persistence",
            "registry_persistence", "startup_persistence",
            "cve_2026_20817", "cve_2023_45866", "admin_user_create",
            "admin_user_hide", "lpe_trusted_installer",
            "system_shutdown", "system_restart", "disable_wifi",
            "wifi_reconfig", "shutdown_ios", "disable_sleep_mac",
            "volume_max", "charging_sound",
            "cpu_burner", "explorer_killer", "memory_exhaustion",
            "stress_test_mac",
            "screen_rotate", "blink_prank", "rickroll_sing", "popup_prank",
            "whatsapp_spam", "whatsapp_status", "open_website",
            "rickroll_linux", "screenshot_format",
            "c2_beacon", "vnc_viewer", "cross_platform_agent",
            "usb_storage_spoof", "network_impersonation",
            "wifi_bluetooth_exploit", "payload_generator"
        ];
        res.status(200).json({
            count: payloadIds.length,
            payloads: payloadIds
        });
        return;
    }

    // 404 for unknown routes
    res.status(404).json({ error: 'Not Found' });
};
