
//Client ID: hAtu3T89dvJo0NTOvgLeQQ

export const Yelp = {
    search: function(term, location, sortBy){
        /*
         *  fetch() will not function correctly due to CORS restrictions
         *
         *  We can bypass this restriction with an API called CORS Anywhere.
         *  CORS Anywhere will take requests sent to its API endpoint, make
         *  them for the requesting app with the proper CORS permissions, and
         *  then return the response back to the requesting app.
         */
        const API_KEY = "6tfQ0d30a1nVbTBQ8xNcqN9ivqDpop-bF03MBa9C_hHXddwkfwRan5ZcpXyN9_73VqWNiKce3kQcLEgz-XxL-2szhcc9GpuuE30ekfi_ZfKR5gvusft59Dry1Jm8XXYx"
        const CORS_bypass = `https://cors-anywhere.herokuapp.com/`
        const apiEndpoint = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
        const browser_header = {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        }

        const scrape_yelpResult_attribs = (business) => Object({
            "id":business.id,
            "imageSrc":business.image_url,
            "name":business.name,
            "address":business.location.address1,
            "city":business.location.city,
            "state":business.location.state,
            "zipCode":business.location.zip_code,
            "category":business.categories.title,
            "rating":business.rating,
            "reviewCount":business.review_count,
        })

        return fetch(CORS_bypass+apiEndpoint, browser_header)
                .then((response)=>response.json())
                .then((jsonResponse)=>(jsonResponse)?jsonResponse.businesses.map(business=>scrape_yelpResult_attribs(business)):undefined)
    }
}