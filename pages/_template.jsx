import React from 'react';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/markdown-styles';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { config } from 'config';
import { prefixLink } from 'gatsby-helpers';
import { rhythm } from '../utils/typography';

injectTapEventPlugin();

export default class BaseTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title={config.siteTitle} onLeftIconButtonTouchTap={this.handleToggle} />
          <Drawer open={this.state.open} openSecondary={true}>
            <MenuItem onTouchTap={this.handleToggle}>Menu Item</MenuItem>
            <MenuItem onTouchTap={this.handleToggle}>Menu Item 2</MenuItem>
          </Drawer>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

BaseTemplate.propTypes = {
  children: React.PropTypes.object,
};
