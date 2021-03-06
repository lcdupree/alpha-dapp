import React from 'react';
import ReactDOM from 'react-dom';
import Eth from 'ethjs';
import Registry from 'singularitynet-alpha-blockchain/Registry';
import Token from 'singularitynet-token-contracts/SingularityNetToken';
import Agent from 'singularitynet-alpha-blockchain/Agent';
import {Layout, Divider, Card, Icon, Spin, message, Alert, Row, Col} from 'antd';
import Account from './components/account';
import Services from './components/services';
import Job from './components/job';
import { NETWORKS, AGI } from './util';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      account:        undefined,
      ethBalance:     0,
      agiBalance:     0,
      chainId:        undefined,
      selectedAgent:  undefined
    };

    this.web3               = undefined;
    this.eth                = undefined;
    this.watchWalletTimer   = undefined;
    this.watchNetworkTimer  = undefined;
    this.agentContract      = undefined;
    this.registryInstance   = undefined;
    this.tokenInstance      = undefined;
  }

  componentWillMount() {
    window.addEventListener('load', () => this.handleWindowLoad());
  }

  componentWillUnmount() {
    if(this.watchWalletTimer) {
      clearInterval(this.watchWalletTimer);
    }
    if(this.watchNetworkTimer) {
      clearInterval(this.watchNetworkTimer);
    }
  }

  handleWindowLoad() {
    if(typeof window.web3 !== 'undefined') {
      this.web3          = window.web3;
      this.eth           = new Eth(window.web3.currentProvider);
      window.ethjs       = this.eth;
      this.agentContract = this.eth.contract(Agent.abi);

      this.watchWalletTimer  = setInterval(() => this.watchWallet(), 500);
      this.watchNetworkTimer = setInterval(() => this.watchNetwork(), 500);
    }
  }

  watchWallet() {
    this.eth.accounts().then(accounts => {

      if(accounts.length === 0) {
        console.log('wallet is locked');
        this.setState({account: undefined});
        return;
      } else if(accounts[0] !== this.state.account) {
        console.log('account: ' + accounts[0] + ' unlocked');
        this.setState({ account: accounts[0] });
      }

      this.eth.getBalance(accounts[0]).then(response => {
        let balance = Number(response.toString());
        if(balance !== this.state.ethBalance) {
          console.log('account eth balance is: ' + Eth.fromWei(balance, 'ether'));
          this.setState({ethBalance: balance});
        }
      })

      if(this.tokenInstance) {
        this.tokenInstance.balanceOf(this.state.account).then(response => {
          let balance = Number(response['balance']);
          if(balance !== this.state.agiBalance) {
            console.log('account agi balance is: ' + AGI.toDecimal(balance));
            this.setState({agiBalance: balance})
          }
        })
      } else {
        this.setState({agiBalance: 0})
      }
    });
  }

  watchNetwork() {
    this.eth.net_version().then(chainId => {

      if(this.state.chainId !== chainId && chainId !== undefined) {
        console.log("connected to network: " + NETWORKS[chainId].name);
        this.setState({chainId: chainId});

        this.registryInstance = (chainId in Registry.networks) ? this.eth.contract(Registry.abi).at(Registry.networks[chainId].address) : undefined;
        this.tokenInstance    = (chainId in Token.networks) ? this.eth.contract(Token.abi).at(Token.networks[chainId].address) : undefined;
      }
    })
  }

  hireAgent(agent) {
    console.log("Agent " + agent.name + " selected");
    this.setState({
      selectedAgent: agent
    });
  }

  render() {
    return (
      <div>
        <Layout style={{ minHeight: '100vh' }} >
          <Layout.Header style={{ background: 'rgb(35, 13, 58)' }}>
            <img src="/img/logo.svg" alt="SingularityNET" />
          </Layout.Header>
          <Layout.Content>
            <Row type="flex" justify="center" style={{ marginTop: '40px' }}>
              <Col xs={24} sm={24} md={22} lg={15} xl={18} span={9}>
                <Account network={this.state.chainId} account={this.state.account} ethBalance={this.state.ethBalance} agiBalance={this.state.agiBalance} />
                <Divider/>
                <Services network={this.state.chainId} registry={this.registryInstance} agentContract={this.agentContract} onAgentClick={(agent) => this.hireAgent(agent)} />
                <Divider/>
                {
                  this.state.selectedAgent &&
                  <Job network={this.state.chainId} account={this.state.account} agent={this.state.selectedAgent} token={this.tokenInstance} />
                }
              </Col>
            </Row>
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }} >SingularityNET</Layout.Footer>
        </Layout>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('react-root'),
);
