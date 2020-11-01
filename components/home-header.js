
export default function HomeHeader(props){
    return(
        <div className="container-fluid home-header-container">
            <h5 className="heading-text">Hello, My name is</h5>
            <h1 className="heading">{props.name}</h1>
            <h5 className="heading-text"><span className="hypen-lg">——</span>{props.intro}</h5>
        </div>
    )
}