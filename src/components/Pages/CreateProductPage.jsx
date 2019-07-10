import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {createProduct} from "../../store/products/actions";

class CreateProductPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            display_name: null,
            cost: null,
        };

        this.onDisplayNameChange = this.onDisplayNameChange.bind(this);
        this.onCostChange = this.onCostChange.bind(this);
        this.onCreate = this.onCreate.bind(this);
    }

    onDisplayNameChange(e) {
        this.setState({
            display_name: e.target.value,
        });
    }

    onCostChange(e) {
        this.setState({
            cost: e.target.value,
        });
    }

    onCreate(e) {
        e.preventDefault();
        this.props.action.createProduct(this.state.display_name, this.state.cost);
    }

    render() {
        const errors = this.props.errors;

        return (
            <div>
                <form>
                    <div>
                        {
                            errors.map((error) =>
                                <div className="alert alert-danger" role="alert">
                                    {error.detail}
                                </div>
                            )
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="display-name">Product Name</label>
                        <input
                            onChange={this.onDisplayNameChange}
                            type="text"
                            className="form-control"
                            id="display-name"
                            aria-describedby="display-name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cost">Cost (£)</label>
                        <input
                            onChange={this.onCostChange}
                            type="text"
                            className="form-control"
                            id="cost"/>
                    </div>
                    <button type="submit"
                            className="btn btn-primary"
                            onClick={this.onCreate}>Create</button>
                </form>
            </div>
        );
    }
}

CreateProductPage.propTypes = {
    errors: PropTypes.array,
    action: PropTypes.shape({
        createProduct: PropTypes.func,
    }),
};

const mapStateToProps = (state) => {
    return {
        errors: state.products.errors,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: {
            createProduct: bindActionCreators(createProduct, dispatch)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProductPage);