import dogs from './data.js'
import Dog from './Dogs.js'


const dogContainer = document.getElementById('dog')
let currentDogIndex = 0

function render(){
    const dogsData = dogs[currentDogIndex]
    const dog = new Dog(dogsData)
    setTimeout(() => dogContainer.innerHTML = dog.getDog(), 1000)
}

render()

function disLike(){
    dogs[currentDogIndex].hasBeenSwiped = true;
    currentDogIndex++;
    if (currentDogIndex >= dogs.length) {
        currentDogIndex = 0;
    }
    const disLike = document.getElementById('dislikeBadge')
    disLike.classList.toggle('hide')

    render()
}

function like(){
    dogs[currentDogIndex].hasBeenSwiped = true;
    dogs[currentDogIndex].hasBeenLiked = true;
    currentDogIndex++;
    if (currentDogIndex >= dogs.length) {
        currentDogIndex = 0;
    }
    const disLike = document.getElementById('likeBadge')
    disLike.classList.toggle('hide-like')

    render()
}


document.getElementById('btnX').addEventListener('click', disLike)
document.getElementById('btnLike').addEventListener('click', like)