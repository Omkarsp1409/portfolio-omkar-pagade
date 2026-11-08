const themeToggle = document.querySelector('#theme-toggle');
const themeIcon = themeToggle?.querySelector('i');
const themeLabel = themeToggle?.querySelector('span');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

const setTheme = (theme, persist = false) => {
  const isDark = theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  themeToggle?.setAttribute('aria-pressed', String(isDark));
  themeToggle?.setAttribute('aria-label', 'Switch to ' + (isDark ? 'light' : 'dark') + ' theme');
  if (themeIcon) themeIcon.className = 'bi ' + (isDark ? 'bi-sun' : 'bi-moon-stars');
  if (themeLabel) themeLabel.textContent = isDark ? 'Light' : 'Dark';
  if (themeColorMeta) themeColorMeta.content = isDark ? '#08090d' : '#f4f2ee';

  if (persist) {
    try {
      localStorage.setItem('omkar-portfolio-theme', isDark ? 'dark' : 'light');
    } catch {
      // The current theme remains usable when browser storage is unavailable.
    }
  }
  document.dispatchEvent(new Event('portfolio-theme-change'));
};

let savedTheme = 'dark';
try {
  savedTheme = localStorage.getItem('omkar-portfolio-theme') || 'dark';
} catch {
  savedTheme = 'dark';
}
setTheme(savedTheme);
themeToggle?.addEventListener('click', () => {
  setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark', true);
});

const closeNavigation = () => {
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Open navigation');
  navigation?.classList.remove('is-open');
};

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation?.classList.toggle('is-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNavigation));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation?.classList.contains('is-open')) {
    closeNavigation();
    menuToggle?.focus();
  }
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const projects = [
  {
    title: 'AWS Secure Private Application Network',
    type: 'AWS NETWORKING & SECURITY',
    description: 'Three-tier VPC design with a public application load balancer, private EC2 application servers, private RDS MySQL, security-group boundaries, and Session Manager access.',
    image: 'assets/secure-private-network.webp',
    imageAlt: 'Private AWS network with a public load balancer, application servers, and database',
    tags: ['AWS VPC', 'ALB', 'EC2', 'RDS', 'Systems Manager'],
    url: 'https://github.com/Omkarsp1409/aws-secure-vpc-private-application-network'
  },
  {
    title: 'AWS Disaster Recovery Platform',
    type: 'DISASTER RECOVERY',
    description: 'Manual cross-region recovery of a static Apache application from Mumbai to Singapore, with AMI recovery, S3 versioning, and an AWS Backup recovery point. Automated failover is documented as future work.',
    image: 'assets/disaster-recovery.webp',
    imageAlt: 'Regional server and storage platforms connected for disaster recovery',
    tags: ['AWS', 'EC2', 'AMI', 'S3', 'AWS Backup'],
    url: 'https://github.com/Omkarsp1409/DR_server_using_AWS'
  },
  {
    title: 'Reusable AWS Terraform Modules',
    type: 'INFRASTRUCTURE AS CODE',
    description: 'Reusable Terraform modules for VPC networking, security groups, EC2, and CloudWatch CPU alarms, with example DEV, STAGING, and PROD variable files.',
    image: 'assets/terraform-modules.webp',
    imageAlt: 'Reusable infrastructure modules for AWS networking, compute, and monitoring',
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
const projectTagMarkup = (tags) => tags.map((tag) => '<span>' + tag + '</span>').join('');

if (featuredProjects) {
  featuredProjects.innerHTML = projects.filter((project) => project.image).map((project, index) => {
    const order = String(index + 1).padStart(2, '0');
    return '<article class="featured-project" data-reveal>' +
      '<div class="featured-copy">' +
        '<span class="project-type">' + project.type + '<span class="project-index">· ' + order + '</span></span>' +
        '<h3>' + project.title + '</h3>' +
        '<p>' + project.description + '</p>' +
        '<div class="project-tags">' + projectTagMarkup(project.tags) + '</div>' +
        '<a class="project-link" href="' + project.url + '" target="_blank" rel="noopener">Open on GitHub <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>' +
      '</div>' +
      '<div class="featured-image"><img src="' + project.image + '" alt="' + project.imageAlt + '" loading="lazy" decoding="async"></div>' +
    '</article>';
  }).join('');
}

if (moreProjects) {
  moreProjects.innerHTML = projects.filter((project) => !project.image).map((project) => {
    const projectLink = project.url
      ? '<a class="more-project-link" href="' + project.url + '" target="_blank" rel="noopener" aria-label="Open ' + project.title + ' on GitHub"><i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>'
      : '';
    return '<article class="more-project" data-reveal>' +
      '<div class="more-project-top"><span>' + project.type + '</span><span class="source-label">' + (project.url ? 'GITHUB' : 'RESUME') + '</span></div>' +
      '<h3>' + project.title + '</h3>' +
      '<p>' + project.description + '</p>' +
      '<div class="project-tags">' + projectTagMarkup(project.tags) + '</div>' +
      projectLink +
    '</article>';
  }).join('');
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealTargets = document.querySelectorAll('[data-reveal]');

if (!prefersReducedMotion.matches && 'IntersectionObserver' in window) {
  revealTargets.forEach((element, index) => {
    element.classList.add('reveal-on-scroll');
    element.style.transitionDelay = (Math.min(index % 3, 2) * 70) + 'ms';
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -34px 0px' });

  revealTargets.forEach((element) => revealObserver.observe(element));
}

const agileObject = document.querySelector('#agile-object');

if (agileObject && !prefersReducedMotion.matches) {
  const motionStops = [
    { at: 0, x: 0, y: 0, rx: 7, ry: -16, rz: -9, scale: .98, opacity: .53 },
    { at: .18, x: 16, y: -5, rx: -8, ry: 38, rz: 14, scale: .92, opacity: .43 },
    { at: .42, x: 10, y: 2, rx: 25, ry: 162, rz: -24, scale: .78, opacity: .36 },
    { at: .62, x: -18, y: -3, rx: -12, ry: 224, rz: 14, scale: .74, opacity: .33 },
    { at: .82, x: 18, y: 6, rx: 18, ry: 310, rz: -14, scale: .84, opacity: .45 },
    { at: 1, x: -4, y: 0, rx: 3, ry: 360, rz: 2, scale: .92, opacity: .53 }
  ];

  let pointerX = 0;
  let pointerY = 0;
  let motionPending = false;

  const lerp = (from, to, amount) => from + (to - from) * amount;
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const renderObjectMotion = () => {
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = clamp(window.scrollY / maxScroll, 0, 1);
    let index = motionStops.findIndex((stop, stopIndex) => stopIndex < motionStops.length - 1 && progress >= stop.at && progress <= motionStops[stopIndex + 1].at);
    if (index < 0) index = motionStops.length - 2;

    const start = motionStops[index];
    const end = motionStops[index + 1];
    const local = clamp((progress - start.at) / (end.at - start.at), 0, 1);
    const state = {
      x: lerp(start.x, end.x, local) + pointerX * 1.1,
      y: lerp(start.y, end.y, local) + pointerY * .7,
      rx: lerp(start.rx, end.rx, local) - pointerY * 1.8,
      ry: lerp(start.ry, end.ry, local) + pointerX * 2.2,
      rz: lerp(start.rz, end.rz, local) + pointerX * .6,
      scale: lerp(start.scale, end.scale, local),
      opacity: lerp(start.opacity, end.opacity, local)
    };

    agileObject.style.transform = 'translate3d(calc(-50% + ' + state.x + 'vw), calc(-50% + ' + state.y + 'vh), 0) rotateX(' + state.rx + 'deg) rotateY(' + state.ry + 'deg) rotateZ(' + state.rz + 'deg) scale(' + state.scale + ')';
    const themeOpacity = document.documentElement.dataset.theme === 'dark' ? 1 : .24;
    agileObject.style.opacity = String(state.opacity * themeOpacity);
    motionPending = false;
  };

  const scheduleObjectMotion = () => {
    if (motionPending) return;
    motionPending = true;
    window.requestAnimationFrame(renderObjectMotion);
  };

  window.addEventListener('scroll', scheduleObjectMotion, { passive: true });
  window.addEventListener('resize', scheduleObjectMotion, { passive: true });
  window.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    pointerX = (event.clientX / Math.max(window.innerWidth, 1) - .5) * 2;
    pointerY = (event.clientY / Math.max(window.innerHeight, 1) - .5) * 2;
    scheduleObjectMotion();
  }, { passive: true });
  document.addEventListener('portfolio-theme-change', scheduleObjectMotion);
  scheduleObjectMotion();
}

const customCursor = document.querySelector('#custom-cursor');
const cursorLabel = customCursor?.querySelector('.cursor-label');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

if (customCursor && finePointer.matches && !prefersReducedMotion.matches) {
  let pointerX = -100;
  let pointerY = -100;
  let currentX = -100;
  let currentY = -100;
  let cursorVisible = false;
  let cursorFrame = 0;

  const drawCursor = () => {
    currentX += (pointerX - currentX) * .24;
    currentY += (pointerY - currentY) * .24;
    customCursor.style.left = currentX + 'px';
    customCursor.style.top = currentY + 'px';
    if (Math.abs(pointerX - currentX) + Math.abs(pointerY - currentY) > .2) {
      cursorFrame = window.requestAnimationFrame(drawCursor);
    } else {
      cursorFrame = 0;
    }
  };

  const queueCursorDraw = () => {
    if (!cursorFrame) cursorFrame = window.requestAnimationFrame(drawCursor);
  };

  document.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (!cursorVisible) {
      cursorVisible = true;
      document.body.classList.add('has-custom-cursor');
      customCursor.classList.add('is-visible');
    }
    queueCursorDraw();
  }, { passive: true });

  document.addEventListener('pointerover', (event) => {
    const target = event.target.closest('a, button, [data-cursor-label]');
    if (!target) return;
    customCursor.classList.add('is-hovering');
    if (cursorLabel) cursorLabel.textContent = target.dataset.cursorLabel || 'OPEN';
  });

  document.addEventListener('pointerout', (event) => {
    const outgoing = event.target.closest('a, button, [data-cursor-label]');
    const incoming = event.relatedTarget instanceof Element ? event.relatedTarget.closest('a, button, [data-cursor-label]') : null;
    if (outgoing && !outgoing.contains(event.relatedTarget) && !outgoing.isSameNode(incoming)) {
      customCursor.classList.remove('is-hovering');
      if (cursorLabel) cursorLabel.textContent = '';
    }
  });

  document.addEventListener('pointerdown', () => customCursor.classList.add('is-pressed'));
  document.addEventListener('pointerup', () => customCursor.classList.remove('is-pressed'));
  document.addEventListener('pointerleave', () => {
    cursorVisible = false;
    document.body.classList.remove('has-custom-cursor');
    customCursor.classList.remove('is-visible', 'is-hovering', 'is-pressed');
  });
}
