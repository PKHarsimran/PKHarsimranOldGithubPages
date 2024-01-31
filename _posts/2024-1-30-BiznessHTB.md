---
layout: post
title: "Bizness - Hack the box - Write up"
date: 2024-1-30
categories: HTB
author: "Harsimran Sidhu"
---

# Hack The Box Write-Up: Bizness


# Reconnaissance:
Target Information:
**IP Address:** 10.10.11.252
**Connectivity Test:**
- Performed a ping test to confirm the existence of the target.
![image](https://github.com/PKHarsimran/PKHarsimran.github.io/assets/22066581/4ecb4ee8-738c-471c-a0cb-52381aeac306)
- Noted latency and packet loss information.
**Nmap Scan Results:**
![image](https://github.com/PKHarsimran/PKHarsimran.github.io/assets/22066581/e75f1113-b8b9-4e18-9f25-47523f2f8b9b)
**Nmap Scan Summary:**
    Discovered open ports:
        22/tcp (SSH)
        80/tcp (HTTP)
        443/tcp (HTTPS)
    Identified filtered ports:
        9102/tcp (JetDirect)
        20222/tcp (iPulse ICS)
