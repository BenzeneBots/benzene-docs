import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Safety',
    description: (
      <>
          Robotics safety demands PPE, lockout/tagout, regular inspections, and comprehensive training for personnel and machinery protection.
      </>
    ),
  },
    {
        title: 'Intro to Github',
        description: (
            <>
                To learn more about Git and Github. Refer to his <a href={"https://www.youtube.com/watch?v=iv8rSLsi1xo"}>video</a>
            </>
        ),
    },
  {
    title: 'Quick Links',
    description: (
      <>
          <a href={"https://github.com/BenzeneBots"}>Benzenebots Github</a>
          <hr></hr>
          <a href={"https://benzenebots.com/"}>Benzenebots Site</a>
      </>
    ),
  },

];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">

      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
