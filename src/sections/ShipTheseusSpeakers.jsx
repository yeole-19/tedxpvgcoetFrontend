import React from "react";
import "./ShipTheseusSpeakers.css";
import speaker01 from "../assets/shipOfThesus/speakers/speaker-01.webp";
import speaker02 from "../assets/shipOfThesus/speakers/speaker-02.webp";
import speaker03 from "../assets/shipOfThesus/speakers/speaker-03.webp";
import speaker04 from "../assets/shipOfThesus/speakers/speaker-04.webp";
import speaker05 from "../assets/shipOfThesus/speakers/speaker-05.webp";
import speaker06 from "../assets/shipOfThesus/speakers/speaker-06.webp";
import speaker07 from "../assets/shipOfThesus/speakers/speaker-07.webp";
import speaker08 from "../assets/shipOfThesus/speakers/speaker-08.webp";

const speakers = [
  {
    name: "Sukrut Deo",
    title: "Theatre & Comedy",
    image: speaker01,
    trimSideBars: true,
  },
  {
    name: "Shama Bhate",
    title: "Kathak Exponent",
    image: speaker02,
    trimSideBars: true,
  },
  { name: "Sanskriti Balgude", title: "Arts & Culture", image: speaker03 },
  {
    name: "Shruti Kotwal",
    title: "Sports",
    image: speaker04,
    trimSideBars: true,
  },
  {
    name: "Lt. Cdr. Nikhil Kumar Chandrakala",
    title: "Armed Forces",
    image: speaker05,
    trimSideBars: true,
  },
  {
    name: "Parimal Phadke",
    title: "Bharatanatyam Virtuoso",
    image: speaker06,
    trimSideBars: true,
  },
  {
    name: "Dr. Ravinder Singal",
    title: "Civil Services",
    image: speaker07,
    trimSideBars: true,
  },
  {
    name: "Dr. Satilal Patil",
    title: "Science & Entrepreneurship",
    image: speaker08,
  },
];

const ShipTheseusSpeakers = () => (
  <section
    className="theseus-speakers"
    aria-labelledby="theseus-speakers-title"
  >
    <header className="theseus-speakers__header">
      <h2 className="theseus-speakers__title" id="theseus-speakers-title">
        <span>MEET THE</span>
        <span>SPEAKERS</span>
      </h2>
    </header>
    <div className="theseus-speakers__grid">
      {speakers.map((speaker) => (
        <article className="theseus-speakers__card" key={speaker.name}>
          <div className="theseus-speakers__photo">
            <p className="theseus-speakers__category">{speaker.title}</p>
            {speaker.trimSideBars ? (
              <div className="theseus-speakers__image-frame theseus-speakers__image-frame--trimmed">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ) : (
              <img
                src={speaker.image}
                alt={speaker.name}
                loading="lazy"
                decoding="async"
              />
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default ShipTheseusSpeakers;
