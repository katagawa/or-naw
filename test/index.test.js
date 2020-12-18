/* test/index.test.js */
/* globals describe, it */

const expect = require('chai').expect

describe('OrNaw', function () {
  const A = require('../index')

  describe('#arrayOrNaw', function () {
    it('should throw a ReferenceError', function () {
      expect(A.arrayOrNaw.bind(A)).to.throw(ReferenceError)
    })

    it('should throw a TypeError', function () {
      expect(A.arrayOrNaw.bind(A, 1, 'foo')).to.throw(TypeError)
    })

    it('should successfully execute', function () {
      expect(A.arrayOrNaw([])).to.equal(undefined)
    })
  })

  describe('#booleanOrNaw', function () {
    it('should throw a ReferenceError', function () {
      expect(A.booleanOrNaw.bind(A)).to.throw(ReferenceError)
    })

    it('should throw a TypeError', function () {
      expect(A.booleanOrNaw.bind(A, 1, 'foo')).to.throw(TypeError)
    })

    it('should successfully execute', function () {
      expect(A.booleanOrNaw(true)).to.equal(undefined)
    })
  })

  describe('#dateOrNaw', function () {
    it('should throw a ReferenceError', function () {
      expect(A.dateOrNaw.bind(A)).to.throw(ReferenceError)
    })

    it('should throw a TypeError', function () {
      expect(A.dateOrNaw.bind(A, 1, 'foo')).to.throw(TypeError)
    })

    it('should successfully execute', function () {
      expect(A.dateOrNaw(new Date())).to.equal(undefined)
    })
  })

  describe('#definedOrNaw', function () {
    it('should throw a ReferenceError', function () {
      expect(A.definedOrNaw.bind(A)).to.throw(ReferenceError)
    })

    it('should successfully execute', function () {
      expect(A.definedOrNaw(1, 'foo')).to.equal(undefined)
    })
  })

  describe('#elementOrNaw', function () {
    it('should throw a ReferenceError', function () {
      expect(A.elementOrNaw.bind(A)).to.throw(ReferenceError)
    })

    it('should throw a TypeError', function () {
      expect(A.elementOrNaw.bind(A, 1, 'foo')).to.throw(TypeError)
    })

    it('should successfully execute', function () {
      function Element () {
        this.nodeType = 1
      }

      expect(A.elementOrNaw(new Element())).to.equal(undefined)
    })
  })

  describe('#errorOrNaw', function () {
    it('should throw a ReferenceError', function () {
      expect(A.errorOrNaw.bind(A)).to.throw(ReferenceError)
    })

    it('should throw a TypeError', function () {
      expect(A.errorOrNaw.bind(A, 1, 'foo')).to.throw(TypeError)
    })

    it('should successfully execute', function () {
      expect(A.errorOrNaw(new Error())).to.equal(undefined)
    })
  })

  describe('#functionOrNaw', function () {
    it('should throw a ReferenceError', function () {
      expect(A.functionOrNaw.bind(A)).to.throw(ReferenceError)
    })

    it('should throw a TypeError', function () {
      expect(A.functionOrNaw.bind(A, 1, 'foo')).to.throw(TypeError)
    })

    it('should successfully execute', function () {
      expect(A.functionOrNaw(() => null)).to.equal(undefined)
    })
  })

  describe('#numberOrNaw', function () {
    it('should throw a ReferenceError', function () {
      expect(A.numberOrNaw.bind(A)).to.throw(ReferenceError)
    })

    it('should throw a TypeError', function () {
      expect(A.numberOrNaw.bind(A, true, 'foo')).to.throw(TypeError)
    })

    it('should successfully execute', function () {
      expect(A.numberOrNaw(0)).to.equal(undefined)
    })
  })

  describe('#objectOrNaw', function () {
    it('should throw a ReferenceError', function () {
      expect(A.objectOrNaw.bind(A)).to.throw(ReferenceError)
    })

    it('should throw a RangeError', function () {
      let err

      try {
        A.objectOrNaw(null, 'foo')
      } catch (x) {
        err = x
      }

      expect(err).to.be.an.instanceof(RangeError)
      expect(err.message).to.equal('foo is null')
    })

    it('should throw a TypeError', function () {
      expect(A.objectOrNaw.bind(A, 1)).to.throw(TypeError)
    })

    it('should successfully execute', function () {
      expect(A.objectOrNaw({})).to.equal(undefined)
    })
  })

  describe('#stringOrNaw', function () {
    it('should throw a ReferenceError', function () {
      expect(A.stringOrNaw.bind(A)).to.throw(ReferenceError)
    })

    it('should throw a TypeError', function () {
      expect(A.stringOrNaw.bind(A, 1, 'foo')).to.throw(TypeError)
    })

    it('should successfully execute', function () {
      expect(A.stringOrNaw('')).to.equal(undefined)
    })
  })

  describe('#undefinedOrNaw', function () {
    it('should throw a RangeError', function () {
      expect(A.undefinedOrNaw.bind(A, 1, 'foo')).to.throw(RangeError)
    })

    it('should successfully execute', function () {
      expect(A.undefinedOrNaw()).to.equal(undefined)
    })
  })
})
