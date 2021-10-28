const files = require('../comp/findFiles.js');
const links = require('../comp/findLinks.js');
const stats = require('../comp/stats.js');
const validate = require('../comp/validate.js');
const mdLinks = require('../comp/mdLinks.js');
const data = require('./data.js');

describe('FindFiles', () => {
  it('should be a function', () => {
    expect(typeof files.findFiles).toBe('function')
  });

  it("should find md files even if they have no name", () => {
    const result1 = files.findFiles('../.md');
    expect(result1).toEqual(data.filesData[0]);
  });

  it("It should not return anything with files that start with '.'", () => {
    const result2 = files.findFiles('C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\.gitignore');
    expect(result2).toEqual(data.filesData[1]);
  });

  it("It should not return anything with files that do not have .md", () => {
    const result3 = files.findFiles('C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\package.json');
    expect(result3).toEqual(data.filesData[1]);
  });

  it("should return a md file", () => {
    const result4 = files.findFiles('../README.md');
    expect(result4).toEqual(data.filesData[3]);
  });

  it("should return an array with all the md files", () => {
    const result4 = files.findFiles('C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas');
    expect(result4).toEqual(data.filesMd);
  });
});


describe('FindLinks', () => {
  it('should be a function', () => {
    expect(typeof links.findLinks).toBe('function')
  });

  it("you should find the links inside the md files", () => {
    const array = links.findLinks(data.filesData[2]);
    expect(array).toEqual(data.resultLinks);
  });
});


describe('Validate', () => {
  it('should be a function', () => {
    expect(typeof validate.validate).toBe('function')
  });

  test('should return an object with the status code 200', () => {
    return validate.validate(data.objLink200).then(res => {
      expect(res).toEqual(data.arrayValidated[0]);
    });
  });

  test('should return an object with the status code 404', () => {
    return validate.validate(data.objLink404).catch(res => {
      expect(res).toEqual(data.arrayValidated[4]);
    });
  });

  test('should return an object with the status deprecated', () => {
    return validate.validate(data.objLinkDep).catch(res => {
      expect(res).toEqual(data.resDep);
    });
  });
});


describe('stats', () => {
  it('should be a function', () => {
    expect(typeof stats.stats).toBe('function')
  });

  it("should return an object with 3 properties when validate is true", () => {
    const validateTrue = stats.stats(data.arrayValidated);
    expect(validateTrue).toEqual(data.resultArrayValidated);
  });

  it("should return an object with 2 properties when validate is false", () => {
    const validateFalse = stats.stats(data.arraySimple);
    expect(validateFalse).toEqual(data.resultArraySimple);
  });
});



describe('mdLinks', () => {
  it('should be a function', () => {
     expect(typeof mdLinks.mdLinks).toBe('function')
   });
 
   test('should say that there are not md files in that path', () => {
     const path = 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\coverage'
     const options = {validate:false, stats: false}
     return mdLinks.mdLinks(path, options).catch(res => {
       expect(res).toBe('There are no md files in this path');
     });
   });
 
   test('should say that there are not links in that path', () => {
     const path = 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\.md'
     const options = {validate:false, stats: false}
     return mdLinks.mdLinks(path, options).catch(res => {
       expect(res).toBe('There are no links in this path');
     });
   });
 
   test('should return an unvalidated array', () => {
     const path = 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\readme0.md'
     const options = {validate:false, stats: false}
     return mdLinks.mdLinks(path, options).then(res => {
       expect(res).toEqual(data.arrayMdLinks);
     });
   });
 
   test('should return a validated array', () => {
     const path = 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\readme0.md'
     const options = {validate:true, stats: false}
     return mdLinks.mdLinks(path, options).then(res => {
       expect(res).toEqual(data.arrayMdLinksSimple);
     });
   });
 });
