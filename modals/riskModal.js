const mongoose = require('mongoose')

const riskSchema = mongoose.Schema(
    {
        riskScore: {
            type: Number,
            required: true,
          },
          nigerianStocks: {
            type: Number,
            required: true,
          },
          foreignStocks: {
            type: Number,
            required: true,
          },
          techStocks: {
            type: Number,
            required: true,
          },
          emergingStocks: {
            type: Number,
            required: true,
          },
          foreignBonds: {
            type: Number,
            required: true,
          },
          commodities: {
            type: Number,
            required: true,
          },
          realEstate: {
            type: Number,
            required: true,
          },
          tBills: {
            type: Number,
            required: true,
          },
          alternative: {
            type: Number,
            required: true,
          },
    },
    { timestamps: true }

) 

const Risk= mongoose.model("Risk", riskSchema);
module.exports = Risk;

const data = {
  riskScore: 14,
  nigerianStocks: 5,
  foreignStocks: 8,
  techStocks: 6,
  emergingStocks: 7,
  foreignBonds: 4,
  commodities: 5,
  realEstate: 3,
  tBills: 5,
  alternative: 4,
};

Risk.insertMany([data])
  .then((result) => {
    console.log('Data inserted successfully:', result);
  })
  .catch((error) => {
    console.error('Error inserting data:', error);
  });
