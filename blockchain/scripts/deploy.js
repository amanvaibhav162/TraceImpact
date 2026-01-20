const hre = require("hardhat");

async function main() {
  const TraceImpact = await hre.ethers.getContractFactory("TraceImpact");
  const traceImpact = await TraceImpact.deploy();

  await traceImpact.waitForDeployment();

  console.log(`TraceImpact deployed to: ${await traceImpact.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});