import React from 'react'

const Example = () => {
  return (
    <div className="flex h-screen space-x-10 px-8 py-8 bg-white">
      <div className="sp-4 space-x-3 px-11 py-5">


        <button
            type="button"
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Button text
        </button>
        <button
            type="button"
              className="border focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 inline-flex items-center rounded-md px-3 py-2 text-white font-medium text-sm leading-4 bg-teal-300 hover:bg-indigo-700 focus:outline-none shadow-sm"
        >
          Button tex
        </button>
        <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Button text
        </button>
        <button
            type="button"
            className="border focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 inline-flex items-center rounded-md px-7 py-2 text-white font-medium text-4xl bg-indigo-600 hover:bg-indigo-700 focus:outline-none shadow-sm pb-4"
        >
          Button text
        </button>
        <button
            type="button"
            className="border focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 inline-flex items-center rounded-md px-6 py-3 text-white font-medium text-base bg-purple-500 hover:bg-indigo-700 focus:outline-none shadow-sm"
        >
          Button text
        </button>
      </div>
      <aside className="overflow-y-auto flex justify-between flex-col flex-shrink-0 w-64 rounded-lg px-4 py-4 text-blue-gray-700 bg-gray-50 shadow-xl">
        <nav>
          <ul className="space-y-6 mb-8 pt-0 px-11 py-4 pl-2">
            <Row icon="home">Dashboard</Row>
            <Row icon="team">Team</Row>
            <Row icon="calendar" count={4}>
              Calendar
            </Row>
            <Row icon="docs" count={5}>
              Documents
            </Row>
            <Row icon="reports">Reports</Row>
          </ul>
          <span className="tracking-wider text-blue-gray-500 block pl-3 py-2 text-gray-600 font-bold text-3xl uppercase text-center">
          Projects
        </span>
          <ul className="px-2 pl-3">
            <Project>Website redesign</Project>
            <Project>Grapqhl API</Project>
            <Project>Customer migration guide</Project>
          </ul>
        </nav>
        <div className="flex justify-between items-center ml-3">
          <div className="flex items-center space-x-3">
            <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=120&q=80"
                alt=""
                className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-medium leading-5">Dianna </span>
              <span className="text-blue-gray-500 text-sm hover:text-indigo-500 focus:text-indigo-500">
              View Profile
            </span>
            </div>
          </div>
          <button className="group rounded p-1 px-2 py-2 text-blue-gray-400 hover:bg-gray-100 focus:bg-gray-100">
          <span className="transform group-hover:rotate-45 transition-transform duration-150 ease-in">
            {icons.gear}
          </span>
          </button>
        </div>
      </aside>

      <aside className="overflow-y-auto text-blue-gray-50 bg-blue-gray-800 flex justify-between flex-col flex-shrink-0 w-96 rounded-xl ml-28 px-4 py-4 bg-teal-100 shadow-xl pr-15">
        <nav>
          <ul className="pt-0 py-0 mb-8">
            <RowDark icon="home">Dashboard</RowDark>
            <RowDark icon="team">Team</RowDark>
            <RowDark icon="calendar" count={4}>
              Calendar
            </RowDark>
            <RowDark icon="docs" count={5}>
              Documents
            </RowDark>
            <RowDark icon="reports">Reports</RowDark>
          </ul>
          <span className="tracking-wider block pl-3 py-2 text-blue-gray-300 text-sm uppercase">
          Projects
        </span>
          <ul className="px-2 pl-3">
            <ProjectDark>Website redesign</ProjectDark>
            <ProjectDark>Grapqhl API</ProjectDark>
            <ProjectDark>Customer migration guide</ProjectDark>
          </ul>
        </nav>
        <div className="flex justify-between items-center ml-3">
          <div className="flex items-center space-x-3">
            <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=120&q=80"
                alt=""
                className="pl-0 w-10 h-10 rounded-full mt-3 px-0"
            />
            <div className="flex flex-col">
              <span className="font-medium">Dianna </span>
              <span className="text-blue-gray-300 hover:text-blue-400 focus:text-indigo-500 text-sm">
              View Profile
            </span>
            </div>
          </div>
          <button className="group rounded p-1 px-2 py-2 text-blue-gray-400 hover:bg-blue-gray-900 focus:bg-blue-gray-900 focus:outline-none">
          <span className="transform group-hover:rotate-45 transition-transform duration-150 ease-in">
            {icons.gear}
          </span>
          </button>
        </div>
      </aside>

      <main></main>
    </div>
  );
}

const Row = (props) => {
  return (
    <li>
      <a
          href="/"
          className="rounded text-blue-gray-600 flex justify-between items-center mb-7 pr-0 pl-3 px-9 py-4 leading-6 bg-purple-500 hover:bg-gray-100 focus:bg-gray-100 transition-colors duration-150 ease-in"
      >
        <div className="flex items-center space-x-2">
          <span className="text-blue-gray-400">{icons[props.icon]}</span>
          <span className="mr-2 text-gray-50">{props.children}</span>
        </div>
        {props.count && (
            <span className="inline-flex justify-center items-center w-7 h-6 rounded-2xl text-xs bg-orange-300 mr-4">
          {props.count}
        </span>
        )}
      </a>
    </li>
  );
}

const RowDark = (props) => {
  return (
    <li>
      <a
          href="/"
          className="flex justify-between items-center rounded space-x-2 px-2 py-4 text-blue-gray-600 hover:bg-blue-gray-900 focus:bg-blue-gray-900 transition-colors duration-150 ease-in pr-0"
      >
        <div className="flex items-center space-x-2">
          <span className="text-blue-gray-400">{icons[props.icon]}</span>
          <span className="text-cool-gray-900">{props.children}</span>
        </div>
        {props.count && (
            <span className="inline-flex justify-center items-center w-7 h-6 rounded-xl text-xs bg-blue-gray-900 text-blue-gray-200">
          {props.count}
        </span>
        )}
      </a>
    </li>
  );
}

const Project = (props) => {
  return (
    <a
        href="/"
        className="text-blue-gray-500 block py-2 hover:text-indigo-500 focus:text-indigo-500 border-4 shadow-2xl bg-indigo-50 rounded-2xl"
    >
      {props.children}
    </a>
  );
}

const ProjectDark = (props) => {
  return (
    <a
        href="/"
        className="text-blue-gray-50 hover:text-blue-400 block py-2 text-purple-600 focus:text-indigo-500 ml-5"
    >
      {props.children}
    </a>
  );
}

export default Example

const icons = {
  home: (
      <svg
          className="w-6 h-6 text-purple-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          className="bg-orange-500" />
      </svg>
  ),
  team: (
      <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          className="text-purple-50" />
      </svg>
  ),
  calendar: (
      <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          className="text-purple-200" />
      </svg>
  ),
  docs: (
      <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          className="text-purple-100" />
      </svg>
  ),
  reports: (
      <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
  ),
  gear: (
      <svg
          className="w-5 h-5 ml-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
  ),
}
