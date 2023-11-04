const mongoose = require('mongoose')

const riskSchema = mongoose.Schema(
    {
        riskScore: {
            type: Number,
            required: true,
          },
          nigerianStocks: {
            type: String,
            required: true,
          },
          foreignStocks: {
            type: String,
            required: true,
          },
          techStocks: {
            type: String,
            required: true,
          },
          emergingStocks: {
            type: String,
            required: true,
          },
          nigerianBonds: {
            type: String,
            required: true,
          },
          foreignBonds: {
            type: String,
            required: true,
          },
          commodities: {
            type: String,
            required: true,
          },
          realEstate: {
            type: String,
            required: true,
          },
          tBills: {
            type: String,
            required: true,
          },
          alternative: {
            type: String,
            required: true,
          },
    },
    { timestamps: true }

) 

const Risk= mongoose.model("Risk", riskSchema);
module.exports = Risk;

const data = [
    {
        riskScore: 0,
        nigerianStocks: '18%',
        foreignStocks: '4%',
        techStocks: '2%',
        emergingStocks: '7%',
        nigerianBonds: '35%',
        foreignBonds: '15%',
        commodities: '7%',
        realEstate: '12%',
        tBills: '0%',
        alternative: '0%',
      },
      {
        riskScore: 1,
        nigerianStocks: '20%',
        foreignStocks: '5%',
        techStocks: '3%',
        emergingStocks: '7%',
        nigerianBonds: '35%',
        foreignBonds: '6%',
        commodities: '12%',
        realEstate: '12%',
        tBills: '0%',
        alternative: '0%',
      },
      {
        riskScore: 2,
        nigerianStocks: '23%',
        foreignStocks: '5%',
        techStocks: '4%',
        emergingStocks: '7%',
        nigerianBonds: '35%',
        foreignBonds: '14%',
        commodities: '12%',
        realEstate: '0%',
        tBills: '0%',
        alternative: '0%',
      },
      {
        riskScore: 3,
        nigerianStocks: '26%',
        foreignStocks: '6%',
        techStocks: '4%',
        emergingStocks: '7%',
        nigerianBonds: '35%',
        foreignBonds: '10%',
        commodities: '12%',
        realEstate: '0%',
        tBills: '0%',
        alternative: '0%',
      },
      {
        riskScore: 4,
        nigerianStocks: '29%',
        foreignStocks: '7%',
        techStocks: '5%',
        emergingStocks: '6%',
        nigerianBonds: '35%',
        foreignBonds: '6%',
        commodities: '12%',
        realEstate: '0%',
        tBills: '0%',
        alternative: '0%',
      },
      {
        riskScore: 5,
        nigerianStocks: '31%',
        foreignStocks: '8%',
        techStocks: '6%',
        emergingStocks: '5%',
        nigerianBonds: '35%',
        foreignBonds: '6%',
        commodities: '3%',
        realEstate: '0%',
        tBills: '0%',
        alternative: '0%',
      },
      {
        riskScore: 6,
        nigerianStocks: '35%',
        foreignStocks: '8%',
        techStocks: '7%',
        emergingStocks: '3%',
        nigerianBonds: '35%',
        foreignBonds: '12%',
        commodities: '0%',
        realEstate: '0%',
        tBills: '0%',
        alternative: '0%',
      },
      {
        riskScore: 7,
        nigerianStocks: '45%',
        foreignStocks: '13%',
        techStocks: '12%',
        emergingStocks: '7%',
        nigerianBonds: '23%',
        foreignBonds: '0%',
        commodities: '0%',
        realEstate: '0%',
        tBills: '0%',
        alternative: '0%',
      },
      {
        riskScore: 8,
        nigerianStocks: '45%',
        foreignStocks: '15%',
        techStocks: '15%',
        emergingStocks: '9%',
        nigerianBonds: '16%',
        foreignBonds: '0%',
        commodities: '0%',
        realEstate: '0%',
        tBills: '0%',
        alternative: '0%',
      },
      {
        riskScore: 9,
        nigerianStocks: '45%',
        foreignStocks: '20%',
        techStocks: '19%',
        emergingStocks: '14%',
        nigerianBonds: '2%',
        foreignBonds: '0%',
        commodities: '0%',
        realEstate: '0%',
        tBills: '0%',
        alternative: '0%',
      },
      {
        riskScore: 10,
        nigerianStocks: '45%',
        foreignStocks: '20%',
        techStocks: '19%',
        emergingStocks: '14%',
        nigerianBonds: '2%',
        foreignBonds: '0%',
        commodities: '0%',
        realEstate: '0%',
        tBills: '0%',
        alternative: '0%',
      },
];

Risk.insertMany(data)
  .then((result) => {
    console.log('Data inserted successfully:', result);
  })
  .catch((error) => {
    console.error('Error inserting data:', error);
  });
