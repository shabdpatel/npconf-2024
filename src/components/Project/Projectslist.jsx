import Cyclorotormodel from '../../assets/images/project/cyclorotor';
import Ionicthruster from '../../assets/images/project/ionicthruster';
import LeveragingLight from '../../assets/images/project/LeveragingLight';
import TELESCOPE from '../../assets/images/project/Telescope';
import Soniclevitation from '../../assets/images/project/Soniclevitation';
import Quantumwalker from '../../assets/images/project/Quantumwalker';
import IonicWind from '../../assets/images/project/ionicwind';
import Ramjet from '../../assets/images/project/Ramjet';
import RadioTelescope from '../../assets/images/project/Radiotelescope';

const projectsData = [
    {
        "photo": <Ionicthruster />,
        "name": "Ionic Thruster",
        "position": "2023 Project",
        "description": "Ionic thrusters propel spacecraft by accelerating ions using electromagnetic fields. They promise efficient, high-performance propulsion, revolutionizing space exploration with enhanced efficiency and extended capabilities.",
        "year": "2023"
    },
    {
        "photo": <Ramjet />,
        "name": "Ramjet Engine",
        "position": "2023 Project",
        "description": "Ramjet engines are air-breathing jet engines for high-speed flight, distinct from traditional ones by lacking compressors. They exploit the aircraft's forward motion to compress incoming air for combustion.",
        "year": "2023"
    },
    {
        "photo": <Cyclorotormodel />,
        "name": "Cyclorotor",
        "position": "2023 Project",
        "description": "A cyclorotor, found in VTOL aircraft, features cycloidal rotors rotating around the fuselage. This design creates swirling airflow akin to cyclones, offering efficient lift and propulsion for improved maneuverability.",
        "year": "2023"
    },
    {
        "photo": <LeveragingLight />,
        "name": "Leveraging Light",
        "position": "2023 Project",
        "description": "Our method, merging Michelson interferometer patterns with Newtonian physics, detects tiny masses. Mirror adjustments via a lever reveal mass-induced interference changes.",
        "year": "2023"
    },
    {
        "photo": "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712836790/Batch2024/Screenshot_from_2024-04-11_17-29-30_w1cths.png",
        "name": "Quantum Breakout",
        "position": "2023 Project",
        "description": "Designed a quantum Breakout game to teach school students Qubit Manipulation using Quantum Gates. It offers an interactive platform for learning complex concepts.",
        "year": "2023"
    },
    {
        "photo": <Quantumwalker />,
        "name": "Quantum Walker",
        "position": "2023 Project",
        "description": "Quantum walker simulations utilize silica gel to mimic quantum behavior. Silica's porous structure mimics quantum states, enabling studies in particle dynamics.",
        "year": "2023"
    },
    {
        "photo": <TELESCOPE />,
        "name": "Telescope",
        "position": "2023 Project",
        "description": "Crafted with precision, our Newtonian telescope offers an immersive stargazing experience. With homemade optics and meticulous assembly, it unveils celestial wonders.",
        "year": "2023"
    },
    {
        "photo": <IonicWind />,
        "name": "Ionic Wind",
        "position": "2024 Project",
        "description": "Revolutionizing space travel with advanced ionic thrusters, utilizing electromagnetic fields to propel ions for spacecraft. Our focus: enhancing efficiency for cosmic exploration.",
        "year": "2024"
    },
    {
        "photo": "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712835814/Batch2024/images_djnjn3.jpg",
        "name": "QRNG",
        "position": "2024 Project",
        "description": "Quantum Binary Number Generator: Revolutionizing security with quantum mechanics. Bridging theory with implementation for computational unpredictability.",
        "year": "2024"
    },
    {
        "photo": <Soniclevitation />,
        "name": "Sonic Levitation",
        "position": "2024 Project",
        "description": "Sound waves suspend objects mid-air, defying gravity without contact. High-frequency waves generate pressure, counteracting gravity. Precise wave control enables manipulation.",
        "year": "2024"
    },
    {
        "photo": "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712836309/Batch2024/images_eilvlr.jpg",
        "name": "Plant Disease Detector",
        "position": "2024 Project",
        "description": "Revolutionizing farming with machine learning and Python to swiftly identify plant diseases, ensuring healthier yields and sustainable agriculture.",
        "year": "2024"
    },
    {
        "photo": <RadioTelescope />,
        "name": "Radio Telescope",
        "position": "2024 Project",
        "description": "An advanced cosmic listener captures distant celestial radio waves, revealing mysteries beyond visible light. Operating ceaselessly to unlock cosmic secrets.",
        "year": "2024"
    },
    {
        "photo": "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712836492/Batch2024/images_rpmmmv.jpg",
        "name": "Radiation Sensor",
        "position": "2024 Project",
        "description": "Deploying Geiger-Müller tubes and advanced signal processing for ongoing monitoring. Dependable, wireless, and alert-ready radiation detection.",
        "year": "2024"
    },
    {
        "photo": "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712836619/Batch2024/images_jgwgbg.png",
        "name": "Quantum Hunt",
        "position": "2024 Project",
        "description": "Experience quantum computing through a treasure hunt game featuring Grover's algorithm. An interactive tool that entertains and educates.",
        "year": "2024"
    },
    {
        "photo": "",
        "name": "SR Hub",
        "position": "2025 Project",
        "description": "",
        "year": "2025"
    },
    {
        "photo": "",
        "name": "Opti-Core",
        "position": "2025 Project",
        "description": "The objective of this project is to design and implement logic gates using light-based technologies to demonstrate the functionality of basic digital circuits.",
        "year": "2025"
    },
    {
        "photo": "",
        "name": "Metal 3-D Printing",
        "position": "2025 Project",
        "description": "",
        "year": "2025"
    },
    {
        "photo": "",
        "name": "Anti-Hailstorm Protection System",
        "position": "2025 Project",
        "description": "Traditional netting systems for hailstorms offer protection but are cumbersome to manage and come with several limitations. Our solution introduces an automated, cost-effective anti-hailstorm pillar that integrates machine learning (ML) predictions and mechanical net deployment. This system minimizes the duration nets are deployed, ensuring healthy crop growth while preventing hail damage.",
        "year": "2025"
    },
    {
        "photo": "",
        "name": "Photoacoustic Imaging System",
        "position": "2025 Project",
        "description": "Develop a Photoacoustic Imaging System that uses laser-induced acoustic waves to map underwater objects with the added functionality of modulating the acoustic waves in the 1-50 kHz frequency range. This will enable the capture of specific acoustic signals to generate high-resolution images of underwater features.",
        "year": "2025"
    }
]

export default projectsData;