---
title: "Almasena - ROV"
description: "Semi-autonomous marine vessel featuring PID control loops, Pixhawk telemetry, and robust UDP networking for trash collection."
tags: ["Robotics", "STM32", "Pixhawk", "PID Control", "UDP"]
role: "Embedded System Engineer"
period: "May 2026 - July 2026"
youtubeId: "P4ZsZTTKlWQ"
gallery:
  - "/images/voyager/Main_Picture.JPG"
  - "/images/voyager/GUI.jpeg"
  - "/images/voyager/isi tabung alm.jpeg"
  - "/images/voyager/penyususnan rangka.jpeg"
  - "/images/voyager/situasi bengkel.jpeg"
---

## Project Overview
Almasena is an ROV built to discover underwater's environment using double cameras and do some missions that have been programmed. As the Embedded System Engineer at Gamantaray UGM, I was responsible for the core electrical integration, communication, and control systems of the vessel.

## Control Systems & Firmware
To ensure smooth and precise maneuverability in aquatic environments:
- **PID Control**: Designed and deployed 3 separate PID control loops for depth/ballast, pitch stabilization, and heading hold. This included implementing output clamping and integral anti-windup protection to prevent motor burnout.
- **Hardware Integration**: Programmed Raspberry Pi & STM32 microcontrollers and Configure Pixhawk to generate PWM signals controlling 4 ESC (Electronic Speed Controller) units, ensuring accurate thrust response from the thrusters.
- **Onboard Control Loop**: Built a highly responsive 20 Hz onboard control loop integrating GCS (Ground Control Station) commands, sensor data, vision status, and failsafe logic.

## Communication Architecture
Reliable communication between the surface station and the vessel was critical:
- **Pixhawk & MAVLink**: Integrated Pixhawk flight controller via MAVLink for controlling the vehicle's degrees of freedom (pitch, roll, yaw, and surge) using RC PWM commands bounded to `1100–1900 µs`.
- **Serial Communication**: Implemented robust `115,200-baud` STM32 serial communication across 5 direct hardware signals (encoder ticks, target position, PWM output, ballast motor speed, and gripper status).
- **UDP Networking**: Constructed a bidirectional UDP network architecture across 4 specific ports to handle command receiving, telemetry transmission, and 2 distinct video streaming channels.

## Hardware Reliability
Beyond software, I executed the physical electrical wiring linking the microcontrollers to the ESCs and safely distributed direct power supply. I also performed critical structural troubleshooting, identifying and sealing hull leaks to safeguard the internal electronics from water damage.
