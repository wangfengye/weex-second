
const stream = weex.requireModule('stream');

const myFetch=()=>{
    return new Promise(function(resolve,reject){})
}
var url = "http://gank.io/api/data/福利/"
const getImages = (count, page, callback) => stream.fetch({
    method: 'GET',
    type: 'json', url: url + count + "/" + page
}, callback)


export { getImages}