# Team-3-
Team 3 Hackathon 
# Team-3-

Run & Brunch Project Documentation
▪ README
▪ AI-usage document
▪ Kanban layout
▪ User stories
▪ Testing documentation
▪ Deployment guide
You can copy/paste these into separate files and tweak names/details.



1. README.md (Project Overview)



# Run & Brunch - Active Days in the West Midlands


## Overview
Run & Brunch is a one-page interactive web application that helps users discover
runs, walks, brunch meetups, and family activities across the West Midlands.
Users can:
- Filter events by difficulty and time of day
- View event cards with details (location, tags, difficulty)
- Sign up for tailored suggestions via a simple form



***
## Learning Outcomes Mapping
- **LO1:** One-page interactive app using HTML, CSS, and JavaScript with focus on UX,
accessibility, and DOM manipulation.

- **LO2:** Tested and validated through HTML/CSS validation, manual testing, and
screenshots.

- **LO3:** Deployed to a cloud platform (e.g., Netlify, GitHub Pages, or Vercel).

- **LO4:** Maintainable structure with clear documentation, folder organization, and
comments.

- **LO5:** Front-end interactivity implemented using core JavaScript and DOM manipulation.

- **LO6:** AI tools leveraged for planning, code generation, debugging, and documentation.



***
## Features
- Dark, high-contrast UI
- Responsive event grid
- Filter by difficulty (beginner, intermediate, advanced)
- Filter by time of day (morning, afternoon, evening)
- Dynamic event cards rendered via JavaScript
- Sign-up form with tailored confirmation message
- Smooth scrolling navigation


***
## Tech Stack
- **HTML5** - Structure and semantics
- **CSS3** - Layout, styling, responsive design
- **JavaScript (ES6+)** - DOM manipulation, filtering, form handling
***


How to Run Locally
1. Clone the repository:
git clone <your-repo-url>
cd <your-repo-folder>
2. Open index.html in your browser:
▪ Double-click index.html, or
▪ Use a local server (e.g., VS Code Live Server)


How to Deploy
▪ GitHub Pages:
▪ Push code to GitHub
▪ Enable Pages from Settings → Pages
▪ Netlify/Vercel:
▪ Connect your GitHub repo
▪ Select index.html as entry point
▪ Deploy and test the live URL
Testing
▪ HTML validation via W3C Validator
▪ CSS validation via W3C CSS Validator
▪ Manual testing of filters and form
▪ Accessibility checks (keyboard navigation, contrast)
▪ Screenshots captured at key stages


Team
▪ Team 3: Jasmeen, Sangijta, Evan, Jamie
***
## 2. AI-usage.md (AI Documentation)
```markdown

# AI Usage Documentation
This document explains how AI tools were used during the development of
the Run & Brunch web application.

***
## Planning
- Brainstormed project ideas (runs, brunch, kids activities, health focus).
- Refined concept into a one-page interactive app aligned with learning outcomes.
- Generated user stories and feature list.

***
## Design & Structure
- Suggested layout: hero, filters, events, sign-up, footer.
- Proposed folder structure and naming conventions.
- Recommended dark theme color palette (deep blue + offset yellow).

***
## Code Generation
AI assisted with:
- Initial HTML structure (sections, semantic tags).
- CSS for dark theme, responsive grid, and form styling.
- JavaScript for:
 - Event data structure
 - Filter logic
 - Dynamic card rendering
 - Form handling and confirmation message
 - Smooth scrolling

All AI-generated code was:
- Reviewed by the team
- Tested and debugged
- Modified to fit project requirements
***


3. Kanban Board Layout (for Trello/Jira/Notion)
You can set this up in Trello with four columns:
Columns:
▪ Backlog
▪ In Progress
▪ Review
▪ Done


Example Cards:
▪ Backlog
▪ Define user stories
▪ Create wireframes
▪ Set up repo and folder structure
▪ Implement event data structure
▪ Build filter UI
▪ Implement event rendering
▪ Implement sign-up form
▪ Accessibility checks
▪ Testing & validation
▪ Deployment
▪ Documentation (README, AI-usage)
▪ In Progress
▪ Build HTML structure
▪ Style hero and header
▪ Implement filter logic
▪ Review
▪ JS filter behavior
▪ Form validation
▪ Responsive layout
▪ Done
▪ Event data created
▪ Initial layout complete

▪ Deployment live
You can take screenshots of the board at different stages to show process.
4. User Stories (for LO1 & LO6)

# User Stories
1. As a **beginner runner**, I want to filter events by difficulty so I can find runs that match
my level.
2. As a **parent**, I want to see family-friendly events so I can plan active days out with my
kids.
3. As a **busy professional**, I want to filter events by time of day so I can find activities that
fit my schedule.
4. As a **social runner**, I want to see events that include brunch or social meetups so I can
connect with others.
5. As a **new user**, I want to sign up with my email and preferences so I can receive
tailored suggestions.
6. As a **visitor**, I want the site to be easy to navigate and readable on mobile and desktop
devices.

5. Testing Documentation


# Testing & Validation
## HTML Validation
- Tool: W3C Markup Validation Service
- Action: Uploaded `index.html` and fixed any reported errors.
- Result: No critical validation errors.

## CSS Validation
- Tool: W3C CSS Validation Service
- Action: Uploaded `assets/css/style.css`.
- Result: Fixed invalid selectors or properties.

## JavaScript Testing
### Functional Tests
- **Filter events:**
 - Selected different difficulty and time combinations.
 - Verified that event cards update correctly.
- **No results case:**
 - Used filters that match no events.
 - Confirmed "No events match your filters." message appears.
- **Sign-up form:**
 - Tested required fields.
 - Tested invalid email formats.
 - Confirmed tailored message appears after submission.

### Console Checks
- Opened DevTools console.
- Ensured no uncaught errors.
- Used `console.log` during development to inspect data.

## Accessibility Testing
- Keyboard navigation:
 - Tabbed through links, buttons, and form fields.
- Contrast:
 - Verified text is readable against dark background.
- Labels:
 - Ensured form inputs have associated labels.

## Responsive Testing
- Used browser DevTools responsive mode.


6. Deployment Guide

# Deployment Guide
## Option 1: GitHub Pages
1. Push project to GitHub.
2. Go to `Settings → Pages`.
3. Select `Branch: main` and `/root` folder.
4. Save and wait for deployment.
5. Copy the live URL and test in browser.

## Option 2: Netlify
1. Create a Netlify account.
2. Click "New site from Git".
3. Connect your GitHub repository.
4. Use default build settings (no build step needed for static HTML).
5. Deploy and test the live URL.
6. Check:
 - `index.html` loads correctly.
 - CSS and JS paths are correct (`assets/css/style.css`, `assets/js/app.js`).
 - No console errors.

## Option 3: Vercel
1. Create a Vercel account.
2. Import your GitHub repository.
3. Use default settings for static site.
4. Deploy and test the live URL.

## Post-Deployment Checks
- Test filters and form on the live site.
- Confirm responsive behavior.
- Confirm HTTPS is active.
- Take screenshots of the live site for documentation.

