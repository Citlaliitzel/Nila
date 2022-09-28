const sleep = ms => {

    return new Promise(resolve => setTimeout(resolve, ms))
  
  }

  async function main() {
      
      for(let i = 0;i <= 10;i++){
      
          await sleep(1000);
      
          console.log(new Date(), i);
      
      }

  }

  main();
  