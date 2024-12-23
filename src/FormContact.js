
function FormContact() {
  return (
  <form className="bg-violet-900">
    <h5 className="text-gray-300 font-normal">GET IN TOUCH</h5>
    <h1 className="text-white font-bold text-2xl">CONTACT.</h1>
    <label>Your Name : </label>
    <input type="text" placeholder="What is your Name ? "/>
    <label>Your Email : </label>
    <input type="email" placeholder="What is your email ? "/>
    <label>Your Message : </label>
    <textarea placeholder="what you want to say ?"/>
    <button type="button" className="my-3 text-white w-fit px-3 py-1 bg-violet-700 duration-1000 hover:bg-violet-950  rounded-md">Send</button>
  </form>
  )
}

export default FormContact
