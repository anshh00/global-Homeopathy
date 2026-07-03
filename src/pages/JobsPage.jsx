import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  ClipboardList,
  ExternalLink,
  Globe2,
  GraduationCap,
  MapPin,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

const jobHighlights = [
  { value: "54", label: "curated external leads" },
  { value: "16+", label: "regions and channels" },
  { value: "Clinical", label: "doctor / consultant roles" },
  { value: "Academic", label: "teaching and research paths" },
];

const jobListings = [
  {
    region: "India",
    location: "Bengaluru, Karnataka",
    designation: "Homeopathic Doctor BHMS",
    organization: "Homeocare International Pvt. Ltd.",
    qualification: "BHMS or MD (Homeopathy) with proper registration",
    experience: "Good knowledge of homeopathy; experience varies by employer",
    type: "Clinical practice",
    source: "Indeed India",
    link: "https://in.indeed.com/q-bhms-l-bengaluru%2C-karnataka-jobs.html",
  },
  {
    region: "India",
    location: "Hyderabad, Telangana",
    designation: "Homeopathic Consultant BHMS",
    organization: "DR Positive Health Science / Dr Care Homeopathy listings",
    qualification: "BHMS with knowledge of homeopathic principles and practice",
    experience: "Consultation, case records, treatment planning, and senior doctor coordination",
    type: "Clinic role",
    source: "Indeed India",
    link: "https://in.indeed.com/q-homeopathic-doctor%2C-bhms-l-hyderabad%2C-telangana-jobs.html",
  },
  {
    region: "India",
    location: "Mumbai, Maharashtra",
    designation: "Doctor BAMS / BHMS",
    organization: "Keshi Enterprises and Mumbai healthcare listings",
    qualification: "BHMS or BAMS; employer may accept fresher or experienced doctors",
    experience: "Patient evaluation, referral coordination, and clinic support",
    type: "Clinical / non-clinical",
    source: "Indeed India",
    link: "https://in.indeed.com/q-homeopathic-doctor%2C-bhms-l-mumbai%2C-maharashtra-jobs.html",
  },
  {
    region: "India",
    location: "Mumbai, Maharashtra",
    designation: "Non Clinical Job - BAMS / BHMS Doctors",
    organization: "Medi Assist Insurance TPA listings",
    qualification: "BHMS, BAMS, MBBS, or related healthcare qualification as listed",
    experience: "Claims, pre-authorisation review, medical documentation, and quality process work",
    type: "Non-clinical healthcare",
    source: "Indeed India",
    link: "https://in.indeed.com/q-bhms-l-mumbai%2C-maharashtra-jobs.html",
  },
  {
    region: "India",
    location: "Delhi, Delhi NCR",
    designation: "BAMS / BHMS Doctor - Office Based",
    organization: "Medi Assist / Delhi healthcare listings",
    qualification: "BHMS or equivalent listed medical qualification",
    experience: "Auditing processed claims, validation, pre-authorisation, and healthcare documentation",
    type: "Non-clinical healthcare",
    source: "Indeed India",
    link: "https://in.indeed.com/q-doctor%2C-bhms%2C-clinic%2C-homeopathic-l-delhi%2C-delhi-jobs.html",
  },
  {
    region: "India",
    location: "Tamil Nadu",
    designation: "Homeopathic Consultant / Consultant Doctor",
    organization: "Kerala Heritage Hospital / Minus Clinic listings",
    qualification: "BHMS and relevant homeopathic clinical registration",
    experience: "Patient history, wellness plans, consultation, and clinical documentation",
    type: "Clinic role",
    source: "Indeed India",
    link: "https://in.indeed.com/q-bhms%2C-homeopathy-l-tamil-nadu-jobs.html",
  },
  {
    region: "India",
    location: "Uttar Pradesh",
    designation: "Homeopathic Consultant / Homeopathic Physician",
    organization: "Dr. Batra's / Dr. Sanjay's Homeopathy listings",
    qualification: "BHMS and relevant homeopathic clinical registration",
    experience: "Consultation, case taking, follow-up care, and homeopathic prescription work",
    type: "Clinic role",
    source: "Indeed India",
    link: "https://in.indeed.com/q-homeopathy-jobs.html",
  },
  {
    region: "India / Remote",
    location: "Remote",
    designation: "BHMS / MD Doctor",
    organization: "Dr Sanjay's Homoeopathy listing channel",
    qualification: "BHMS or MD (Homeopathy)",
    experience: "Remote consultation support, patient communication, and digital case handling",
    type: "Remote clinical",
    source: "Indeed India",
    link: "https://in.indeed.com/q-homeopathy%2C-bhms-remote-jobs.html",
  },
  {
    region: "UAE",
    location: "Dubai / UAE region",
    designation: "Homeopathic Doctor opportunities",
    organization: "Multiple UAE employers and recruiters",
    qualification: "Homeopathy qualification with applicable DHA / MOH / UAE eligibility where required",
    experience: "Clinic experience and local regulatory eligibility depend on employer",
    type: "Licensed practice",
    source: "NaukriGulf",
    link: "https://www.naukrigulf.com/homeopathic-doctor-jobs-in-dubai",
  },
  {
    region: "UAE",
    location: "Abu Dhabi",
    designation: "Homeopathic Doctor openings",
    organization: "UAE healthcare employers via NaukriGulf",
    qualification: "Homeopathy qualification with UAE licensing eligibility where required",
    experience: "Consultation, clinical documentation, and employer-specific healthcare practice",
    type: "Licensed practice",
    source: "NaukriGulf",
    link: "https://www.naukrigulf.com/homeopathic-doctor-jobs-in-abu-dhabi",
  },
  {
    region: "UAE",
    location: "Sharjah / UAE",
    designation: "Homeopathic Doctor regional vacancies",
    organization: "Gulf healthcare recruiters",
    qualification: "Homeopathy qualification plus DHA / MOH / DOH eligibility depending on emirate",
    experience: "Clinic consultation, regulatory compliance, and patient follow-up",
    type: "Gulf healthcare",
    source: "NaukriGulf",
    link: "https://www.naukrigulf.com/homeopathic-doctor-jobs-in-uae",
  },
  {
    region: "UAE",
    location: "Dubai",
    designation: "Homeopathy / medicine healthcare roles",
    organization: "Dubai healthcare employers",
    qualification: "Relevant healthcare qualification and UAE license where required",
    experience: "Clinical, integrative, functional medicine, or healthcare support depending on role",
    type: "Healthcare channel",
    source: "Indeed UAE",
    link: "https://ae.indeed.com/q-homeopathy%2C-medicine-l-dubai-jobs.html",
  },
  {
    region: "United States",
    location: "Tempe, Arizona",
    designation: "Professor / Department Chair: Homeopathy",
    organization: "Sonoran University of Health Sciences listing",
    qualification: "Advanced homeopathy teaching and academic leadership background",
    experience: "Academic, program leadership, teaching, and department management experience",
    type: "Academic leadership",
    source: "ZipRecruiter",
    link: "https://www.ziprecruiter.com/Jobs/Homeopathy",
  },
  {
    region: "United States",
    location: "United States",
    designation: "Homeopathy jobs",
    organization: "US employers and integrative health organizations",
    qualification: "Role-specific healthcare, academic, wellness, or homeopathy background",
    experience: "Clinical, teaching, wellness, veterinary, customer service, or integrative health work",
    type: "US job-board channel",
    source: "Indeed US",
    link: "https://www.indeed.com/q-homeopathy-jobs.html",
  },
  {
    region: "United States",
    location: "Franklin, Tennessee / US channel",
    designation: "Doctor homeopathy opportunities",
    organization: "Biologix Center and LinkedIn job listings",
    qualification: "Doctor-level healthcare background; homeopathy or integrative medicine experience where listed",
    experience: "Doctor, preventive medicine, integrative medicine, or clinical leadership roles",
    type: "Clinical / integrative",
    source: "LinkedIn Jobs",
    link: "https://www.linkedin.com/jobs/doctor-homeopathy-jobs",
  },
  {
    region: "United States / Remote",
    location: "Remote",
    designation: "Remote Doctor of Homeopathic Medicine",
    organization: "Remote employer listings",
    qualification: "Recognized degree/diploma, registration or license as required by region",
    experience: "Telemedicine, homeopathic case analysis, EHR familiarity, and secure consultation workflow",
    type: "Remote practice",
    source: "ZipRecruiter",
    link: "https://www.ziprecruiter.com/Jobs/Remote-Doctor-Of-Homeopathic-Medicine",
  },
  {
    region: "United States / Remote",
    location: "Remote",
    designation: "Homeopathic remote openings",
    organization: "US remote employers",
    qualification: "Homeopathy, wellness, customer support, healthcare, or employer-specific qualification",
    experience: "Remote support, consultation, administration, or homeopathic product knowledge",
    type: "Remote channel",
    source: "Indeed US",
    link: "https://www.indeed.com/q-homeopathic-l-remote-jobs.html",
  },
  {
    region: "United Kingdom / Online",
    location: "Remote / education channel",
    designation: "Homeopathic Study Instructor",
    organization: "British Institute of Homeopathy",
    qualification: "Documented history in the homeopathic study area being taught",
    experience: "Instructor application requires CV, course outline, and compensation request",
    type: "Teaching",
    source: "British Institute of Homeopathy",
    link: "https://bihint.com/career-at-bih/",
  },
  {
    region: "United Kingdom",
    location: "UK / online education",
    designation: "Homeopathy education and practitioner pathway",
    organization: "School of Homeopathy career guidance",
    qualification: "Professional homeopathy education or practitioner training pathway",
    experience: "Independent practice, education, mentorship, or clinic-building pathway",
    type: "Career pathway",
    source: "School of Homeopathy",
    link: "https://www.homeopathyschool.com/why-study-with-us/careers-in-homeopathy/",
  },
  {
    region: "United Kingdom",
    location: "London / UK",
    designation: "Research and charity-sector homeopathy opportunities",
    organization: "Homeopathy Research Institute ecosystem",
    qualification: "Research, communications, charity, or homeopathy-sector experience depending on role",
    experience: "Research promotion, education, events, communications, or institutional support",
    type: "Research network",
    source: "LinkedIn",
    link: "https://uk.linkedin.com/company/homeopathy-research-institute",
  },
  {
    region: "Australia",
    location: "Australia / Victoria",
    designation: "Homoeopath / Homeopathy roles",
    organization: "Workforce Australia and SEEK listings",
    qualification: "Australia-aligned homeopath qualification and employer-specific requirements",
    experience: "Clinical, wellness, or practitioner experience depending on role",
    type: "Job-board channel",
    source: "Your Career / SEEK",
    link: "https://www.yourcareer.gov.au/occupations/252212/homoeopath",
  },
  {
    region: "Australia",
    location: "Victoria, Australia",
    designation: "Homeopathy jobs",
    organization: "Victorian employers via SEEK",
    qualification: "Homeopathy, wellness, pharmacy, clinic, or employer-specific qualification",
    experience: "Practitioner, product, education, or wellness-sector work depending on listing",
    type: "Australia job-board channel",
    source: "SEEK",
    link: "https://au.seek.com/homeopathy-jobs/in-Victoria-VIC",
  },
  {
    region: "Australia",
    location: "Brisbane, Queensland",
    designation: "Homeopath roles",
    organization: "Brisbane employers via SEEK",
    qualification: "Homeopath qualification and local practice requirements where applicable",
    experience: "Consultation, case-taking, wellness, or practitioner role depending on employer",
    type: "Practitioner channel",
    source: "SEEK",
    link: "https://www.seek.com.au/homeopath-jobs/in-Brisbane-CBD-%26-Inner-Suburbs-Brisbane-QLD",
  },
  {
    region: "Australia",
    location: "Australia",
    designation: "Part-time homeopathy jobs",
    organization: "Australian employers via SEEK",
    qualification: "Homeopathy or wellness qualification depending on role",
    experience: "Part-time clinic, retail, wellness, practitioner, or advisory work",
    type: "Part-time channel",
    source: "SEEK",
    link: "https://au.seek.com/homeopathy-jobs/part-time",
  },
  {
    region: "Australia",
    location: "Australia",
    designation: "Homeopathic Practitioner jobs",
    organization: "Australian employers via LinkedIn",
    qualification: "Practitioner, healthcare, wellness, or relevant integrative background",
    experience: "Clinical practice, online-first care, recruitment, or practitioner support roles",
    type: "Practitioner channel",
    source: "LinkedIn Jobs",
    link: "https://au.linkedin.com/jobs/homeopathic-practitioner-jobs",
  },
  {
    region: "Malaysia",
    location: "Malaysia",
    designation: "Homeopathy job openings",
    organization: "Multiple employers on Jobstreet",
    qualification: "Employer-specific homeopathy, wellness, healthcare, or clinic qualifications",
    experience: "Role-dependent; check individual listing before applying",
    type: "Job-board channel",
    source: "Jobstreet",
    link: "https://my.jobstreet.com/homeopathy-jobs",
  },
  {
    region: "Malaysia",
    location: "Kuala Lumpur Sentral",
    designation: "Homeopathy jobs",
    organization: "Kuala Lumpur employers via Jobstreet",
    qualification: "Homeopathy, healthcare product, wellness, sales, or clinic qualification depending on listing",
    experience: "Healthcare product, wellness consultation, clinic support, or employer-specific role",
    type: "Malaysia job-board channel",
    source: "Jobstreet",
    link: "https://my.jobstreet.com/homeopathy-jobs/in-Kuala-Lumpur-Sentral-Kuala-Lumpur",
  },
  {
    region: "Malaysia",
    location: "Jalan Cochrane / Kuala Lumpur",
    designation: "Wellness Sales Consultant / homeopathy-channel roles",
    organization: "Chris Leong Holdings and Jobstreet listings",
    qualification: "Healthcare, wellness, product, or employer-specific qualification",
    experience: "Client consultation, wellness sales, patient handling, product knowledge, and service delivery",
    type: "Wellness / product",
    source: "Jobstreet",
    link: "https://my.jobstreet.com/homeopathy-jobs/in-Jalan-Cochrane-Kuala-Lumpur",
  },
  {
    region: "Malaysia",
    location: "Penang Island",
    designation: "Homeopathy jobs",
    organization: "Penang employers via Jobstreet",
    qualification: "Homeopathy, wellness, healthcare, or employer-specific background",
    experience: "Clinic, retail, product, support, or practitioner work depending on listing",
    type: "Regional channel",
    source: "Jobstreet",
    link: "https://my.jobstreet.com/homeopathy-jobs/in-Penang-Island-Penang",
  },
  {
    region: "Malaysia",
    location: "Subang Jaya / Selangor",
    designation: "Full-time homeopathy-channel openings",
    organization: "Selangor employers via Jobstreet",
    qualification: "Wellness, healthcare product, clinic, or employer-specific requirements",
    experience: "Sales, product advisory, clinic support, or wellness operations",
    type: "Full-time channel",
    source: "Jobstreet",
    link: "https://my.jobstreet.com/homeopathy-jobs/in-Subang-Jaya-Selangor/full-time",
  },
  {
    region: "Canada",
    location: "Canada",
    designation: "Homeopathy jobs",
    organization: "Canadian employers via Indeed",
    qualification: "Homeopathy, naturopathic, wellness, retail health, or employer-specific credentials",
    experience: "Natural health, clinic, product advisory, wellness, or practitioner roles",
    type: "Canada job-board channel",
    source: "Indeed Canada",
    link: "https://ca.indeed.com/q-homeopathy-jobs.html",
  },
  {
    region: "Canada",
    location: "Ontario",
    designation: "Homeopathy / natural health openings",
    organization: "Ontario employers via Indeed",
    qualification: "Homeopathy, supplements, natural health, wellness, or employer-specific qualification",
    experience: "Customer service, product knowledge, wellness consultation, and health retail support",
    type: "Natural health channel",
    source: "Indeed Canada",
    link: "https://ca.indeed.com/q-homeopathy-l-ontario-jobs.html",
  },
  {
    region: "Gulf",
    location: "GCC region",
    designation: "Homeopathic Doctor regional vacancies",
    organization: "Gulf employers and recruiters",
    qualification: "Homeopathy qualification and local licensing eligibility by country",
    experience: "Clinic practice, consultation, documentation, and employer-specific licensing requirements",
    type: "Regional licensed practice",
    source: "NaukriGulf",
    link: "https://www.naukrigulf.com/homeopathic-doctor-jobs",
  },
  {
    region: "UAE",
    location: "Dubai",
    designation: "Homeopath",
    organization: "Talent Bridge Dubai listing",
    qualification: "Homeopathy qualification with UAE healthcare eligibility where required",
    experience: "Consultation, client care, case management, and clinic coordination",
    type: "Licensed practice",
    source: "Talent Bridge Dubai",
    link: "https://www.careers-page.com/talent-bridge-dubai/job/L88X344R",
  },
  {
    region: "UAE",
    location: "Dubai",
    designation: "Homeopathy clinic career submissions",
    organization: "Dubai Homeopathy Health Center",
    qualification: "Qualified healthcare professionals; role-specific requirements apply",
    experience: "Clinic, patient care, administration, or healthcare support depending on opening",
    type: "Clinic career channel",
    source: "Dubai Homeopathy Health Center",
    link: "https://dubaihomeopathy.ae/careers/",
  },
  {
    region: "Middle East",
    location: "International / GCC",
    designation: "Homeopathic Physician jobs",
    organization: "Healthcare employers on Bayt",
    qualification: "Homeopathy physician qualification and country-specific licensing as required",
    experience: "Physician, clinic, and healthcare practice experience depending on employer",
    type: "Regional job-board channel",
    source: "Bayt",
    link: "https://www.bayt.com/en/international/jobs/homeopathic-physician-jobs/",
  },
  {
    region: "India",
    location: "India",
    designation: "BHMS jobs",
    organization: "Indian healthcare employers on Naukri",
    qualification: "BHMS or employer-specific medical qualification",
    experience: "Clinical, non-clinical, medical review, healthcare operations, or doctor support",
    type: "India job-board channel",
    source: "Naukri",
    link: "https://www.naukri.com/bhms-jobs",
  },
  {
    region: "India",
    location: "India",
    designation: "Homeopathy jobs",
    organization: "Indian employers on Naukri",
    qualification: "Homeopathy, BHMS, clinic, pharmacy, or product knowledge depending on role",
    experience: "Clinic consultation, sales, telehealth, product support, or healthcare operations",
    type: "India job-board channel",
    source: "Naukri",
    link: "https://www.naukri.com/homeopathy-jobs",
  },
  {
    region: "India",
    location: "India",
    designation: "AYUSH / homeopathy career listings",
    organization: "Homeobook career updates",
    qualification: "BHMS, MD Homeopathy, or role-specific AYUSH qualification",
    experience: "Teaching, research, clinical, hospital, government, or academic work depending on listing",
    type: "AYUSH career channel",
    source: "Homeobook",
    link: "https://www.homeobook.com/category/careers/",
  },
  {
    region: "India",
    location: "India",
    designation: "Homeopathy government and institute jobs",
    organization: "LiveAyurved homeopathy job updates",
    qualification: "BHMS, MD Homeopathy, pharmacist, research, or institute-specific qualification",
    experience: "Research scientist, physician, consultant, pharmacist, or academic roles as listed",
    type: "AYUSH career channel",
    source: "LiveAyurved",
    link: "https://liveayurved.com/category/homeopathy-jobs/",
  },
  {
    region: "India",
    location: "Rishikesh / institute channel",
    designation: "Project Research Scientist - Homeopathy",
    organization: "AIIMS / AYUSH job update channel",
    qualification: "Homeopathy research or institute-specific eligibility as listed",
    experience: "Research, project coordination, evidence documentation, and institutional reporting",
    type: "Research",
    source: "LiveAyurved",
    link: "https://liveayurved.com/category/homeopathy-jobs/",
  },
  {
    region: "India",
    location: "Chennai / institute channel",
    designation: "Homeopathy Physician",
    organization: "ESIC / AYUSH job update channel",
    qualification: "BHMS or homeopathy physician eligibility as listed",
    experience: "Clinical consultation, government/institutional practice, and patient documentation",
    type: "Clinical practice",
    source: "LiveAyurved",
    link: "https://liveayurved.com/category/homeopathy-jobs/",
  },
  {
    region: "India",
    location: "Tiruchirappalli / institute channel",
    designation: "Visiting Consultant - Homeopathy",
    organization: "NIT / AYUSH job update channel",
    qualification: "BHMS / MD Homeopathy or visiting consultant eligibility as listed",
    experience: "Part-time clinical consultation and institutional health service support",
    type: "Consultant",
    source: "LiveAyurved",
    link: "https://liveayurved.com/category/homeopathy-jobs/",
  },
  {
    region: "United Kingdom",
    location: "United Kingdom",
    designation: "Homeopath jobs",
    organization: "UK employers on LinkedIn",
    qualification: "Homeopathy practitioner qualification or employer-specific healthcare background",
    experience: "Clinical practice, wellness, education, or integrative health depending on role",
    type: "UK job-board channel",
    source: "LinkedIn Jobs",
    link: "https://uk.linkedin.com/jobs/homeopath-jobs",
  },
  {
    region: "United Kingdom",
    location: "NHS / UK search channel",
    designation: "Homeopathy keyword openings",
    organization: "NHS Jobs search",
    qualification: "Role-specific NHS or healthcare requirements",
    experience: "Healthcare, administration, clinical support, or specialist role depending on listing",
    type: "Healthcare channel",
    source: "NHS Jobs",
    link: "https://www.jobs.nhs.uk/candidate/search/results?keyword=homeopathy",
  },
  {
    region: "Canada",
    location: "Canada",
    designation: "Homeopath jobs",
    organization: "Canadian employers on Indeed",
    qualification: "Homeopathy or natural health qualification depending on role",
    experience: "Clinic, wellness, retail health, product advisory, or practitioner work",
    type: "Canada job-board channel",
    source: "Indeed Canada",
    link: "https://ca.indeed.com/q-homeopath-jobs.html",
  },
  {
    region: "Canada",
    location: "Canada",
    designation: "Homeopathy job leads",
    organization: "Canadian employers on SimplyHired",
    qualification: "Homeopathy, natural health, wellness, or employer-specific qualification",
    experience: "Clinic, education, natural health, product support, or wellness operations",
    type: "Canada job-board channel",
    source: "SimplyHired Canada",
    link: "https://www.simplyhired.ca/search?q=homeopathy",
  },
  {
    region: "New Zealand",
    location: "New Zealand",
    designation: "Homeopathy jobs",
    organization: "New Zealand employers on SEEK",
    qualification: "Homeopathy, wellness, health retail, or employer-specific credentials",
    experience: "Practitioner, clinic, natural health, retail, or product advisory work",
    type: "New Zealand job-board channel",
    source: "SEEK NZ",
    link: "https://www.seek.co.nz/homeopathy-jobs",
  },
  {
    region: "South Africa",
    location: "South Africa",
    designation: "Homeopathy jobs",
    organization: "South African employers on Indeed",
    qualification: "Homeopathy, healthcare, wellness, or employer-specific qualifications",
    experience: "Clinical, product, wellness, administration, or practitioner support depending on role",
    type: "South Africa job-board channel",
    source: "Indeed South Africa",
    link: "https://za.indeed.com/q-homeopathy-jobs.html",
  },
  {
    region: "Global",
    location: "Worldwide",
    designation: "Homeopathic Doctor jobs",
    organization: "Global employers on ZipRecruiter",
    qualification: "Homeopathic doctor qualification and regional registration where required",
    experience: "Clinical care, telehealth, consultation, or integrative health depending on employer",
    type: "Global job-board channel",
    source: "ZipRecruiter",
    link: "https://www.ziprecruiter.com/Jobs/Homeopathic-Doctor",
  },
  {
    region: "Global",
    location: "Worldwide",
    designation: "Homeopathic Practitioner jobs",
    organization: "Global employers on ZipRecruiter",
    qualification: "Homeopathic practitioner qualification and employer-specific credentials",
    experience: "Practitioner, consultation, client care, or integrative clinic support",
    type: "Global job-board channel",
    source: "ZipRecruiter",
    link: "https://www.ziprecruiter.com/Jobs/Homeopathic-Practitioner",
  },
  {
    region: "Remote",
    location: "Remote / worldwide",
    designation: "Homeopathy freelance projects",
    organization: "Remote clients on Upwork",
    qualification: "Homeopathy knowledge, writing, research, education, or consulting expertise",
    experience: "Content, research, course material, consultation support, or project-based work",
    type: "Remote freelance",
    source: "Upwork",
    link: "https://www.upwork.com/freelance-jobs/homeopathy/",
  },
  {
    region: "Remote",
    location: "Remote / worldwide",
    designation: "Homeopathy freelance jobs",
    organization: "Remote clients on Freelancer",
    qualification: "Homeopathy, healthcare writing, research, or project-specific expertise",
    experience: "Freelance content, translation, research, consulting, or online support projects",
    type: "Remote freelance",
    source: "Freelancer",
    link: "https://www.freelancer.com/jobs/homeopathy",
  },
  {
    region: "Global",
    location: "Worldwide",
    designation: "Homeopathy career pathways",
    organization: "Training, practice, research, publication, and education channels",
    qualification: "Professional homeopathy training or role-specific healthcare background",
    experience: "Private practice, education, clinic support, product advisory, or institutional collaboration",
    type: "Career guidance",
    source: "School of Homeopathy",
    link: "https://www.homeopathyschool.com/why-study-with-us/careers-in-homeopathy/",
  },
];

const regions = [
  "India",
  "UAE",
  "United States",
  "United Kingdom",
  "Australia",
  "Malaysia",
  "Canada",
  "Gulf",
  "Middle East",
  "New Zealand",
  "South Africa",
  "Remote",
];

const jobPortalChecks = [
  "Original apply source linked",
  "Qualification and license noted",
  "External listings change daily",
  "Only homeopathy-specific leads accepted",
];

const heroBriefs = [
  {
    icon: MapPin,
    title: "Worldwide coverage",
    text: "India, UAE, Gulf, US, UK, Australia, Malaysia, Canada, and remote job-board channels.",
  },
  {
    icon: ClipboardList,
    title: "Application-ready details",
    text: "Each lead shows designation, location, qualification, experience scope, and source.",
  },
  {
    icon: ShieldCheck,
    title: "Verified-source approach",
    text: "GlobalHomeopathy.org does not hire directly; each card routes to the live external apply source.",
  },
];

const careerTracks = [
  {
    icon: BriefcaseBusiness,
    title: "Clinical practice",
    text: "Homeopathic doctors, consultants, physicians, case-taking roles, and clinic operations.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "Faculty, instructors, training coordinators, curriculum support, and course leadership.",
  },
  {
    icon: ClipboardList,
    title: "Research & documentation",
    text: "Research assistants, study coordinators, publication support, and evidence desk roles.",
  },
  {
    icon: Building2,
    title: "Industry and institutions",
    text: "Manufacturing, regulatory, quality, summit operations, and institutional partnerships.",
  },
];

const ALL_OPTION = "All";

function getJobFamily(job) {
  const text = `${job.type} ${job.designation} ${job.experience}`.toLowerCase();

  if (text.includes("remote")) return "Remote";
  if (text.includes("research") || text.includes("scientist") || text.includes("fellow")) return "Research";
  if (
    text.includes("academic") ||
    text.includes("teaching") ||
    text.includes("instructor") ||
    text.includes("education") ||
    text.includes("professor")
  ) {
    return "Education";
  }
  if (text.includes("non-clinical") || text.includes("claims") || text.includes("documentation")) {
    return "Non-clinical";
  }
  if (text.includes("wellness") || text.includes("product") || text.includes("sales") || text.includes("retail")) {
    return "Wellness / product";
  }
  if (
    text.includes("job-board") ||
    text.includes("channel") ||
    text.includes("career guidance") ||
    text.includes("freelance")
  ) {
    return "Source channel";
  }

  return "Clinical";
}

const regionOptions = [ALL_OPTION, ...Array.from(new Set(jobListings.map((job) => job.region))).sort()];
const familyOptions = [
  ALL_OPTION,
  "Clinical",
  "Education",
  "Research",
  "Remote",
  "Non-clinical",
  "Wellness / product",
  "Source channel",
];
const sourceOptions = [ALL_OPTION, ...Array.from(new Set(jobListings.map((job) => job.source))).sort()];

function JobsPage() {
  const [query, setQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState(ALL_OPTION);
  const [familyFilter, setFamilyFilter] = useState(ALL_OPTION);
  const [sourceFilter, setSourceFilter] = useState(ALL_OPTION);

  const filteredJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return jobListings.filter((job) => {
      const family = getJobFamily(job);
      const haystack = [
        job.region,
        job.location,
        job.designation,
        job.organization,
        job.qualification,
        job.experience,
        job.type,
        job.source,
        family,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery = !normalizedQuery || haystack.includes(normalizedQuery);
      const matchesRegion =
        regionFilter === ALL_OPTION ||
        job.region.includes(regionFilter) ||
        job.location.includes(regionFilter) ||
        (regionFilter === "Remote" && haystack.includes("remote"));
      const matchesFamily = familyFilter === ALL_OPTION || family === familyFilter;
      const matchesSource = sourceFilter === ALL_OPTION || job.source === sourceFilter;

      return matchesQuery && matchesRegion && matchesFamily && matchesSource;
    });
  }, [query, regionFilter, familyFilter, sourceFilter]);

  const clearFilters = () => {
    setQuery("");
    setRegionFilter(ALL_OPTION);
    setFamilyFilter(ALL_OPTION);
    setSourceFilter(ALL_OPTION);
  };

  return (
    <main className="jobs-page">
      <section className="jobs-hero">
        <div className="jobs-shell jobs-hero-grid">
          <div>
            <p className="jobs-kicker">Global homeopathy jobs</p>
            <h1>Homeopathy jobs across the world.</h1>
            <p>
              GlobalHomeopathy.org works as a discovery layer for live
              homeopathy openings, not as a direct recruiter. Candidates can
              compare clinical, academic, remote, institutional, pharmacy,
              wellness, research, and non-clinical BHMS pathways, then continue
              to the original employer or job-board source to apply.
            </p>
            <p className="jobs-hero-support">
              Use this page to check country, designation, required
              qualification, licensing context, experience scope, and source
              credibility before moving to the external application page.
            </p>
            <div className="jobs-actions">
              <a className="button primary" href="#openings">
                Browse openings <ArrowRight size={17} />
              </a>
              <a className="button secondary" href="mailto:jobs@globalhomeopathy.org?subject=Submit%20Verified%20Homeopathy%20Job%20Opening">
                Submit verified opening
              </a>
            </div>
            <div className="jobs-hero-briefs" aria-label="Jobs portal details">
              {heroBriefs.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title}>
                    <Icon size={20} />
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.text}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="jobs-hero-panel" aria-label="Job portal search preview">
            <label className="jobs-search-bar">
              <Search size={18} />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search role, country, qualification, source"
              />
            </label>
            <div className="jobs-hero-priority">
              <strong>What matters before applying</strong>
              <ul>
                {jobPortalChecks.map((item) => (
                  <li key={item}>
                    <ShieldCheck size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="jobs-region-cloud">
              {regions.map((region) => (
                <button
                  className={regionFilter === region ? "active" : ""}
                  key={region}
                  type="button"
                  onClick={() => setRegionFilter(region)}
                >
                  {region}
                </button>
              ))}
            </div>
            <div className="jobs-burnett-note">
              <ShieldCheck size={20} />
              <p>
                Burnett Homeopathy Pvt. Ltd. openings can appear here only when
                a verified external application link is available.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="jobs-metrics" aria-label="Jobs portal metrics">
        <div className="jobs-shell">
          {jobHighlights.map((item) => (
            <article key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="jobs-shell jobs-track-section">
        <div className="jobs-section-heading">
          <p className="jobs-kicker">Career tracks</p>
          <h2>Built only for homeopathy careers.</h2>
          <p>
            The portal is intentionally narrow: no generic healthcare jobs, no
            unrelated medical listings, and no vague wellness entries unless the
            role clearly connects to homeopathy.
          </p>
        </div>
        <div className="jobs-track-grid">
          {careerTracks.map((track) => {
            const Icon = track.icon;
            return (
              <article key={track.title}>
                <Icon size={28} />
                <h3>{track.title}</h3>
                <p>{track.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="jobs-shell jobs-openings" id="openings">
        <div className="jobs-section-heading">
          <p className="jobs-kicker">Verified worldwide sources</p>
          <h2>Current homeopathy job leads by region.</h2>
          <p>
            These listings are external leads. Candidates should confirm role
            availability, licensing, salary, visa, and registration requirements
            directly on the employer or job-board page before applying.
          </p>
        </div>

        <div className="jobs-filter-panel" aria-label="Filter homeopathy jobs">
          <label>
            <span>Search</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Doctor, Canada, BHMS, remote..."
            />
          </label>
          <label>
            <span>Country / region</span>
            <select value={regionFilter} onChange={(event) => setRegionFilter(event.target.value)}>
              {regionOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Job type</span>
            <select value={familyFilter} onChange={(event) => setFamilyFilter(event.target.value)}>
              {familyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Source</span>
            <select value={sourceFilter} onChange={(event) => setSourceFilter(event.target.value)}>
              {sourceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <div className="jobs-filter-result" aria-live="polite">
            <strong>{filteredJobs.length}</strong>
            <span>matching leads</span>
            <button type="button" onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        </div>

        <div className="jobs-list">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <article className="job-row" key={`${job.region}-${job.designation}-${job.source}`}>
                <div className="job-row-region">
                  <span>
                    <Globe2 size={21} />
                    {job.region}
                  </span>
                  <span className="job-family">{getJobFamily(job)}</span>
                </div>
                <div className="job-row-main">
                  <p>{job.type}</p>
                  <h3>{job.designation}</h3>
                  <span>
                    <Building2 size={15} /> {job.organization}
                  </span>
                  <span>
                    <MapPin size={15} /> {job.location}
                  </span>
                </div>
                <div className="job-row-detail">
                  <strong>Qualification</strong>
                  <p>{job.qualification}</p>
                </div>
                <div className="job-row-detail">
                  <strong>Experience / scope</strong>
                  <p>{job.experience}</p>
                </div>
                <a href={job.link} target={job.link.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
                  {job.source} <ExternalLink size={15} />
                </a>
              </article>
            ))
          ) : (
            <div className="jobs-empty-state">
              <Search size={28} />
              <h3>No matching job leads found.</h3>
              <p>Try a broader country, designation, source, or qualification keyword.</p>
              <button type="button" onClick={clearFilters}>
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="jobs-submit-band">
        <div className="jobs-shell">
          <div>
            <p className="jobs-kicker">Employer desk</p>
            <h2>Submit a verified external homeopathy opening.</h2>
            <p>
              Clinics, colleges, research teams, pharmacies, manufacturers, and
              summit partners can submit role details for review. The listing
              must include a public employer page or live application link,
              because GlobalHomeopathy.org only routes candidates to external
              application platforms and does not recruit directly.
            </p>
          </div>
          <a className="button primary" href="mailto:jobs@globalhomeopathy.org?subject=Submit%20Verified%20Homeopathy%20Job%20Opening">
            Send job details <Users size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default JobsPage;
