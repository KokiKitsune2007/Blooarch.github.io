'use strict';

function getUserProfileData(username) {
  const url = `https://api.github.com/users/${username}`;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      displayUserProfileData(response);
    })
    .catch((error) => console.log(error));
}
function getUserRepoData(username) {
  const url = `https://api.github.com/users/${username}/repos`;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      displayUserRepoData(response);
    })
    .catch((error) => console.log(error));
}

function displayUserRepoData(data) {
  let code = '';
  let contents = [
    'name',
    'html_url',
    'description',
    'stargazers_count',
    'watchers_count',
    'language',
    'forks_count',
    'open_issues_count',
  ];
  let text = [
    'Name',
    'URL',
    'Description',
    'Stars',
    'Watchers Count',
    'Language',
    'Forks',
    'Open Issues',
  ];
  let icons = [
    '<i class="fa-solid fa-pencil"></i>',
    '<i class="fa-solid fa-link"></i>',
    '<i class="fa-solid fa-book-open"></i>',
    '<i class="fa-solid fa-star"></i>',
    '<i class="fa-solid fa-eye"></i>',
    '<i class="fa-solid fa-code"></i>',
    '<i class="fa-solid fa-code-fork"></i>',
    '<i class="fa-solid fa-bug"></i>',
  ];
  for (let index = 0; index < data.length; index++) {
    if (data[index]['fork'] === false && data[index]['private'] === false) {
      let d = data[index];
      code += '<div class="repo_card">';
      for (let i = 0; i < contents.length; i++) {
        if (contents[i] === 'html_url') {
          code += `${icons[i]} <span class="text-blue">${
            text[i]
          }: </span> <a href="${d[contents[i]]}" target="_blank" class="link">${
            d[contents[i]]
          }</a> <br><br>`;
        } else {
          code += `${icons[i]} <span class="text-blue">${text[i]}: </span> ${
            d[contents[i]]
          } <br><br>`;
        }
      }
      code += '</div>';
    }
  }
  document.querySelector('#repos_data').innerHTML = code;
}
getUserProfileData('KokiX333');
getUserRepoData('KokiX333');
