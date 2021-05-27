const { assert } = require('chai');

const SocialNetwork = artifacts.require('./SocialNetwork.sol');

require('chai')
  .use(require('chai-as-promised'))
  .should()
                        //v callback function
contract('SocialNetwork', (accounts) => {
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
      
    it('creates posts', async ()=> {

    })
    it('lists posts', async ()=> {
      
    })
    it('allow users to tip posts', async ()=> {
      
    })
})