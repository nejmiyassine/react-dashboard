// Components
import Sidebar from '../../components/sidebar/Sidebar';
// Style
import './home.scss';

const Home = () => {
  return (
    <section className='home'>
      <Sidebar />

      <div className='homeContainer'>container</div>
    </section>
  );
};

export default Home;
