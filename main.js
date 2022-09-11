var affirmationList = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.'
]

var mantraList = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don\u2019t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.'
]
var favoriteList = []
var favoriteListWithRadio = []
var currentMessage
var list

var mantraRadio = document.querySelector('#mantra')
var affirmationRadio = document.querySelector('#affirmation')
var receiveMessageButton = document.querySelector('#receive-message')
var logoSection = document.querySelector('#logo-space')
var favoriteButton = document.querySelector('#add-favorite-button')
var viewFavoritesButton = document.querySelector('#view-favorite-button')
var mainPageView = document.querySelector('.main-page-view')
var favoritesPageView = document.querySelector('.favorites-page-view')
var homeButton = document.querySelector('.home-button')

mantraRadio.addEventListener('click', selectMantra)
affirmationRadio.addEventListener('click', selectAffirmation)
receiveMessageButton.addEventListener('click', generateMessage)
favoriteButton.addEventListener('click', addToFavoriteList)
viewFavoritesButton.addEventListener('click', displayFavoritesview)
homeButton.addEventListener('click', displayMainPageView)
// favoritesPageView.addEventListener('click', selectMessage)
// deleteButton.addEventListener('click', deleteMessage)
// favoritesPageView.addEventListener('click', deleteMessage)
function selectMantra () {
  return list = mantraList
}

function selectAffirmation () {
  return list = affirmationList
}

function generateMessage () {
  var indexNumber = Math.floor(Math.random() * list.length)
  currentMessage = list[indexNumber]
  logoSection.innerHTML = ''
  logoSection.innerHTML += `<p id='message-text'>${currentMessage}</p>`
  favoriteButton.classList.remove('hidden')
  return logoSection.innerHTML
}

function addToFavoriteList () {
  favoriteList.push(currentMessage)
  return favoriteList
}

function displayFavoritesview () {
  mainPageView.classList.add('hidden')
  favoritesPageView.classList.remove('hidden')
  homeButton.classList.remove('hidden')

  favoritesPageView.innerHTML = ''
  for (var i = 0; i < favoriteList.length; i++) {
    favoritesPageView.innerHTML += `
    <div class='message-space' id= '${favoriteList[i]}'>
      <button class= 'delete-button' id= 'delete-buttons'>Delete</button>
      <p class='message-space'>${favoriteList[i]}</p>
    </div>`

    // favoriteListWithRadio.push(favoritesPageView.innerHTML)
  }
  deleteButton = document.querySelectorAll('#delete-buttons')
  console.log(deleteButton)
  deleteButton.addEventListener('click', deleteMessage)
  // console.log(favoriteListWithRadio)
  return favoritesPageView.innerHTML
}

function displayMainPageView () {
  mainPageView.classList.remove('hidden')
  favoritesPageView.classList.add('hidden')
  homeButton.classList.add('hidden')
  deleteButton.classList.add('hidden')
}

// function selectMessage () {
// event.target.parentNode.id
// }
function deleteMessage () {
  for (var i = 0; i < favoriteList.length; i++) {
    console.log('event.target.parentNode: ', event.target.parentNode.id)
    console.log('favoriteList[i]: ', favoriteList[i])
    if (favoriteList[i] === event.target.parentNode.id) {
      console.log('hello')
      favoriteList.splice(i, 1)
    }
    // displayFavoritesview()
  }
}
