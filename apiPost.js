

    function post(){

       fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res => res.json())
       .then(data => postUser(data))


    }

    

      // function postUser(data){

      //      const container = document.getElementById('postContainer')
      //      for(const post of data){
      //         const postDiv = document.createElement('div')
      //        console.log(post)

      //        postDiv.innerHTML = `
      //           <h3>user- ${post.userId} </h3>
      //           <h4>post: ${post.title}</h4>
      //           <h4>post description ${post.body}</h4>
              
      //        `
      //        container.appendChild(postDiv);

      //      }
      // }

      // post()



      // function postUser(data){

      //   const container = document.getElementById('postContainer')

      //  for(const post of data){
                   
      //     const postDiv = document.createElement('div')
      //     console.log(post)

      //     postDiv.innerHTML = `
      //         <h2>user- ${post.userId}</h2>
      //         <h2>post- ${post.title}</h2>
      //         <h2>post- ${post.body}</h2>
              
          
      //     `

      //     container.appendChild(postDiv);



      //  }


      // }

      // post()



   //    function postUser(data){

   //        const container = document.getElementById('postContainer')

   //       for(const post of data){
   //        const postDiv = document.createElement('div')
   //        console.log(post)
   //        postDiv.innerHTML =`
   //        <h3> user- ${post.userId}  </h3>
   //        <h3> post- ${post.title}  </h3>
   //        <h3> post- ${post.body}  </h3>
         
   //        `
   //        container.appendChild(postDiv)



   //   }





   //    }

   //    post()



     function postUser(data){

        const container = document.getElementById('postContainer')

        for(const post of data){
            const postDiv = document.createElement('div')
           console.log(post)
           postDiv.innerHTML =`
             
                     <h3> user- ${post.userId}  </h3>
                     <h3> post- ${post.title}  </h3>
                     <h3> post- ${post.body}  </h3>
           
           `
           container.appendChild(postDiv)

        }



     }

     post()