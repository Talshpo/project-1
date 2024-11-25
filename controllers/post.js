const getAllPosts = async (req, res) => {
console.log('Posts get all  server');
res.send('Posts get all  server');

};


const createPost = async (req, res) => { 
console.log('Posts created server');
res.send('Posts created server'); 

};

module.exports = { getAllPosts, createPost };
