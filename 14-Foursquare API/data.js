// For processing of data

async function find() {

    const options = {
        method: 'GET',
        url: 'https://api.foursquare.com/v3/places/search',
        params: {
            query: 'chicken%20rice',
            ll: '1.3521%2C103.8198',
            radius: '10000',
            categories: '13099'
        },
        headers: {
            accept: 'application/json',
            Authorization: 'fsq3skix1obJnVTWyxBZg60gZAyBan2OIhy5wDgp3JUCUcc='
        }
    };

    const response = await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });


}