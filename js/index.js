const data = [
    {
      id: 1,
      name: "Damas",
      year: 2009,
      color: "black",
      price: 4000,
      status: "active"
    },
    {
      id: 2,
      name: "Spark",
      year: 2013,
      color: "white",
      price: 5000,
      status: "active"
    },
    {
      id: 3,
      name: "Matiz",
      color: "black",
      price: 3500,
      status: "inactive"
    },
    {
         id: 3,
         name: "Damas",
         color: "blue",
         price: 4500,
         status: "inactive"
       },
  ];

  const tbody = document.getElementById('tbody');
  const cars = document.getElementById('cars');
  const filter = document.getElementById('filter-status');
  const year = document.getElementById ('year');
  const color = document.getElementById ('color');
  const price = document.getElementById ('price');
  
  function createRows(data) {
       let lists = ''
       tbody.innerHTML = '';
       data.forEach(el => {
            let {id, name = 'Mavjud emas', year = '', price = '', color = 'Mavjud emas', status = ''} = el;
            if (status == 'active') {
                 status = 'Sotuvda mavjud'
            };
  
            if (status == 'inactive') {
                 status = 'Sotuvda mavjud emas'
            };
  
            let tr = `
                 <tr>
                      <td>${id}</td>
                      <td>${name}</td>
                      <td>${year}</td>
                      <td>${color}</td>
                      <td>${price}</td>
                      <td>${status}</td>
                 </tr>
            `;
            lists += tr
       })
  
       tbody.innerHTML += lists;
  }
  
  filter.addEventListener('change', function() {
       let selectedStatus = this.value;
       let cars = data.filter(el => {
            return el.status == selectedStatus;
       })
       createRows(cars)
  
  
  })
  
  // 1. narx oraligi
  // 2. yillar boyicha
  // 3. rangi
  
  
  cars.addEventListener('change', function() {
       let selectedCar = this.value; 
       let selectedCars = data.filter(el => {
            return el.name == selectedCar;
       });
       createRows(selectedCars)
  
       
  })
  year.addEventListener('change', function() {
       let selectedyear = this.value; 
       let selectedyears = data.filter(el => {
            return el.year == selectedyear;
       });
       createRows(selectedyears)
  
       
  })
  color.addEventListener('change', function() {
       let selectedcolor = this.value; 
       let selectedcolors = data.filter(el => {
            return el.color == selectedcolor;
       });
       createRows(selectedcolors)
  
       
  })
  price.addEventListener('change', function() {
       let selectedprice = this.value; 
       let selectedprices = data.filter(el => {
            return el.price == selectedprice;
       });
       createRows(selectedprices)
  
       
  })
  
  window.onload = function(params) {
       if (data.length) {
            createRows(data)
       }
  }