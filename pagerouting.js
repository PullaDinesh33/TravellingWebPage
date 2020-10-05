// create the module and name it scotchApp
console.log("entering to js")    
var scotchApp = angular.module("RoutingApp", ["ngRoute"])

// configure our routes    
scotchApp.config(function($routeProvider) {  
    $routeProvider  
  
    // route for the home page    
        console.log("register.html")
    .when("/register", {  
        templateUrl:"assets/templates/register.html"
    })
    .when("/login", {  
        templateUrl:"assets/templates/login.html"
    })
    
   
    
});  
  
