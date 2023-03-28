---
layout: post
title: "How to Set Up a Raspberry Pi as a Torrenting VPN Server with Transmission"
date: "2023-3-16"
---
Are you tired of your ISP monitoring your torrenting activity? Do you want to take advantage of the privacy and security benefits of a VPN while downloading torrents? Look no further than your trusty Raspberry Pi!

In this tutorial, I'll show you how to set up a Raspberry Pi as a torrenting VPN server using the popular BitTorrent client, Transmission. By the end of this guide, you'll have a fully functional VPN server running on your Raspberry Pi, allowing you to download torrents securely and anonymously.

So, let's get started!

## What You'll Need

Before we dive into the setup process, let's go over what you'll need to follow along with this tutorial:

  - A Raspberry Pi (any model should work, but a Raspberry Pi 4 is recommended for better performance)
  - A microSD card (at least 16GB)
  - A power supply for your Raspberry Pi
  - An Ethernet cable to connect your Raspberry Pi to your router
  - A USB drive (optional, but recommended for storing downloaded files)

Additionally, you'll need to have some basic knowledge of how to work with a Raspberry Pi, including how to install an operating system and connect to it via SSH.

## Step 1: Install Raspbian and Set Up Your Raspberry Pi

The first step in setting up your Raspberry Pi as a torrenting VPN server is to install the Raspbian operating system and set up your Raspberry Pi. There are a few different ways to do this, but one popular option is to use the Raspberry Pi Imager tool.

- Download the Raspberry Pi Imager tool from the official Raspberry Pi website: https://www.raspberrypi.org/software/
- Insert your microSD card into your computer and open the Raspberry Pi Imager tool.
- Select the "Raspberry Pi OS" option and choose the version you want to install (we recommend the "Raspberry Pi OS with desktop" version for ease of use).
- Choose your microSD card as the target drive and click "Write" to begin the installation process.
- Once the installation is complete, eject the microSD card from your computer and insert it into your Raspberry Pi.
- Connect your Raspberry Pi to your router using an Ethernet cable, and plug in the power supply to turn it on.

With Raspbian installed and your Raspberry Pi set up, you're ready to move on to the next step: installing and configuring Transmission.

## Step 2: Install and Configure Transmission

Transmission is a popular BitTorrent client that's free, open-source, and easy to use. In this step, we'll install Transmission on your Raspberry Pi and configure it to work with your VPN.

First, open a terminal window on your Raspberry Pi or connect to it via SSH.
Update your Raspberry Pi's package list and upgrade any outdated packages by running the following commands:
  
        sudo apt-get update
        sudo apt-get upgrade
     
Next, install the Transmission daemon by running the following command:

        sudo apt-get install transmission-daemon
  
Once the installation is complete, stop the Transmission daemon by running the following command:
  
        sudo systemctl stop transmission-daemon
        
now configure Transmission to use your VPN. Open the configuration file by running the following command:
  
        sudo nano /etc/transmission-daemon/settings.json
  
Find the following lines in the file:

        "rpc-whitelist": "127.0.0.1",
        "rpc-whitelist-enabled": true,
    
Replace them with the following lines:
  
        "rpc-whitelist": "*.*.*.*",
        "rpc-whitelist-enabled": false,
  
Replace YOUR_PASSWORD, YOUR_USERNAME with values of your choice. These lines will enable authentication for remote access to the Transmission web interface
  
        "rpc-password": "YOUR_PASSWORD",
        "rpc-username": "YOUR_USERNAME",
        
        
Save the changes to the configuration file by pressing Ctrl+X, then Y, and finally Enter.

  - Start the Transmission daemon again by running the following command:
  
        sudo systemctl start transmission-daemon

Check the status of the Transmission by using this command:


        sudo systemctl status transmission-daemon
        

## Step 3: Install and Configure Samba

Install Samba:

To install the Samba server, execute the following command:

        sudo apt-get install samba samba-common-bin
    
Create a shared directory:

        mkdir /home/pi/shared
    
Set the appropriate permissions:
Ensure that the shared directory has read and write permissions for all users:

        sudo chmod 777 /home/pi/shared
        
Configure Samba:
Open the Samba configuration file with a text editor such as nano:

        sudo nano /etc/samba/smb.conf
        
Scroll to the bottom of the file and add the following configuration for your shared directory:

      [shared]
      path = /home/pi/shared
      browsable = yes
      guest ok = yes
      read only = no
      create mask = 0777
      directory mask = 0777
      force user = pi

Save and exit the file (Ctrl + X, then Y, then Enter).

Restart the Samba service:
Restart the Samba service to apply the changes:

      sudo systemctl restart smbd

**(Optional)** Add a Samba user:
    
      sudo smbpasswd -a pi
      
Enter a password for the Samba user when prompted.

Note: If you want to use password-protected access, change the 'guest ok' line in the smb.conf file to 'no':

      guest ok = no
      
      
Remember to restart the Samba service after making this change.

Your Samba server is now configured, and you should be able to access the shared directory from other devices on your network. If you're using Windows, open File Explorer, and enter the IP address of your Raspberry Pi followed by the share name in the address bar, like this:  

    \\192.168.x.x\shared
    
Replace "192.168.x.x" with the actual IP address of your Raspberry Pi. On macOS, open Finder, and select "Go" > "Connect to Server" from the menu, then enter the smb:// URL:

      smb://192.168.x.x/shared

## Step 4: Mounting external drive to same shared folder
I've developed a handy script that automates the entire procedure. You can quickly get started by cloning the script from my [GitHub repository](https://github.com/PKHarsimran/External_Mount_Script).

Before using the [script](https://github.com/PKHarsimran/External_Mount_Script/blob/main/Mount.sh), you will need to edit it to specify your USB drive and shared directory. Once you've made the necessary changes, you can set up a cron job to run the script at regular intervals or upon specific events, ensuring that your USB drive remains mounted to the shared directory even after system reboots or drive reconnections. This way, you can spend less time fiddling with configurations and more time focusing on what really matters: sharing and accessing your important files with ease.
