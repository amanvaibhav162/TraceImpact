// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title TraceImpact
 * @dev A transparent donation system linking on-chain funds to off-chain IPFS proofs.
 */
contract TraceImpact {
    
    struct Expense {
        uint256 amount;
        string purpose;
        string ipfsCID; // The permanent link to the bill/receipt
        uint256 timestamp;
    }

    struct Campaign {
        address payable organization;
        string title;
        uint256 goalAmount;
        uint256 raisedAmount;
        bool isCompleted;
        Expense[] expenses; // The record of every rupee spent
    }

    mapping(uint256 => Campaign) public campaigns;
    uint256 public campaignCount;

    // Events allow your Node.js backend to update the dashboard instantly
    event DonationReceived(uint256 indexed campaignId, address indexed donor, uint256 amount);
    event ExpenseLogged(uint256 indexed campaignId, uint256 amount, string purpose, string ipfsCID);

    // ensures only the organization that started the campaign can spend the funds
    modifier onlyOrg(uint256 _campaignId) {
        require(msg.sender == campaigns[_campaignId].organization, "Not authorized");
        _;
    }

    /**
     * @dev Create a new fundraising campaign
     */
    function createCampaign(string memory _title, uint256 _goal) public {
        campaignCount++;
        Campaign storage c = campaigns[campaignCount];
        c.organization = payable(msg.sender);
        c.title = _title;
        c.goalAmount = _goal;
        c.isCompleted = false;
    }

    /**
     * @dev Accepts donations and logs them to the specific campaign
     */
    function donate(uint256 _campaignId) public payable {
        require(msg.value > 0, "Donation must be > 0");
        Campaign storage c = campaigns[_campaignId];
        require(!c.isCompleted, "Campaign is closed");

        c.raisedAmount += msg.value;
        emit DonationReceived(_campaignId, msg.sender, msg.value);
    }

    /**
     * @dev Log an expense. The funds are sent to the Org ONLY if they provide a proof CID.
     */
    function logExpense(uint256 _campaignId, uint256 _amount, string memory _purpose, string memory _cid) 
        public 
        onlyOrg(_campaignId) 
    {
        Campaign storage c = campaigns[_campaignId];
        require(address(this).balance >= _amount, "Insufficient contract balance");

        // 1. Record the proof permanently
        c.expenses.push(Expense({
            amount: _amount,
            purpose: _purpose,
            ipfsCID: _cid,
            timestamp: block.timestamp
        }));

        // 2. Transfer the funds to the organization for this specific expense
        c.organization.transfer(_amount);

        emit ExpenseLogged(_campaignId, _amount, _purpose, _cid);
    }

    /**
     * @dev Verification function: Pulls the full spending history for any campaign
     */
    function getExpenses(uint256 _campaignId) public view returns (Expense[] memory) {
        return campaigns[_campaignId].expenses;
    }
}