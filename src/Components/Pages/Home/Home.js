import Services from '../../Pages/Services/Services'
import Figure from '../Figur/Figure';
import './Hone.css'
const Home = () => {

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center container bg_img">
                <h1 className='text-white'>Capture Your Moments</h1>
            </div>
            <div className="container">
                <h1 className='text-black text-center mt-5'>My packages</h1>
                <Services></Services>
                <Figure></Figure>
            </div>
        </div>
    );
};

export default Home;