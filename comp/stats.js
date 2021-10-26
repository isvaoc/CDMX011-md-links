function stats(array){
    let broken = [];
    let links = array.map(elem => {
        if (elem.status == 404){
            broken.push(elem.status)
        }
        return elem.href
    }).sort();

    let unique = [];
    for (let i = 0; i < links.length; i++){
        if (links[i] != links[i+1]){
            unique.push(links[i])
        }
    }
    
    let result = {
        'Total': array.length,
        'Unique': unique.length,
        'Broken': broken.length
    }

    if (Object.keys(array[1]).length != 5) {
        delete result.Broken
    }

    return result
}

exports.stats = stats