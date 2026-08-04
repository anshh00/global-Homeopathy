import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  ClipboardList,
  ExternalLink,
  Globe2,
  GraduationCap,
  MapPin,
  Search,
  ShieldCheck,
} from "lucide-react";

const jobListings = [
  {
    id: "india-bhms-indeed",
    country: "India",
    region: "India",
    location: "Pan-India",
    designation: "BHMS / Homeopathic Doctor openings",
    family: "Clinical",
    sourceType: "Job board",
    source: "Indeed India",
    qualification: "BHMS / MD(Homeopathy), state registration where required",
    scope: "Current clinical, consultant, medical writing, coordinator, and doctor roles posted by Indian employers.",
    link: "https://in.indeed.com/q-homeopathy%2C-bhms-jobs.html",
  },
  {
    id: "india-delhi-bhms",
    country: "India",
    region: "India",
    location: "Delhi NCR",
    designation: "Medical Officer / Homeopathic Physician",
    family: "Clinical",
    sourceType: "Job board",
    source: "Indeed India",
    qualification: "BHMS/BAMS or homeopathic physician eligibility as listed by employer",
    scope: "Delhi listings include physician, medical officer, trainee, and clinic coordination roles.",
    link: "https://in.indeed.com/q-bhms-l-delhi%2C-delhi-jobs.html",
  },
  {
    id: "india-mumbai-bhms",
    country: "India",
    region: "India",
    location: "Mumbai, Maharashtra",
    designation: "BHMS doctor and clinic roles",
    family: "Clinical",
    sourceType: "Job board",
    source: "Indeed India",
    qualification: "BHMS with clinic, patient-care, or counselling experience as requested",
    scope: "Mumbai listings collect homeopathic treatment, clinic-care, and associated healthcare openings.",
    link: "https://in.indeed.com/q-bhms-l-mumbai%2C-maharashtra-jobs.html",
  },
  {
    id: "india-bengaluru-homeocare",
    country: "India",
    region: "India",
    location: "Bengaluru, Karnataka",
    designation: "Homeopathic Doctor BHMS",
    family: "Clinical",
    sourceType: "Job board",
    source: "Indeed India",
    qualification: "BHMS / MD(Homeopathy), registration and practical knowledge as listed",
    scope: "Bengaluru openings include clinic doctor roles from homeopathy healthcare employers.",
    link: "https://in.indeed.com/q-bhms-l-bengaluru%2C-karnataka-jobs.html",
  },
  {
    id: "india-chennai-consultant",
    country: "India",
    region: "India",
    location: "Chennai, Tamil Nadu",
    designation: "Homeopathic Consultant",
    family: "Clinical",
    sourceType: "Job board",
    source: "Indeed India",
    qualification: "BHMS/homeopathic practice background; experience depends on employer listing",
    scope: "Chennai roles include consultant, clinic operations, and allied healthcare positions.",
    link: "https://in.indeed.com/q-doctor%2C-bhms%2C-clinic%2C-homeopathic-l-chennai%2C-tamil-nadu-jobs.html",
  },
  {
    id: "india-hyderabad-consultant",
    country: "India",
    region: "India",
    location: "Hyderabad, Telangana",
    designation: "Homeopathic Consultant / BHMS Doctor",
    family: "Clinical",
    sourceType: "Job board",
    source: "Indeed India",
    qualification: "BHMS, consultation ability, and clinic documentation skills",
    scope: "Hyderabad search pages show active BHMS consultant and clinic doctor postings.",
    link: "https://in.indeed.com/q-bhms-l-hyderabad%2C-telangana-jobs.html",
  },
  {
    id: "india-kerala-bhms",
    country: "India",
    region: "India",
    location: "Kerala",
    designation: "BHMS / Homoeopathy roles",
    family: "Clinical",
    sourceType: "Job board",
    source: "Indeed India",
    qualification: "BHMS or related healthcare qualification as listed",
    scope: "Kerala listings include medical officer, consulting doctor, and homoeopathy-related roles.",
    link: "https://in.indeed.com/q-bhms%2C-homoeopathy-l-kerala-jobs.html",
  },
  {
    id: "india-pune-bhms",
    country: "India",
    region: "India",
    location: "Pune, Maharashtra",
    designation: "Associate Doctor - BHMS",
    family: "Clinical",
    sourceType: "Job board",
    source: "Indeed India",
    qualification: "BHMS with homeopathy knowledge and patient-centric communication",
    scope: "Pune listings include associate doctor, clinic doctor, and BHMS healthcare opportunities.",
    link: "https://in.indeed.com/q-bhms-l-pimpri%2C-pune%2C-maharashtra-jobs.html",
  },
  {
    id: "india-homeopathy360",
    country: "India",
    region: "India",
    location: "Pan-India",
    designation: "Homoeopathy recruitment updates",
    family: "Academic",
    sourceType: "Specialist portal",
    source: "Homeopathy360 Jobs",
    qualification: "Varies by notice: BHMS, MD, research, academic, or government eligibility",
    scope: "A specialist homeopathy career category for recruitment notices, education updates, and opportunities.",
    link: "https://www.homeopathy360.com/category/jobs/",
  },
  {
    id: "india-homeobook",
    country: "India",
    region: "India",
    location: "Pan-India",
    designation: "AYUSH / BHMS job feed",
    family: "Academic",
    sourceType: "Specialist portal",
    source: "Homeobook",
    qualification: "BHMS, MD(Homeopathy), teaching, research, or AYUSH eligibility by notice",
    scope: "A homeopathy-focused update stream for academic posts, public notices, and professional opportunities.",
    link: "https://www.homeobook.com/category/homeopathy-jobs/",
  },
  {
    id: "india-homeocare-careers",
    country: "India",
    region: "India",
    location: "Multiple Indian cities",
    designation: "Doctors / clinic team careers",
    family: "Clinical",
    sourceType: "Employer careers",
    source: "Homeocare International",
    qualification: "BHMS / MD(Homeopathy) and clinic role requirements listed by employer",
    scope: "Employer career page for homeopathy doctors and healthcare team roles.",
    link: "https://www.homeocare.in/careers/",
  },
  {
    id: "india-pbhrc",
    country: "India",
    region: "India",
    location: "Kolkata, West Bengal",
    designation: "Clinic career openings",
    family: "Clinical",
    sourceType: "Employer careers",
    source: "PBHRC",
    qualification: "Homeopathic clinical or intern-doctor eligibility as posted",
    scope: "Clinic career page for homeopathic healthcare roles in Kolkata.",
    link: "https://pbhrc.in/career/",
  },
  {
    id: "uae-dubai-homeopathic-doctor",
    country: "UAE",
    region: "Gulf",
    location: "Dubai",
    designation: "Homeopathic Doctor openings",
    family: "Clinical",
    sourceType: "Job board",
    source: "NaukriGulf",
    qualification: "Medical/homeopathy credentials and UAE licensing where the employer requires it",
    scope: "Dubai-focused job-board channel for homeopathic doctor searches and related healthcare roles.",
    link: "https://www.naukrigulf.com/homeopathic-doctor-jobs-in-dubai",
  },
  {
    id: "uae-homeopathic-doctor",
    country: "UAE",
    region: "Gulf",
    location: "UAE",
    designation: "Homeopathic Doctor regional vacancies",
    family: "Clinical",
    sourceType: "Job board",
    source: "NaukriGulf",
    qualification: "Relevant medical degree, local licence where required, and employer-specific experience",
    scope: "UAE-wide job-board channel for homeopathic doctor and related medical roles.",
    link: "https://www.naukrigulf.com/homeopathic-doctor-jobs-in-uae",
  },
  {
    id: "uae-dubai-clinic-careers",
    country: "UAE",
    region: "Gulf",
    location: "Dubai",
    designation: "Clinic careers and practitioner submissions",
    family: "Clinical",
    sourceType: "Employer careers",
    source: "Dubai Homeopathy Health Center",
    qualification: "Clinic-specific practitioner or team criteria as published",
    scope: "Employer career page for healthcare and clinic-team opportunities.",
    link: "https://dubaihomeopathy.ae/careers/",
  },
  {
    id: "gulf-naukrigulf",
    country: "Gulf",
    region: "Gulf",
    location: "GCC region",
    designation: "Homeopathic Doctor search channel",
    family: "Clinical",
    sourceType: "Job board",
    source: "NaukriGulf",
    qualification: "Country-specific professional licence and employer requirements",
    scope: "Regional search channel for homeopathic doctor listings across Gulf job markets.",
    link: "https://www.naukrigulf.com/homeopathic-doctor-jobs",
  },
  {
    id: "uk-bih-instructor",
    country: "United Kingdom",
    region: "United Kingdom",
    location: "Online / UK-linked",
    designation: "Homeopathic Study Instructor",
    family: "Education",
    sourceType: "Employer careers",
    source: "British Institute of Homeopathy",
    qualification: "Teaching ability and homeopathy education credentials as requested",
    scope: "Education-focused opportunity for experienced practitioners and instructors.",
    link: "https://bihint.com/career-at-bih/",
  },
  {
    id: "us-ziprecruiter-homeopathy",
    country: "United States",
    region: "United States",
    location: "United States",
    designation: "Homeopathy job search channel",
    family: "Clinical",
    sourceType: "Job board",
    source: "ZipRecruiter",
    qualification: "State, employer, and role-specific requirements",
    scope: "US job-board search page for homeopathy and adjacent integrative health openings.",
    link: "https://www.ziprecruiter.com/Jobs/Homeopathy",
  },
  {
    id: "us-indeed-homeopathy",
    country: "United States",
    region: "United States",
    location: "United States",
    designation: "Homeopathy and integrative health openings",
    family: "Clinical",
    sourceType: "Job board",
    source: "Indeed US",
    qualification: "Employer-specific licensure, clinical, writing, or wellness requirements",
    scope: "US listings for homeopathy, education, integrative-health, and wellness roles.",
    link: "https://www.indeed.com/q-homeopathy-jobs.html",
  },
  {
    id: "remote-indeed-homeopathy",
    country: "Remote",
    region: "Remote",
    location: "Remote",
    designation: "Remote homeopathic openings",
    family: "Remote",
    sourceType: "Job board",
    source: "Indeed US",
    qualification: "Remote writing, education, consultation, or wellness credentials by employer",
    scope: "Remote-friendly listings where homeopathy, natural health, medical writing, or education appear.",
    link: "https://www.indeed.com/q-homeopathic-l-remote-jobs.html",
  },
  {
    id: "remote-ziprecruiter",
    country: "Remote",
    region: "Remote",
    location: "Remote",
    designation: "Remote Doctor of Homeopathic Medicine",
    family: "Remote",
    sourceType: "Job board",
    source: "ZipRecruiter",
    qualification: "Remote provider criteria and applicable professional rules",
    scope: "Remote search channel for doctor-of-homeopathic-medicine and related listings.",
    link: "https://www.ziprecruiter.com/Jobs/Remote-Doctor-Of-Homeopathic-Medicine",
  },
  {
    id: "malaysia-jobstreet",
    country: "Malaysia",
    region: "Asia Pacific",
    location: "Malaysia",
    designation: "Homeopathy jobs",
    family: "Clinical",
    sourceType: "Job board",
    source: "Jobstreet Malaysia",
    qualification: "Clinic, sales, wellness, or practitioner requirements by employer",
    scope: "Malaysia job-board channel for homeopathy and related healthcare roles.",
    link: "https://my.jobstreet.com/homeopathy-jobs",
  },
  {
    id: "australia-seek",
    country: "Australia",
    region: "Asia Pacific",
    location: "Australia",
    designation: "Homeopathy jobs",
    family: "Clinical",
    sourceType: "Job board",
    source: "SEEK Australia",
    qualification: "Natural-therapy, clinic, administration, or practitioner requirements by employer",
    scope: "Australia job-board channel for homeopathy and natural-therapy openings.",
    link: "https://au.seek.com/homeopathy-jobs",
  },
  {
    id: "australia-career",
    country: "Australia",
    region: "Asia Pacific",
    location: "Australia",
    designation: "Homoeopath vacancies and career pathway",
    family: "Clinical",
    sourceType: "Career resource",
    source: "Your Career Australia",
    qualification: "Advanced diploma or bachelor-level homeopathy pathway noted by the national resource",
    scope: "Career overview and Australian vacancy search channel for homoeopaths.",
    link: "https://www.yourcareer.gov.au/occupations/252212/homoeopath",
  },
  {
    id: "newzealand-seek",
    country: "New Zealand",
    region: "Asia Pacific",
    location: "New Zealand",
    designation: "Homeopathy jobs",
    family: "Clinical",
    sourceType: "Job board",
    source: "SEEK New Zealand",
    qualification: "Employer-specific clinic, wellness, or practitioner requirements",
    scope: "New Zealand job-board search channel for homeopathy-related roles.",
    link: "https://www.seek.co.nz/homeopathy-jobs",
  },
  {
    id: "canada-indeed",
    country: "Canada",
    region: "North America",
    location: "Canada",
    designation: "Homeopathy jobs",
    family: "Clinical",
    sourceType: "Job board",
    source: "Indeed Canada",
    qualification: "Provincial rules and employer-specific requirements",
    scope: "Canada job-board search channel for homeopathy and natural-health openings.",
    link: "https://ca.indeed.com/q-homeopathy-jobs.html",
  },
  {
    id: "remote-upwork",
    country: "Remote",
    region: "Remote",
    location: "Worldwide",
    designation: "Homeopathy freelance projects",
    family: "Remote",
    sourceType: "Freelance",
    source: "Upwork",
    qualification: "Subject expertise for content, research, consultation, or education projects",
    scope: "Freelance marketplace channel for short-term homeopathy projects.",
    link: "https://www.upwork.com/freelance-jobs/homeopathy/",
  },
  {
    id: "remote-freelancer",
    country: "Remote",
    region: "Remote",
    location: "Worldwide",
    designation: "Homeopathy freelance jobs",
    family: "Remote",
    sourceType: "Freelance",
    source: "Freelancer",
    qualification: "Project-specific homeopathy writing, research, translation, or education skills",
    scope: "Freelance project channel for homeopathy-related work.",
    link: "https://www.freelancer.com/jobs/homeopathy",
  },
  {
    id: "global-school-careers",
    country: "Global",
    region: "Global",
    location: "Online",
    designation: "Career pathways in homeopathy",
    family: "Education",
    sourceType: "Career resource",
    source: "School of Homeopathy",
    qualification: "Useful for students comparing education and professional directions",
    scope: "Career guidance page for learners considering professional homeopathy pathways.",
    link: "https://www.homeopathyschool.com/why-study-with-us/careers-in-homeopathy/",
  },
];

const regionFilters = [
  "All",
  "India",
  "Gulf",
  "United Kingdom",
  "United States",
  "Asia Pacific",
  "North America",
  "Remote",
  "Global",
];

const familyFilters = ["All", "Clinical", "Academic", "Education", "Remote"];

const sourceFilters = ["All", "Job board", "Employer careers", "Specialist portal", "Career resource", "Freelance"];

const heroBriefs = [
  {
    icon: ClipboardList,
    title: "Current source first",
    text: "Each listing opens the original employer, job-board, or specialist portal page.",
  },
  {
    icon: ShieldCheck,
    title: "No direct recruitment",
    text: "GlobalHomeopathy.org is a discovery desk, not the hiring company.",
  },
  {
    icon: GraduationCap,
    title: "Licensing context",
    text: "Qualifications and country rules should be checked before applying.",
  },
];

function includesValue(value, query) {
  return String(value ?? "").toLowerCase().includes(query);
}

function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("All");
  const [familyFilter, setFamilyFilter] = useState("All");
  const [sourceFilter, setSourceFilter] = useState("All");

  const filteredJobs = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return jobListings.filter((job) => {
      const matchesQuery =
        !query ||
        [
          job.country,
          job.region,
          job.location,
          job.designation,
          job.family,
          job.sourceType,
          job.source,
          job.qualification,
          job.scope,
        ].some((value) => includesValue(value, query));

      const matchesRegion =
        regionFilter === "All" ||
        job.region === regionFilter ||
        job.country === regionFilter ||
        (regionFilter === "Gulf" && ["UAE", "Gulf"].includes(job.country));

      const matchesFamily = familyFilter === "All" || job.family === familyFilter;
      const matchesSource = sourceFilter === "All" || job.sourceType === sourceFilter;

      return matchesQuery && matchesRegion && matchesFamily && matchesSource;
    });
  }, [searchTerm, regionFilter, familyFilter, sourceFilter]);

  const metricData = useMemo(() => {
    const countries = new Set(jobListings.map((job) => job.country));
    return [
      { value: `${jobListings.length}+`, label: "external job sources" },
      { value: `${countries.size}+`, label: "countries and regions" },
      { value: "Clinical", label: "doctor and consultant paths" },
      { value: "Remote", label: "education and freelance leads" },
    ];
  }, []);

  const clearFilters = () => {
    setSearchTerm("");
    setRegionFilter("All");
    setFamilyFilter("All");
    setSourceFilter("All");
  };

  return (
    <main className="jobs-page">
      <section className="jobs-hero" aria-labelledby="jobs-heading">
        <div className="jobs-shell jobs-hero-grid">
          <div>
            <p className="jobs-kicker">Global homeopathy career desk</p>
            <h1 id="jobs-heading">Current homeopathy openings and live source channels.</h1>
            <p>
              GlobalHomeopathy.org does not recruit candidates directly. This page helps homeopathy
              doctors, BHMS and MD graduates, educators, researchers, clinic teams, manufacturers,
              and remote professionals find credible application sources in one organized place.
            </p>
            <p className="jobs-hero-support">
              Search by country, designation, qualification, source type, or remote pathway. Every
              application should be completed on the original employer, job-board, institution, or
              specialist portal page.
            </p>

            <div className="jobs-actions">
              <a className="button primary" href="#openings">
                Browse live sources <ArrowRight size={16} />
              </a>
              <a className="button secondary" href="#source-policy">
                How sources are handled <ShieldCheck size={16} />
              </a>
            </div>

            <div className="jobs-hero-briefs" aria-label="Jobs page safeguards">
              {heroBriefs.map(({ icon: Icon, title, text }) => (
                <article key={title}>
                  <Icon size={22} aria-hidden="true" />
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="jobs-hero-panel" aria-label="Job search tools">
            <label className="jobs-search-bar">
              <Search size={23} aria-hidden="true" />
              <input
                type="search"
                value={searchTerm}
                placeholder="Search role, country, qualification, source"
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </label>

            <div className="jobs-hero-priority">
              <strong>Before applying, verify</strong>
              <ul>
                <li>
                  <ShieldCheck size={18} aria-hidden="true" />
                  Original apply source and employer identity
                </li>
                <li>
                  <ShieldCheck size={18} aria-hidden="true" />
                  Qualification, registration, and local licensing rules
                </li>
                <li>
                  <ShieldCheck size={18} aria-hidden="true" />
                  Posting date, salary terms, and employment category
                </li>
                <li>
                  <ShieldCheck size={18} aria-hidden="true" />
                  Company-specific listings, including Burnett Homeopathy Pvt. Ltd., should be added
                  only with a verified external application link.
                </li>
              </ul>
            </div>

            <div className="jobs-region-cloud" aria-label="Quick region filters">
              {regionFilters.slice(1).map((region) => (
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
          </aside>
        </div>
      </section>

      <section className="jobs-metrics" aria-label="Jobs portal overview">
        <div className="jobs-shell">
          {metricData.map((metric) => (
            <article key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="jobs-openings" id="openings" aria-labelledby="jobs-openings-heading">
        <div className="jobs-shell">
          <div className="jobs-section-heading">
            <p className="jobs-kicker">Verified external paths</p>
            <h2 id="jobs-openings-heading">Search current openings by country, designation, and source.</h2>
            <p>
              The directory keeps only live job-board channels, employer career pages, specialist
              homeopathy portals, education opportunities, and remote work sources. Outdated one-off
              listings have been removed.
            </p>
          </div>

          <div className="jobs-filter-panel" id="filters">
            <label>
              <span>Search</span>
              <input
                type="search"
                value={searchTerm}
                placeholder="doctor, BHMS, remote, Dubai..."
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </label>
            <label>
              <span>Region</span>
              <select value={regionFilter} onChange={(event) => setRegionFilter(event.target.value)}>
                {regionFilters.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Role type</span>
              <select value={familyFilter} onChange={(event) => setFamilyFilter(event.target.value)}>
                {familyFilters.map((family) => (
                  <option key={family} value={family}>
                    {family}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Source</span>
              <select value={sourceFilter} onChange={(event) => setSourceFilter(event.target.value)}>
                {sourceFilters.map((source) => (
                  <option key={source} value={source}>
                    {source}
                  </option>
                ))}
              </select>
            </label>
            <div className="jobs-filter-result" aria-live="polite">
              <strong>{filteredJobs.length}</strong>
              <span>matching sources</span>
              <button type="button" onClick={clearFilters}>
                Reset
              </button>
            </div>
          </div>

          {filteredJobs.length > 0 ? (
            <div className="jobs-list">
              {filteredJobs.map((job) => (
                <article
                  className="job-row"
                  id={job.id === "remote-indeed-homeopathy" ? "remote" : undefined}
                  key={job.id}
                >
                  <div className="job-row-region">
                    <span>
                      <Globe2 size={14} aria-hidden="true" />
                      {job.region}
                    </span>
                    <span className="job-family">{job.family}</span>
                  </div>
                  <div className="job-row-main">
                    <p>{job.sourceType}</p>
                    <h3>{job.designation}</h3>
                    <span>
                      <MapPin size={14} aria-hidden="true" />
                      {job.location} - {job.source}
                    </span>
                  </div>
                  <div className="job-row-detail">
                    <strong>Qualification</strong>
                    <p>{job.qualification}</p>
                  </div>
                  <div className="job-row-detail">
                    <strong>Why this source matters</strong>
                    <p>{job.scope}</p>
                  </div>
                  <a href={job.link} target="_blank" rel="noreferrer">
                    Open original source <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="jobs-empty-state">
              <Search size={34} aria-hidden="true" />
              <h3>No sources match this filter.</h3>
              <p>Try a broader country, role type, or source category.</p>
              <button type="button" onClick={clearFilters}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="jobs-submit-band" id="source-policy" aria-labelledby="jobs-policy-heading">
        <div className="jobs-shell">
          <div>
            <p className="jobs-kicker">Source policy</p>
            <h2 id="jobs-policy-heading">Openings should always lead to the real hiring source.</h2>
            <p>
              This page is a curated discovery layer for homeopathy careers. It should not replace
              official applications, employer screening, licensing checks, or country-level
              professional rules. When a new Burnett Homeopathy Pvt. Ltd. or institutional opening is
              added, it should route to the verified public application page.
            </p>
          </div>
          <a className="button primary" href="#openings">
            Back to openings <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default JobsPage;
