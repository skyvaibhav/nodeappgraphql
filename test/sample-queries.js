//to get only 1 course with id:1
graphQl_1 = `query getCourseById {
    course (id: 1) {
        id
        title
        author
        description
        topic
        url
    }  
}`

//to get only all the course's
graphQl_2 = `query getAllCourses {
    courses {
      id
      title
      author
      description
      topic
      url
    }  
}`

//to get only one the course with dynamic variable
graphQl_3 = `query getSingleCourse($courseID: Int!) {
    course(id: $courseID) {
        title
        author
        description
        topic
        url
    }
}`

variable_3 = { 
    "courseID":1
}

//to get course with fragments with dynamic variable
graphQl_4 = `query getCourseWithFragments($courseID1: Int!, $courseID2: Int!) {
        course1: course(id: $courseID1) {
            ...courseFields
        },
        course2: course(id: $courseID2) {
            ...courseFields
        } 
    }
    fragment courseFields on Course {
    title
    author
    description
    topic
    url
}`

variable_4 = { 
    "courseID1":1,
    "courseID2":2
}


// TODO: mutation sample's
