const navLinks = [
  { id: 1, name: "Portfolio" },
  { id: 2, name: "Contact" },
  { id: 3, name: "Projects" },
];

const navIcons = [
  { id: 1, img: "/icons/wifi.svg" },
  { id: 2, img: "/icons/search.svg" },
  { id: 3, img: "/icons/user.svg" },
  { id: 4, img: "/icons/mode.svg" },
  { id: 5, img: "/icons/user.svg" },
];

const footerIcons = [
  {
    id: 1,
    title: "Work",
    img: "/images/finder.webp",
    action: "works",
  },
  {
    id: 2,
    title: "Blog",
    img: "/images/safari.webp",
    action: "blog",
  },
  {
    id: 3,
    title: "Gallery",
    img: "/images/photos.webp",
  },
  {
    id: 4,
    title: "Contact Me",
    img: "/images/contact.webp",
    action: "contact",
  },
  {
    id: 5,
    title: "Tech Stack",
    img: "/images/terminal.webp",
    action: "tech",
  },
];

const blogItems = [
  {
    id: 1,
    title: "How I Built My macOS-Style Dev Portfolio with React + Tailwind",
    img: "/images/blog/macos-portfolio.jpg",
    description: `
I wanted my portfolio to feel different from the typical developer websites, so I decided to design it with a macOS-inspired interface. The goal was to create something interactive, modern, and visually memorable while still keeping the experience smooth and easy to use. React helped me build reusable UI sections, and Tailwind CSS made styling and responsiveness much faster.

One of the biggest challenges was recreating desktop-like interactions such as draggable windows, animated transitions, and layered layouts. I spent a lot of time refining the small details because they completely changed how polished the final result felt. Instead of relying on heavy libraries, I focused on lightweight custom solutions to keep performance high.

Through this project, I learned how important user experience is in frontend development. A portfolio is not only about showcasing projects — it also reflects how you think about design, structure, and interaction. This build became one of the best learning experiences in my frontend journey.
    `,
  },

  {
    id: 2,
    title: "How I Organize My Projects for Sanity and Speed",
    img: "/images/blog/project-organization.jpg",
    description: `
As my projects became larger, I realized that messy structures slow down development more than difficult code. I started focusing on building a clean and scalable workflow that keeps everything predictable and easy to maintain. Organizing projects properly saves time, reduces stress, and makes collaboration easier.

My structure usually separates components, pages, hooks, utilities, and assets into dedicated folders. I also try to keep naming conventions consistent across every project so I can instantly understand what each file does. Small habits like meaningful commit messages and reusable helper functions make a surprisingly big difference over time.

Good organization is not about following strict rules — it is about creating a system that helps you move faster without confusion. Once I improved my workflow, debugging became easier, development felt smoother, and I could focus more on building features instead of searching through files.
    `,
  },

  {
    id: 3,
    title: "Small UX Details That Make a Big Difference",
    img: "/images/blog/ux-details.jpg",
    description: `
Many people focus only on layouts and colors, but great user experiences are often created through tiny details. Small interactions like hover animations, smooth transitions, button feedback, and loading states can completely change how professional a website feels.

I started paying more attention to micro-interactions after noticing how polished modern apps feel even when their designs are simple. Subtle spacing adjustments, responsive typography, and clean motion design help interfaces feel more natural and comfortable for users. These details may seem invisible individually, but together they shape the entire experience.

The biggest lesson I learned is that users notice how an interface feels even when they cannot explain why. Thoughtful UX design builds trust, improves usability, and makes products more enjoyable to use. Sometimes the smallest refinements create the strongest impression.
    `,
  },

  {
    id: 4,
    title: "Why I Switched to a Minimal Developer Workflow",
    img: "/images/blog/minimal-workflow.jpg",
    description: `
At one point, I was constantly trying new productivity apps, browser extensions, and development tools. Instead of helping me work faster, they created distraction and unnecessary complexity. Eventually, I decided to simplify everything and focus only on tools that genuinely improved my workflow.

Now I use a smaller setup with a cleaner editor configuration, fewer plugins, and lightweight utilities. This minimal approach reduced decision fatigue and helped me stay focused during long coding sessions. I also noticed that simpler workflows are easier to maintain across multiple projects.

Minimalism in development is not about limiting creativity — it is about removing friction. Once I stopped chasing the “perfect setup,” I became more productive and spent more time actually building things.
    `,
  },

  {
    id: 5,
    title: "Building Reusable UI Components That Actually Scale",
    img: "/images/blog/reusable-components.jpg",
    description: `
Reusable components are one of the biggest strengths of modern frontend frameworks like React. Early on, I used to duplicate UI sections across projects, which quickly became difficult to maintain. Over time, I learned how important component architecture is for scalability and long-term development.

Now I design components with flexibility in mind from the beginning. Instead of creating rigid UI blocks, I build systems that can adapt to different layouts and content types. Props, variants, and composition patterns help keep components reusable without making them overly complicated.

A well-structured component system speeds up development, improves consistency, and reduces bugs. More importantly, it makes projects easier to expand in the future without rewriting large sections of code.
    `,
  },

  {
    id: 6,
    title: "My Favorite Frontend Animation Techniques",
    img: "/images/blog/frontend-animations.jpg",
    description: `
Animations can make websites feel more alive and interactive when used correctly. I enjoy using motion not just for visual appeal, but also for improving communication between the interface and the user. Smooth transitions help users understand what is happening on the screen.

I often use subtle fade-ins, scale effects, staggered animations, and hover interactions to guide attention naturally. Performance is always important, so I prefer lightweight animation techniques and avoid anything that feels distracting or excessive. The goal is to support the experience, not overwhelm it.

Good animation design creates rhythm and personality inside an interface. Even simple movements can make a website feel significantly more modern and polished when implemented thoughtfully.
    `,
  },

  {
    id: 7,
    title: "Lessons I Learned from Rebuilding My Portfolio Twice",
    img: "/images/blog/portfolio-lessons.jpg",
    description: `
Rebuilding my portfolio multiple times taught me that design trends alone are not enough to create a strong personal website. My earlier versions looked visually interesting, but they lacked structure, clarity, and a strong sense of identity.

During the rebuild process, I focused more on storytelling, user flow, and showcasing projects in a clearer way. I removed unnecessary sections, simplified navigation, and paid more attention to responsiveness and accessibility. Each redesign helped me better understand how users interact with personal websites.

The experience showed me that improvement comes from iteration. Every rebuild was an opportunity to refine both my technical skills and my design thinking, and the final result felt much more intentional and professional.
    `,
  },
];

export { navLinks, navIcons, footerIcons, blogItems };
