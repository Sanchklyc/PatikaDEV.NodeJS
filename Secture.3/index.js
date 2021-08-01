let blogs = [
  {
    id: 2,
    title: "Non id aute tempor elit occaecat.",
    content: "Commodo laborum enim eu est fugiat quis sint.",
  },
  {
    id: 1,
    title: "Amet veniam consequat voluptate cillum.",
    content:
      "Eiusmod id enim incididunt aliquip minim tempor consectetur proident et Lorem fugiat irure laboris aliqua.",
  },
  {
    id: 6,
    title: "Excepteur eiusmod reprehenderit labore.",
    content:
      "Cupidatat qui eu dolore velit Lorem laboris proident aliquip proident labore cillum.",
  },
  {
    id: 4,
    title: "Labore reprehenderit magna",
    content:
      "Laborum sunt ad elit id dolore nulla id incididunt incididunt ad eu.",
  },
  {
    id: 5,
    title: "Fugiat nisi est dolor ad.",
    content:
      "Minim amet adipisicing in sunt.Anim et do dolore do qui officia consequat ad nulla ut.",
  },
  {
    id: 3,
    title: "Ex incididunt commodo",
    content:
      "Ullamco exercitation commodo deserunt non aliqua amet tempor fugiat incididunt et mollit in.",
  },
];

let addBlog = (blogToAdd) => {
  console.log(`Adding blog to the list with id of ${blogToAdd.id}`);
  return new Promise((resolve, reject) => {
    if (blogs.filter((blog) => blog.id == blogToAdd.id).length > 0) {
      return reject("There is already a blog with that id.");
    }
    blogs.push(blogToAdd);
    return resolve("Blog added successfully.");
  });
};

let fetchBlogs = () => {
  console.log("Listing blogs..");
  blogs = blogs.sort((a, b) => {
    return a.id - b.id;
  });
  console.log(blogs);
};

fetchBlogs();

let lifeCycle = async () => {
  await addBlog({
    id: 1,
    title: "Non id aute tempor elit occaecat.",
    content: "Id ex officia excepteur tempor culpa est.",
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  await addBlog({
    id: 10,
    title: "Cillum incididunt consequat quis id.",
    content: "Nostrud nulla nostrud eiusmod eu sint occaecat.",
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  fetchBlogs();
};

lifeCycle();
