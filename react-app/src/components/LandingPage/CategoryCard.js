




const CategoryCard = ({ label, backgroundColor, milesAway, picture, rightCard }) => {



    let cardClassName;

    if (rightCard) {
        cardClassName = "rightCategoryCard"
    } else {
        cardClassName = "regularCategoryCard"
    }


    return (
        <div className={cardClassName}>
            <div>Picture</div>
            <div>Outdoor</div>
        </div>
    )
}

export default CategoryCard