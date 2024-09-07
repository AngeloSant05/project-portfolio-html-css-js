async function fetchProfileData() {
   const url = 'https://raw.githubusercontent.com/AngeloSant05/project-portfolio-html-css-js/main/data/profile.json';
   const fetching = await fetch(url);
   return await fetching.json();
}