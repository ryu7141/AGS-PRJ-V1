console.log("Hello world");
function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age >= 0) return age;
  else return `Impossible year. Year needs to be less or equal ${currentYear}`;
}

const age1 = calcFactAge(2024);
console.log(age1);
const calcAge2 = (year) => new Date().getFullYear() - year;
console.log(calcAge2(2020));

const fact = ["Seoul is captial of Korea", 1948, true];
console.log(fact);
const [text, createdIn, isCorrect] = fact;
console.log(text);
console.log(createdIn);
console.log(isCorrect);

const factobj = {
  text: "Seoul is captial of Korea",
  createdIn: 1948,
  isCorrect: true,
  creatSummary: function () {
    return `The fact "${this.text}" is created "${this.createdIn}" `;
  },
};

console.log(factobj.creatSummary());

const newArry = [2, 4, 8].map((el) => el * 10);
console.log(newArry);

// Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch("https://enbltacwdnhcfazlhjky.supabase.co", {
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuYmx0YWN3ZG5oY2Zhemxoamt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEyNTMwNDYsImV4cCI6MjA0NjgyOTA0Nn0.3U2GM_OYVZ8uhKhbLZiSOpBXu8xleHXi00_QO_OOD5QeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxma2ZteXB5YW5ra3J0Y3lsbGVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk2NTA0MzAsImV4cCI6MTk4NTIyNjQzMH0.bo4nfBxzfsAIcqahzmAqtzHOqsrmY5cdBv684eOY5FI",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuYmx0YWN3ZG5oY2Zhemxoamt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEyNTMwNDYsImV4cCI6MjA0NjgyOTA0Nn0.3U2GM_OYVZ8uhKhbLZiSOpBXu8xleHXi00_QO_OOD5QeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxma2ZteXB5YW5ra3J0Y3lsbGVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk2NTA0MzAsImV4cCI6MTk4NTIyNjQzMH0.bo4nfBxzfsAIcqahzmAqtzHOqsrmY5cdBv684eOY5FI",
    },
  });
  const data = await res.json();
  console.log(data);
  // const filteredData = data.filter((fact) => fact.category === "technology");

  // createFactsList(data);
}
