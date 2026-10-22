# Kai Frazier — Electrical & Computer Engineering Portfolio

A modern, high-tech React + TypeScript portfolio application for Kai Frazier (University of Washington ECE, Expected March 2028).

## Features

- **Candidate Technical Profile**: Clean, executive summary highlighting UW ECE degree credentials, core EDA/simulation tools (Ansys HFSS, KiCad, LTspice), benchtop laboratory instrumentation, and direct resume download.
- **Hardware & Simulation Showcases**:
  - **1090 MHz 4th-Order Chebyshev Microstrip Hairpin Filter** (Ansys HFSS, ADS-B bandpass, S-parameters).
  - **AC-to-DC Power Supply & Step-Up Boost Converter** (Keysight DSO low/high output captures, circuit schematic).
  - **3-Channel Analog Audio Mixing Console & Multi-Band Equalizer** (active filter topology, DSO waveform, measured Bode plot).
  - **Autonomous PID Line-Following Robot & Custom Sensor PCB** (3D CAD chassis, KiCad PCB layout, soldered hardware array).
- **Mathematical Formula Rendering**: Native KaTeX rendering for LaTeX expressions ($S_{11}$, $J_{01}/Y_0$, $V_{out} = V_{in}/(1-D)$, $\lambda/2$, and PID equations).
- **Discipline & Tag Filtering**: Live keyword search and segmented category filters with active project counts.
- **Technical Lightbox**: High-resolution diagram inspector with keyboard dismiss (`Escape`).
- **Direct PDF Resume**: Built-in resume viewer and download link.

## Tech Stack

- **Framework**: React 18 / 19 with TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4 with custom cyber obsidian theme tokens
- **Math Rendering**: KaTeX
- **Icons**: Lucide React

## Development

```bash
npm install
npm run dev
```

Dev server runs on `http://0.0.0.0:3000`.
