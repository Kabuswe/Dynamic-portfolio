
export default function SectionHeader(props){
    return(
        <div>
            <h5 className="heading-text-sm"><span className="hypen-lg">—</span>{props.header}</h5>
            <h3 className="sec-header-text">{props.subHeader}</h3>
        </div>
    )
}