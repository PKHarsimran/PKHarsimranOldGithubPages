---
layout: post
title: "Understanding Network Based Attack"
date: "2023-1-24"
---

# Types of Attacks:
**Denial of Service (DoS) Attack** |
**Protocol-Based Attack** |
**Distributed Denial of Service (DDoS) Attack** |
**Man-in-the-Middle (MitM) Attack** 


• **Denial of Service (DoS) Attack:** A type of cyber attack in which an attacker attempts to make a particular network resource or service unavailable to its intended users. This is typically done by overwhelming the target with a flood of network traffic or by targeting a specific aspect of the service that renders it unavailable.
		
   **ARP (Address Resolution Protocol) poisoning** , also known as ARP spoofing, is a type of attack that can be used to launch a Denial of Service (DoS) attack. ARP is a protocol used to map a network address (such as an IP address) to a physical (MAC) address on a local network. In ARP poisoning, an attacker sends false ARP messages to other devices on a network, associating their own MAC address with the IP address of another device, such as a router or a server. This causes the affected devices to send their network traffic to the attacker's machine instead of the intended destination.
		
   This can be used to intercept and potentially modify network traffic, or to disrupt network communication by causing the targeted devices to send their traffic to a non-existent or unavailable device. This can result in a Denial of Service (DoS) attack as the targeted devices are unable to communicate with other devices or access network resources. As a result, ARP poisoning can be considered a form of DoS attack.

• **A protocol-based attack** is a type of cyber attack that exploits vulnerabilities in network protocols to disrupt or gain unauthorized access to a network or system.
	• **What:** A protocol-based attack is a targeted attack on the protocols that govern communication between devices on a network.
	• **Why:** The attacker's goal is to exploit vulnerabilities in these protocols to disrupt network communication or gain unauthorized access to the network or system.
	• **Where:** Protocol-based attacks can occur on any network that uses the targeted protocols.
	• **When:** Protocol-based attacks can occur at any time, but may be more likely to occur when protocols are first introduced or when new vulnerabilities are discovered.
	• **How:** Protocol-based attacks are often carried out by sending specially crafted packets to a targeted device, exploiting a known vulnerability in the protocol. These attacks may also include social engineering techniques to trick users into installing malware or disclosing sensitive information.
An example would be a TCP/IP Hijacking attack, this type of attack occurs when an attacker intercepts a TCP connection by guessing the session ID and takes control of the connection, this allow attacker to inject malicious data, disrupt or steal data, or even interfere with the normal operation of the targeted service.
  
• **Distributed Denial of Service (DDoS) attack** is a type of cyber attack that attempts to make a particular network resource or service unavailable to its intended users by overwhelming it with a flood of traffic from multiple sources.
	• **What:** DDoS attack is a type of cyber attack that aims to make a network resource or service unavailable by flooding it with traffic from multiple sources.
	• **Why:** The attacker's goal is to overload the targeted resource or service, making it unavailable to legitimate users.
	• **Where:** DDoS attacks can be launched against any network-connected service or resource, including websites, DNS servers, and online gaming servers.
	• **When:** DDoS attacks can occur at any time, but they are more likely to occur during peak usage times when the targeted resource or service is more likely to be overloaded.
	• **How:** DDoS attacks are typically launched using a botnet, which is a group of infected computers that can be controlled remotely by the attacker. The attacker uses the botnet to send a flood of traffic to the targeted resource or service, overwhelming it and making it unavailable to legitimate users.
An example of DDoS attack would be a attacker using a botnet, made up of thousands of infected Internet of Things (IoT) devices, to flood a website with a huge amount of traffic, causing the server to become overwhelmed and unable to handle legitimate traffic, as a result, website becomes unavailable to its intended users.
  
• **Man-in-the-Middle (MitM) Attack:** A type of cyber attack in which an attacker intercepts and modifies communications between two parties. MitM attacks can be used to steal sensitive information, such as login credentials or credit card numbers, or to inject malware onto a victim's device.
  
It is important to note that these attacks can be mitigated with the use of security measures such as firewalls, intrusion detection and prevention systems, and network segmentation. It's also important to keep software and systems up-to-date to fix any vulnerabilities that can be exploited.

