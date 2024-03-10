



  function minhaz(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => minhazData(data))


  }


      // function minhazData(data){
          
      //      const ul = document.getElementById('userList')

      //     for(const user of data){

      //            console.log(user.name)

      //            const li = document.createElement('li')
      //            li.innerText = user.name;
      //            ul.appendChild(li);

      //     }
    

      // }
   

      // function minhazData(data){
        
      //   const ul = document.getElementById('userList')
          
      //   for(const user of data){
            
      //       console.log(user.name)

      //       const li = document.createElement('li')
      //       li.innerText = user.name
      //       ul.appendChild(li)
 

      //   }
        
    
      // }



      
      // function minhazData(data){
      //    const ul = document.getElementById('userList')
      //    for(const user of data){
      //        const li = document.createElement('li')
      //        console.log(user.name)
      //        li.innerText = user.name
      //        ul.appendChild(li)
      //    }
      // }



      function minhazData(data){

            const ul =document.getElementById('userList')


        for(const user of data){
             const li = document.createElement('li')
             console.log(user.name)

             li.innerText = user.name
             ul.appendChild(li)



        }





      }
