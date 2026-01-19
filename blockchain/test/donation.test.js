const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TraceImpact", function () {
  let traceImpact, owner, donor, org;

  beforeEach(async () => {
    [owner, donor, org] = await ethers.getSigners();
    const TraceContract = await ethers.getContractFactory("TraceImpact");
    traceImpact = await TraceContract.deploy();
  });

  it("Should log a donation and update campaign progress", async function () {
    await traceImpact.connect(org).createCampaign("Test Charity", ethers.parseEther("10"));
    await traceImpact.connect(donor).donate(1, { value: ethers.parseEther("1") });
    
    const campaign = await traceImpact.campaigns(1);
    expect(campaign.raisedAmount).to.equal(ethers.parseEther("1"));
  });

  it("Should only allow the organization to log expenses", async function () {
    await traceImpact.connect(org).createCampaign("Test Charity", ethers.parseEther("10"));
    await traceImpact.connect(donor).donate(1, { value: ethers.parseEther("5") });
    
    await expect(
      traceImpact.connect(donor).logExpense(1, ethers.parseEther("1"), "Supplies", "QmProof")
    ).to.be.revertedWith("TraceImpact: Not authorized");
  });
});