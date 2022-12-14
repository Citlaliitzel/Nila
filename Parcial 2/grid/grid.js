//new gridjs.Grid({
    //columns: ["Name", "Email", "Phone Number"],
    //data: [
      //["John", "john@example.com", "(353) 01 222 3333"],
      //["Mark", "mark@gmail.com", "(01) 22 888 4444"],
      //["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
      //["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
      //["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
    //]
  //}).render(document.getElementById("wrapper"));

  new gridjs.Grid({
    columns: ['ID', 'Nombre'],
    server: {
      url: 'http://localhost:8082/Leer',
      then: data => data.map(Leer => 
        [Leer.id, Leer.nombre]
      )
    } 
  }).render(document.getElementById("wrapper"));;