import React from 'react';

const AboutPage = (): JSX.Element => {
  return (
    <section className="about">
      <h2 className="about__heading">The Rick and Morty API</h2>
      <p className="about__text">
        The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and Morty. You will have
        access to about hundreds of characters, images, locations and episodes. The Rick and Morty API is filled with
        canonical information as seen on the TV show.
      </p>
    </section>
  );
};

export default AboutPage;
