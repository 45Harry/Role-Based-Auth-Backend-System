const musicModel = require("../models/music.model")
const albumModel = require("../models/album.model")
//const userModel = require("../models/user.model")
const { uploadFile } = require("../services/storage.service")
const jwt = require("jsonwebtoken")

async function createMusic(req, res) {

    const { title } = req.body;
    const file = req.file;
   // console.log(file,"Harry")
    const result = await uploadFile(file.buffer.toString("Base64"))

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id,
    })

    res.status(201).json({
        message: "Music created sucessfully",
        music: {
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist,
        }
    })

}


async function createAlbum(req, res) {

    const { title, musics } = req.body

    const album = await albumModel.create({
        title,
        artist: res.user.id,
        musics: musics
    })

    res.status(201).json({
        message: "Album created sucessfully",
        album: {
            id: album._id,
            title: album.title,
            artist: album.artist,
            musics: album.musics
        }
    })

}

async function getAllMusics(req,res){
    const musics = await musicModel.find().populate("artist","username email")

    res.status(200).json({
        message: "Music fetched sucessfully",
        musics: musics
    })

}
module.exports = { createMusic, createAlbum,getAllMusics }