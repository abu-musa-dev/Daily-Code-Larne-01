// const response = await fetch(url);
// const data = await response.json();
// console.log(data);

// const response = wait fetch(url);
// const data = wait response.sjon()
// console.log(data)

async function LoadData() {

     const response = await fetch('https://jsonplaceholder.typicode.com/users')
     const data = await response.json()
     console.log(data)
} 

LoadData()





   



