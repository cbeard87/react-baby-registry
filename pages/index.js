import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';

fetch('https://www.walmart.com/api/lists//60696de2-308e-4033-bab6-1394bb676fcf/items?cid:CID=&pass=SUBSCRIBED&listType=BR&page=1&pageSize=20&sort=CATEGORY&order=ASC', {mode: 'no-cors'})
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 1200,
    overflowY: 'auto'
  }
};

const storeData = {
  babiesRUs: {
    name: 'Babies R Us',
    logo: './images/babiesrus-logo.jpg',
    registryUrl: 'https://www.toysrus.com/registry/link/index.jsp?overrideStore=TRUS&registryNumber=59164832'
  }
};

const productData = [
  {
    img: './images/car-seat.jpg',
    title: 'Chicco KeyFit 30 Infant Car Seat - Regatta',
    url: 'https://www.toysrus.com/product/index.jsp?productId=108289696&fromRegistryNumber=59164832&product_skn=525396',
    manufacturer: 'Chicco'
  },
  {
    img: './images/changing-table.jpg',
    title: 'Dream On Me Emily Changing Table - Cherry',
    url: 'https://www.toysrus.com/product/index.jsp?productId=22269626&fromRegistryNumber=59164832&product_skn=758970',
    manufacturer: 'Dream On Me'
  },
  {
    img: './images/convertible-crib.jpg',
    title: 'Graco Lauren Convertible Crib - Cherry',
    url: 'https://www.toysrus.com/product/index.jsp?productId=50556366&fromRegistryNumber=59164832&product_skn=436067',
    manufacturer: 'Storkcraft'
  },
  {
    img: './images/mattress.jpg',
    title: 'Serta Perfect Embrace Crib and Toddler Mattress',
    url: 'https://www.toysrus.com/product/index.jsp?productId=53004376&fromRegistryNumber=59164832&product_skn=10015',
    manufacturer: 'Serta'
  },
  {
    img: './images/stroller.jpg',
    title: 'Chicco KeyFit Caddy Infant Car Seat Carrier Stroller',
    url: 'https://www.toysrus.com/product/index.jsp?productId=11820851&fromRegistryNumber=59164832&product_skn=530412',
    manufacturer: 'Chicco'
  },
];

export default class Index extends React.Component {
  static metadata() {
    return {
      title: '',
      description: 'Ezra Reese Beard\'s Baby Registry'
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Helmet
          title={`${Index.metadata().title} | ${config.siteTitle}`}
          meta={[
            {
              name: 'description',
              content: 'A real time baby registry that collects the items you have listed across different stores, and keeps track of what products have been purchased.',
            },
            { property: 'og:title', content: `${Index.metadata().title} ${config.siteTitle}` },
            { property: 'og:description', content: Index.metadata().description },
            { property: 'og:image', content: 'https://assets.scaphold.io/community/Scaphold_Community_Open_Graph.png' },
            { property: 'og:url', content: `${config.baseUrl}${config.linkPrefix}${this.props.route.page.path}` },
          ]}
        />
        <div style={styles.root}>
          <GridList cellHeight={'auto'} cols={3} padding={10} style={styles.gridList}>
            <Subheader>
              <a href={storeData.babiesRUs.registryUrl} target="_blank">
                <img src={storeData.babiesRUs.logo} alt={storeData.babiesRUs.name} />
              </a>
            </Subheader>
            {productData.map((product) =>
              <GridTile key={product.img} title={product.title} subtitle={`by ${product.manufacturer}`} actionIcon={<IconButton><AddShoppingCart color="white" /></IconButton>} >
                <a href={product.url}><img src={product.img} /></a>
              </GridTile>
            )}
          </GridList>
        </div>
      </div>
    );
  }
}

Index.propTypes = {
  route: React.PropTypes.object
};
