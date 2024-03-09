

const Dashboard = () => {
  return (
    <section 
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container text-white"
    >
    <div className="relative xl:w-2/5 flex flex-col justfiy-content items-start w-full max-xl:padding-x pt-28">
      <h1 className=" mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
        <span className="relative z-10 pr-10">Blockchain. GPU. Trade</span>
        <br></br>
      </h1>

      <p className=" font-montserra text-slate-gray mt-6 mb-14 sm:max-w-sm">
      Experience the future of GPU trading where innovation meets security. Join our marketplace powered by blockchain technology
      </p>  
    </div>
    <div className="relative xl:w-2/5 flex flex-col justfiy-content items-start w-full max-xl:padding-x pt-28">
        <img src="https://wallpapercave.com/wp/wp4769116.jpg"/>
    </div>
    </section>
  )
}

export default Dashboard