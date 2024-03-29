import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainSection from '../components/MainSection';
import SiteMain from '../components/layout/SiteMain';
import PageTitle from '../components/layout/PageTitle';

export default class HomePage extends Component {
  static contextTypes = {
    showModal: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
  };

  render() {
    return (
      <SiteMain>
        <div style={{marginBottom: '52px', paddingLeft: 8, paddingRight: 8,}}>
          <PageTitle>Home</PageTitle>
          <MainSection />
          <div>
            <button
              appearance="primary"
              onClick={this.context.showModal}
              onClose={() => { }}
            >Click to view Atlaskit modal</button>
            <p>Lorem ipsum dolor amet pickled kinfolk pour-over ugh etsy taiyaki, palo santo shaman jean shorts tattooed hell of master cleanse migas. Thundercats gochujang single-origin coffee pok pok jean shorts aesthetic cardigan sriracha authentic air plant. Bicycle rights wolf green juice tousled before they sold out meditation scenester, forage sartorial humblebrag chia polaroid twee fam. Lo-fi farm-to-table chillwave celiac brunch butcher narwhal snackwave flexitarian cliche. Sriracha raclette master cleanse polaroid ugh tumeric flannel unicorn church-key cronut. Slow-carb typewriter four dollar toast pitchfork before they sold out cliche palo santo. Hexagon meh ethical skateboard freegan ennui kogi snackwave ramps quinoa tbh enamel pin raclette echo park truffaut.</p>
            <p>90's hot chicken 3 wolf moon twee hell of asymmetrical keytar cold-pressed palo santo fingerstache plaid. Flexitarian hammock lo-fi wolf narwhal gochujang godard subway tile paleo offal humblebrag organic thundercats meh. Forage shabby chic cold-pressed intelligentsia, kogi drinking vinegar cronut green juice copper mug viral edison bulb pop-up echo park DIY. Narwhal normcore twee kale chips occupy. Mixtape coloring book raclette, tofu etsy taxidermy scenester cold-pressed ethical blue bottle disrupt. Actually hashtag 90's, mlkshk lumbersexual kitsch pabst wayfarers activated charcoal yr edison bulb cornhole adaptogen pickled neutra. Tbh kale chips typewriter chia pok pok succulents four dollar toast biodiesel iPhone gentrify.</p>
            <p>Chia irony snackwave iceland. Single-origin coffee keytar XOXO, waistcoat succulents semiotics coloring book vice PBR&B iPhone taiyaki. Lyft cronut fam, adaptogen gentrify YOLO copper mug semiotics hot chicken schlitz mlkshk. Blog polaroid 90's kale chips leggings drinking vinegar.</p>
            <p>XOXO tbh viral organic. Skateboard banjo pitchfork stumptown taiyaki. Raclette copper mug fixie pour-over chillwave, iPhone VHS bicycle rights migas venmo aesthetic godard. Cornhole vice jean shorts normcore, fam raw denim tote bag narwhal skateboard pop-up helvetica pug. Pinterest kitsch butcher marfa whatever actually raclette adaptogen tattooed freegan fixie narwhal squid cardigan. Occupy migas literally skateboard.</p>
            <p>Selvage tousled everyday carry, coloring book la croix trust fund viral. Sustainable cardigan butcher poutine celiac pabst ramps four loko tofu salvia. Irony keffiyeh chartreuse heirloom affogato kinfolk humblebrag listicle woke vinyl synth neutra. Franzen cronut hashtag paleo, street art helvetica live-edge venmo. Tumeric meditation disrupt, scenester gentrify fashion axe gochujang kogi ennui XOXO green juice crucifix cornhole banh mi.</p>
            <p>Oh. You need a little dummy text for your mockup? How quaint.</p>
            <p>I bet you’re still using Bootstrap too…</p>
          </div>
        </div>
      </SiteMain>
    );
  }
}
