const searchBar = document.getElementById('search-bar');
const info = document.querySelector('.info');
const additionalInfo = document.querySelector('.additional-info');
const loadingIcon = document.querySelector('.lds-ripple');
const weatherDiv = document.querySelector('.weather');
const invalidDiv = document.getElementById('invalid');

document.querySelector('button').addEventListener('click', processCityData);

searchBar.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    processCityData();
  }
});

async function processCityData() {
  try {
    const data = await getCityData(searchBar.value);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

async function getCityData(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f77938d6eb4c23e6d29e0644ea912c64&units=metric`);
  if (!response.ok) {
    throw new Error();
  }
  return await response.json();
}
