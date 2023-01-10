describe('Testing Numbers: ', () => {
  it('two plus two is equal to 4', () => {
    expect(2+2).toBe(4)
  })
  
  it('two plus two is equal to 4 using toEqual', () => {
    expect(2+2).toEqual(4)
  })
  
  it('should return a value greater than 3', () => {
    expect(2+2).toBeGreaterThan(3)
  })
  
  it('should return a value less than 5', () => {
    expect(2+2).toBeLessThan(5)
  })
  
  it('should return a value greater or equal than 5', () => {
    expect(2+2).toBeGreaterThanOrEqual(4)
  })

})

describe('Testing string: ', () => {
  const helloWorld = 'Hello world';

  it("The word 'Hello' it is in helloWorld variable", () => {
    expect(helloWorld).toMatch(/Hello/)
  })

  it("The word 'world' it is in helloWorld variable", () => {
    expect(helloWorld).toMatch(/world/)
  })

  it("The word 'hello' it is not in helloWorld variable", () => {
    expect(helloWorld).not.toMatch(/hello/)
  })
  
})

describe("Testing booleans: ", () => {

  var n = null;
  var falsyVar = false;
  var notDefined = undefined;

  it("Check 1 === 1 is true", () => {
    expect(1===1).toBeTruthy()
  })

  it("The variable 'n' should be null", () => {
    expect(n).toBeNull()
  })

  it("The variable 'falsyVar' should be false", () => {
    expect(falsyVar).toBeFalsy()
  })

  it("The variable 'notDefined' should be undefined", () => {
    expect(notDefined).toBeUndefined()
  })

})

describe("Testing arrays", () => {
  const fruits = ["Banana","Piña","Fresa","Guayaba","Fresa"];

  it("Must to be an Array", () => {
    expect(fruits).toBeInstanceOf(Array)
  })

  it("Array must contain 'Fresa'", ()=> {
    expect(new Set(fruits)).toContain("Fresa")
  })

  it("Array must not contain 'Aguacate'", ()=> {
    expect(new Set(fruits)).not.toContain("Aguacate")
  })

})

describe("Testing objects", () => {

  const obj = { token: 1, user: 'Jose', id: 1}
  const resObjAuth = { token: 1, user: 'Jose', id:  1 }

  it("Check if two objets are the same", () => {
    expect(obj).toEqual(resObjAuth)
  })

})

describe("Testing functions: ", () => {
  
  const palindrome = word => word.split('').reverse().join('');

  it("Should return true if hello is equal to olleh", () => {
    expect(palindrome('hello')).toBe('olleh');
  })
})

describe("Testing promise:", () => {
  
  const palindrome = word => {
    return new Promise( (resolve,reject)=> {
      if(!word) reject('Word is empty');
      const flipedWord = word.split('').reverse().join('');
      resolve(flipedWord)
    })
  }

  it("Should return true if hello is equal to olleh (async/await)", async () => {
    const response = await palindrome('hello');
    expect(response).toBe('olleh');
  })

  it("Should return true if hello is equal to olleh (then)", () => {
    return palindrome('hello')
      .then(str => {
        expect(str).toBe('olleh')
      });
  })

})

describe("Testing excepctions", () => {
  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
  }

  it("compiling android should return an Error", () => {
    expect(() => compileAndroidCode()).toThrow(Error);
  })

  it("compiling android should return an Error message: 'you are using the wrong JDK!'", () => {
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK!');
  })

})

