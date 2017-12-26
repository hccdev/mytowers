import '@polymer/paper-button/paper-button';
import '@polymer/paper-input/paper-input';
import '@polymer/polymer/lib/elements/custom-style';
import { connect, html, withExtended } from 'fit-html';

import { changePartyId, createParty, joinParty } from '../actions/view-home';
import { State } from '../state';
import sharedStyles from '../util/shared-styles';

interface HomeViewProps {
    partyId: string;
    partyIdValid: boolean;
}
interface HomeViewDispatch {
    changePartyId: (partyId: string) => void;
    createParty: () => void;
    joinParty: () => void;
}

/* tslint:disable:max-line-length */
const HomeView = (props: HomeViewProps & HomeViewDispatch) => html`
    ${sharedStyles}
    <style>
        :host {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            min-height: 500px;
            padding: 0 10px;
            text-align: center;

            --paper-input-container-input: {
                font-size: 24px;
            }

            --paper-input-container-label: {
                font-size: 20px;
            }
        }

        svg {
            height: 150px;
            width: 150px;
        }

        p {
            padding: 0 25px;
        }

        main {
            display: flex;
            flex-flow: column nowrap;

            margin: 0 auto;
            min-width: 250px;
            height: 180px;
        }

        #middle {
            margin: 20px 0 20px 0;
        }
    </style>

    <header>
        <svg viewBox="0 0 512 512">
            <circle cx="256" cy="256" r="256" fill="#282b30"></circle>
            <circle cx="253.48" cy="257.61" r="91.15" fill="#951518"></circle>
            <path d="M129.5,243.93s2.48-59.8,59.35-95.53l.89-.65s.73-.19.57-2l-9.54-15.84-.28-.37s-.68-1.4-2.89,0-63.35,35.62-69.76,112.81c0,0-.31,2,1.42,2.15S127.63,246,127.63,246,129.31,246.33,129.5,243.93Z" fill="#fefefe"></path>
            <path d="M63.22,238.47s4-93.56,92-147.62c0,0,2.24-.73.78-3.12s-9.19-15.66-9.19-15.66-.74-2.5-3.48-.78S48.58,125.08,40.45,236.8c0,0-.75,2.56,2.39,2.76s16,1.2,16,1.2H62S63,241.78,63.22,238.47Z" fill="#fefefe"></path>
            <path d="M381.78,270s-2.48,59.8-59.35,95.53l-.89.65s-.73.19-.57,2L330.51,384l.28.37s.68,1.4,2.89,0S397,348.78,403.44,271.58c0,0,.31-2-1.42-2.15S383.66,268,383.66,268,382,267.63,381.78,270Z" fill="#fefefe"></path>
            <path d="M448.06,275.48s-4,93.56-92,147.62c0,0-2.24.73-.78,3.12s9.19,15.66,9.19,15.66.74,2.5,3.48.78,94.73-53.8,102.86-165.52c0,0,.75-2.56-2.39-2.76s-16-1.2-16-1.2h-3.17S448.32,272.17,448.06,275.48Z" fill="#fefefe"></path>
            <path d="M225.8,302.11l14-80.21a6.79,6.79,0,0,0,.26-2.07q0-4.14-5.43-4.14-1.3,0-3.75.26t-3.75.26q-7.25,0-7.25-7,0-19.92,12.42-19.92a13.94,13.94,0,0,1,3.11.26q4.66.52,4.92.52a6.49,6.49,0,0,0,6-3.75q2.07-3.75,5.17-16.17,9.05-37,48.9-37,18.63,0,30.66,9.06T343,165q0,8.8-5.3,14t-14.1,5.17q-16.3,0-16.3-12.94a14.66,14.66,0,0,1,.78-4.66,14.85,14.85,0,0,0,.26-2.85q0-4.66-6.21-4.66-11.13,0-13.2,13.46l-2.07,13.2a2.87,2.87,0,0,0-.26,1.29q0,3.88,3.88,3.88a6.94,6.94,0,0,0,1.55-.26h1.3A65.32,65.32,0,0,1,306.27,189q8,0,8,7.5,0,19.41-11.13,19.41a58.6,58.6,0,0,1-6.21-.26,69.61,69.61,0,0,0-7-.26q-8.54,0-9.57,6.21l-15.27,88q-5.43,32.08-16.3,48.13-16.3,24.32-44,24.32-17.34,0-29.11-10.35T164,346.36a23.28,23.28,0,0,1,6-16.17,19.06,19.06,0,0,1,14.75-6.6,16.82,16.82,0,0,1,11.77,4.66,14.63,14.63,0,0,1,5,11.13,11.53,11.53,0,0,1-1.29,5.17l-2.33,6q0,4.66,6.21,4.66,7.5,0,11.51-8.67T225.8,302.11Z" fill="#fefefe"></path>
        </svg>
    </header>

    <p>Festify is a free Spotify-powered app that lets your guests choose which music should be played using their smartphones.</p>

    <main>
        <paper-input label="Party ID"
                     type="tel"
                     on-value-changed="${ev => props.changePartyId((ev.target as HTMLInputElement).value)}">
        </paper-input>
        <paper-button id="middle"
                      raised
                      disabled="${!props.partyIdValid}"
                      on-click="${props.joinParty}">
            Join Party
        </paper-button>
        <paper-button raised
                      on-click="${props.createParty}">
            Create Party
        </paper-button>
    </main>
`;
/* tslint:enable */

const mapStateToProps = (state: State): HomeViewProps => state.homeView;

const mapDispatchToProps: HomeViewDispatch = {
    changePartyId,
    createParty,
    joinParty,
};

customElements.define(
    'view-home',
    withExtended(connect(
        mapStateToProps,
        mapDispatchToProps,
        HomeView,
    )),
);
