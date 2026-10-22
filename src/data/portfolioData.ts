import { ProjectItem, SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'RF & Electromagnetics',
    iconName: 'Radio',
    skills: [
      'Microstrip Hairpin Filters',
      'Coupled Line Synthesis',
      'J-Inverter Transformations',
      'Ansys HFSS / AEDT',
      'Vector Network Analyzers (VNA)',
    ],
  },
  {
    title: 'Analog & Power',
    iconName: 'Zap',
    skills: [
      'Step-Up Boost Converters',
      'Linear & Zener Regulation',
      'Full-Wave AC-DC Rectification',
      'Active Op-Amp Filter Design',
      'Mixed-Signal PCB Layout',
    ],
  },
  {
    title: 'Software & Tools',
    iconName: 'Cpu',
    skills: [
      'Python (NumPy / SciPy)',
      'LTspice (.tran / .ac / .dc)',
      'SMath Studio',
      'KiCad EDA',
      'Git & GitHub Version Control',
    ],
  },
  {
    title: 'Instrumentation',
    iconName: 'Activity',
    skills: [
      'Digital Storage Oscilloscopes',
      'Arbitrary Function Generators',
      'X-Y Mode VTC Characterization',
      '6½-Digit Bench DMMs',
      'SMD / Through-Hole Soldering',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'hairpin-filter',
    title: '1090 MHz 4th-Order Chebyshev Microstrip Hairpin Filter',
    category: 'rf',
    categoryLabel: 'RF & Microwave',
    status: 'ongoing',
    description:
      'Synthesized and simulated a 4th-order Chebyshev bandpass filter centered at 1090 MHz with a 45 MHz passband ($FBW = 4.13\\%$) for ADS-B signal reception. Derived prototype $g_i$ values, admittance inverters ($J_{01}/Y_0 = 0.2419$, $J_{12}/Y_0 = 0.0448$), and even/odd mode impedances ($Z_{0e}, Z_{0o}$). Folded $\\lambda/2$ resonators into U-shaped hairpins to cut board area by $>50\\%$ and implemented direct $50\\ \\Omega$ tapped-line feeds to achieve return loss $S_{11} < -15\\text{ dB}$.',
    specs:
      'FR-4 Substrate ($\\epsilon_r = 4.4$, $H = 1.524\\text{ mm}$, $\\tan\\delta = 0.015$) | Stopband Rejection $\\ge 30\\text{ dB}$ at 1170 MHz | Trace Gap $S \\ge 8.38\\text{ mil}$',
    tags: ['Ansys HFSS', 'Microstrip Synthesis', 'S-Parameters', 'SMath Studio'],
    mediaLayout: 'single',
    media: [],
  },
  {
    id: 'boost-converter',
    title: 'AC-to-DC Power Supply & Step-Up Boost Converter',
    category: 'power',
    categoryLabel: 'Power Electronics',
    status: 'completed',
    team: '3-Person Team',
    description:
      'Constructed a two-stage power supply converting $\\pm 7.5\\text{ VAC}$ ($10.6\\text{ V}_{\\text{peak}}$, 60 Hz) into an intermediate $+10.0\\text{ VDC}$ rail via a center-tapped full-wave rectifier ($2\\times\\text{1N4007}$) and bulk capacitive filter. Stepped up DC voltage using an inductive Continuous Conduction Mode (CCM) boost topology ($V_{\\text{out}} = V_{\\text{in}} / (1 - D)$) driven by a 555-timer astable clock. Output voltage is tuned across the load range via a potentiometer-controlled Zener shunt network ($2\\times\\text{1N4732A} + R_6$) paired with a fixed $19.7\\text{ V}$ overvoltage clamp ($\\text{1N4744A} + \\text{1N4732A}$). Bench testing verified an initial range of $+9.25\\text{ V}$ to $+18.65\\text{ VDC}$ with ripple under $72\\text{ mV}_{\\text{p-p}}$; subsequent circuit optimization extended the range closer to the $10\\text{–}20\\text{ V}$ design target, with low-end ripple tradeoffs ($474\\text{ mV}$) documented from breadboard parasitics and component tolerances.',
    specs:
      '$+9.25\\text{ V}$ to $+18.65\\text{ V}$ Verified Range | $65.0 - 71.6\\text{ mV}$ Initial Ripple (Spec: $<100\\text{ mV}$) | Center-Tapped Rectifier + Shunt Zener Regulation',
    tags: ['Power Electronics', 'LTspice', 'Hardware Prototyping', 'Keysight DSO'],
    mediaLayout: 'boost-stack',
    media: [
      {
        src: '/images/boost-schematic.png',
        alt: 'Complete AC-DC Boost Converter Circuit Schematic',
        caption: 'Circuit Schematic',
        type: 'schematic',
      },
      {
        src: '/images/boost-scope-low.png',
        alt: 'Keysight DSO 9.25V Output Capture',
        caption: 'Low: 9.25V (65 mV Rip.)',
        type: 'scope',
      },
      {
        src: '/images/boost-scope-high.png',
        alt: 'Keysight DSO 18.65V Output Capture',
        caption: 'High: 18.65V (72 mV Rip.)',
        type: 'scope',
      },
    ],
  },
  {
    id: 'audio-equalizer',
    title: '3-Channel Analog Audio Mixing Console & Multi-Band Equalizer',
    category: 'analog',
    categoryLabel: 'Analog Signal',
    status: 'completed',
    team: '3-Person Team',
    description:
      'Engineered an analog audio processing console handling two line-level inputs and one electret condenser microphone channel. Includes an active low-noise preamplifier with DC blocking ($1\\ \\mu\\text{F}$) and high-frequency noise attenuation, feeding into a 3-channel virtual-ground inverting summing amplifier. A unity-gain buffer isolates the mixer from an equalizer stage utilizing a reconfigurable 2nd-order active filter topology (built around $R_1\\text{–}R_5$, $C_1$, $C_2$, and a single op-amp) instantiated three times at different center frequencies (250 Hz, 1 kHz, and 4 kHz) via selected capacitor values. A single potentiometer on each stage controls filter character: below ~50% it behaves as a band-pass, at ~50% it flattens to an all-pass, and above ~50% it becomes a band-stop (notch) filter before summing into an output speaker stage.',
    specs:
      '$\\pm 15\\text{ V}$ Dual Rails | Center Frequencies: 250 Hz, 1 kHz, 4 kHz | Max gain ranged from approximately +9 dB (band-pass, 250 Hz stage) to −7.9 dB (band-stop, 1 kHz stage) across the three bands, with 3-dB bandwidths varying by potentiometer position (e.g., 70 Hz–2 kHz at 25% pot on the 250 Hz stage) | LM348N Active Equalizer',
    tags: ['Analog Design', 'Active Filters', 'Op-Amps', 'LM348N'],
    mediaLayout: 'audio-3col',
    media: [
      {
        src: '/images/audio-schematic.png',
        alt: 'Active Variable Band-Pass / Band-Stop Filter Schematic',
        caption: 'Active Filter Topology',
        type: 'schematic',
      },
      {
        src: '/images/audio-waveform.png',
        alt: 'Keysight DSO Dual-Channel Input vs Output Waveform',
        caption: 'Input vs. Filtered Output',
        type: 'scope',
      },
      {
        src: '/images/audio-bode-mixer-gain.png',
        alt: 'Measured Bode Plot — Full Mixer Gain Response',
        caption: 'Measured Bode Plot — Full Mixer Gain (2 Pass-Bands + Stop-Band)',
        type: 'bode',
      },
    ],
  },
  {
    id: 'line-robot',
    title: 'Autonomous PID Line-Following Robot & Custom Sensor PCB',
    category: 'robotics',
    categoryLabel: 'Robotics & Embedded',
    status: 'completed',
    team: '3-Person Team (Led CAD & PCB)',
    description:
      'Engineered an autonomous mobile robot utilizing closed-loop discrete PID control ($\\text{Turn} = k_P e + k_I \\sum e + k_D \\Delta e$) driven by an Arduino Mega and dual DC motor shield. Personally led the schematic capture, symbol creation, and physical trace routing in KiCad for a custom 7-channel optoelectronic sensor PCB ($A8\\text{–}A14$) with integrated LED emitter biasing and calibrated dynamic range ($0\\text{–}100$). Designed a custom 3D CAD chassis and optical shroud ensuring a rigid $0.5\\text{ cm}$ ground clearance to suppress ambient light noise. Implemented an isolated dual-rail power topology to decouple high inductive motor peak currents and prevent microcontroller brownout resets. Built an analog user interface featuring four potentiometer voltage dividers paired with a 7-segment digital display for live gain tuning and telemetry verification ($S=12, P=22, I=0, D=12$).',
    specs:
      '7-Channel Optoelectronic Array | $0.5\\text{ cm}$ Optical Standoff | Isolated Dual-Rail Power | Hardware-Tunable PID Telemetry ($S=12, P=22, I=0, D=12$) | Custom KiCad PCB & 3D CAD Base',
    tags: [
      'KiCad PCB Layout',
      'Schematic Capture',
      '3D CAD Design',
      'PID Control',
      'Optoelectronics',
      'Power Isolation',
      'Hardware Bring-Up',
    ],
    mediaLayout: 'robot-2x2',
    media: [
      {
        src: '/images/Overall_Robot.png',
        alt: 'Assembled Closed-Loop PID Line-Following Robot',
        caption: 'Assembled Autonomous Robot',
        type: 'hardware',
      },
      {
        src: '/images/Cad_file.png',
        alt: '3D CAD Optical Shroud & Chassis Mount',
        caption: '3D CAD Optical Shroud',
        type: 'cad',
      },
      {
        src: '/images/Kicad_schematic.jpg',
        alt: 'Optoelectronic Sensor Array PCB Routing in KiCad',
        caption: 'KiCad Sensor PCB Layout',
        type: 'schematic',
      },
      {
        src: '/images/Soldered_board.png',
        alt: 'Populated and Soldered Sensor Array Hardware',
        caption: 'Soldered Sensor Array',
        type: 'hardware',
      },
    ],
  },
];
