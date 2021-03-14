import React from "react";
import styles from "../styles/components/profile.module.css";

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/nychollas09.png" alt="Profile" />

      <div>
        <strong>Nichollas Falcão</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
