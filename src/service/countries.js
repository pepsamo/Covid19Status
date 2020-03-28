const  COUNTRIES = fetch("https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "ajayakv-rest-countries-v1.p.rapidapi.com",
		"x-rapidapi-key": "f23eff6546mshb3d1c9131f8ade5p19a1b0jsn6dbab3e517ea"
	}
})
.then(res => {
	res.json().then(
    data => {
      // console.log(data);
        return JSON.parse(JSON.stringify(data));
    }
  );
})
.catch(err => {
	console.log(err);
});

export default COUNTRIES;