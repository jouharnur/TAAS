var mongoose=require('mongoose')
mongoose.connect('localhost:27017/taas')

var Incident=require('../models/incident');

Incident.collection.drop();
var incidents= [
new Incident({
    locationname: 'Megenagna1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    severity:'high',
    death:2,
    imagepath: "/images/1.jpg",
    injury:3

}),

new Incident({
    locationname: 'Bole1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    severity:'low',
    death:0,
    imagepath: "/images/2.jpg",
    injury:2

}),

new Incident({
    locationname: 'Sarbet1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    severity:'Medium',
    death:2,
    imagepath: "/images/3.jpg",
    injury:1

}),

];

for(var i=0; i<incidents.length;i++)
    {
        incidents[i].save();
        if(i==incidents.length-1)
            {
                exit();
            }
    }
function exit()
{
   mongoose.disconnect();
}