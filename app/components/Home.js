import React, { PropTypes, Component } from 'react';
import OAuth2 from '../utils/oauth2/oauth2';

var facebook = new OAuth2('facebook', {
    client_id: '177955888930840',
    client_secret: 'b42a5741bd3d6de6ac591c7b0e279c9f',
    api_scope: 'read_stream,user_likes'
});

export default class Home extends Component {

    authorizeFB = () => {
        authorize('facebook');
    };



    authorize = providerName => {
        var provider = window[providerName];
        provider.authorize(checkAuthorized);
    };

    clearTokens = () => {
        console.log('clear');
        ['google', 'facebook', 'github'].forEach(function(providerName) {
            var provider = window[providerName];
            provider.clearAccessToken();
        });
        checkAuthorized();
    };

    checkAuthorized = () => {
        console.log('checkAuthorized');
        ['google', 'facebook', 'github'].forEach(function(providerName) {
            var provider = window[providerName];
            var button = document.querySelector('#' + providerName);
            if (provider.hasAccessToken()) {
                button.classList.add('authorized');
            } else {
                button.classList.remove('authorized');
            }
        });
    };


    render() {
        return (
            <div>
                <h1>OAuth 2.0 Permissions</h1>
                <button id="facebook"  onClick={this.authorizeFB} >
                    Grant Facebook Access
                </button>
                <button id="clear" onClick="{this.clearTokens}">
                    Clear Tokens
                </button>
            </div>
        );

    };
}



