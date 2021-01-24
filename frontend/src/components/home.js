import React, {Component} from 'react';

class Home extends Component{
    async postData(name){        
        try {
            let result = await fetch('http://127.0.0.1:8000/api/shit/', {
                method: 'POST',
                headers:{
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "my_text": name
                })
            });
            console.log('Result:' + result)
        } catch (error) {
            console.log(error)
        }
    }
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
      }
    
      handleSubmit(event) {
        this.postData(this.input.current.value)
        event.preventDefault();
        this.input.current.value = ""
      }
    render(){
    return(
        <div className="min-h-90v flex flex-col aw-hero">
        <section className=" text-white flex-grow">
            <h1 className="text-center text-5xl lg:text-6xl pt-32 sm:pt-32">URL Shortener</h1>
            <div className="py-24">
                <form onSubmit={this.handleSubmit} className="bg-white flex m-auto rounded-full shadow-xl w-9/12 lg:w-3/5 sm:w-5/6">
                    <input ref={this.input} className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none lg:py-5" id="search" type="text" placeholder="Enter Your url"/>
                    <div className="p-2 lg:p-3 ">
                    <input type="submit" value="go" className="bg-blue-500 text-white rounded-full p-2 lg:p-3 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"/>
                    </div>
                </form>
            </div>
        </section>
        <footer className=" font-light text-sm text-blue-300 text-center">
            <div className="bg-indigo-900 w-full m-auto rounded hover:bg-indigo-700 hover:text-white lg:w-1/3 md:w-1/2">
            <a className="font-normal" href="https://moein98.ir">All Rights Reserved For Moein98</a>
            </div>
        </footer>
    </div>
    )
}
}
export default Home;