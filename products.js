/* global Vue, axios */
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      products: [], 
      name: "",
  
    };
  },
  created: function () {
    axios.get("http://localhost:3000/products").then((response) => {
      console.log(response.data);
      this.products = response.data;
    });
  },
  methods: {
    createProduct: function () {
      var params = { userId: 1, name: this.name, completed: false };
      axios.post("http://localhost:3000/products", params).then((response) => {
        console.log(response.data);
        this.products.push(response.data);
        this.name = "";
        this.description = "";
      });
    },

    updateProduct: function () {
      var params = { userId: 1, name: this.name, completed: false };
      axios.post("http://localhost:3000/products/:id", params).then((response) => {
        console.log(response.data);
        this.products.push(response.data);
        this.name = "";
        this.description = "";
      });
    },
  },      
});