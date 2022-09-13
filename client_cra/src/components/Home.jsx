import Welcome from './Welcome';
import Services from './Services';
import Transactions from './Transactions';
import Footer from './Footer';
import Information from './Information';


const Home = () =>{

    return(
        <>
            <Welcome></Welcome>
            <Transactions></Transactions>
            <Services></Services>
            <Information></Information>
            <Footer></Footer>
        </>

    )
}

export default Home
