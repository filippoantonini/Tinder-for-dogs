class Dog {
    constructor(data){
        Object.assign(this, data)
    }

    getDog(){
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        return `
                <img src="${avatar}" class="dog">
                <div class="text-info">
                    <h3>${name}, ${age}</h3>
                    <p>${bio}</p>
                </div>
                <img src="images/badge-like.png" id="likeBadge" class="badge-like hide-like">
                <img src="images/badge-nope.png" id="dislikeBadge" class="badge-nope hide">
                `
    }
}

export default Dog