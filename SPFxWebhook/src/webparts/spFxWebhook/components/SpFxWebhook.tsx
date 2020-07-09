import * as React from 'react';
import styles from './SpFxWebhook.module.scss';
import { ISpFxWebhookProps } from './ISpFxWebhookProps';
import { HttpClient, IHttpClientOptions } from "@microsoft/sp-http";
import { PrimaryButton } from '@fluentui/react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

export interface ISpFxWebhookState {
  inputText: string;
}

export default class SpFxWebhook extends React.Component<ISpFxWebhookProps, ISpFxWebhookState> {


  constructor(props: ISpFxWebhookProps, state: ISpFxWebhookState) {
    super(props);
    this.state = {
      inputText: ""
    };
  }

  private sendMessage = () => {
    let option: IHttpClientOptions = {
      body: `{"text": "${this.state.inputText}"}`
    };
    this.props.webpartContext.httpClient.post(`https://cors-anywhere.herokuapp.com/${this.props.description}`,
      HttpClient.configurations.v1, option);
  }

  public render(): React.ReactElement<ISpFxWebhookProps> {
    return (
      <div className={styles.spFxWebhook}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to Incoming Webhook Demo!</span>
            </div>
            <div className={styles.column}>
              <TextField multiline rows={3}
                label="Please enter message for channel"
                onChange={(ev, newValue) => { this.setState({ inputText: newValue }); }}></TextField>
            </div>
            <div className={styles.column}>
              <PrimaryButton text="Send Messag" onClick={() => { console.log('clicked'); this.sendMessage(); }}></PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
