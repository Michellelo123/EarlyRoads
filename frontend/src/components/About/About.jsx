import React from "react";
import styles from "./About.module.scss";
export default function About() {
  const aboutInfoCard = [
    {
      id: 1,
      icon: "",
      title: "Hard to find",
      description:
        "Entry-level roles buried with hundreds of roles. Maybe even hidden inside the description.",
    },
    {
      id: 2,
      icon: "",
      title: "The experience trap",
      description:
        "Most job listings ask for 2-3 years of experience for even junior roles. How? can you get expereicne if no one gives you a chance? How will our next generation get experience?",
    },
    {
      id: 3,
      icon: "",
      title: "Built for you",
      description:
        "Every single role on EarlyRoads are either internships, graduate position or a junior role - no filtering needed - that's the whole point",
    },
  ];

  const mapAbout = aboutInfoCard.map((item) => {
    return (
      <div key={item.id} className={styles.card}>
        <img src="#" alt="img" />
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
    );
  });

  return (
    <div className={styles.aboutBackground}>
      <div className={styles.about}>
        <h6>Why does EarlyRoads exist?</h6>
        <div className={styles.herodescrip}>
          <h2>
            Finding your first role shouldn't feel like
            <span> searching for a needle in a haystack</span>
          </h2>
          <p>
            You've spent years studying, You're ready to work. Suddenly all
            theset job websites are buried with hundreds of roles wanting
            someone with experience. The internships and grad roles are
            somewhere in there - probably embedded in the description, easy to
            miss after scrolling through 500 listings
          </p>
        </div>
        <div className={styles.motivationCards}>{mapAbout}</div>
        <p className={styles.ourBelief}>
          "We believe every graduate deserves a fair shot. Companies grow when
          they invest in new talen - and students grow when someone gives them
          the opportunity to learn from mentors/seniors and can prove themselves
        </p>
        
        </div>
        </div>
    // </div>
    // </div>
  );
}
