import React from 'react';

import './style.css';

// eslint-disable-next-line import/no-unresolved, import/extensions

export default function Home() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/dashboard`}>Dashboard</a>
            </li>
            <li>
              <a href={`/new`}>Novo funcionário</a>
            </li>
            <li>
              <a href={`/list`}>Listar funcionários</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}