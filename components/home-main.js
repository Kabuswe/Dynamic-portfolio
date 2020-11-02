import Image from 'next/image'
import TelSVG from '../public/images/svg/telephone.svg'
import MailSVG from '../public/images/svg/mail.svg'
import LinkedInSVG from '../public/images/svg/linkedin-sm.svg'
import GithubSVG from '../public/images/svg/github-sm.svg'

function ContactItem(props){
    return(
        <div className="contact-item">
            {props.children}
            <span className="contact-item-text">{props.value}</span>
        </div>
    )
}

function SectionContainer(props){
    return(
        <div className="sec">
            <h5 className="heading-text-sm"><span className="hypen-lg">—</span>About me</h5>
            <div className="container section-container-lg">
                <h3 className="section-container-title ml-2">Who Am I</h3>
                <p className="ml-2 mr-2 mt-3 section-container-text">
                I am a graduate student at Abdelmalek Essaâdi University pursuing my masters in Software Quality Assurance. 
                I have a strong background in Database modeling, building data-centric software solutions and good knowledge of 
                industry tools and guidelines that drive software development. 
                </p>
            </div>

            <h5 className="heading-text-sm mt-3"><span className="hypen-lg">—</span>Contact me</h5>
            <div className="row">
                <div className="col-sm-4 mt-4">
                    <ContactItem value="+212 630 847">
                        <TelSVG className="contact-item-img"/>
                    </ContactItem>
                </div>
                <div className="col-sm-4 mt-4">
                    <ContactItem value="Send me an Email">
                        <MailSVG className="contact-item-img"/>
                    </ContactItem>
                </div>
                <div className="col-sm-4 mt-4">
                    <ContactItem value="View LinkedIn Profile">
                        <LinkedInSVG className="contact-item-img"/>
                    </ContactItem>
                </div>
                <div className="col-sm-4 mt-4">
                    <ContactItem value="View Github Profile">
                        <GithubSVG className="contact-item-img"/>
                    </ContactItem>
                </div>
            </div>
        </div>
    )
}

export default function HomeMain(props){
    return(
        <div className="container-fluid home-main">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <Image 
                        src="/images/profile.jpg"
                        alt="Picture of the author"
                        width={229}
                        height={283} />
                    </div>
                    <div className="col-sm mt-3">
                        <SectionContainer/>
                    </div>

                </div>
            </div>
            
        </div>
    )
}