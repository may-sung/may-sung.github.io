import React from 'react';

import './style.scss';

const PageFooter = ({ author, githubUrl }) => (
  <>
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()}
        &nbsp;
        <a href={githubUrl}>{author}</a>
        &nbsp;powered by
        <a href="https://github.com/may-sung/may-sung.github.io">
          &nbsp;may-sung.github.io
        </a>
      </p>
    </footer>
  </>
);

export default PageFooter;
