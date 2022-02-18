


const SpotCard = ({ name, selected, onClick }) => {

    let nameOfClass;

    if (selected) {
        nameOfClass = selected
    } else {
        nameOfClass = "spotCard"
    }

    return (
        <div className={nameOfClass} onClick={onClick}>
            <div className="spotNameAndImageContainer">
                <div>{name}</div>
                <div>Image</div>
            </div>
        </div>
    )
}

export default SpotCard;