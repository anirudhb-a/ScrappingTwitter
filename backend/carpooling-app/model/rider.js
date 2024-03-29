import mongoose from "mongoose";

const riderSchema = new mongoose.Schema({
    /* RiderName: {
        type: String,
       // required: 'The title field is required.'
    },
    RiderEmail: {
        type: String,
      //  required: 'The Details field is required.'
    }, */
   //PickupLocation: {
   //     type: String,
      //  required: 'Starting Location is required.'
   // },
    Origin: {
        type: String,
       // required: 'Starting Location is required.'
    },
    Destination: {
        type: String,
        //required: 'Destination is required.'
    },
    PickUpTime: {
        type: Date,
      //  default: Date.now()
    },
    SeatsNeeded:{
        type: Number,
        //required: 'Number of Seats is required.'
    },

}, 

);
const rider = mongoose.model('Rider',riderSchema);

export default rider;