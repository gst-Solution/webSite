export default function HeroSection(){
    return (
<div className="bg-gradient-to-b from-violet-600/10 via-transparent">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
    


    <div className="max-w-3xl text-center mx-auto">
      <h1 className="block font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
      Maximize Your Savings with Expert Tax Guidance
      </h1>
    </div>


    <div className="max-w-3xl text-center mx-auto">
      <p className="text-lg">At <span className="text-blue-500">GST Solution</span>, we simplify the complexities of tax and accounting. Our expert team is dedicated to providing personalized solutions that maximize your savings and ensure compliance. Whether you are an individual or a business, we are here to guide you every step of the way, helping you achieve your financial goals with confidence.</p>
    </div>

    <div className="text-center">
      <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6" href="/signup">
        Get started
        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </a>
    </div>
  </div>
</div>
    )
}