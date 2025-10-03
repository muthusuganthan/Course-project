const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const prisma = new PrismaClient();
const { z, ZodError } = require("zod");

coursegetbyidschema = z.object({
  id: z.string(),
});

  coursedeletebyidschema = z.object({
  course_id: z.string(),
 });



coursepostschema = z.object({
  course_id: z.string(),
  course_name: z.string(),
  course_description: z.string(),
  course_image: z.string(),
  course_rating: z.string(),
  course_duration: z.string(),
  course_price: z.string(),
});

courseupdateschema = z.object({
  course_id: z.string(),
  course_name: z.string(),
  course_description: z.string(),
  course_image: z.string(),
  course_rating: z.string(),
  course_duration: z.string(),
  course_price: z.string(),
});


app.get("/", async (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

// get all the data

app.get("/courses", async (req, res) => {
  // data from frontend

  // db logic
  try {
    const courses = await prisma.user.findMany();
    // data to frontend
    res.status(200).json({ message: "all  course details", data: courses });
  } catch (error) {
    res.status(500).json({ message: "internal server error", error: error });
  }
});

//  get one data by id

app.get("/courses/:id", async (req, res) => {
  try {
    // data from frontend
    const { id } = coursegetbyidschema.parse(req.params);

    // db logic
    const courseid = await prisma.user.findUnique({
      where: { course_id: id },
    });

    // data to frontend
    res.status(200).json({ message: "course details by id", data: courseid });
  } catch (error) {
    res.status(500).json({ message: "internal server error", error: error });
  }
});

// add a new course

app.post("/courseadd", async (req, res) => {
  try {
    // data from frontend
    const data = coursepostschema.parse(req.body);
    // db logic
    const addcourse = await prisma.user.create({
      data: {
        course_id: data.course_id,
        course_name: data.course_name,
        course_duration: data.course_duration,
        course_description: data.course_description,
        course_image: data.course_image,
        course_price: data.course_price,
        course_rating: data.course_rating
      },
    });

    // data to frontend
    res.status(200).json({ message: "courses add sucessfully", data: addcourse });
  } catch (error) {
    res.status(500).json({ message: "internal server error", error: error });
  }
});

// update a new course

app.put("/coursesupdate", async (req, res) => {
  try {
    // data from frontend
    const data = courseupdateschema.parse(req.body);

    // db logic
    const updatecourse = await prisma.user.update({
      where: { course_id: data.course_id },
      data: {
        course_name: data.course_name,
        course_duration: data.course_duration,
        course_description: data.course_description,
        course_image: data.course_image,
        course_price: data.course_price,
        course_rating: data.course_rating
      },
    });

    // data to frontend
    res
      .status(200)
      .json({ message: "course updated sucessfully", data: updatecourse });
  } catch (error) {
    res.status(500).json({ message: "internal server error", error: error });
  }
});

// delete a course

app.delete("/deletecourse", async (req, res) => {
  try {
    // data from frontend
    const { course_id } = req.body;

    // db logic
    const deletecourse = await prisma.user.delete({
      where: { course_id: course_id },
    });
    // data to frontend
    res.status(200).json({ message: "course deleted sucessfully" });
  } catch (error) {
    res.status(500).json({ message: "internal server error", error: error });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
