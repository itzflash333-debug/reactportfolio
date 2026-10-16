# Abubakar's Portfolio Website

This is a personal portfolio website built with React. It has a Home page, an
About page, and a Contact page. It also includes a light and dark theme, a live
clock, and a contact form.

This guide explains how the project is organized, how the main features work,
and how to make common changes.

## What you need

Install [Node.js](https://nodejs.org/) first. Node.js includes `npm`, which this
project uses to install packages and run commands.

Open a terminal in the `vite-project` folder before running the commands below.
For example, in PowerShell:

```powershell
cd C:\Users\StarLab\Desktop\reactassignment\vite-project
```

Install the project's packages once:

```bash
npm install
```

## Run the website

Start the development server:

```bash
npm run dev
```

Vite prints a local address, usually `http://localhost:5173`. Open that address
in your browser. Keep the terminal open while you work; Vite refreshes the page
when you save code changes.

To check the project before publishing, run:

```bash
npm run build
npm run lint
```

`build` checks that the app can be prepared for publishing. `lint` checks the
JavaScript for common mistakes.

## Project files

```text
vite-project/
├── public/
│   └── profile.jpg
├── src/
│   ├── component/
│   │   ├── aboutpage.jsx
│   │   ├── aboutpage.css
│   │   ├── contactform.jsx
│   │   ├── contactform.css
│   │   ├── homepage.jsx
│   │   └── homepage.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

- **`src/main.jsx`** starts the React app and attaches it to the page.
- **`src/App.jsx`** contains the shared header, navigation, footer, clock, theme
  button, and routes to the three pages.
- **`src/App.css`** styles the shared layout and includes the light and dark
  theme colors.
- **`src/index.css`** contains basic styles used throughout the app, such as the
  font and box sizing.
- **`src/component/`** contains each page and its own CSS file. JSX files hold
  what the page displays; matching CSS files control how that page looks.
- **`public/profile.jpg`** is the portrait shown on the Home page.
- **`index.html`** provides the browser tab title and page description.
- **`package.json`** lists the packages and the commands available through
  `npm`.

## How the pages work

The app uses React Router so visitors can move between pages without loading a
new website each time. The routes are in `src/App.jsx`:

- `/` displays the Home page.
- `/about` displays the About page.
- `/contact` displays the Contact page.

The navigation uses `NavLink` so the current page can be styled as active.
`Link` is used for links between pages.

Each page is a React component: a JavaScript function that returns JSX. JSX
looks a little like HTML, but it lets the page use JavaScript values too. For
example, the About page stores skills in an array and uses `.map()` to display
one list item for each skill.

## Change the text and photo

- Edit the greeting and introduction in `src/component/homepage.jsx`.
- Edit the biography and skills in `src/component/aboutpage.jsx`.
- Edit the contact page wording in `src/component/contactform.jsx`.
- Replace `public/profile.jpg` with your own photo, keeping the same filename.
  If you use a different filename, update the image's `src` in
  `src/component/homepage.jsx`.
- Change the browser tab title and description in `index.html`.

## Theme and clock

The theme button and clock are in `src/App.jsx`.

- The clock uses a React state value containing the current date and time. An
  effect updates it once per second and clears the timer when the component is
  removed.
- The selected theme is stored in the browser's `localStorage`, so the choice
  remains after a refresh.
- Theme colors are CSS variables in `src/App.css`. The dark theme changes those
  variables, and the rest of the styles use them for backgrounds, text, lines,
  and links.

## Contact form and email delivery

The form is in `src/component/contactform.jsx`. It asks for a name, email
address, and message. When the visitor selects **Send message**, the form:

1. Stops the browser's normal form submission.
2. Collects the field values.
3. Sends them to FormSubmit's AJAX endpoint for `itzflash333@gmail.com`.
4. Shows a sending, success, or error message.

FormSubmit requires the inbox owner to confirm its activation email before it
will deliver messages. The website cannot complete that confirmation for you.
A successful response from the service means it accepted the submission; it
does not guarantee that the message arrived in the inbox. Check the inbox and
spam folder, and complete FormSubmit's confirmation if this is the first use.

Because this is a browser-only React app, the FormSubmit address is visible in
the source code. Do not put private credentials or email service API secrets in
front-end code. A backend or serverless function is needed if you want to keep
email credentials private.

## Styling

The CSS is split so it is easier to find the styles for a particular area:

- `src/index.css`: basic page-wide styles.
- `src/App.css`: header, navigation, theme, footer, and shared buttons.
- `src/component/homepage.css`: Home page and portrait layout.
- `src/component/aboutpage.css`: About page and skills list.
- `src/component/contactform.css`: Contact page and form.

If you change the layout, check it at both desktop and mobile widths. The page
styles include media queries to rearrange the layout on smaller screens.

## Publish changes to GitHub

The GitHub remote is already configured for this project. After saving your
changes, open a terminal in `vite-project` and run:

```bash
git add .
git commit -m "Describe your changes"
git push
```

GitHub stores the project code. To make the website public on the internet,
you also need to deploy it with a hosting service that supports Vite, such as
GitHub Pages, Netlify, or Vercel.
