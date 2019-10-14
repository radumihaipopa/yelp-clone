const apiKey = "Qm5NOr3J2M2X6rKlK8yRtWrfmbJEbkbCjvwH9jm6yUc00yvcX3HTtGsk3vyYhs_XI7shljMEdYrJpsVjPKDONDPsuRV7ki3aFkl7X1qC8bo5Eic3jPmIAeqZsWmkXXYx";
const Yelp = {
    search(term, location, sortBy) {
        //const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        //const corsPath = 'https://cors-anywhere.herokuapp.com/';
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { headers: { Authorization: `Bearer ${apiKey}` } })
            .then(response => {
                return response.json();
            })
            .then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                    })
                }
            })
    }
};

export default Yelp;