const getHands = `query hand($deckId: String){
    hands(deckId: $deckId){
        deckId
        dateCreated
        id
        likeTotal
        cards {
            front
            back
            id
            userId
        }
    }
    
}`

const getHandById = `query hand($handId: String, $userId: String){
    hand(handId: $handId){
        deckId
        dateCreated
        id
        likeTotal
        defaultCard
        commentTotal
        cards {
            front
            back
            id
            dateCreated
            userId
        }
        comments {
            id
            content
            userId
            dateCreated
            subComments {
                userId
                content
                dateCreated
            }
        }
        reviews(userId: $userId, handId: $handId) {
            review
            dateCreated
        }
    }
    
}`


export { getHands, getHandById }