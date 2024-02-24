describe("Partnership", () => {
    it("can be deployed by providing two addresses on initalization", async () => {
        const Contract = await hre.ethers.getContractFactory("Partnership");

        const [owner, person1] = await hre.ethers.getSigners();

        const addresses = [owner.address, person1.address];
        const contract = await Contract.deploy(addresses);
        await contract.deployed();
    });
});