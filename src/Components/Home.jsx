import banner from '../Images/home-banner.png'
import line from '../Images/line.png'

function Home() {
    return (
        <>


            {/* <div className='mobile-container'>
                <div class="topnav">
                    <div id="myLinks">
                        <a href="">News</a>
                        <a href="">Contact</a>
                        <a href="">About</a>
                    </div>
                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
            </div> */}
            <div className="header">
                <div className="language-option">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    <p>EN</p>
                </div>
                <div className="work-nav">
                    <p>HOW IT WORK</p>
                </div>
                <div className="news-nav">
                    <p>NEWS</p>
                </div>
                <div className="logo">
                    <p>Debouche</p>
                    <div className='border'></div>
                </div>

                <div className="contact-nav">
                    <p>CONTACT</p>
                </div>
                <div className="journey-nav">
                    <p>YOUR</p>
                    <p>JOURNEY</p>
                </div>
                <div className="admin-nav">
                    <i class="fa fa-user" aria-hidden="true"></i>
                </div>
                <div className="cart-nav">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
            </div>

            <div className="center-content">
                <div className="left-container">
                    <div className="left-content">
                    <p>BECOME YOUR</p>
                    <p>OWN SOMMELIER</p>
                    </div>
                    <div className='line'>
                    <img src={line} alt='line'/>
                    </div>
                    
                </div>
                <div className="right-container">
                    <div className='right-content'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ......</p>
                    </div>
                </div>

                <div className="center-container">
                <img src={banner} alt='homebanner'/>
                </div> 
                
            </div>

        </>
    )
}


export default Home