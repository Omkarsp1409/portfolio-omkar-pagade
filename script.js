const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
const themeToggle = document.querySelector('#theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const themeLabel = themeToggle.querySelector('span');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

const setTheme = (theme, persist = false) => {
  const isDark = theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} theme`);
  themeIcon.className = `bi ${isDark ? 'bi-sun' : 'bi-moon-stars'}`;
  themeLabel.textContent = isDark ? 'Light' : 'Dark';
  themeColorMeta.content = isDark ? '#091321' : '#ffffff';

  if (persist) {
    try {
      localStorage.setItem('omkar-portfolio-theme', isDark ? 'dark' : 'light');
    } catch {
      // Keep the current view usable when browser storage is disabled.
    }
  }
};

let savedTheme = 'light';
try {
  savedTheme = localStorage.getItem('omkar-portfolio-theme') || 'light';
} catch {
  savedTheme = 'light';
}
setTheme(savedTheme);
themeToggle.addEventListener('click', () => {
  setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark', true);
});

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
    menuToggle.focus();
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

const projects = [
  {
    title: 'AWS Secure Private Application Network',
    type: 'AWS NETWORKING & SECURITY',
    description: 'Three-tier VPC design with a public application load balancer, private EC2 application servers, private RDS MySQL, security-group boundaries, and Session Manager access.',
    image: 'assets/secure-private-network.webp',
    imageAlt: 'Isometric private AWS network with public load balancer, private application servers, and database',
    tags: ['AWS VPC', 'ALB', 'EC2', 'RDS', 'Systems Manager'],
    url: 'https://github.com/Omkarsp1409/aws-secure-vpc-private-application-network'
  },
  {
    title: 'AWS Disaster Recovery Platform',
    type: 'DISASTER RECOVERY',
    description: 'Manual cross-region recovery of a static Apache application from Mumbai to Singapore, with AMI recovery, S3 versioning, and an AWS Backup recovery point. Automated failover is documented as future work.',
    image: 'assets/disaster-recovery.webp',
    imageAlt: 'Two regional server and storage platforms connected for disaster recovery',
    tags: ['AWS', 'EC2', 'AMI', 'S3', 'AWS Backup'],
    url: 'https://github.com/Omkarsp1409/DR_server_using_AWS'
  },
  {
    title: 'Reusable AWS Terraform Modules',
    type: 'INFRASTRUCTURE AS CODE',
    description: 'Reusable Terraform modules for VPC networking, security groups, EC2, and CloudWatch CPU alarms, with example DEV, STAGING, and PROD variable files.',
    image: 'assets/terraform-modules.webp',
    imageAlt: 'Infrastructure modules for networking, compute, and monitoring connected to a cloud platform',
    tags: ['Terraform', 'AWS', 'CloudWatch', 'IaC'],
    url: 'https://github.com/Omkarsp1409/reusable-aws-terraform'
  },
  {
    title: 'AWS Multi-Branch Network',
    type: 'CLOUD NETWORKING',
    description: 'Connected Pune, Mumbai, and Delhi VPCs to a centralized application through AWS Transit Gateway, with branch route tables, EC2, NAT Gateway, and network security controls.',
    tags: ['AWS VPC', 'Transit Gateway', 'EC2', 'Routing'],
    url: 'https://github.com/Omkarsp1409/AWS-Multi-Branch-Network-MBN-Project'
  },
  {
    title: 'AWS Infrastructure Automation Using Terraform',
    type: 'INFRASTRUCTURE AS CODE',
    description: 'Terraform-based AWS infrastructure practice covering VPC, public and private subnets, routing, security groups, EC2, and an Apache test page.',
    tags: ['Terraform', 'AWS VPC', 'EC2', 'Linux'],
    url: 'https://github.com/Omkarsp1409/AWS-Infrastructure-Automation-Using-Terraform'
  },
  {
    title: 'Serverless Monitoring Application',
    type: 'SERVERLESS CLOUD',
    description: 'AWS serverless monitoring application architecture using S3 and CloudFront with OAC, a Python Lambda API, DynamoDB, IAM, and CloudWatch logging.',
    tags: ['AWS Lambda', 'S3', 'CloudFront', 'DynamoDB'],
    url: 'https://github.com/Omkarsp1409/Server_less_production_ready_webhosting_AWS'
  },
  {
    title: 'MySQL Backup & Migration to Amazon RDS',
    type: 'DATABASE OPERATIONS',
    description: 'End-to-end database backup and migration workflow from MySQL on EC2 to Amazon RDS MariaDB using mysqldump, restore steps, and data verification.',
    tags: ['AWS EC2', 'Amazon RDS', 'MySQL', 'mysqldump'],
    url: 'https://github.com/Omkarsp1409/MYSQL-database-backup-and-migration-from-EC2-instance-to-amazon-RDS'
  },
  {
    title: 'Java Web Application on AWS Two-Tier Architecture',
    type: 'APPLICATION DEPLOYMENT',
    description: 'Student registration application deployment documented with EC2, Tomcat, RDS MySQL, public/private networking, a jump server, and security groups.',
    tags: ['AWS', 'EC2', 'Tomcat', 'RDS MySQL'],
    url: 'https://github.com/Omkarsp1409/Deployment-of-a-Java-Web-Application-Using-2-Tier-Architecture-on-AWS-Tomcat-RDS-'
  },
  {
    title: 'Linux Server Hardening & Automation',
    type: 'LINUX SYSTEMS',
    description: 'CentOS 9 server administration project covering SSH hardening, Fail2Ban, auditd, automated backups with Bash and cron, and system monitoring tools.',
    tags: ['CentOS 9', 'Bash', 'Fail2Ban', 'auditd'],
    url: 'https://github.com/Omkarsp1409/Linux-Server-Hardening-Automation-Project-'
  },
  {
    title: 'Private Git Server on Linux',
    type: 'LINUX & VERSION CONTROL',
    description: 'Private CentOS 9 Git hosting setup using SSH key authentication, bare repositories, Linux user permissions, and firewalld.',
    tags: ['CentOS 9', 'Git', 'OpenSSH', 'firewalld'],
    url: 'https://github.com/Omkarsp1409/A-private-Git-server-using-Git-'
  },
  {
    title: 'Static Website Hosting on Amazon S3',
    type: 'CLOUD HOSTING',
    description: 'Step-by-step static website hosting guide covering S3 bucket setup, permissions, uploads, static hosting settings, and the website endpoint.',
    tags: ['AWS S3', 'Static Hosting', 'Cloud'],
    url: 'https://github.com/Omkarsp1409/-Hosting-a-Static-Website-on-AWS-S3'
  },
  {
    title: 'Indian AI Stock Analyst',
    type: 'APPLICATION DEVELOPMENT',
    description: 'A market dashboard project with market summary and explainable technical-analysis endpoints. The repository README documents a Python API and a separate frontend.',
    tags: ['Python', 'API', 'Technical Analysis'],
    url: 'https://github.com/Omkarsp1409/stock-ai-predictor'
  },
  {
    title: 'Terraform Drift Detection & Environment Management',
    type: 'INFRASTRUCTURE GOVERNANCE',
    description: 'Terraform project focused on infrastructure auditing, drift awareness, and environment change control. The repository README currently provides only a brief overview.',
    tags: ['Terraform', 'Drift Detection', 'AWS'],
    url: 'https://github.com/Omkarsp1409/Terraform-Drift-Detection-Environment-Management.'
  },
  {
    title: 'AWS Highly Available Three-Tier Infrastructure',
    type: 'RESUME PROJECT',
    description: 'Resume project covering an AWS three-tier design with VPC, public and private subnets, EC2, ALB, Auto Scaling, RDS, S3, IAM, security groups, CloudWatch, and Terraform.',
    tags: ['AWS', 'Terraform', 'ALB', 'Auto Scaling'],
    url: null
  },
  {
    title: 'Enterprise VMware vSphere & NetApp ONTAP',
    type: 'RESUME PROJECT',
    description: 'Resume project covering ESXi and vCenter, virtual machines and templates, vSwitches and port groups, VMFS/NFS/iSCSI storage concepts, and NetApp ONTAP concepts.',
    tags: ['VMware vSphere', 'ESXi', 'vCenter', 'NetApp ONTAP'],
    url: null
  },
  {
    title: 'Automated Linux Application Deployment on AWS',
    type: 'RESUME PROJECT',
    description: 'Resume project using Terraform to provision AWS EC2, Ansible for Linux configuration, Docker for application containers, Git, and CloudWatch monitoring practice.',
    tags: ['AWS', 'Terraform', 'Ansible', 'Docker'],
    url: null
  }
];

const featuredProjects = document.querySelector('#featured-projects');
const moreProjects = document.querySelector('#more-projects');

featuredProjects.innerHTML = projects.filter((project) => project.image).map((project, index) => `
  <article class="featured-project">
    <div class="featured-copy">
      <span class="featured-index">${String(index + 1).padStart(2, '0')} / 03 · ${project.type}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a class="featured-link" href="${project.url}" target="_blank" rel="noopener">View project <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>
    </div>
    <div class="featured-image"><img src="${project.image}" alt="${project.imageAlt}" loading="lazy"></div>
  </article>
`).join('');

moreProjects.innerHTML = projects.filter((project) => !project.image).map((project) => `
  <article class="more-project">
    <div class="more-project-top"><span>${project.type}</span><span class="source-label">${project.url ? 'GITHUB' : 'RESUME'}</span></div>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="tags">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
    ${project.url ? `<a class="more-project-link" href="${project.url}" target="_blank" rel="noopener" aria-label="Open ${project.title} on GitHub"><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>` : ''}
  </article>
`).join('');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealTargets = document.querySelectorAll('.section-heading, .featured-project, .more-project, .experience-item, .skill-card, .resume-panel, .contact-layout');

if (!prefersReducedMotion.matches && 'IntersectionObserver' in window) {
  revealTargets.forEach((element, index) => {
    element.classList.add('reveal-on-scroll');
    element.style.setProperty('--reveal-delay', `${Math.min(index % 3, 2) * 65}ms`);
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -35px 0px' });

  revealTargets.forEach((element) => revealObserver.observe(element));
}
