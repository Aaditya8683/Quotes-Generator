const quote = document.querySelector('#quote');
const btn = document.querySelector('#btn');

// const generateQuote = () => {
//     const setHeader = {
//         headers : {
//             Accept : "application/json"
//         }
//     }

//     fetch("http://api.quotable.io/random", setHeader)
//     .then((res)=> res.json())
//     .then((data)=>{
//         quote.innerHTML = data.content;
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// }

const generateQuote = async () => {
    
    try{
    const setHeader = {
        headers : {
            Accept : "application/json"
        }
    }
    const res = await fetch("http://api.quotable.io/random", setHeader)
    const data = await res.json();
    quote.innerHTML = data.content;
}catch(error){
    console.log(`the error is ${error}`)
}
}

btn.addEventListener('click', generateQuote);