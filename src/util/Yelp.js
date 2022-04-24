const apiKey = 'ZdaLyZXtpnyIDLCW42u-H3YBfiYXpn3De1yiwZIqiVN-SFAnA_pkaDb8DRg1qA6Dxtf6CCBkV7gnYbZXjaAM8K7r-Lf7hFVbJyyEIbekBKPiYiS5wEpREiyo0ZFkYnYx';

const Yelp = {
    search(term, location, sortBy) {
        // if CORS access expires, reclaim at: https://cors-anywhere.herokuapp.com/corsdemo
        let corsPath = 'https://cors-anywhere.herokuapp.com/';
        let businessesEndpoint = `${corsPath}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        let browserHeader = {
            headers: { Authorization: `Bearer ${apiKey}` }
        };

        return fetch(businessesEndpoint, browserHeader)
            .then( response => {
                return response.json()
            }).then( jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map( business => ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].alias,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }));
                }
            });
    }
}

export default Yelp ;