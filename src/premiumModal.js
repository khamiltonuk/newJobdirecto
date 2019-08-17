import React from "react";
import axios from "axios";
import { LanguageContext } from "./languageContext";

export default class PremiumModal extends React.Component {
    render() {
        return (
            <div>
                <div onClick={this.props.close} className="backgroundBlock" />
                <div className="deleteModal">
                    <h1 className="heading-1 deleteModalTitle">
                        Please buy a premium acc :)
                    </h1>
                    <button
                        className="deleteButton buttonOpaque"
                        onClick={this.props.close}>
                        No
                    </button>
                </div>
            </div>
        );
    }
}

PremiumModal.contextType = LanguageContext;
