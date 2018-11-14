const axios = require('axios');


const getResponseFromWorkfront = async() => {

    //let key = 'key';
    //let encodeUrl = encodeURI(direccion);

    axios.defaults.headers.common['apiKey'] = '';
    axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-16';

    //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    let resp = await axios.put(`https://deloitte.my.workfront.com/attask/api/v9.0/project/5b2414b500ae32088e7f37364f59d56a?updates={"name":%22Risk+management+and+internal+audit+for+REITs%3A+Pathway+to+the+future%22,"categoryID":%2258b7a4840031dfd6cd52009d0867b4c4%22,"status":%22PLN%22,"URL":%22https%3A%2F%2Fwww2.deloitte.com%2Fus%2Fen%2Fpages%2Fdbriefs-webcasts%2Fevents%2Fjuly%2F2018%2Fdbriefs-risk-management-and-internal-audit-for-reits-building-for-the-future.html%3Fid%3Dus%3A2el%3A3db%3Amix%3Aawa%3A%3A%22,"DE%3AAttended+-+Strategic-A+Actual":0,"DE%3AAttended-DGES+Actual":0,"DE%3AIf+event+title+should+appear+differently+than+activation+name+on+Marketing+Calendar%2C+please+provide+event+name+here.+If+not%2C+please+leave+blank.":%22Risk+management+and+internal+audit+for+REITs%3A+Pathway+to+the+future%22,"DE%3AAttended+-+Strategic-R+Actual":0,"DE%3ATotal+Attended+C-Suite":%220%22,"DE%3AAttended+Total+Actual":%220%22,"DE%3AActual+Registered":%221886%22,"DE%3AActivation+Type":%22Webcast%22,"DE%3AActivity+Key+ID":%22K0115409%22,"DE%3AAttended+-+Priority-R+Actual":0,"DE%3ATeaser":%22Facing+continued+market+uncertainties%2C+REITs+can+benefit+from+effective+risk+management+and+internal+audit+programs.+What+are+important+considerations+for+REIT+executives%3F+Participants+will+learn+about+leading+practices+for+integrated+enterprise+risk+management+programs.%22,"DE%3APrimary+PPMD+Champion":%22Jim+Berry%22,"DE%3ATotal+Attended+Executive":%220%22,"DE%3AAnticipated+event+support+needs":[%22CPE+support%22],"DE%3AEvent+Time+Zone":%22Eastern%22,"DE%3ALevel+4+Activity+WBS+Code":%22LPTFSC08-09-09-01-7174%22,"DE%3ASeries":%22Real+Estate%22,"DE%3ASub-Series":%22Real+Estate+test+2%22,"DE%3ACPE+Subject":%22Specialized+Knowledge%22,"DE%3AIs+this+for+a+Deloitte+activity+at+a+third-party+event%3F":%22No%22,"DE%3AMax+CPE+Credits":%221%22,"DE%3AWebcast+Activation+Type":%22Dbriefs%22,"DE%3AIs+a+DPM+form+required+for+this+activation%3F":%22No%22,"DE%3AContent+Sponsor":%22Financial+Services%22}`) //, {
        .catch(function(error) {
            console.log(error.response.data);
            console.log(error.response.status);
            //console.log(error.response.headers);
            /* if (error.response) {
                 // The request was made and the server responded with a status code
                 // that falls out of the range of 2xx
                 console.log(error.response.data);
                 console.log(error.response.status);
                 console.log(error.response.headers);
             } else if (error.request) {
                 // The request was made but no response was received
                 // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                 // http.ClientRequest in node.js
                 console.log(error.request);
             } else {
                 // Something happened in setting up the request that triggered an Error
                 console.log('Error', error.message);
             }
             console.log(error.config);*/
        });
    /*headers: {
            apiKey: ''
        }
    });*/
    console.log(resp);
    return resp;
}

module.exports = {
    getResponseFromWorkfront
}