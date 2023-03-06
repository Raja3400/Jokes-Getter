  const jokes=document.querySelector("#jokes");
  const btn=document.querySelector('button');
 
  const addJokes=async()=>
  {
    const joketxt=await  getJokes();
    const newLi=document.createElement('LI');
    newLi.append(joketxt);
    jokes.append(newLi);
  }
  const getJokes =async() =>
  {
    try {
        const config={headers: {Accept: 'application/json'}}
        const res=await axios.get('https://icanhazdadjoke.com/',config)
       return res.data.joke;
    
    } catch (error) {
        console.log(error)
        return "NO JOKES"
    }
   
  }
  btn.addEventListener('click',addJokes); 