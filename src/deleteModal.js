import React from "react";
import axios from "axios";
import { LanguageContext } from "./languageContext";

export default class DeleteModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.deleteJob = this.deleteJob.bind(this);
        this.deletePersonPost = this.deletePersonPost.bind(this);
        this.deleteService = this.deleteService.bind(this);
    }

    componentDidMount() {
        console.log("what props is here?", this.props.postType);
    }

    deleteJob() {
        axios.get("/deleteJob/" + this.props.id).then(result => {
            console.log("boooo");
            this.props.getJobs();
        });
        this.props.close();
    }

    deletePersonPost() {
        axios.get("/deletePersonPost/" + this.props.id).then(result => {
            this.props.getPeople();
        });
        this.props.close();
    }

    deleteService() {
        axios.get("/deleteService/" + this.props.id).then(result => {
            this.props.getServices();
        });
        this.props.close();
    }

    render() {
        return (
            <div>
                <div onClick={this.props.close} className="backgroundBlock" />
                <div className="deleteModal">
                    <h1 className="heading-1 deleteModalTitle">
                        {this.context.deleteModal.title}
                    </h1>
                    <br />
                    <div className="deleteButtons">
                        {this.props.postType === "job" && (
                            <button
                                className="deleteButton buttonOpaque"
                                onClick={this.deleteJob}>
                                Yes
                            </button>
                        )}
                        {this.props.postType === "service" && (
                            <button
                                className="deleteButton buttonOpaque"
                                onClick={this.deleteService}>
                                Yes
                            </button>
                        )}
                        {this.props.postType === "person" && (
                            <button
                                className="deleteButton buttonOpaque"
                                onClick={this.deletePersonPost}>
                                Yes
                            </button>
                        )}

                        <button
                            className="deleteButton buttonOpaque"
                            onClick={this.props.close}>
                            No
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

DeleteModal.contextType = LanguageContext;
