
import logo from './img/logo.png';
import avatar from './img/avatar.jpg';
import './App.css';

function Portofolio() {
  return (
    <div className='bg-[#081b29] h-screen'>
      <div className='flex justify-between w-full bg-white px-10 py-2'>
        <div className='flex gap-5 items-center'>
          <span className='w-[48px] h-[48px]' style={{backgroundImage: `url(${logo})`,backgroundSize: 'cover', backgroundPosition: 'center'}}></span>
          <div>
            <p className='text-xl font-semibold'>Portofolio</p>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <a onClick={(e) => e.preventDefault()} className='transition-all duration-300 hover:text-cyan-300 cursor-pointer'>
            Contact me
          </a>
          <a onClick={(e) => e.preventDefault()} className='transition-all duration-300 hover:text-cyan-300 cursor-pointer'>
            About me
          </a>
        </div>
      </div>
      <div className='content p-5'>
        <div className='flex justify-between'>
          <div className='pt-[100px] w-[600px]'>
            <h1 className='text-4xl text-cyan-300 font-bold'>Selamat datang</h1>
            <h2 className='text-2xl text-white font-bold'>Halo, Saya David Yusuf</h2>
            <h2 className='text-sm text-cyan-300 font-bold'>Fullstack Laravel, C++, JavaScript, React.Js, Node.Js</h2>
            <p className='text-white pt-5 text-pretty'>
              Saya adalah programmer web Laravel dengan pengalaman selama 4 tahun. Keahlian saya adalah membuat software yang efisien dan berguna bagi client.
            </p>
          </div>
          <span className=' md:w-[800px] md:h-[500px] rounded-lg' style={{backgroundImage: `url(${avatar})`,backgroundSize: 'cover', backgroundPosition: 'center 90%'}}>

          </span>
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
