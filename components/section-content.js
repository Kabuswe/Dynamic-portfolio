import CircleSVG from '../public/images/svg/circle.svg'

function BubbleLeft(props){
    return(
        <div className="bubble-left">
           <h5 className="bubble-text">apr 2018 - jun 2018</h5>
        </div>
    )
}
function BubbleRight(props){
    return(
        <div className="bubble-right">
            <h5 className="bubble-text">apr 2018 - jun 2018</h5>
        </div>
    )
}
function TitleLeft(props){
    return(
        <div className="title-left-container">
            <h5 className="title-text-left-lg">Source d'Art</h5>
            <h5 className="title-text-left-sm">Student Intern</h5>
        </div>
    )
}
function TitleRight(props){
    return(
        <div className="title-right-container">
            <h5 className="title-text-right-lg">Source d'Art</h5>
            <h5 className="title-text-right-sm">Student Intern</h5>
        </div>
    )
}
export function SectionLeft(props){
    return(
        <div className="row ml-0">
            <div className="col-5">
                <div className="row">
                    <div className="col">
                        <TitleLeft/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="text-paragraph-left">
                            Development of a publicity android mobile application.
                            Development and maintenance of a quiz platform used at the Radiologie and Medical Imagery Conference.
                            Designing E-posters used at the aforementioned conference.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-2 sec-center-container">
                <div className="row">
                    <div className="col">
                        <CircleSVG/>
                        {props.lineVisble && 
                            <hr className="vertical-line"/>
                        }
                    </div>
                </div>
            </div>
            <div className="col-5 sec-content-container">
                <div className="row">
                    <div className="col">
                        <BubbleLeft/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export function SectionRight(props){
    return(
        <div className="row ml-0">
            <div className="col-5 sec-right-container">
                <div className="row">
                    <div className="col">
                        <BubbleRight/>
                    </div> 
                </div>
            </div>
            <div className="col-2 sec-center-container">
                <div className="row">
                    <div className="col">
                        <CircleSVG/>
                        {props.lineVisble && 
                            <hr className="vertical-line"/>
                        }
                    </div>
                </div>
            </div>
            <div className="col-5">
                <div className="row">
                    <div className="col">
                        <TitleRight/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="text-paragraph-right">
                            Development of a publicity android mobile application.
                            Development and maintenance of a quiz platform used at the Radiologie and Medical Imagery Conference.
                            Designing E-posters used at the aforementioned conference.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}