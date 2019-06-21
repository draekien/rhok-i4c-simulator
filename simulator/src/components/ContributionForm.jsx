import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

class ContributionForm extends Component {
  constructor(props) {
    super(props);
    this.state = { fundTotal: "", contributionAmount: "" };
  }

  componentDidMount() {
    const MIN_FUND_AMOUNT = 500000;
    const MAX_FUND_AMOUNT = 1000000;
    const MIN_CONTRIBUTION_AMOUNT = 4;
    const MAX_CONTRIBUTION_AMOUNT = 12;

    function getRandomFundTotal(max) {
      return (Math.random() * max + MIN_FUND_AMOUNT).toFixed(2);
    }

    function getRandomContributionAmount(max) {
      return (Math.random() * max + MIN_CONTRIBUTION_AMOUNT).toFixed(1);
    }

    function numberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var total = numberWithCommas(getRandomFundTotal(MAX_FUND_AMOUNT));
    var contribution = getRandomContributionAmount(MAX_CONTRIBUTION_AMOUNT);
    this.setState({ fundTotal: total, contributionAmount: contribution });
  }

  render() {
    var fundTotal = this.state.fundTotal;
    var contributionAmount = this.state.contributionAmount;

    return (
      <div className="contribution-form">
        <div className="form-group">
          <label htmlFor="fund-total" className="input-label">
            Fund Total
          </label>
          <div className="input-group">
            <span>
              <FontAwesomeIcon icon={faDollarSign} />
            </span>
            <input className="form-input" id="fund-total" defaultValue={fundTotal} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="contribution-percentage" className="input-label">
            Contribution Percentage
          </label>
          <input
            className="form-input"
            type="range"
            id="contribution-percentage"
            min="0"
            max="20"
            step="0.1"
            defaultValue={contributionAmount}
          />
          <output htmlFor="contribution-percentage" id="contribution-percentage-output">
            {contributionAmount}
          </output>
        </div>
      </div>
    );
  }
}

export default ContributionForm;
