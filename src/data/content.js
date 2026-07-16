import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiGitBranch,
  FiCloud,
  FiServer,
  FiTerminal,
} from 'react-icons/fi';
import {
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiNginx,
  SiTerraform,
  SiVercel,
} from 'react-icons/si';

export const skills = [
  { name: 'Linux', note: 'Server and shell fundamentals', icon: SiLinux },
  { name: 'Git', note: 'Version control workflows', icon: SiGit },
  { name: 'GitHub', note: 'Collaboration and hosting', icon: SiGithub },
  { name: 'Docker', note: 'Containerization basics', icon: SiDocker },
  { name: 'Kubernetes', note: 'Orchestration essentials', icon: SiKubernetes },
  { name: 'Jenkins', note: 'Automation pipelines', icon: SiJenkins },
  { name: 'GitHub Actions', note: 'CI/CD automation', icon: SiGithubactions },
  { name: 'AWS', note: 'Cloud services learning', icon: FiServer },
  { name: 'Terraform', note: 'Infrastructure as code', icon: SiTerraform },
  { name: 'Bash', note: 'Terminal scripting', icon: FiTerminal },
  { name: 'Nginx', note: 'Reverse proxy and web serving', icon: SiNginx },
  { name: 'CI/CD', note: 'Automated delivery workflows', icon: FiGitBranch },
  { name: 'Vercel', note: 'Modern front-end deployment', icon: SiVercel },
  { name: 'Networking', note: 'Connectivity basics', icon: FiCloud },
  { name: 'Monitoring', note: 'Visibility and alerting', icon: FiMonitor },
];

export const projects = [
  {
    title: 'DevOps Portfolio Website',
    description: 'A polished personal website that presents DevOps learning, projects, and contact details with a modern glassmorphism layout.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Responsive UI'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Dockerized React Application',
    description: 'A React app packaged into a lightweight container image for consistent local development and deployment.',
    technologies: ['Docker', 'React', 'Nginx', 'Containerization'],
    github: '#',
    demo: '#',
  },
  {
    title: 'CI/CD Pipeline using GitHub Actions',
    description: 'An automated pipeline that runs checks, builds the project, and prepares deployments on every push.',
    technologies: ['GitHub Actions', 'CI/CD', 'Testing', 'Automation'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Linux Server Deployment with Nginx & PM2',
    description: 'A Linux-based deployment setup with Nginx reverse proxying and process management for stable application delivery.',
    technologies: ['Linux', 'Nginx', 'PM2', 'Deployment'],
    github: '#',
    demo: '#',
  },
];

export const journey = ['HTML/CSS', 'JavaScript', 'React', 'Git & GitHub', 'Linux', 'Docker', 'CI/CD', 'Kubernetes', 'AWS'];

export const certifications = [
  {
    title: 'AWS Cloud Foundations',
    description: 'Placeholder for an entry-level cloud certification or training milestone.',
    status: 'Planned',
  },
  {
    title: 'Docker & Kubernetes Basics',
    description: 'Placeholder for container orchestration and image management learning.',
    status: 'In Progress',
  },
  {
    title: 'Linux System Administration',
    description: 'Placeholder for Linux system administration or hands-on server management credentials.',
    status: 'Planned',
  },
];

export const contacts = [
  { label: 'Email', value: 'usman.ali@example.com', href: 'mailto:usman.ali@example.com', icon: FiMail },
  { label: 'LinkedIn', value: 'linkedin.com/in/usman-ali', href: '#', icon: FiLinkedin },
  { label: 'GitHub', value: 'github.com/usmanali', href: '#', icon: FiGithub },
  { label: 'Location', value: 'Pakistan', href: '#', icon: FiMapPin },
];

export const socialLinks = {
  github: '#',
  linkedin: '#',
  email: 'mailto:usman.ali@example.com',
};