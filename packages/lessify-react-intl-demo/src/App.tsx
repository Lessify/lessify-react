import React from 'react';
import './App.css';
import {createIntl, FormattedMessage, RawIntlProvider} from 'react-intl';
import {Lessify} from '@lessify/sdk';

export const lessify: Lessify = new Lessify({
  spaceId: 'e600fed0-0674-11eb-8ebc-355c3e3200ae',
  environment: 'master',
  apiKey: 'api-key-Tqcgc-38872940-0d32-11eb-8a0e-61e5b1516e7a-Zlh7j'
})

const initialLocale = 'en'
/** You can use this variable in other files even after reassigning it. */
export let intl = createIntl({locale: initialLocale, messages: {}})
export let fmt = intl.formatMessage

export default class App extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      locale: ''
    };
  }

  componentDidMount() {
    this.changeLanguage(initialLocale);
  }

  changeLanguage(newLocale: string): void {
    lessify.translation.get(newLocale)
    .then( messages => {
      intl = createIntl({locale: newLocale, messages: messages})
      fmt = intl.formatMessage
      document.documentElement.lang = newLocale
      this.setState( {locale: newLocale})
    })
  }

  render() {
    if(this.state.locale === '') {
      return (<div>Loading..</div>)
    }
    return (
        <RawIntlProvider value={intl}>
          <div className="App">
            <header className="App-header">
              <button onClick={() => this.changeLanguage('de')}>de</button>
              <button onClick={() => this.changeLanguage('en')}>en</button>
              <table>
                <thead>
                <tr>
                  <th>Translation Id</th>
                  <th>Translation</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>login.auth.wrong</td>
                  <td><FormattedMessage id="login.auth.wrong"/></td>
                </tr>
                <tr>
                  <td>login.email</td>
                  <td><FormattedMessage id="login.email"/></td>
                </tr>
                <tr>
                  <td>login.email.error</td>
                  <td><FormattedMessage id="login.email.error"/></td>
                </tr>
                <tr>
                  <td>login.maintenance.message</td>
                  <td><FormattedMessage id="login.maintenance.message"/></td>
                </tr>
                <tr>
                  <td>login.password</td>
                  <td><FormattedMessage id="login.password"/></td>
                </tr>
                <tr>
                  <td>login.password.error</td>
                  <td><FormattedMessage id="login.password.error"/></td>
                </tr>
                <tr>
                  <td>login.reset</td>
                  <td><FormattedMessage id="login.reset"/></td>
                </tr>
                <tr>
                  <td>login.submit</td>
                  <td><FormattedMessage id="login.submit"/></td>
                </tr>
                <tr>
                  <td>login.title</td>
                  <td><FormattedMessage id="login.title"/></td>
                </tr>
                </tbody>
              </table>
            </header>
          </div>
        </RawIntlProvider>
    );
  }
}
