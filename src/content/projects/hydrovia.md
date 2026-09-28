---
title: "Hydrovia - Smart Pipe Monitoring"
description: "IoT system for monitoring water leakage using flow sensors, MQTT telemetry, and a Node-RED dashboard."
tags: ["IoT", "ESP32", "MQTT", "Node-RED", "C++"]
role: "Embedded System Engineer"
period: "October 2025 - December 2025"
youtubeId: "14jDrSU3XqM"
gallery:
  - "/images/hydrovia/WhatsApp Image 2026-09-27 at 22.55.58.jpeg"
  - "/images/hydrovia/WhatsApp Image 2026-09-27 at 22.55.58 (1).jpeg"
  - "/images/hydrovia/WhatsApp Image 2026-09-27 at 22.55.59.jpeg"
  - "/images/hydrovia/WhatsApp Image 2026-09-27 at 22.55.59 (1).jpeg"
---

## Project Overview
Hydrovia is an Industrial IoT (IIoT) system designed to monitor water pipe integrity, track flow rates, and detect leakages in real-time. By utilizing multiple sensors and robust IoT protocols, the system allows for automated mitigation (such as shutting off water pumps) immediately upon detecting anomalies.

## Hardware Integration
The system's core relies on an **ESP32 microcontroller** functioning as the main IoT gateway. 

- **Sensors**: Integrated two flow sensors and an HC-SR04 ultrasonic sensor to measure tank water levels and pipeline flow rates.
- **Actuators**: Automated control logic implemented for a water pump actuator to stop flow during leak detection.
- **Electrical Design**: Designed electrical schematics and wiring on perfboards to safely distribute power. Implemented stable step-down modules to provide **12V** for the pump actuator and **5V** for the microcontroller and sensors.

## Software & Networking (IoT)
To ensure reliable and fast data transmission suitable for industrial monitoring:
- **MQTT Telemetry**: Configured lightweight MQTT data pipelines to stream real-time sensor metrics to the central server at precise 1-second intervals.
- **Dashboard Visualization**: Built an interactive **Node-RED** dashboard to visualize daily volume metrics, display real-time status indicators, and provide remote valve override and data reset controls to the operators.

## Impact & Key Learnings
This project solidified my understanding of end-to-end IoT architecture, from low-level hardware wiring and sensor reading in C++ to high-level cloud telemetry and dashboard UI building.
