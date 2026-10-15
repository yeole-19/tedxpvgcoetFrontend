import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import {
  FaLinkedin,
  FaInstagram,
  FaTimes,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import FooterSection from "../sections/Common/FooterSection";
import "./NewTeam.css";

// Backgrounds
import bgDesktop from "../assets/team-2026/bg-desktop.png";
import bgMobile from "../assets/team-2026/bg-mobile.png";

// Team Images
import orgImg from "../assets/team-2026/organisers.png";
import dnpImg from "../assets/team-2026/dnp.png";
import lnoImg from "../assets/team-2026/lno.png";
import ediImg from "../assets/team-2026/editorial.png";
import fnsImg from "../assets/team-2026/fns.png";
import mnmImg from "../assets/team-2026/mnm.png";
import curImg from "../assets/team-2026/curation.png";
import techImg from "../assets/team-2026/technical.png";

// Default User Profile Avatar
import defaultUserAvatar from "../assets/default-user.svg";

// 2026 Committee Organizers
const organizersMembers = [
  {
    name: "Omkar Hokarne",
    role: "Licensee, Organizer",
    image: defaultUserAvatar,
    bio: "As the official TED licensee and Organizer, Omkar leads TEDxPVGCOET 2026 with vision and dedication—overseeing curation, directing executive teams, and shaping a dynamic conference dedicated to ideas worth spreading.",
    social: {
      linkedin: "https://www.linkedin.com/in/omkar-hokarne-tedx",
      instagram: "https://www.instagram.com/omkarhokarne_"
    }
  },
  {
    name: "Laxmikant Chaudhari",
    role: "Co Organizer",
    image: defaultUserAvatar,
    bio: "Serving as Co-Organizer, Laxmikant spearheads cross-departmental operations, event architecture, and speaker coordination to deliver an inspiring and seamless conference experience.",
    social: {
      linkedin: "https://www.linkedin.com/in/laxmikant-chaudhari-tedx",
      instagram: "https://www.instagram.com/laxmikant_chaudhari_"
    }
  },
  {
    name: "Afaan Shaikh",
    role: "Treasurer",
    image: defaultUserAvatar,
    bio: "As Treasurer, Afaan directs financial administration, strategic resource allocations, and budget governance, ensuring fiscal strength and production viability for TEDxPVGCOET 2026.",
    social: {
      linkedin: "https://www.linkedin.com/in/afaan-shaikh-tedx",
      instagram: "https://www.instagram.com/afaan_shaikh_"
    }
  }
];

const teamImages = [
  { id: "organisers", src: orgImg, alt: "Organisers", teamKey: "organizers-team" },
  { id: "dnp", src: dnpImg, alt: "Design and Production", teamKey: "design-team" },
  { id: "lno", src: lnoImg, alt: "Logistics and Operations", teamKey: "logistics-team" },
  { id: "editorial", src: ediImg, alt: "Editorial", teamKey: "editorial-team" },
  { id: "fns", src: fnsImg, alt: "Finance and Sponsorship", teamKey: "finance-team" },
  { id: "mnm", src: mnmImg, alt: "Media and Marketing", teamKey: "media-team" },
  { id: "curation", src: curImg, alt: "Curation", teamKey: "curation-team" },
  { id: "technical", src: techImg, alt: "Technical", teamKey: "technical-team" }
];

const DustParticles = () => {
  const particles = Array.from({ length: 40 });
  return (
    <div className="dust-container">
      {particles.map((_, i) => (
        <div
          key={i}
          className="dust-particle"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animationDuration: `${12 + Math.random() * 20}s`,
            animationDelay: `-${Math.random() * 20}s`,
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            opacity: Math.random() * 0.4 + 0.1
          }}
        ></div>
      ))}
    </div>
  );
};

const NewTeam = () => {
  const imageRefs = useRef([]);
  const [expandedTeamId, setExpandedTeamId] = useState(null);
  const [expandedMemberName, setExpandedMemberName] = useState(null);
  const [animatedTeams, setAnimatedTeams] = useState({});

  useEffect(() => {
    // Capture ref value into local variable for cleanup
    const currentRefs = imageRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const teamId = entry.target.getAttribute("data-team-id");
            if (teamId) {
              setAnimatedTeams((prev) => ({ ...prev, [teamId]: true }));
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    currentRefs.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentRefs.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleToggleTeam = (teamId, index) => {
    if (teamId !== "organisers") return; // For now, only the first image

    if (expandedTeamId === teamId) {
      setExpandedTeamId(null);
      setExpandedMemberName(null);
    } else {
      setExpandedTeamId(teamId);
      setExpandedMemberName(null); // Keep info cards small at first
      setTimeout(() => {
        const el = imageRefs.current[index];
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  const handleSelectMember = (memberName) => {
    setExpandedMemberName((prev) => (prev === memberName ? null : memberName));
  };

  return (
    <div className="new-committee-page" id="page-top">
      <Helmet defer={false}>
        <title>Committee | TEDxPVGCOET</title>
      </Helmet>

      {/* Desktop Background */}
      <div
        className="new-committee-bg-fixed bg-desktop-view"
        style={{ backgroundImage: `url("${bgDesktop}")` }}
      >
        <div className="bg-overlay"></div>
      </div>

      {/* Mobile Background */}
      <div
        className="new-committee-bg-fixed bg-mobile-view"
        style={{ backgroundImage: `url("${bgMobile}")` }}
      >
        <div className="bg-overlay"></div>
      </div>

      {/* Scroll gradient overlay (dark at top, fades out as you scroll) */}
      <div className="new-committee-scroll-fade"></div>

      {/* Atmospheric floating dust */}
      <DustParticles />

      {/* Hero section */}
      <section className="new-committee-hero">
        <h1 className="hero-text animate-text">
          <span className="hero-line1">The pieces that</span><br />
          <span className="hero-line2">make the whole</span>
        </h1>
      </section>

      {/* Team Images Section */}
      <section className="new-committee-list">
        {teamImages.map((team, index) => {
          const isOrganizers = team.id === "organisers";
          const isExpanded = expandedTeamId === team.id;
          const isAnimated = !!animatedTeams[team.id];

          return (
            <div
              key={team.id}
              data-team-id={team.id}
              className={`new-committee-img-container ${
                isOrganizers ? "interactive-team-container" : ""
              } ${isAnimated ? "animate-fade-in" : ""} ${
                isExpanded ? "is-showcase-expanded" : ""
              }`}
              ref={(el) => (imageRefs.current[index] = el)}
            >
              {/* Image Frame Wrapper */}
              <div
                id={isOrganizers ? "team-organisers-frame" : undefined}
                className={`team-frame-wrapper ${
                  isOrganizers ? "clickable-frame" : ""
                }`}
                onClick={() => isOrganizers && handleToggleTeam(team.id, index)}
                role={isOrganizers ? "button" : undefined}
                tabIndex={isOrganizers ? 0 : undefined}
                onKeyDown={(e) => {
                  if (isOrganizers && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    handleToggleTeam(team.id, index);
                  }
                }}
                aria-expanded={isExpanded}
              >
                <img
                  src={team.src}
                  alt={team.alt}
                  className={`new-committee-img ${
                    isExpanded ? "full-color-expanded" : ""
                  }`}
                  loading="lazy"
                />
              </div>

              {/* Transformed Member Information Section (Implicit part of design) */}
              {isOrganizers && isExpanded && (
                <div
                  className="showcase-members-panel"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="members-panel-header">
                    <div className="panel-kicker">EXECUTIVE LEADERSHIP</div>
                    <h2 className="panel-title">Team Organizers</h2>
                    <p className="panel-subtitle">
                      Click any member card to expand their full profile, details, and socials.
                    </p>
                  </div>

                  {/* Compact Info Cards (Small at first) */}
                  <div className="compact-members-grid">
                    {organizersMembers.map((member) => {
                      const isMemberExpanded = expandedMemberName === member.name;
                      const avatarSrc = member.image || defaultUserAvatar;
                      const memberCardId = `member-card-${member.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;

                      return (
                        <div
                          key={member.name}
                          id={memberCardId}
                          className={`member-card-compact ${
                            isMemberExpanded ? "is-selected-card" : ""
                          }`}
                          onClick={() => handleSelectMember(member.name)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              handleSelectMember(member.name);
                            }
                          }}
                          aria-expanded={isMemberExpanded}
                        >
                          <div className="compact-avatar-wrap">
                            <img
                              src={avatarSrc}
                              alt={member.name}
                              className="compact-avatar"
                            />
                            {isMemberExpanded && (
                              <span className="avatar-active-ring"></span>
                            )}
                          </div>

                          <div className="compact-info">
                            <h4 className="compact-name">{member.name}</h4>
                            <span className="compact-role">{member.role}</span>
                            <span className="compact-action-hint">
                              {isMemberExpanded ? (
                                <>
                                  Active Profile <FaChevronUp className="hint-arrow" />
                                </>
                              ) : (
                                <>
                                  View Details <FaChevronDown className="hint-arrow" />
                                </>
                              )}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Big Information Tab (Expands when a member is clicked) */}
                  {expandedMemberName && (() => {
                    const activeMember = organizersMembers.find(
                      (m) => m.name === expandedMemberName
                    );
                    if (!activeMember) return null;

                    const activeAvatar = activeMember.image || defaultUserAvatar;
                    const activeBio =
                      activeMember.bio ||
                      "Core leadership member of TEDxPVGCOET 2026 driving excellence, collaboration, and inspiring ideas.";

                    return (
                      <div className="member-big-tab-container" id="member-big-info-tab">
                        <button
                          id="big-tab-close-btn"
                          className="big-tab-close-btn"
                          onClick={() => setExpandedMemberName(null)}
                          aria-label="Collapse Details"
                          title="Collapse Details"
                        >
                          <FaTimes />
                        </button>

                        <div className="big-tab-inner">
                          <div className="big-tab-avatar-col">
                            <div className="big-tab-avatar-frame">
                              <img
                                src={activeAvatar}
                                alt={activeMember.name}
                                className="big-tab-avatar"
                              />
                            </div>
                            <div className="big-tab-tag">TEDxPVGCOET 2026</div>
                          </div>

                          <div className="big-tab-content-col">
                            <div className="big-tab-department-tag">
                              ORGANIZERS ROSTER • CORE DESK
                            </div>
                            <h3 className="big-tab-name">{activeMember.name}</h3>
                            <div className="big-tab-role-badge">
                              {activeMember.role}
                            </div>

                            <p className="big-tab-bio">{activeBio}</p>

                            <div className="big-tab-actions">
                              {activeMember.social?.linkedin && (
                                <a
                                  href={activeMember.social.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="social-btn linkedin-btn"
                                >
                                  <FaLinkedin className="btn-icon" />
                                  <span>LinkedIn</span>
                                </a>
                              )}
                              {activeMember.social?.instagram && (
                                <a
                                  href={activeMember.social.instagram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="social-btn instagram-btn"
                                >
                                  <FaInstagram className="btn-icon" />
                                  <span>Instagram</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          );
        })}
      </section>

      <FooterSection />
    </div>
  );
};

export default NewTeam;
