# Modern High-Tech / Cyber ECE Portfolio — React Upgrade

Upgrade the portfolio into a sleek, high-tech, cyber-inspired React + TypeScript application featuring a deep obsidian aesthetic, electric cyan accents, an interactive dual-channel oscilloscope waveform visualizer, discipline-based project filtering, and full-resolution technical diagram modals—all while preserving 100% of the original academic and benchtop hardware rigor.

## User Review & Critical Decisions

> [!IMPORTANT]
> The design has been tailored according to your chosen preferences:
> - **Theme Palette**: Deep obsidian dark theme (`#070a12` / `#0b0f19`) with electric cyan (`#00f0ff` / `#22d3ee`) accents and subtle laser reticle / engineering grid lines.
> - **Interactive High-Tech Element**: An interactive dual-channel benchtop oscilloscope visualizer featuring real-time sweep, adjustable timebase/amplitude, signal source toggles (Sine, Boost Converter Ripple, Equalizer Harmonics, Square Wave), and phosphor grid reticle.
> - **Interactive Navigation**: Instant keyword search and multi-discipline filter buttons (`All`, `RF & Microwave`, `Power Electronics`, `Analog & Audio`, `Robotics & Embedded`).

- **Confirmed Decision 1**: Modernize with cyber-aesthetic styling (dark glass panels, hairline cyber borders, electric cyan highlights) without sacrificing academic credibility or illegible neon gimmicks.
- **Confirmed Decision 2**: Preserve all original project text, verified bench data, equations ($S_{11}$, $J_{01}/Y_0$, $V_{out} = V_{in} / (1 - D)$, $\lambda/2$, PID formulas), and all 11 technical image assets (`boost-schematic`, `audio-bode`, `kicad`, etc.).
- **Confirmed Decision 3**: Provide a fluid image lightbox with keyboard shortcuts (`Esc`, arrow keys), and direct PDF resume viewing.

---

## 1. Overview & Core Concept

- **What It Does**: An ultra-sleek, interactive portfolio for Kai Frazier (University of Washington ECE) showcasing expertise across RF design, power converters, analog signal processing, and autonomous robotics.
- **Visual Identity**: High-tech engineering aesthetic that feels like a next-generation laboratory instrument workstation—combining deep obsidian surfaces, crisp 1px borders, subtle circuit grid matrix lines, and vivid cyan oscilloscope traces.
- **Core Value**: Provides hiring managers and technical leads with an engaging, interactive exploration of genuine hardware, KiCad layouts, HFSS simulations, and benchtop oscilloscope captures.

---

## 2. User Experience & Visual Design

- **Layout Structure**:
  1. **Top Bar Console (3-Zone Contract)**:
     - *Brand Zone*: `Kai Frazier` with `UW ECE` monospace status tag and subtle cyan glow.
     - *Nav Zone*: Quick jump links (`Overview`, `Oscilloscope`, `Projects`, `Skills`, `Contact`).
     - *Action Zone*: Direct `Resume (PDF)` action button with cyber-bordered accent.
  2. **Hero & Interactive Oscilloscope Bench**:
     - *Left*: Student profile, University of Washington ECE credentials, specialization highlights, and quick contact pills.
     - *Right / Integrated Bench*: **Interactive Oscilloscope Canvas** simulating live signal conditioning (e.g. 1090 MHz carrier envelope, 60 Hz rectified ripple, 1 kHz equalizer filter response, or tunable test oscillator with live controls: Volts/Div, Time/Div, and Waveform Type).
  3. **Discipline Filter & Search Toolbar**:
     - Live search input for filtering projects by component, chip (LM348N, 1N4007, 1N4732A, 555-timer), or tool (Ansys HFSS, KiCad, LTspice).
     - Segmented category buttons with active cyan glow and project counts.
  4. **Engineering Project Showcase**:
     - *1090 MHz Chebyshev Microstrip Hairpin Filter*: S-parameter telemetry, HFSS substrate specs, admittance inverters, and stopband rejection callout.
     - *AC-DC Power Supply & Step-Up Boost Converter*: Dual Keysight DSO waveform captures, circuit schematic, verified low/high voltage ripple metrics.
     - *3-Channel Analog Audio Mixing Console & Multi-Band EQ*: Active filter topology, dual-channel DSO waveform, and measured Bode plot with interactive zoom.
     - *Autonomous PID Line-Following Robot & Sensor PCB*: 2x2 grid of assembled chassis, 3D CAD shroud, KiCad PCB layout, and soldered optoelectronic array.
  5. **Technical Skills Matrix**: 4 high-tech modular cards with monospace headers (`RF & Electromagnetics`, `Analog & Power`, `Software & Tools`, `Instrumentation`).
  6. **Contact & Verification Footer**: Clean links to GitHub, verified emails, and document download.
  7. **High-Resolution Lightbox Modal**: High-contrast modal overlay with backdrop-blur, zoom animation, and descriptive technical captions.

- **Theme & Color Tokens**:
  - `Canvas Background`: Obsidian Deep (`#070a12`, `#0b0f19`)
  - `Card / Console Surface`: Dark Slate Glass (`#0f172a` / `#131c31` with `border-cyan-900/40`)
  - `Accent Phosphor`: Laser Cyan (`#00f0ff` / `#06b6d4` / `#22d3ee`)
  - `Typography`: Clean technical neo-grotesque (`Inter` / `Plus Jakarta Sans`) paired with `JetBrains Mono` for all formulas, coordinates, and component parameters.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: React 19 + Vite + Tailwind CSS Architecture**
  - *Chosen Approach*: Clean Vite React SPA with custom Tailwind CSS utility tokens for cyber glow effects, monospace typography, and responsive layouts.
  - *Why*: Instant compilation, zero runtime overhead, and fast interactive canvas animations.

- **Decision 2: Canvas-Based Oscilloscope Engine**
  - *Chosen Approach*: Lightweight HTML5 `<canvas>` rendering 60fps dual-channel waveforms with an authentic CRT/DSO grid reticle (10x8 subdivisions, center crosshairs, trigger level line, and live peak-to-peak readouts).
  - *Why*: Pure client-side JavaScript, zero heavy dependencies, ultra-responsive to user slider input.

- **Decision 3: Zero Asset Loss & Instant Preview**
  - *Chosen Approach*: Keep all original images in `/public/images/` and `/images/` so all 11 technical figures, photos, and `resume.pdf` load seamlessly without any missing asset errors.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        App Root (App.tsx)                              │
├────────────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Navigation Console (Header.tsx)                                  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Hero Section & Interactive DSO Bench (Hero.tsx + ScopeCanvas.tsx)│  │
│  │  ├─ Degree Summary & UW ECE Focus                                │  │
│  │  └─ Live Dual-Channel Waveform Generator (Freq, V/Div, Waveform) │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Project Explorer (ProjectFilter.tsx + ProjectCard.tsx)           │  │
│  │  ├─ Search Query & Discipline Filter State                       │  │
│  │  ├─ Chebyshev Filter (HFSS S-Parameters, Microstrip Math)        │  │
│  │  ├─ Boost Converter (Keysight DSO Bench Captures + Schematic)    │  │
│  │  ├─ Audio Equalizer (Bode Plot + LM348N Active Filter)           │  │
│  │  └─ Autonomous Robot (2x2 CAD, PCB, Hardware Array)              │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Technical Skills Matrix (SkillsGrid.tsx)                         │  │
│  │  ├─ RF & Electromagnetics │ Analog & Power                       │  │
│  │  └─ Software & Tools      │ Instrumentation                      │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Contact Terminal & Footer (Contact.tsx)                          │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Lightbox Modal (LightboxModal.tsx - Active Image Overlay)        │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### Component State & Interactions:
1. **Scope Canvas State**:
   - `waveformType`: `'boost_ripple' | 'audio_filter' | 'sine_carrier' | 'pid_step'`
   - `timeDiv`: adjustable timebase (horizontal sweep)
   - `voltDiv`: adjustable gain (vertical scale)
   - `isRunning`: toggle play / freeze frame
2. **Project Filter State**:
   - `selectedCategory`: `'all' | 'rf' | 'power' | 'analog' | 'robotics'`
   - `searchQuery`: live string filter matching title, tags, components, and description.
3. **Lightbox State**:
   - `activeModal`: `{ src: string, alt: string, caption: string } | null`
   - Closes on background click, close button, or `Escape` key.
