import React from "react";
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
  { value: "32", label: "curated job leads" },
  { value: "12+", label: "regions and channels" },
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
  {
    region: "Global",
    location: "International / future submissions",
    designation: "Homeopathy openings from clinics, colleges, manufacturers, and research teams",
    organization: "WorldHomeopathy.org job submission desk",
    qualification: "Only homeopathy-specific openings will be accepted for publication",
    experience: "Clinical, academic, pharmacy, research, regulatory, manufacturing, or operations roles",
    type: "Submit opening",
    source: "WorldHomeopathy.org",
    link: "mailto:info@worldhomeopathy.org?subject=Submit%20Homeopathy%20Job%20Opening",
  },
];

const regions = ["India", "UAE", "United States", "United Kingdom", "Australia", "Malaysia", "Canada", "Gulf", "Remote"];

const jobPortalChecks = [
  "Original apply source linked",
  "Qualification and license noted",
  "External listings change daily",
  "Only homeopathy-specific leads accepted",
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

function JobsPage() {
  return (
    <main className="jobs-page">
      <section className="jobs-hero">
        <div className="jobs-shell jobs-hero-grid">
          <div>
            <p className="jobs-kicker">Global homeopathy jobs</p>
            <h1>Global homeopathy job portal.</h1>
            <p>
              A focused career desk for homeopathy doctors, consultants,
              educators, research teams, clinic operators, manufacturers, and
              institutions. Listings are organized by region with qualification,
              licensing, experience scope, and original application source.
            </p>
            <div className="jobs-actions">
              <a className="button primary" href="#openings">
                Browse openings <ArrowRight size={17} />
              </a>
              <a className="button secondary" href="mailto:info@worldhomeopathy.org?subject=Submit%20Homeopathy%20Job%20Opening">
                Submit a job
              </a>
            </div>
          </div>

          <aside className="jobs-hero-panel" aria-label="Job portal search preview">
            <div className="jobs-search-bar">
              <Search size={18} />
              <span>Role • country • qualification • source</span>
            </div>
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
                <span key={region}>{region}</span>
              ))}
            </div>
            <div className="jobs-burnett-note">
              <ShieldCheck size={20} />
              <p>
                Burnett Homeopathy Pvt. Ltd. can be listed through verified
                hiring, summit, research, and institutional opportunities.
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

        <div className="jobs-list">
          {jobListings.map((job) => (
            <article className="job-row" key={`${job.region}-${job.designation}`}>
              <div className="job-row-region">
                <Globe2 size={22} />
                <span>{job.region}</span>
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
          ))}
        </div>
      </section>

      <section className="jobs-submit-band">
        <div className="jobs-shell">
          <div>
            <p className="jobs-kicker">Employer desk</p>
            <h2>Submit a verified homeopathy opening.</h2>
            <p>
              Clinics, colleges, research teams, pharmacies, manufacturers, and
              summit partners can submit role details for review. Required
              fields: designation, country, location, qualification, experience,
              salary range if public, application deadline, and official apply link.
            </p>
          </div>
          <a className="button primary" href="mailto:info@worldhomeopathy.org?subject=Submit%20Homeopathy%20Job%20Opening">
            Send job details <Users size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default JobsPage;
