function updateData(){
    for (let n=1; n < 5; n++) {
        let imageToUpdate = document.getElementById("pic" + n.toString());
        let textToUpdate = document.getElementById("data" + n.toString());
        const json_result = fetch('https://randomuser.me/api')
            .then((response) => response.json())
            .then((request_result) => {
                return request_result
            })

        json_result.then(function (result) {
            let the_data = result['results'][0];
            let text_data = 'Location: ' + the_data["location"]["city"] + '<br>' +
                            'Country: ' + the_data['location']['country'] + '<br>' +
                            'Name: ' + the_data['name']['last'] + '<br>' +
                            'Postcode: ' + the_data['location']['postcode'];
            let picture_url = the_data['picture']['large']
            textToUpdate.innerHTML = text_data;
            imageToUpdate.src = picture_url;
        })
    }
}
