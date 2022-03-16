import React from 'react';
import { Breadcrumb, Tabs, Tab } from 'carbon-components-react';

const props = {
  tabs: {
    selected: 0,
    role: 'navigation',
  },
  tab: {
    role: 'presentation',
    tabIndex: 0,
  },
};

<Breadcrumb noTrailingSlash aria-label="Page navigation" />;

const LandingPage = () => {
  return (
    <div className="bx--row landing-page__r2">
      <div className="bx--col bx--no-gutter">
        <Tabs {...props.tabs} aria-label="Tab navigation">
          <Tab {...props.tab} label="Sobre">
            <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div className="bx--row landing-page__tab-content">
                <div className="bx--col-md-4 bx--col-lg-7">
                  <h2 className="landing-page__subheading">Sobre o projeto.</h2>
                  <p className="landing-page__p">
                    O projeto Mais AGEMS parte da necessidade de melhorias na
                    área de tecnologia da agência, visando alinhar as demandas
                    internas e externas no uso de tecnologias modernas e ágeis.
                  </p>
                </div>
                <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                  <img
                    className="landing-page__illo"
                    src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                    alt="Carbon illustration"
                  />
                </div>
              </div>
            </div>
          </Tab>
          <Tab {...props.tab} label="Padrão">
            <div className="bx--row landing-page__r3">
              <div className="bx--col-md-4 bx--col-lg-4">
                <h3 className="landing-page__label">Principios do Projeto</h3>
              </div>
              <div className="bx--col-md-4 bx--col-lg-4">
                Feito com software livre
              </div>
              <div className="bx--col-md-4 bx--col-lg-4">
                Arquitetura Modular
              </div>
              <div className="bx--col-md-4 bx--col-lg-4">Escalavél</div>
            </div>
          </Tab>
          <Tab {...props.tab} label="Usabilidade">
            <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div className="bx--row landing-page__tab-content">
                <div className="bx--col-lg-16">
                  Um sistema novo, fluido e cheio de possibilidades!
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default LandingPage;
