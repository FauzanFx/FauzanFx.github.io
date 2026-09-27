---
title: "Safara Gate - PPE Compliance Monitoring"
description: "Computer Vision and IoT-integrated security gate for real-time Personal Protective Equipment (PPE) compliance monitoring."
tags: ["Computer Vision", "YOLO", "ESP32", "Kubernetes", "IoT"]
role: "Embedded System Engineer"
period: "April 2026 - June 2026"
gdriveVideoId: "1_qdqP4h87yW2MYzMwyfNxclIpxHj5T3H"
gallery:
  - "/images/safara/NEw-New_Safara-Gate-System-Flowpng.png"
  - "/images/safara/WhatsApp Image 2026-09-27 at 23.03.13.jpeg"
  - "/images/safara/WhatsApp Image 2026-09-27 at 23.03.13 (1).jpeg"
  - "/images/safara/WhatsApp Image 2026-09-27 at 23.03.13 (2).jpeg"
  - "/images/safara/WhatsApp Image 2026-09-27 at 23.07.39.jpeg"
---

## Project Overview
Safara Gate is a smart security checkpoint system that automatically monitors and enforces Personal Protective Equipment (PPE) compliance for workers. It utilizes edge computer vision and IoT hardware to verify if a person is wearing the correct safety gear before granting them access.

## Computer Vision
To achieve high recognition accuracy in varied lighting conditions:
- **Object Detection Models**: Developed custom object detection models using YOLO and Roboflow. 
- **Dataset Generation**: Collected and precisely annotated a custom dataset comprising 11,000+ images across 7 distinct PPE classes.

## Hardware & Embedded Systems
The physical gate was built to operate autonomously and reliably:
- **Component Integration**: Integrated ESP32 microcontrollers, RFID modules, and I2C LCD screens into a compact autonomous security system housed inside a tubular enclosure.
- **Power Distribution**: Designed custom circuit layouts on perfboards. Soldered step-down power modules to ensure stable 5V and 12V voltage distribution across all system components.

## Cloud Infrastructure
For management and monitoring at scale:
- **High-Availability Cluster**: Deployed a 2-worker-node Kubernetes cluster to host the management dashboard server.
- **Real-Time Monitoring**: Enabled continuous, high-availability real-time access monitoring for security operators.
