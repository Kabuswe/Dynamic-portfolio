import CircleSVG from '../public/images/svg/circle.svg'

function BubbleLeft(props){
    return(
        <div className="bubble-left">
           <h5 className="bubble-text">{props.bubbleText}</h5>
        </div>
    )
}
function BubbleRight(props){
    return(
        <div className="bubble-right">
            <h5 className="bubble-text">{props.bubbleText}</h5>
        </div>
    )
}
function TitleLeft(props){
    return(
        <div className="title-left-container">
            <h5 className="title-text-left-lg">{props.heading}</h5>
            <h5 className="title-text-left-sm">{props.subHeading}</h5>
        </div>
    )
}
function TitleRight(props){
    return(
        <div className="title-right-container">
            <h5 className="title-text-right-lg">{props.heading}</h5>
            <h5 className="title-text-right-sm">{props.subHeading}</h5>
        </div>
    )
}
export function SectionLeft(props){
    return(
        <div className="row ml-0">
            <div className="col-5">
                <div className="row">
                    <div className="col">
                        <TitleLeft heading={props.heading} subHeading={props.subHeading}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="text-paragraph-left">
                           {props.description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-2 sec-center-container">
                <div className="row">
                    <div className="col">
                        <CircleSVG className="circle-svg"/>
                        {props.lineVisble && 
                            <hr className="vertical-line"/>
                        }
                    </div>
                </div>
            </div>
            <div className="col-5 sec-content-container">
                <div className="row">
                    <div className="col">
                        <BubbleLeft bubbleText={props.bubbleText}/>
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
                        <BubbleRight bubbleText={props.bubbleText}/>
                    </div> 
                </div>
            </div>
            <div className="col-2 sec-center-container">
                <div className="row">
                    <div className="col">
                        <CircleSVG className="circle-svg"/>
                        {props.lineVisble && 
                            <hr className="vertical-line"/>
                        }
                    </div>
                </div>
            </div>
            <div className="col-5">
                <div className="row">
                    <div className="col">
                        <TitleRight heading={props.heading} subHeading={props.subHeading}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="text-paragraph-right">
                            {props.description}
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}