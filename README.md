# League Champions Search Feature Project

Welcome to the League Champions Search Feature Project! In this project, you will enhance an existing web application by adding a search feature to help users find League of Legends champions easily. Follow the instructions below to get started and complete the project.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Task Instructions](#task-instructions)
- [Additional Guidance](#additional-guidance)
- [Checklist](#checklist)
- [Submission](#submission)

## Project Overview

This project involves adding a search feature to a web application that displays a list of League of Legends champions. Users should be able to type in the search bar to filter champions by name, with an autocomplete feature activating after 3 letters are entered. Clicking on a suggested champion should navigate to the champion's details page.

## Getting Started

1. **Fork the Repository:**
   - Fork the repository from [this link](https://github.com/jordanburger22/league-data.git) to create a personal copy in your GitHub account.

2. **Clone Your Fork:**
   - Clone your forked repository to your local machine using the following command:
     ```bash
     git clone https://github.com/your-username/league-data.git
     ```

3. **Remove the .git Folder:**
   - To start fresh without the original repository's Git history, remove the `.git` folder:
     ```bash
     cd league-data
     rm -rf .git
     ```

4. **Install Dependencies:**
   - Install the necessary dependencies:
     ```bash
     npm install
     ```

5. **Start the Development Server:**
   - Run the development server to see the application in action:
     ```bash
     npm run dev
     ```

## Task Instructions

1. **Add the Search Feature:**
   - Implement a search bar in the `ChampionList` component.
   - The search bar should have an autocomplete feature that activates after at least 3 letters are entered.
   - Clicking on a suggested champion should navigate to the champion's details page.

2. **Styling:**
   - Style the search bar and autocomplete suggestions to match the existing design of the webpage.

3. **Testing:**
   - Test the search functionality to ensure it filters champions correctly and that the autocomplete feature works as intended.

## Additional Guidance

While working on the project, you may find the following aspects useful:

- **Importing Fonts:** Ensure that the font used in the application matches the style of the existing design. You can refer to the existing styling for guidance.
- **Object Conversion:** You may need to convert objects from the database into arrays. Look into using `Object.values()` if you encounter such a scenario.
- **Tags for Filtering:** Ensure you extract and use tags correctly for the filtering options in the search bar.
- **Multiple CSS Files:** If the project uses multiple CSS files, make sure you understand how they are organized and applied. Ensure that your styles are added in the correct file and do not conflict with existing styles.
- **CSS Variables:** Look for any CSS variables used in the project. They are often defined in a central CSS file (e.g., styles.css) and used throughout the application. Use these variables to maintain consistency in design and styling.

## Checklist

To help you manage your tasks, we've provided a checklist. Be sure to:

- Complete each item in the `CHECKLIST.md` file.
- Style the search feature to match the existing webpage design.
- Test the search functionality thoroughly.


By following these instructions, you will enhance the functionality of the web application and gain valuable experience in implementing search features and working with existing codebases.

Good luck, and happy coding!