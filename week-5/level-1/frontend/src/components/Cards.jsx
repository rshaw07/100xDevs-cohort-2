
export function Cards({cards}){
    return <div className="main">
        {cards.map(function(card){
            return <div className="card">
                <h1>{card.name}</h1>
                <p style={{
                    fontSize: 20
                }}>{card.description}</p>
                <h2>Interests</h2>
                {card.interests.map(function(interest){
                    return <p style={{
                        margin: 1,
                        marginLeft: 6
                    }}>{interest}</p>
                })}
                <button className="button" onClick={()=>{window.open(card.linkedin,"_blank")}}>LinkedIn</button>
                <button className="button" onClick={()=>{window.open(card.twitter,"_blank")}}>Twitter</button>
                <div>card id: {card._id}</div>
            </div>
        })}
    </div>
}