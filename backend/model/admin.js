
const mongoose = require('mongoose');

const schema = mongoose.Schema
const adminschema = new schema({
    jobid : String,
    jobtitle : String,
    jobposteddate :{type:Date,default:Date.now},
    role : String,
    responsibility : String,
    companyname : String,
    experience : String,
    salaryrange : String,
    noofpositions : String,
    location : String,
    skills : String,
    qualification : String,
    degree : String,
    companyinfo : String,
    employmenttype : String,
    industrytype : String,
    searchkeyword : String,
    jobdescription : String
});

module.exports = mongoose.model('admin',adminschema,'admin');
