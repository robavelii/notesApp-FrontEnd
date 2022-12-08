import { Link } from 'react-router-dom';

const Public = () => {
  const content = (
    <section className='public'>
      <header>
        <h1>
          Welcome to <span className='nowrap'>Notes APp!</span>
        </h1>
      </header>
      <main className='public__main'>
        <p>
          This is a fulstack mern application, Developed by{' '}
          <span className='nowrap' style={{ color: 'red' }}>
            Robel Fekadu
          </span>
          . To showcase as a portfolio project which includes all the necessary
          aspects of a fullstack applicaton.
        </p>
        <address className='public__addr'>
          Robel Fekadu
          <br />
          <a href='github.com/robavelii'>Check out my Github</a>
          <br />
          Addis Ababa, Ethiopia
          <br />
          <a href='tel:+251916416707'>(251) 916-41-6707</a>
        </address>
        <br />
        <p>Owner: Robel Fekadu</p>
      </main>
      <footer>
        <Link to='/login'>Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
