export const projects = [
  {
    slug: "screen-time",
    number: "01",
    title: "ScreenTime",
    type: "iOS focus app",
    status: "In active development",
    featured: true,
    summary:
      "An accountability-based iOS app that blocks distractions during timed focus sessions approved by a trusted friend.",
    technologies: ["SwiftUI", "Screen Time APIs", "Supabase"],
    cardLink: {
      label: "Capstone site",
      url: "https://albertcastillom.github.io/CapstonePortfolio/",
    },
    links: [
      {
        label: "View repository",
        url: "https://github.com/albertcastillom/ScreenTimeAppIOS",
      },
      {
        label: "Read capstone case study",
        url: "https://albertcastillom.github.io/CapstonePortfolio/",
      },
    ],
    card: { x: 5, y: 8, rotate: -6 },
    detail: {
      lead:
        "ScreenTime helps people stay focused by combining Apple’s app-blocking tools with social accountability. A user can start a local session or ask a friend to approve one before selected distractions are blocked.",
      facts: [
        { label: "Platform", value: "iOS 18.6+" },
        { label: "Role", value: "Product design and engineering" },
        { label: "Context", value: "University of Washington capstone" },
        { label: "Status", value: "Core flows implemented" },
      ],
      sections: [
        {
          eyebrow: "The idea",
          title: "Focus with accountability",
          body:
            "Most screen-time tools rely entirely on self-control. ScreenTime adds a trusted friend to the process: the user chooses what to block and for how long, while a friend can approve or decline the request. Local sessions remain available when an accountability partner is not needed.",
        },
        {
          eyebrow: "How it works",
          title: "Private selections, real-time approval",
          body:
            "Selected apps, categories, and websites stay on the requester’s device. Supabase stores only the request lifecycle, user IDs, duration, and status. When a friend approves a request, a private Realtime event reaches the requester and starts the locally saved block.",
          items: [
            "FamilyControls requests authorization and presents Apple’s activity picker.",
            "ManagedSettings applies shields to the selected distractions.",
            "A DeviceActivity monitor removes shields when the session ends, even if the app is suspended.",
            "Shared App Group storage coordinates the main app and monitor extension.",
          ],
        },
        {
          eyebrow: "Architecture",
          title: "Native iOS with a Supabase backend",
          body:
            "The final system pairs a SwiftUI application and Device Activity extension with Supabase Auth, PostgreSQL, Row Level Security, Realtime Broadcast, and an account-deletion Edge Function. The project began in React Native before Apple’s native Screen Time requirements motivated a move to SwiftUI.",
        },
        {
          eyebrow: "Current progress",
          title: "Working foundation, active roadmap",
          body:
            "Authentication, friends, app selection, local timed sessions, focus requests, approval broadcasts, background cleanup, sign-out, and account deletion are implemented. The leaderboard, persistent statistics, profile editing, notifications, tests, and App Store preparation remain in progress.",
        },
      ],
    },
  },
  {
    slug: "mood-tracker",
    number: "02",
    title: "Mood Tracker",
    type: "Full-stack wellness app",
    status: "Live on AWS",
    featured: true,
    summary:
      "A private wellness platform for daily moods, journal entries, habits, and anonymous city-level trends.",
    technologies: ["React", "Express", "PostgreSQL", "AWS"],
    cardLink: {
      label: "Live demo",
      url: "https://mo-22564b58004b473fbc1e6aa21e0ae0ed.ecs.us-west-2.on.aws",
    },
    links: [
      {
        label: "Open live app",
        url: "https://mo-22564b58004b473fbc1e6aa21e0ae0ed.ecs.us-west-2.on.aws",
      },
      {
        label: "View repository",
        url: "https://github.com/albertcastillom/moodTracker",
      },
    ],
    card: { x: 63, y: 2, rotate: 5 },
    detail: {
      lead:
        "Mood Tracker is a production-deployed wellness application that gives each user a private place to record moods, journals, and habits while surfacing anonymous regional patterns.",
      facts: [
        { label: "Frontend", value: "React 19 and Vite" },
        { label: "Backend", value: "Node.js and Express" },
        { label: "Database", value: "PostgreSQL and Prisma" },
        { label: "Deployment", value: "AWS ECS and RDS" },
      ],
      sections: [
        {
          eyebrow: "Experience",
          title: "Daily wellness in one place",
          body:
            "Users can create one mood check-in per day, write private journal entries, define reusable habits, and record daily completions. Anonymous city- and region-level aggregation provides broader mood context without exposing individual entries.",
        },
        {
          eyebrow: "Security",
          title: "Private by design",
          body:
            "Authentication uses signed JWTs stored in HTTP-only cookies. Production secrets are injected through AWS Secrets Manager, the database is isolated in private subnets, and PostgreSQL accepts traffic only from the application security group.",
        },
        {
          eyebrow: "Cloud architecture",
          title: "A containerized AWS deployment",
          body:
            "A single ARM64 container serves the React build and Express API through ECS Express Mode. Amazon RDS provides PostgreSQL, ECR stores immutable images, and CloudWatch captures logs and deployment alarms.",
        },
        {
          eyebrow: "Delivery",
          title: "Automated from main to production",
          body:
            "GitHub Actions verifies the application, requests temporary AWS credentials through OIDC, builds and pushes the image, updates the ECS service, watches the canary deployment, and checks the production health endpoint.",
        },
      ],
    },
  },
  {
    slug: "real-time-leaderboard",
    number: "03",
    title: "Live Leaderboard",
    type: "Real-time web system",
    status: "Live on AWS",
    featured: true,
    summary:
      "A fast target-clicking game with Redis-backed rankings that update for every connected player in real time.",
    technologies: ["Node.js", "Redis", "Socket.IO", "AWS"],
    cardLink: {
      label: "Live demo",
      url: "https://le-7b2780efe2fb4af3bc89fb7b76a003f4.ecs.us-west-2.on.aws",
    },
    links: [
      {
        label: "Play live demo",
        url: "https://le-7b2780efe2fb4af3bc89fb7b76a003f4.ecs.us-west-2.on.aws",
      },
      {
        label: "View repository",
        url: "https://github.com/albertcastillom/Real-time-Leaderboard",
      },
    ],
    card: { x: 14, y: 56, rotate: 4 },
    detail: {
      lead:
        "Live Leaderboard combines a short browser game with a backend scoring service. Players compete to hit as many moving targets as possible, submit a name, and immediately see the shared rankings change.",
      facts: [
        { label: "Runtime", value: "Node.js and Express" },
        { label: "Realtime", value: "Socket.IO" },
        { label: "Rankings", value: "Redis sorted sets" },
        { label: "Deployment", value: "AWS" },
      ],
      sections: [
        {
          eyebrow: "The experience",
          title: "Play, submit, and watch rankings move",
          body:
            "Each round gives a player 15 seconds to click a target that moves after every hit. At the end of the round, the player submits a name and the UI refreshes the top-ten leaderboard.",
        },
        {
          eyebrow: "Data model",
          title: "Ranking with Redis",
          body:
            "Scores are stored in a Redis sorted set, which keeps players ordered without repeatedly sorting application data. The service saves only a player’s highest score and exposes endpoints for the full leaderboard and top ten.",
        },
        {
          eyebrow: "Realtime",
          title: "Updates pushed to every player",
          body:
            "After a higher score is accepted, the Express server reads the updated top ten and broadcasts a leaderboard:update event through Socket.IO. Connected browsers then request and render the latest rankings.",
        },
        {
          eyebrow: "Direction",
          title: "Built as a reusable service",
          body:
            "The project began as a standalone backend and interactive demonstration, with the longer-term goal of adapting its ranking concepts for the ScreenTime application.",
        },
      ],
    },
  },
  {
    slug: "rpi-stock-watcher",
    number: "04",
    title: "RPi Stock Watcher",
    type: "Discord automation",
    status: "Running on Azure",
    featured: true,
    summary:
      "A Discord bot that watches RPiLocator and posts deduplicated Raspberry Pi Zero 2 availability alerts.",
    technologies: ["Node.js", "Discord.js", "Azure", "Docker"],
    cardLink: {
      label: "View code",
      url: "https://github.com/albertcastillom/DiscordBot-Pi-Stock-Watcher",
    },
    links: [
      {
        label: "View repository",
        url: "https://github.com/albertcastillom/DiscordBot-Pi-Stock-Watcher",
      },
    ],
    card: { x: 69, y: 51, rotate: -5 },
    detail: {
      lead:
        "RPi Stock Watcher is a private Discord bot that checks the RPiLocator feed every minute and alerts a server when matching Raspberry Pi Zero 2 inventory becomes available.",
      facts: [
        { label: "Runtime", value: "Node.js 22" },
        { label: "Integration", value: "Discord and RPiLocator RSS" },
        { label: "Storage", value: "Azure Table Storage" },
        { label: "Deployment", value: "Azure Container Apps" },
      ],
      sections: [
        {
          eyebrow: "Monitoring",
          title: "Useful alerts without stale noise",
          body:
            "The bot polls at a responsible minimum interval, validates exact device categories, records the initial feed as a quiet baseline, rejects unseen items that are already too old, and retries delivery when Discord returns an error.",
        },
        {
          eyebrow: "Reliability",
          title: "Deduplication that survives restarts",
          body:
            "Every processed RSS GUID is stored so the same listing cannot be announced twice. Local development uses SQLite, while Azure Table Storage provides cloud-safe persistence without network-filesystem locking.",
        },
        {
          eyebrow: "Operations",
          title: "A private, outbound-only service",
          body:
            "The container needs no public port or domain. It runs as a single Azure Container Apps replica, reads secrets from the environment, accesses storage through managed identity, and sends outbound HTTPS requests to Discord and RPiLocator.",
        },
        {
          eyebrow: "Quality",
          title: "Tested components and diagnostics",
          body:
            "Automated tests cover feed parsing, matching, monitoring, and both storage implementations. Private Discord commands report status and send test notifications, while a read-only feed diagnostic checks live data without posting messages.",
        },
      ],
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
