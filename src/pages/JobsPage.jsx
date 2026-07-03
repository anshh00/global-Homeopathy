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
  { value: "8", label: "verified job sources" },
  { value: "6", label: "regions covered" },
  { value: "Clinical", label: "BHMS / homeopath roles" },
  { value: "Education", label: "teaching opportunities" },
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
    location: "Basti / Lucknow, Uttar Pradesh",
    designation: "Homeopathic Consultant / Homeopathic Physician",
    organization: "Dr. Batra's / Dr. Sanjay's Homeopathy listings",
    qualification: "BHMS and relevant homeopathic clinical registration",
    experience: "Consultation, case taking, follow-up care, and homeopathic prescription work",
    type: "Clinic role",
    source: "Indeed India",
    link: "https://in.indeed.com/q-homeopathic-l-uttar-pradesh-jobs.html",
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

const regions = ["India", "UAE", "United States", "United Kingdom", "Australia", "Malaysia"];

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
            <h1>Worldwide career gateway for homeopathy openings.</h1>
            <p>
              A curated job portal for homeopathy-specific clinical, academic,
              research, institutional, and industry opportunities across regions.
              Every listing links back to the original source for current status.
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
              <span>Search by role, country, qualification</span>
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
