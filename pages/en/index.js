/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle" style={{color: siteConfig.colors.secondaryColor}}>
    {siteConfig.title}
    <small style={{color: siteConfig.colors.secondaryColor}}>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <SplashContainer>
        <Logo img_src={imgUrl('logo.svg')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html', language)}>Example Link</Button>
            <Button href={docUrl('doc2.html', language)}>Example Link 2</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} className={props.className} />
  </Container>
);

const Features = () => (
  <Block layout="twoColumn" background="light">
    {[
      {
        content: 'Easily split up and reuse parts of your domain. Simply plug in a module like user or shopping cart; configure it and get going. Creating and using modules is easy. They\'re just regular directories. No magic. No directory scanning, no prefixes, just your own code.',
        // image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Module-based',
      },
      {
        content: 'Stix is really, really fast. It makes no assumptions, doesn\'t do work it shouldn\'t and overall just runs only what is needed. It\'s an orchestrator that\'s kind to your resources.',
        // image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Fast',
      },
      {
        content: 'Written with and for TypeScript projects. Although it does work with flow and ES6 based projects, the focus is on TypeScript. Some of the reasons stix is so fast can also be attributed to its use of new features and lazy nature of service loading.',
        // image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Modern',
      },
      {
        content: 'Design patterns that have been proven to work and scale. This includes inversion of control, DI and injectors for controllers and commands making it easy to create highly reusable and configurable modules for your API and/or CLI.',
        // image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Scalable',
      },
    ]}
  </Block>
);

const FeatureCallout = () => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Feature Callout</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
);

const StixCli = () => (
  <Block background="light" className="featureBlock">
    {[
      {
        content: 'Stix comes with a command line environment. Just as you can create API endpoints, you can create CLI commands. Using stix-cli you automatically get help output, as well as support for autocomplete on the cli, or as some call it "tabtab support".',
        image: imgUrl('stix_cli.svg'),
        imageAlign: 'right',
          title: 'Command-line',
      },
    ]}
  </Block>
);

const TryOut = () => (
  <Block id="try">
    {[
      {
        content: 'Feared by some, loved by many. Code generators. Quickly scaffold your boilerplate using generators. Initialize a new module, add a controller, create a new entity. All without writing a single line of code. The code generated is basic and simple and thus there\'s no magic. Scaffold and code away.',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = () => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users.filter(user => user.pinned).map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={user.image} alt={user.caption} title={user.caption} />
    </a>
  ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          {/*<FeatureCallout />*/}
          {/*<StixCli />*/}
          {/*<TryOut />*/}
          {/*<Description />*/}
          {/*<Showcase language={language} />*/}
        </div>
      </div>
    );
  }
}

module.exports = Index;
