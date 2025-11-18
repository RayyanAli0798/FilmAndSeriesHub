import "./WeeklyFavourites.css"

export default function WeeklyFavourites({ name,Name1,Image1,Name1Description, Name2,Name2Image,Name2Description, Name3,Name3Image,Name3Description}) {

    return (
        <>
        <div className="WeeklyFavouritesBody">
        <h2 className="WeeklyBoxTitle"> Top {name} this week</h2>
            
                <div className="WeeklyFavouritesContainer">
                <div className="NameBox">
                    <img src={Image1} className="TopWeeklyImage"/> 
                    <h3> {Name1} </h3>
                    <div className="NameDescriptionBox">
                    {Name1Description}
                    </div>
                </div>
                <div className="NameBox">
                    
                    <img src={Name2Image} className="TopWeeklyImage"/> 
                    <h3> {Name2} </h3>
                    <div className="NameDescriptionBox">
                    {Name2Description}
                    </div>

                </div>
                <div className="NameBox">
                    <img src={Name3Image} className="TopWeeklyImage"/> 
                    <h3> {Name3} </h3>
                    <div className="NameDescriptionBox">
                    {Name3Description}
                    </div>

                </div>
                </div>
            </div>
        </>
    )
}