// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title TraceImpact
 * @dev Enforces transparency by linking expenditures to IPFS-hosted proofs.
 */
contract TraceImpact {
    struct Expense {
        uint256 amount;
        string purpose;
        string ipfsCID; // The immutable proof from IPFS [cite: 22, 74]
        uint256 timestamp;
    }

    struct Campaign {
        address payable organization;
        string title;
        uint256 goalAmount;
        uint256 raisedAmount;
        bool isCompleted;
        Expense[] expenses; // The history of every rupee spent [cite: 23, 27]
    }

    mapping(uint256 => Campaign) public campaigns;
    uint256 public campaignCount;

    event DonationReceived(uint256 indexed campaignId, address indexed donor, uint256 amount);
    event ExpenseLogged(uint256 indexed campaignId, uint256 amount, string purpose, string ipfsCID);

    modifier onlyOrg(uint256 _campaignId) {
        require(msg.sender == campaigns[_campaignId].organization, "TraceImpact: Not authorized");
        _;
    }

    function createCampaign(string memory _title, uint256 _goal) public {
        campaignCount++;
        Campaign storage c = campaigns[campaignCount];
        c.organization = payable(msg.sender);
        c.title = _title;
        c.goalAmount = _goal;
        c.isCompleted = false;
    }

    function donate(uint256 _campaignId) public payable {
        require(msg.value > 0, "TraceImpact: Donation must be > 0");
        Campaign storage c = campaigns[_campaignId];
        require(!c.isCompleted, "TraceImpact: Campaign closed");

        c.raisedAmount += msg.value;
        emit DonationReceived(_campaignId, msg.sender, msg.value);
    }

    function logExpense(uint256 _campaignId, uint256 _amount, string memory _purpose, string memory _cid) 
        public 
        onlyOrg(_campaignId) 
    {
        Campaign storage c = campaigns[_campaignId];
        require(address(this).balance >= _amount, "TraceImpact: Insufficient funds");

        c.expenses.push(Expense({
            amount: _amount,
            purpose: _purpose,
            ipfsCID: _cid,
            timestamp: block.timestamp
        }));

        c.organization.transfer(_amount); // Fund release upon proof submission [cite: 68-70]
        emit ExpenseLogged(_campaignId, _amount, _purpose, _cid);
    }

    function getExpenses(uint256 _campaignId) public view returns (Expense[] memory) {
        return campaigns[_campaignId].expenses;
    }
}