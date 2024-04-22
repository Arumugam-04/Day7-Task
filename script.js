/*Get all the countries from Asia continent /region using Filter function :

const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
     result.filter((countries) => {
           return countries.region ==="Asia";
     })
     console.log(result);
}


/*Get all the countries with a population of less than 2 lakhs using Filter function 
var request=new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function (){
var countryData=JSON.parse(this.response);
const populate=countryData.filter((element)=>{
     return element.population<200000;
})
console.log(populate);
}
*/
/*Print the following details name, capital, flag, using forEach function 
var request=new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })}
*/

/*Print the total population of countries using reduce function
    var request=new XMLHttpRequest();
    request.open('GET',"https://restcountries.com/v3.1/all",true);
    request.send();
    request.onload=function (){
    var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    })
    console.log(population);
}
*/

/*Print the country which use US Dollars as currency
var request = new XMLHttpRequest();
request.open('Get',"https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function () {
var data = JSON.parse(this.response);
for(i=0;i<data.length;i++){
     if(data[i].currencies[0].code==="USD")
    {
        console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
    }
  }
 }
 */
