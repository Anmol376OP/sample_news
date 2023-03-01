import './App.css';
import Img1 from './assets/img1.png'
import Img2 from './assets/img2.png'
import Img3 from './assets/img3.png'
import Img4 from './assets/img4.png'
import Img5 from './assets/img5.png'
function App() {

  return (
    <div className="App">
      <div className='Navbar'>
        Navbar
      </div>
      <div className='Outbox'>
        <div className='box1 image-effect' style={{ backgroundImage: `url(${Img5})` }}>

        </div>
        <div className='box2'>
          <div className='box21 image-effect' style={{ backgroundImage: `url(${Img1})` }}>

          </div>
          <div className='box22 image-effect' style={{ backgroundImage: `url(${Img2})` }}>

          </div>
        </div>
      </div>

      <div className='second-section'>
        <div className='second-section-news'>
          <div className='second-navbar'>
            <div className='Today'>News</div>
            <div className='Heading Heading-extension hovergold'>All</div>
            <div className='Heading Heading-extension hovergold'>Crypto</div>
            <div className='Heading Heading-extension hovergold'>Sports</div>
            <div className='Heading Heading-extension hovergold'>Fitness</div>
          </div>
          <div className="fade_rulex"></div>
          <div className='inner-news-container'>
            <div className='first-inner-news'>
              <img src={Img3} className='first-inner-news-image'></img>
              <div className='Heading'>Microstrategy Acquires More Bitcoin</div>
              <div className='Heading Heading-extension'>Nasdaq-listed Microstrategy Inc.
                announced Wednesday that it has purchased more bitcoin for its corporate treasury.
                Michael Saylor, the company’s founder and executive chairman, tweeted Wednesday</div>
            </div>
            <div className='inner-news-list'>

            </div>
          </div>
        </div>
        <div className='second-section-socials'>
          <div className='Socials'>Socials</div>
          <div className="fade_rulex-black"></div>
        </div>
      </div>
    </div >

  );
}

export default App;
