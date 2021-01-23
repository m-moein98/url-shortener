import React, {Component} from 'react';

class Home extends Component{
    async postData(){        
        try {
            let result = await fetch('http://127.0.0.1:8000/api/shit/', {
                method: 'POST',
                headers:{
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "my_text": "12312"
                })
            });
            console.log('Result:' + result)
        } catch (error) {
            console.log(error)
        }
    }
    render(){
    return(
        <div>
        
        <section>
            <h1>URL Shortener</h1>
            <div>
                <div >
                    <input/>
                    <div >
                    <button onClick={ () => this.postData() } className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                        go
                    </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}
}
export default Home;