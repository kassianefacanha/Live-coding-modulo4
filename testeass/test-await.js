async function teste() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 6000)
    });
  
    let result = await promise; 
  
    console.log(result); 
  }
  
  teste();
