import PhoneList from "../components/PhoneList";

function HomePage () {
    return(
    <div>
        <div className="homePage-header">
            <h1 className="homePage-header-title">Phone Infos</h1>
        </div>
        <PhoneList/>
    </div>
    )
}

export default HomePage;