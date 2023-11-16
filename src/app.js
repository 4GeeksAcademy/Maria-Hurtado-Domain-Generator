/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn-domain").addEventListener("click", () => {
    const domainsList = generateDomains();
    const domainsListHTML = domainsList
      .map(domainName => `<li>${domainName}</li>`)
      .join("");

    document.querySelector(
      "#domains-generated"
    ).innerHTML = `<ul>${domainsListHTML}</ul>`;
  });
};

function generateDomains() {
  let pronouns = ["the", "my", "your"];
  let adjectives = ["big", "awesome", ""];
  let nouns = ["rodeo", "club", "restaurant"];
  let domains = [".com", ".net", ".es"];
  let domainsGenerated = [];

  for (let pronoun = 0; pronoun < pronouns.length; pronoun++) {
    for (let adjective = 0; adjective < adjectives.length; adjective++) {
      for (let noun = 0; noun < nouns.length; noun++) {
        for (let domain = 0; domain < domains.length; domain++) {
          let domainName =
            pronouns[pronoun] +
            adjectives[adjective] +
            nouns[noun] +
            domains[domain];
          domainsGenerated.push(domainName);
        }
      }
    }
  }
  return domainsGenerated;
}