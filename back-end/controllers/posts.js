import PostWord from '../models/postWord.js'

export const getPosts = async (req, res) => {
  try {
    const postWords = await PostWord.find()
    console.log(postWords);
    res.status(200).json(postWords);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }

};

export const createPosts = async(req, res) => {
    const post = req.body;

    const newPost = new PostWord(post)

    try {
        await newPost.save()
        res.status(200).json(newPost)
      } catch (error) {
        res.status(409).json({ message: error.message })
      }
    
}