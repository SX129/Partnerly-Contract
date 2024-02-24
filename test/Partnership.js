const { expect } = require("chai");

// Test suite for the Partnership contract
describe("Partnership", () => {
    it("can be deployed by providing at least two addresses and equal amounts of split ratios on initialization", async () => {
        const Contract = await ethers.getContractFactory("Partnership");

        const [owner, person1] = await ethers.getSigners();
        const addresses = [owner.address, person1.address];

        const splitRatios = [1, 1];

        const contract = await Contract.deploy(addresses, splitRatios);

        await contract.deployed();
    });

    it("can not be deployed when the split ratios are not equivalent to the address amount", async () => {
        const Contract = await ethers.getContractFactory("Partnership");

        const [owner, person1] = await ethers.getSigners();
        const addresses = [owner.address, person1.address];

        const splitRatios = [1, 1, 1];

        await expect(Contract.deploy(addresses, splitRatios)).to.be.revertedWith("The address amount and the split ratio must be equal");
    });

    it("can not be deployed when the address amount is less than two", async () => {
        const Contract = await ethers.getContractFactory("Partnership");

        const [owner] = await ethers.getSigners();
        const addresses = [owner.address];

        const splitRatios = [1];

        await expect(Contract.deploy(addresses, splitRatios)).to.be.revertedWith("The address amount must be at least two");
    });
});