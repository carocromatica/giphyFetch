function giphy() {

    const receptorGif= document.getElementById("carga"); // no me lee el nombre de la const :c

    fetch('http://api.giphy.com/v1/gifs/search?api_key=14vIOJqvDpC0mRfLX4ulbtnqyMeV4q0K&limit=5')
        .then(response=> response.json())
        .then ( data => { 
            console.log(data);
            renderInfo(data);

        })


        
        }
