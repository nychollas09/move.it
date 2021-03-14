import React from "react";
import styles from "../styles/components/completed-challenges.module.css";

const CompletedChallenges: React.FC = () => {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>01</span>
    </div>
  );
};

export default CompletedChallenges;
