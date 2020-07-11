const Marketplace = artifacts.require("Marketplace");
const LittleToken = artifacts.require("LittleToken");

module.exports = function(deployer) {
  deployer.deploy(Marketplace);
  deployer.deploy(LittleToken);
};