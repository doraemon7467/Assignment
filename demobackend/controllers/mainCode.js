const { ImageAnnotatorClient } = require('@google-cloud/vision');

const client = new ImageAnnotatorClient({
    keyFilename: 'credentials.json',
});

// Function to analyze an image
async function detectText(file) {
    try {
        const [result] = await client.textDetection(file.path);
        const textAnnotations = result.textAnnotations;

        // console.log('Text detected:');
        const myArray = textAnnotations[0].description.split("\n");
        var arr = [];
        var c = 0;
        for (let i = 0; i < myArray.length; i++) {
            arr[c++] = myArray[i].split(" "); 
        }
        let f=1;
        let idnumber , name , lastname , dob , doi , doe ;
        // console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            for(let j=0; j< arr[i].length -1 ;j++){
                if(arr[i][j].length == 1 && arr[i][j+1].length == 4 && arr[i][j+2].length == 5){
                    idnumber = arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i][j+3]+arr[i][j+4];
                }
                if(arr[i][j] == 'Name'){
                    name = arr[i][j+1]+ " " + arr[i][j+2];
                }
                if(arr[i][j]== "Last"){
                    lastname = arr[i][j+2];
                    // console.log('last_name',lastname)
                }
                if((arr[i][j]=='Jan.' || arr[i][j]=='Feb.' || arr[i][j]=='Mar.' || arr[i][j]=='Apr.' || arr[i][j]=='May.' || arr[i][j]=='Jun.' || arr[i][j]=='Jul.' || arr[i][j]=='Aug.' || arr[i][j]=='Sept.' || arr[i][j]=='Oct.' || arr[i][j]=='Nov.' || arr[i][j]=='Dec.') && f==1){
                    f =2;
                    let number = parseInt(arr[i][j-1]);
                    number +=1;
                    let incrementedStr = number.toString();
                    dob = incrementedStr + arr[i][j] + arr[i][j+1];
                    continue;
                }
                if((arr[i][j]=='Jan.' || arr[i][j]=='Feb.' || arr[i][j]=='Mar.' || arr[i][j]=='Apr.' || arr[i][j]=='May.' || arr[i][j]=='Jun.' || arr[i][j]=='Jul.' || arr[i][j]=='Aug.' || arr[i][j]=='Sept.' || arr[i][j]=='Oct.' || arr[i][j]=='Nov.' || arr[i][j]=='Dec.') && f==2){
                    f =3;
                    let number = parseInt(arr[i][j-1]);
                    number +=1;
                    let incrementedStr = number.toString();
                    doi = incrementedStr + arr[i][j] + arr[i][j+1];
                    // console.log(doi);
                    continue;
                }
                if((arr[i][j]=='Jan.' || arr[i][j]=='Feb.' || arr[i][j]=='Mar.' || arr[i][j]=='Apr.' || arr[i][j]=='May.' || arr[i][j]=='Jun.' || arr[i][j]=='Jul.' || arr[i][j]=='Aug.' || arr[i][j]=='Sept.' || arr[i][j]=='Oct.' || arr[i][j]=='Nov.' || arr[i][j]=='Dec.') && f==3){
                    let number = parseInt(arr[i][j-1]);
                    number +=1;
                    let incrementedStr = number.toString();
                    doe = incrementedStr + arr[i][j] + arr[i][j+1];
                    // console.log(doe)
                    continue;
                }
            }
        }
        return { idnumber, name, lastname, dob, doi, doe};

    } catch (error) {
        console.error('Error detecting text:', error);
    }
}

module.exports = detectText;