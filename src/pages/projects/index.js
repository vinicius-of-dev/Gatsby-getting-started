import { graphql, Link } from 'gatsby';
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

const Projects = ({ data }) => {

  const projects = data.projects.nodes;
  const contact = data.site.siteMetadata.contact;
  console.log(projects);

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {
            projects.map((project) => (
              <Link key={project.id} to={`/projects/${project.frontmatter.slug}`} >
                <section>
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </section>
              </Link>
            ))
          }
        </div>
        <p>
          Email me at {contact}
        </p>
      </div>
    </Layout>
  );
}

//export page query
export const query = graphql`
query MyQuery {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      frontmatter {
        slug
        stack
        title
        date
      }
    }
  }

  site {
    siteMetadata {
      contact
    }
  }
}
`;

export default Projects