import Image from 'next/image'

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
                        <h5 className="heading-text">Some text</h5>
                    </div>

                </div>
            </div>
            
        </div>
    )
}