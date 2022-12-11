import './Card.css'

const Card = ({cardProps}) => {
    return(
        <div
            className={`ui-card ${cardProps.cssClass}`}
        >
            <div
                className="card-title"
            >
                {cardProps.title}
            </div>
            <div
                className="card-body"
            >
                {cardProps.data.map((item) => {
                    return(
                        <p>{`* ${item.name} ${item.quantity} pcs `}</p>
                    )
                })}
            </div>
        </div>
    )
}
export default Card