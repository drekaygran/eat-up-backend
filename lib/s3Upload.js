// 'use strict'
// require('dotenv').config()
// const AWS = require('aws-sdk')
// const fs = require('fs')
// const S3 = new AWS.S3()
// const path = require('path')
// const mime = require('mime-types')
//
// const image = process.argv[2]
//
// // promise version of fs.readimage
// // should only worry about reading a image
// const promiseReadFile = function (imagePath) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(imagePath, (err, data) => {
//       if (err) reject(err)
//       else resolve(data)
//     })
//   })
// }
//
// promiseReadFile(image)
//   .then(imageData => {
//     const type = mime.lookup(image)
//     // use date to generate timestamp
//     // use path.basename to geth the image name not full path
//     const imageName = Date.now() + '_' + path.basename(image)
//
//     const params = {
//       Bucket: process.env.BUCKET_NAME,
//       Key: imageName,
//       Body: imageData,
//       // look up mime type of the image to assign content type
//       ContentType: type,
//       ACL: 'public-read'
//     }
//     return params
//   })
//   .then(params => {
//     return S3.upload(params).promise()
//   })
//   .catch(console.error)
//
// module.exports = S3
