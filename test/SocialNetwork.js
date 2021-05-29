const { assert, should } = require('chai');

const SocialNetwork = artifacts.require('./SocialNetwork.sol');

require('chai')
  .use(require('chai-as-promised'))
  .should()
                        //v callback function
// contract('SocialNetwork', (accounts) => {
contract('SocialNetwork', ([deployer, author, tipper]) => {
  let socialNetwork

  before(async ()=>{
    socialNetwork = await SocialNetwork.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async ()=>{
      // socialNetwork = await SocialNetwork.deployed()
      const address = await socialNetwork.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })
    it('has a name', async ()=>{
      const name = await socialNetwork.name()
      assert.equal(name, 'Ashutosh Social Network')
    }) 
  })

  describe('posts', async ()=> {
    let result, postCount

    it('creates posts', async ()=> {
      result = await socialNetwork.createPost('This is my first post', {from: author })
      postCount= await socialNetwork.postCount()

      //Success
      assert.equal(postCount, 1)
      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), postCount.toNumber(), 'ID is correct')
      assert.equal(event.content, 'This is my first post', 'Content is correct')
      assert.equal(event.tipAmount , '0', 'Tip amount is correct')
      assert.equal(event.author, author, 'Author is correct')

      //Failure
      await socialNetwork.createPost('', {from: author }).should.be.rejected;
    })

    // it('lists posts', async ()=> {
      
    // })
    // it('allow users to tip posts', async ()=> {
      
    // })
  })








})