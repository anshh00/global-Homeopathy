import {
  BookOpen,
  CalendarDays,
  FileText,
  Globe2,
  GraduationCap,
  Landmark,
  Library,
  Microscope,
  Newspaper,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

export const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Explore",
    path: "/explore",
    children: [
      { label: "Explore Paths", path: "/explore#paths" },
      { label: "Learn Homoeopathy", path: "/explore#learn" },
      { label: "Medicine Library", path: "/explore#medicines" },
      { label: "Knowledge Hub", path: "/explore#knowledge" },
      { label: "Institutional FAQ", path: "/explore#faq" },
    ],
  },
  {
    label: "Summit",
    path: "/summit",
    children: [
      { label: "Summit Archive", path: "/summit#archive" },
      { label: "Burnett Chapters", path: "/summit#summit-archive" },
      { label: "Global Programmes", path: "/summit#global-programmes" },
      { label: "Submit Reference", path: "/summit#submit-reference" },
    ],
  },
  {
    label: "Research",
    path: "/research",
    children: [
      { label: "Evidence Sources", path: "/research#evidence-sources" },
      { label: "Reading Sequence", path: "/research#research-sequence" },
      { label: "Peer-Reviewed Papers", path: "/research#reading-list" },
      { label: "Goa Research Summit", path: "/research#goa-research" },
    ],
  },
  {
    label: "Leaders",
    path: "/leaders",
    children: [
      { label: "Leadership Council", path: "/leaders#council" },
      { label: "Global Leaders", path: "/leaders#leaders" },
      { label: "Pioneers", path: "/leaders#pioneers" },
      { label: "Principles", path: "/leaders#principles" },
    ],
  },
  {
    label: "Jobs",
    path: "/jobs",
    children: [
      { label: "Open Roles", path: "/jobs#openings" },
      { label: "Search by Country", path: "/jobs#filters" },
      { label: "Remote Roles", path: "/jobs#remote" },
      { label: "Submit Job Lead", path: "/contact" },
    ],
  },
  {
    label: "Media",
    path: "/media",
    children: [
      { label: "Recent Coverage", path: "/media#recent" },
      { label: "Global Updates", path: "/media#updates" },
      { label: "Coverage Archive", path: "/media#archive" },
      { label: "Submit News", path: "/contact" },
    ],
  },
];

export const stats = [
  { value: "75+", label: "Countries practicing homeopathy" },
  { value: "200M+", label: "People reached worldwide" },
  { value: "50+", label: "Organizations and institutions" },
  { value: "4+", label: "World summit chapters" },
];

export const exploreCards = [
  {
    icon: BookOpen,
    title: "What is Homeopathy?",
    text: "A beginner-friendly guide to the origins, global growth, public awareness, and worldwide practice of homeopathy.",
    path: "/explore",
  },
  {
    icon: Landmark,
    title: "History & Hahnemann",
    text: "A historical journey from Samuel Hahnemann and the Organon of Medicine to the modern global movement.",
    path: "/explore",
  },
  {
    icon: Sparkles,
    title: "Principles",
    text: "Like cures like, minimum dose, individualized treatment, and holistic care explained in clean visual sections.",
    path: "/explore",
  },
  {
    icon: Users,
    title: "Global Leaders",
    text: "Historical and modern contributors, with Burnett visibility placed naturally through leadership and summit activity.",
    path: "/leaders",
  },
  {
    icon: Newspaper,
    title: "Media & Publications",
    text: "Coverage from summits, research initiatives, interviews, announcements, and global event references.",
    path: "/media",
  },
];

export const principles = [
  {
    title: "Like Cures Like",
    text: "A central homeopathic principle often explained through the relationship between symptoms and carefully selected remedies.",
  },
  {
    title: "Minimum Dose",
    text: "A principle focused on using the smallest necessary dose according to homeopathic philosophy and practice.",
  },
  {
    title: "Individualized Treatment",
    text: "Homeopathic case-taking traditionally studies the person, symptoms, constitution, and broader context.",
  },
  {
    title: "Holistic Approach",
    text: "A wider view of health that considers physical, emotional, lifestyle, and individual patterns.",
  },
];

export const historyTimeline = [
  { year: "1755", title: "Samuel Hahnemann is born in Meissen, Saxony" },
  { year: "1796", title: "Hahnemann publishes early ideas that later shape homeopathy" },
  { year: "1810", title: "Organon of Medicine becomes a foundational text" },
  { year: "1800s", title: "Homeopathy spreads through Europe and other regions" },
  { year: "1900s", title: "India becomes one of the largest centers for homeopathy" },
  { year: "Today", title: "Global summits, research discussion, media, and institutions continue expanding" },
];

export const summitStats = [
  { value: "4+", label: "International summit chapters" },
  { value: "20+", label: "Countries represented" },
  { value: "500+", label: "Delegates and guests" },
  { value: "100+", label: "Speakers and personalities" },
];

export const summits = [
  {
    city: "Dubai",
    year: "2024",
    title: "World Homeopathy Summit 2",
    text: "A high-visibility international summit chapter with delegates, awards, media attention, and global homeopathy conversations.",
    details: ["Venue coverage", "Key speakers", "Awards and gallery", "Media references"],
    link: "https://www.facultyofhomeopathy.org/articles/world-homeopathy-summit-2",
  },
  {
    city: "Koethen, Germany",
    year: "2025",
    title: "World Homoeopathy Summit 3",
    text: "A historically meaningful summit chapter connected to World Homoeopathy Week and the classical roots of the discipline.",
    details: ["World Homoeopathy Week", "Historical significance", "Summit outcomes", "International experts"],
    link: "https://www.republicworld.com/initiatives/dr-nitish-dubeys-burnett-homeopathy-hosts-historic-world-homeopathy-summit-3-during-world-homeopathy-week-in-germany",
  },
  {
    city: "London",
    year: "2026",
    title: "World Homoeopathy Summit 4",
    text: "A global summit chapter connected with professional dialogue, research conversations, and institutional presence in the UK.",
    details: ["Parliament event", "Research discussions", "International delegates", "Global healthcare dialogue"],
    link: "https://www.expresshealthcare.in/news/burnett-homoeopathy-hosts-4th-world-homoeopathy-summit-2026/453433/",
  },
  {
    city: "Next Summit Chapter",
    year: "2027",
    title: "Next Global Chapter",
    text: "A planning area for delegates, partners, speaker sessions, media galleries, and international collaboration.",
    details: ["Destination planning", "Delegate interest", "Partner opportunities", "Media kit"],
  },
];

export const leaders = [
  {
    name: "Samuel Hahnemann",
    role: "Founder of Homeopathy",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Samuel_Hahnemann_Daguerreotype_1840s.png",
    text: "German physician and founder of homeopathy, known for the principle of like cures like and works such as Organon of the Healing Art.",
    details: ["Born in 1755", "Founder of homeopathy", "Author of Organon of the Healing Art", "World Homeopathy Day is observed on his birthday"],
    source: "https://en.wikipedia.org/wiki/Samuel_Hahnemann",
  },
  {
    name: "George Vithoulkas",
    role: "Classical Homeopathy Educator",
    image: "https://www.vithoulkas.edu.gr/theme/img/home1/slider/slide3.webp",
    text: "Greek teacher, author, and classical homeopathy figure associated with the International Academy of Classical Homeopathy.",
    details: ["Classical homeopathy educator", "Associated with IACH", "Right Livelihood Award recipient", "Author and teacher"],
    source: "https://www.vithoulkas.edu.gr/about-us/vithoulkas",
  },
  {
    name: "Rajan Sankaran",
    role: "Doctor, Teacher & Author",
    image: "https://rajansankaran.com/wp-content/uploads/2022/01/Dr-Sankaran.jpeg",
    text: "Mumbai-based homeopathic practitioner, researcher, teacher, and author with decades of international teaching and writing.",
    details: ["Mumbai-based practitioner", "Teacher and author", "International education work", "Holistic practice focus"],
    source: "https://rajansankaran.com/about/",
  },
  {
    name: "Farokh Master",
    role: "Senior Physician & International Teacher",
    image: "https://drfarokhmaster.com/wp-content/uploads/2019/04/fa.png",
    text: "Senior homeopathic physician, academic, author, and international teacher connected with advanced clinical education.",
    details: ["Senior homeopathic physician", "International teacher", "Author and academic", "Advanced clinical education"],
    source: "https://drfarokhmaster.com/dr-farokh-master/",
  },
  {
    name: "Dr. Nitish Chandra Dubey",
    role: "Chairman, Burnett Homeopathy",
    image: "https://bhomeopathy.com/wp-content/uploads/2022/12/slide-2-Custom-1.jpg",
    text: "Modern contributor positioned through summit leadership, research initiatives, public outreach, and Burnett Homeopathy's global activity.",
    details: ["Chairman, Burnett Homeopathy", "Summit leadership", "Research initiative visibility", "Global outreach and media presence"],
    source: "https://bhomeopathy.com/about-us/",
    featured: true,
  },
];

export const researchCategories = [
  {
    title: "Research Library",
    icon: Search,
    text: "A searchable collection for research papers, case studies, journals, clinical references, and conference proceedings.",
    items: ["Clinical Research", "Case Studies", "Healthcare Innovation", "Academic Papers"],
  },
  {
    title: "Featured Research",
    icon: Microscope,
    text: "A space to highlight evidence-focused summits, international collaborations, and academic engagements.",
    items: ["Burnett Evidence-Based Research Summit", "International Research Collaborations", "Oxford-related academic pathways"],
  },
  {
    title: "Publications",
    icon: FileText,
    text: "A publication database designed for title, author, year, category, and download links where rights are confirmed.",
    items: ["By year", "By country", "By topic", "Download PDFs"],
  },
  {
    title: "Academic Collaboration",
    icon: GraduationCap,
    text: "A section for universities, conferences, joint research projects, and international exchanges.",
    items: ["Universities", "Research Institutes", "Medical Organizations", "Summit Partners"],
  },
];

export const countries = [
  {
    name: "India",
    position: { top: "53%", left: "64%" },
    details: "Major homeopathy education, public awareness, institutions, practitioners, and summit activity.",
    sections: ["Institutions", "Practitioners", "Events", "Research activity"],
  },
  {
    name: "Germany",
    position: { top: "37%", left: "48%" },
    details: "Historical roots, Hahnemann legacy, Koethen summit chapter, and classical homeopathy heritage.",
    sections: ["Historical sites", "Summit chapter", "Organizations", "Education"],
  },
  {
    name: "UK",
    position: { top: "34%", left: "43%" },
    details: "Faculty activity, summit coverage, professional dialogue, and public/institutional references.",
    sections: ["Faculty links", "Media references", "Professional bodies", "Summit activity"],
  },
  {
    name: "UAE",
    position: { top: "50%", left: "57%" },
    details: "Dubai summit chapter, global delegates, media visibility, and international event positioning.",
    sections: ["Dubai Summit", "Delegates", "Media", "Event gallery"],
  },
  {
    name: "Brazil",
    position: { top: "68%", left: "33%" },
    details: "Country directory area for organizations, events, practitioners, and research references.",
    sections: ["Organizations", "Events", "Institutions", "Public resources"],
  },
  {
    name: "USA",
    position: { top: "43%", left: "22%" },
    details: "Directory area for history, organizations, educational activity, and public resources.",
    sections: ["History", "Organizations", "Education", "Resources"],
  },
];

export const mediaItems = [
  {
    tag: "Dubai Summit",
    source: "Faculty of Homeopathy",
    title: "World Homeopathy Summit 2 in Dubai",
    link: "https://www.facultyofhomeopathy.org/articles/world-homeopathy-summit-2",
  },
  {
    tag: "Germany Summit",
    source: "Republic World",
    title: "World Homoeopathy Summit 3 during World Homoeopathy Week",
    link: "https://www.republicworld.com/initiatives/dr-nitish-dubeys-burnett-homeopathy-hosts-historic-world-homeopathy-summit-3-during-world-homeopathy-week-in-germany",
  },
  {
    tag: "London Summit",
    source: "Express Healthcare",
    title: "4th World Homoeopathy Summit 2026",
    link: "https://www.expresshealthcare.in/news/burnett-homoeopathy-hosts-4th-world-homoeopathy-summit-2026/453433/",
  },
  {
    tag: "Research",
    source: "Republic World",
    title: "Evidence-Based Research Summit in Goa",
    link: "https://www.republicworld.com/initiatives/burnett-homeopathy-redefines-global-standards-with-groundbreaking-evidence-based-research-summit-in-goa",
  },
];

export const organizations = [
  "LMHI",
  "Faculty of Homeopathy",
  "National associations",
  "Research institutes",
  "Academic partners",
  "Summit partners",
];

export const events = [
  "World Homeopathy Day",
  "World Homeopathy Summit",
  "Research Summits",
  "Academic Workshops",
  "Country Chapter Meetings",
];

export const ecosystem = [
  {
    icon: Library,
    label: "Global authority",
    title: "WorldHomeopathy.org",
    text: "Knowledge hub, leaders, media, organizations, country directory, and public education.",
  },
  {
    icon: CalendarDays,
    label: "Event platform",
    title: "BurnettWorldSummit.org",
    text: "Summit journey, delegates, registrations, speaker pages, galleries, awards, and media archive.",
  },
  {
    icon: GraduationCap,
    label: "Deep research",
    title: "OxfordBurnettResearch.org",
    text: "Research publications, academic collaborations, case studies, and conference proceedings.",
  },
];
