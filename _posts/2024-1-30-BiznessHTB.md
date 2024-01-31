---
layout: post
title: "Bizness - Hack the box - Write up"
date: 2024-01-30
categories: HTB
author: "Harsimran Sidhu"
---

# Hack The Box Write-Up: Bizness

## Reconnaissance:
**Target Information:**
**IP Address:** 

    10.10.11.252

**Connectivity Test:**
- Performed a ping test to confirm the existence of the target.

![image](https://github.com/PKHarsimran/PKHarsimran.github.io/assets/22066581/e7d44535-2026-4b2c-aeaf-b691b4282427)

- Noted latency and packet loss information.

**Nmap Scan Results:**

![image](https://github.com/PKHarsimran/PKHarsimran.github.io/assets/22066581/e33bb5e0-74d2-4bcd-9c01-c2c16a444b5c)

**Nmap Scan Summary:**

        Discovered open ports:
            22/tcp (SSH)
            80/tcp (HTTP)
            443/tcp (HTTPS)
      Identified filtered ports:
            9102/tcp (JetDirect)
            20222/tcp (iPulse ICS)

**Enumeration:**

SSH (Port 22):
- Identified an open SSH port (22/tcp).
- Further enumeration of the SSH service is pending.

HTTP (Port 80):
- Checked the HTTP service on port 80.
- Browsed to http://bizness.htb to explore the web application.
- No notable findings observed.

HTTPS (Port 443):
- Checked the HTTPS service on port 443.
- Browsed to https://bizness.htb to explore the secure web application.
- Initial observation reveals a standard web page.

**Filtered Ports:**

JetDirect (Port 9102):
- Identified a filtered port (9102/tcp).
- Further investigation is needed to determine the nature of the service.

iPulse ICS (Port 20222):
- Identified a filtered port (20222/tcp).
- Further investigation is needed to determine the nature of the service.

**Host Configuration:**
Host Entry in **/etc/hosts:**

    10.10.11.252    bizness.htb
    
![image](https://github.com/PKHarsimran/PKHarsimran.github.io/assets/22066581/dfcd9362-f589-4960-a41c-389ecbb97280)

 
