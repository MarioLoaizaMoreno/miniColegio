const Course = require("../models/course");
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
const create = async (req, res) => {
    if(!req.body.name || !req.body.email || !req.body.nameCourse || !req.body.codeCourse) 
        return res.status(401).send({message: 'process failed: Incomplete data'});
    const existing = await Course.findOne({ codeCourse: req.body.codeCourse });
    if(existing)
        return res.status(401).send("preccess failed: the code course is already registered");
    const course = new Course({
        name: req.body.name,
        email: req.body.email,
        nameCourse: req.body.nameCourse,
        codeCourse:req.body.codeCourse,
        status: true
    });
    const result = course.save();
    if(result) return res.status(200).send({message: 'Course register', data: course});
    return res.status(401).send({message: 'Fail to register course'});
};
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
const list = async (req, res) => {
    const course = await Course.find();
    if(course.length === 0) return res.status(401).send({message: 'Not course found'});
    return res.status(200).send(course);   
}
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
module.exports = {create, list};