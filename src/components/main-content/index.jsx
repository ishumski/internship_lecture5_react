import React from 'react';

import './index.scss';

function Content() {
  return (
    <div className="main__content">
      <section className="main__content-top">
        <div className="main__content-top-box">
          <article className="main__content-top_left">
            <div></div>
          </article>
          <article className="main__content-top_right">
            <div></div>
            <div></div>
          </article>
        </div>
      </section>
      <section className="main__content-bottom">
        <div className="main__content-bottom-box">
          <article className="main__content-section">
            <div></div>
            <div></div>
          </article>
        </div>
        <div className="main__content-columns">
          <div className="column left">
            <div className="column-item"></div>
          </div>
          <div className="column center">
            <div className="column-item"></div>
          </div>
          <div className="column right">
            <div className="column-item"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Content
